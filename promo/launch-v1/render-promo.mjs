import http from 'http';
import fs from 'fs';
import path from 'path';
import pw from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pw;
const DIR = '/home/user/mjmorrisonusa/promo/launch-v1';
const OUT = DIR + '/out';
fs.mkdirSync(OUT, { recursive: true });
const PORT = 8823;
const MIME = { '.html':'text/html','.png':'image/png','.webp':'image/webp','.css':'text/css','.js':'text/javascript' };
const server = http.createServer((req,res)=>{ let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/gen.html'; const fp=path.join(DIR,p); if(!fp.startsWith(DIR)||!fs.existsSync(fp)){res.writeHead(404);return res.end('nf');} res.writeHead(200,{'content-type':MIME[path.extname(fp)]||'application/octet-stream'}); fs.createReadStream(fp).pipe(res); });
await new Promise(r=>server.listen(PORT,r));
const base=`http://127.0.0.1:${PORT}`;
const browser = await chromium.launch();

const frames = [
  { f:'feed-linkedin',  w:1080, h:1350 },
  { f:'feed-facebook',  w:1080, h:1350 },
  { f:'feed-instagram', w:1080, h:1350 },
  { f:'feed-threads',   w:1080, h:1350 },
  { f:'story-1', w:1080, h:1920 }, { f:'story-2', w:1080, h:1920 },
  { f:'story-3', w:1080, h:1920 }, { f:'story-4', w:1080, h:1920 },
  { f:'story-5', w:1080, h:1920 }, { f:'story-6', w:1080, h:1920 },
];

let problems = 0;
for (const fr of frames) {
  const ctx = await browser.newContext({ viewport:{width:fr.w,height:fr.h}, deviceScaleFactor:2 });
  const page = await ctx.newPage();
  page.on('pageerror', e=>{ console.log('  [pageerror]', fr.f, e.message); problems++; });
  await page.goto(`${base}/?f=${fr.f}`, { waitUntil:'networkidle' });
  await page.waitForTimeout(400);
  // overflow check: does the .stage content exceed the frame box?
  const overflow = await page.evaluate(()=>{
    const s = document.querySelector('.stage');
    return { sw:s.scrollWidth, sh:s.scrollHeight, cw:s.clientWidth, ch:s.clientHeight };
  });
  const clipped = overflow.sh > overflow.ch + 2 || overflow.sw > overflow.cw + 2;
  if (clipped) { console.log('  OVERFLOW', fr.f, JSON.stringify(overflow)); problems++; }
  await page.screenshot({ path:`${OUT}/${fr.f}.png`, clip:{x:0,y:0,width:fr.w,height:fr.h} });
  console.log('rendered', fr.f, clipped ? '(OVERFLOW!)' : '');
  await ctx.close();
}
await browser.close(); server.close();
console.log(problems? `\n${problems} problems` : '\nall clean');

import http from 'http';
import fs from 'fs';
import path from 'path';
import pw from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pw;
const ROOT = '/home/user';
const OUT = '/home/user/mjmorrisonusa/promo/launch-v1/assets';
const PORT = 8821;
const MIME = { '.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2' };
const server = http.createServer((req,res)=>{ let p=decodeURIComponent(req.url.split('?')[0]); if(p.endsWith('/'))p+='index.html'; const fp=path.join(ROOT,p); if(!fp.startsWith(ROOT)||!fs.existsSync(fp)||fs.statSync(fp).isDirectory()){res.writeHead(404);return res.end('nf');} res.writeHead(200,{'content-type':MIME[path.extname(fp)]||'application/octet-stream'}); fs.createReadStream(fp).pipe(res); });
await new Promise(r=>server.listen(PORT,r));
const base=`http://127.0.0.1:${PORT}`;
const browser = await chromium.launch();

async function shoot(key, pathd, seed, h=1000) {
  const ctx = await browser.newContext({ viewport:{width:440,height:h}, deviceScaleFactor:2, colorScheme:'dark' });
  const page = await ctx.newPage();
  await page.goto(base+pathd, { waitUntil:'networkidle' });
  await page.evaluate(()=>{ try{document.documentElement.setAttribute('data-theme','dark');}catch(e){} });
  if (seed) { await page.evaluate(seed); await page.reload({ waitUntil:'networkidle' }); await page.evaluate(()=>{ try{document.documentElement.setAttribute('data-theme','dark');}catch(e){} }); }
  await page.waitForTimeout(1000);
  await page.screenshot({ path:`${OUT}/app-${key}.png`, clip:{x:0,y:0,width:440,height:h} });
  console.log('shot', key);
  await ctx.close();
}

await shoot('recall', '/recall/', null, 1020);
await shoot('hooklab', '/Hooklabs/', null, 1020);
await shoot('blast', '/blast/', null, 1020);
await shoot('pulse', '/blast/pulse/', () => {
  const now = Date.now();
  localStorage.setItem('pulse_posts_v1', JSON.stringify([
    { id:'d1', platform:'YouTube Shorts', url:'https://youtube.com/shorts/x', caption:'Wait for the twist', hook:'You will never guess what happened next', postedAt: now-5*3600000, snapshots:[
      {at:now-4*3600000, elapsedMin:60, views:1200, source:'auto'},
      {at:now-3*3600000, elapsedMin:120, views:4800, source:'auto'},
      {at:now-1*3600000, elapsedMin:360, views:22400, source:'auto'} ], outcome:'winner', ledgerLoggedAt: now-3600000 },
    { id:'d2', platform:'TikTok', url:'https://tiktok.com/x', caption:'The one habit that changed everything', hook:'I quit my job to test this', postedAt: now-2*3600000, snapshots:[
      {at:now-1.5*3600000, elapsedMin:60, views:800, source:'manual'} ], outcome:null, ledgerLoggedAt:null },
  ]));
}, 1080);

await browser.close(); server.close();
console.log('done');

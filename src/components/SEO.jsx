import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': {
    title: 'Michael Morrison | AI Apps & Social Media Growth Strategist',
    description: 'AI app builder + social media growth strategist. 314K followers built. 50M+ monthly views. RECALL is the proof. Cypress, CA based.',
  },
  '/webdev': {
    title: 'AI Apps for Business | Michael Morrison',
    description: 'AI-powered web apps for creators and small businesses — clip finders, content tools, workflow automation, niche SaaS. Production-ready in days. RECALL is the proof. You own the code, no lock-in.',
  },
  '/smma': {
    title: 'Social Media Marketing | Michael Morrison',
    description: '314K followers built. 50M+ monthly views. Platform captain. Recruited to exclusive 5-person team. They said Facebook was dead. I proved them wrong.',
  },
  '/flipping': {
    title: 'Flipping & Liquidation | Michael Morrison',
    description: 'Instant cash for your inventory. Online pawn shop model. Cypress, CA local. Fair prices, fast transactions.',
  },
  '/recall': {
    title: 'RECALL — Free Clip-Memory Tool for Short-Form Creators | Michael Morrison',
    description: 'Never lose a great moment again. Free PWA that turns every podcast and interview you watch into a searchable memory layer. Find any phrase, get every moment across every source with timecodes. Built by a creator who generated 50M+ monthly views.',
  },
  '/contact': {
    title: 'Contact Me | Michael Morrison',
    description: 'Get in touch for web development, social media marketing, or inventory liquidation. Let\'s build something together.',
  },
  '/admin': {
    title: 'Admin | Michael Morrison',
    description: 'Private site administration.',
    noindex: true,
  },
};

export default function SEO() {
  const location = useLocation();
  const meta = pageMeta[location.pathname] || pageMeta['/'];

  useEffect(() => {
    document.title = meta.title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description);
    }

    // Keep private/utility pages out of search results.
    // Note: this is a HashRouter SPA, so all routes share one physical
    // document (index.html) as far as a non-JS crawler is concerned — this
    // dynamic update only helps with crawlers that render JavaScript.
    // The token-gated nature of /admin is the real access control here.
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', meta.noindex ? 'noindex, nofollow' : 'index, follow');
    }
    
    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    let ogDesc = document.querySelector('meta[property="og:description"]');
    let ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
    if (ogUrl) ogUrl.setAttribute('content', `https://mjmorrison10.github.io/mjmorrisonusa/#${location.pathname}`);
    
    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    let twitterDesc = document.querySelector('meta[property="twitter:description"]');
    let twitterUrl = document.querySelector('meta[property="twitter:url"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', meta.title);
    if (twitterDesc) twitterDesc.setAttribute('content', meta.description);
    if (twitterUrl) twitterUrl.setAttribute('content', `https://mjmorrison10.github.io/mjmorrisonusa/#${location.pathname}`);
  }, [location.pathname, meta]);

  return null;
}

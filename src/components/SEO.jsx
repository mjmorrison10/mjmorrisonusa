import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': {
    title: 'Michael Morrison | Conqueror of Life',
    description: 'Web Developer, Social Media Marketer, and Entrepreneur. 314K followers built. 50M+ monthly views. Cypress, CA based.',
  },
  '/webdev': {
    title: 'Web Development | Michael Morrison',
    description: 'Custom websites built in 48 hours. React, JavaScript, Tailwind. Self-taught, battle-tested, and always shipping.',
  },
  '/smma': {
    title: 'Social Media Marketing | Michael Morrison',
    description: '314K followers built. 50M+ monthly views. Platform captain. Recruited to exclusive 5-person team. They said Facebook was dead. I proved them wrong.',
  },
  '/flipping': {
    title: 'Flipping & Liquidation | Michael Morrison',
    description: 'Instant cash for your inventory. Online pawn shop model. Cypress, CA local. Fair prices, fast transactions.',
  },
  '/contact': {
    title: 'Contact Me | Michael Morrison',
    description: 'Get in touch for web development, social media marketing, or inventory liquidation. Let\'s build something together.',
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

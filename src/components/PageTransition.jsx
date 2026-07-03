import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hideFrame = requestAnimationFrame(() => setIsVisible(false));
    const showTimer = setTimeout(() => setIsVisible(true), 50);
    return () => {
      cancelAnimationFrame(hideFrame);
      clearTimeout(showTimer);
    };
  }, [location.pathname]);

  return (
    <div
      className={`transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}


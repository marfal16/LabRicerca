// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Aggiungi un piccolo ritardo (es. 10 millisecondi)
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10); // 10ms o 20ms è solitamente sufficiente

    // Pulisci il timeout per evitare memory leak
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
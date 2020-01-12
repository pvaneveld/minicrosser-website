import { useEffect } from 'react';

function usePageHeight(): void {
  const setViewPortHeight = (): void => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setViewPortHeight();
    window.addEventListener('resize', setViewPortHeight, false);

    return (): void => window.removeEventListener('resize', setViewPortHeight, false);
  }, []);
}

export { usePageHeight };

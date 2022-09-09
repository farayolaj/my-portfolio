import { useEffect, useRef, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};

export const useViewportScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: window?.scrollX,
    scrollY: window?.scrollY,
  });

  useEffect(() => {
    function handleScroll() {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    }
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollPosition;
};

type IntersectHook = (
  options?: IntersectionObserverInit
) => [
  IntersectionObserverEntry | null,
  React.Dispatch<React.SetStateAction<Element | null>>
];

export const useIntersect: IntersectHook = options => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    const { current: currentObserver } = observer;
    if (node) currentObserver.observe(node);
    return () => currentObserver.disconnect();
  }, [node, options]);

  return [entry, setNode];
};

import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

const measureText = (ref: RefObject<HTMLElement>, text: string) => {
  if (typeof document === 'undefined') return 0;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context || !ref.current) return 0;
  context.font = getComputedStyle(ref.current).font;
  return context.measureText(text).width;
};

export const TypeWriter = ({
  className = '',
  content = '',
  speed = 1000,
  done,
}: {
  className?: string;
  content: string;
  speed?: number;
  done?: () => void;
}) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIndex(0);
    setDisplayedContent('');
    ref.current?.style.setProperty('width', measureText(ref, content) + 'px');

    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, [content, speed]);

  useEffect(() => {
    setDisplayedContent(
      (displayedContent) => displayedContent + content[index]
    );
  }, [index, content]);

  return (
    <span ref={ref} className={className}>
      {displayedContent}
    </span>
  );
};

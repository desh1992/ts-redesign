import React, { useEffect, useRef, FC } from 'react';
import { gsap } from 'gsap';
import './GridMotion.css';

interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
  rows?: number;
  scrollTrigger?: boolean;
}

const GridMotion: FC<GridMotionProps> = ({ 
  items = [], 
  gradientColor = 'black', 
  rows = 4, 
  scrollTrigger = false 
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef<number>(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const scrollYRef = useRef<number>(0);

  const totalItems = rows * 7; // 7 items per row
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  
  // Ensure we always have exactly the right number of items
  let combinedItems;
  if (items.length >= totalItems) {
    combinedItems = items.slice(0, totalItems);
  } else {
    // If we don't have enough items, repeat the available items to fill the grid
    const repeatedItems = [];
    for (let i = 0; i < totalItems; i++) {
      repeatedItems.push(items[i % items.length] || `Item ${i + 1}`);
    }
    combinedItems = repeatedItems;
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent): void => {
      mouseXRef.current = e.clientX;
    };

    const handleScroll = (): void => {
      scrollYRef.current = window.scrollY;
    };

    const updateMotion = (): void => {
      const maxMoveAmount = 400; // Increased for more dramatic effect
      const baseDuration = 0.6;
      const inertiaFactors = [0.8, 0.6, 0.4, 0.3, 0.5, 0.7]; // Extended for more rows

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          let moveAmount;

          if (scrollTrigger) {
            // Scroll-based movement - more responsive
            const elementRect = gridRef.current?.getBoundingClientRect();
            if (elementRect) {
              const elementTop = elementRect.top;
              const elementHeight = elementRect.height;
              const viewportHeight = window.innerHeight;
              
              // Calculate scroll progress based on element visibility
              const scrollProgress = Math.max(0, Math.min(1, 
                (viewportHeight - elementTop) / (viewportHeight + elementHeight)
              ));
              
              // Add some easing for smoother animation
              const easedProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress);
              moveAmount = easedProgress * maxMoveAmount * direction;
              
              // Debug log (remove in production)
              if (index === 0) {
                console.log('Scroll Progress:', scrollProgress, 'Move Amount:', moveAmount);
              }
            }
          } else {
            // Mouse-based movement
            moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;
          }

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    
    if (scrollTrigger) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (scrollTrigger) {
        window.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      removeAnimationLoop();
    };
  }, [scrollTrigger]);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
        }}
      >
        <div 
          className="gridMotion-container"
          style={{
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            height: `${rows * 30}vh` // Adjusted for 25rem cards
          }}
        >
          {Array.from({ length: rows }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={el => {
                rowRefs.current[rowIndex] = el;
              }}
            >
              {Array.from({ length: 7 }, (_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];

                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                      <div className="row__item-content">{content}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;

import { useState, useEffect, useRef } from 'react';
import './BestsellerCarousel.css';

export default function BestsellerCarousel({ dishes = [], title = 'Bestseller' }) {
  const trackRef = useRef(null);
  const isInteractingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const resumeTimeoutRef = useRef(null);

  // Duplicate dishes to achieve seamless infinite right-to-left scrolling loop
  const displayDishes = dishes.length > 0 ? [...dishes, ...dishes] : [];

  // Smooth continuous right-to-left auto-scroll
  useEffect(() => {
    let animationFrameId;
    const speed = 0.75; // pixels per frame

    const step = () => {
      const track = trackRef.current;
      if (track && !isInteractingRef.current) {
        track.scrollLeft += speed;

        // When scrolled past half the content (first copy of dishes), loop seamlessly
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [dishes.length]);

  // Seamless infinite loop handling during drag/momentum scroll
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    if (halfWidth > 0) {
      if (track.scrollLeft >= halfWidth) {
        track.scrollLeft -= halfWidth;
        scrollStartRef.current -= halfWidth;
      } else if (track.scrollLeft <= 0) {
        track.scrollLeft += halfWidth;
        scrollStartRef.current += halfWidth;
      }
    }
  };

  // Touch drag handlers (mobile)
  const handleTouchStart = (e) => {
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    startXRef.current = e.touches[0].clientX;
    scrollStartRef.current = trackRef.current ? trackRef.current.scrollLeft : 0;
  };

  const handleTouchMove = (e) => {
    const track = trackRef.current;
    if (!track) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startXRef.current;
    track.scrollLeft = scrollStartRef.current - deltaX;
  };

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 600);
  };

  // Mouse drag handlers (desktop)
  const handleMouseDown = (e) => {
    isInteractingRef.current = true;
    setIsDragging(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    startXRef.current = e.clientX;
    scrollStartRef.current = trackRef.current ? trackRef.current.scrollLeft : 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const currentX = e.clientX;
    const deltaX = currentX - startXRef.current;
    track.scrollLeft = scrollStartRef.current - deltaX;
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 600);
    }
  };

  return (
    <div className="bestseller-carousel-container">
      <div className="bestseller-carousel-header">
        <div className="bestseller-title-group">
          <h2 className="section-title">{title}</h2>
          <span className="bestseller-badge-header">Chef's Specials</span>
        </div>
      </div>

      <div
        className={`bestseller-carousel-track ${isDragging ? 'is-dragging' : ''}`}
        ref={trackRef}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {displayDishes.map((dish, index) => (
          <article
            key={`${dish.name}-${index}`}
            className="bestseller-dish-card"
            data-dish={dish.name}
          >
            {/* 1. Image on the top */}
            <div className="bestseller-card-media">
              {dish.image ? (
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="bestseller-card-image"
                  style={dish.imagePosition ? { objectPosition: dish.imagePosition } : undefined}
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallbackEl = e.currentTarget.parentElement.querySelector(
                      '.bestseller-card-placeholder'
                    );
                    if (fallbackEl) fallbackEl.style.display = 'flex';
                  }}
                />
              ) : null}
              <div
                className="bestseller-card-placeholder"
                style={{ display: dish.image ? 'none' : 'flex' }}
              >
                <div className="bestseller-placeholder-icon">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3d1f12"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <span className="bestseller-placeholder-tag">Hummus House</span>
              </div>
              <span className="bestseller-ribbon">★ Bestseller</span>
            </div>

            {/* 2. Dish name */}
            <h3 className="bestseller-card-name" title={dish.name}>
              {dish.name}
            </h3>

            {/* 3. Description */}
            <p className="bestseller-card-description" title={dish.description}>
              {dish.description}
            </p>

            {/* 4. Price */}
            <div className="bestseller-card-footer">
              <span className="bestseller-card-price">{dish.price}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

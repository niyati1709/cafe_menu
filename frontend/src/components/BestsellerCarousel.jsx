import { useState, useEffect, useRef } from 'react';
import './BestsellerCarousel.css';

export default function BestsellerCarousel({ dishes = [], title = 'Bestseller' }) {
  const trackRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // Duplicate dishes to achieve seamless infinite right-to-left scrolling loop
  const displayDishes = dishes.length > 0 ? [...dishes, ...dishes] : [];

  // Smooth continuous right-to-left auto-scroll
  useEffect(() => {
    let animationFrameId;
    const speed = 0.75; // pixels per frame

    const step = () => {
      const track = trackRef.current;
      if (track && isPlaying && !isHovered && !isDragging) {
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
    };
  }, [isPlaying, isHovered, isDragging, dishes.length]);

  // Handle manual navigation buttons
  const handleScrollPrev = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardStep = 240;
    const halfWidth = track.scrollWidth / 2;

    if (track.scrollLeft - cardStep < 0 && halfWidth > 0) {
      track.scrollLeft += halfWidth;
    }
    track.scrollBy({ left: -cardStep, behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardStep = 240;
    const halfWidth = track.scrollWidth / 2;

    if (halfWidth > 0 && track.scrollLeft + cardStep >= track.scrollWidth - track.clientWidth) {
      track.scrollLeft -= halfWidth;
    }
    track.scrollBy({ left: cardStep, behavior: 'smooth' });
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Mouse drag to scroll handlers
  const handleMouseDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    setStartX(e.pageX - track.offsetLeft);
    setScrollStart(track.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bestseller-carousel-container">
      <div className="bestseller-carousel-header">
        <div className="bestseller-title-group">
          <h2 className="section-title">{title}</h2>
          <span className="bestseller-badge-header">Chef's Specials</span>
        </div>
        <div className="bestseller-controls">
          <button
            type="button"
            className="carousel-control-btn"
            onClick={handleScrollPrev}
            aria-label="Scroll to previous bestseller"
            title="Previous"
          >
            &#10094;
          </button>
          <button
            type="button"
            className={`carousel-control-btn carousel-play-btn ${!isPlaying ? 'paused' : ''}`}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause auto-scroll' : 'Resume auto-scroll'}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <button
            type="button"
            className="carousel-control-btn"
            onClick={handleScrollNext}
            aria-label="Scroll to next bestseller"
            title="Next"
          >
            &#10095;
          </button>
        </div>
      </div>

      <div
        className={`bestseller-carousel-track ${isDragging ? 'is-dragging' : ''}`}
        ref={trackRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsDragging(false);
        }}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
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
                  onError={(e) => {
                    // Fall back to stylized graphic if image path cannot be loaded
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

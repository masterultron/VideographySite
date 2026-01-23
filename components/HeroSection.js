import { useState, useEffect } from 'react';

export default function HeroSection({ 
  slides = [], 
  title, 
  subtitle, 
  showButton = false, 
  buttonText = '', 
  onButtonClick,
  isPortfolio = false 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultSlides = [
    { image: '/images/PortfolioHeroSection.jpeg' },
    { image: '/images/PortfolioHeroSection4.jpeg' },
    // { image: '/images/PortfolioHeroSection5.jpeg' },
    { image: '/images/PortfolioHeroSection6.jpeg' },
    { image: '/images/PortfolioHeroSection7.jpeg' },
    { image: '/images/PortfolioHeroSection8.jpeg' },
    { image: '/images/PortfolioHeroSection9.jpeg' },
  ];

  const slidesToUse = slides.length > 0 ? slides : defaultSlides;

  useEffect(() => {
    if (slidesToUse.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesToUse.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesToUse.length]);

  return (
    <section className={`hero ${isPortfolio ? 'hero-portfolio' : ''}`}>
      <div className="hero-slideshow">
        {slidesToUse.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {showButton && (
          <button className="btn-primary" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function VideoCarousel({ videos = [], title, subsection = false }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const carouselRef = useRef(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1200) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevClick = () => {
    setCarouselPosition((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    const maxPosition = Math.max(0, videos.length - itemsPerSlide);
    setCarouselPosition((prev) => Math.min(maxPosition, prev + 1));
  };

  const canGoPrev = carouselPosition > 0;
  const canGoNext = carouselPosition < Math.max(0, videos.length - itemsPerSlide);

  if (videos.length === 0) {
    return null;
  }

  return (
    <div className={subsection ? 'carousel-subsection' : ''}>
      {title && (
        <h3 className={subsection ? 'carousel-subsection-title' : 'carousel-category-title'}>
          {title}
        </h3>
      )}
      
      <div className="carousel-wrapper">
        <button
          className={`carousel-arrow carousel-arrow-left ${!canGoPrev ? 'disabled' : ''}`}
          onClick={handlePrevClick}
          disabled={!canGoPrev}
          aria-label="Previous videos"
        >
          <FaChevronLeft />
        </button>

        <div className="video-carousel-container">
          <div 
            className="video-carousel"
            ref={carouselRef}
            style={{
              transform: `translateX(${-carouselPosition * 300}px)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {videos.map((video, index) => (
              <div 
                key={index} 
                className="video-item"
                onClick={() => openModal(video)}
              >
                {video.thumbnail ? (
                  <img src={video.thumbnail} alt={video.title || `Video ${index + 1}`} />
                ) : video.videoUrl ? (
                  <video src={video.videoUrl} muted />
                ) : (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: 'var(--slate-grey)'
                  }}>
                    <FaPlay style={{ color: 'var(--primary-gold)', fontSize: '2rem' }} />
                  </div>
                )}
                <div className="video-item-overlay">
                  <div className="play-icon">
                    <FaPlay />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`carousel-arrow carousel-arrow-right ${!canGoNext ? 'disabled' : ''}`}
          onClick={handleNextClick}
          disabled={!canGoNext}
          aria-label="Next videos"
        >
          <FaChevronRight />
        </button>
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            {selectedVideo.videoUrl ? (
              <video 
                src={selectedVideo.videoUrl} 
                controls 
                autoPlay
              />
            ) : (
              <div style={{ 
                padding: '60px', 
                textAlign: 'center', 
                color: 'var(--off-white)',
                backgroundColor: 'var(--slate-grey)',
                borderRadius: '8px'
              }}>
                <FaPlay style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '20px' }} />
                <p>Video coming soon</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

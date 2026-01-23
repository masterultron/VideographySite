import { useState, useEffect } from 'react';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function VideoCarousel({ videos = [], title, subsection = false }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Responsive Logic: Fewer items = BIGGER cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerSlide(1.2); // Mobile: 1 Huge card
      } else if (width < 1024) {
        setItemsPerSlide(2.1); // Tablet: 2 Large cards
      } else {
        setItemsPerSlide(3);   // Desktop: 3 Large cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < videos.length - Math.floor(itemsPerSlide)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedVideo]);

  if (!videos || videos.length === 0) return null;

  return (
    <div className={`mb-16 ${subsection ? 'mt-8' : ''}`} style={{ position: 'relative' }}>
      {/* Title */}
      {title && (
        <h3 
          className={`text-[#D7B673] font-serif mb-6 text-center ${
            subsection ? 'text-4xl md:text-5xl' : 'text-3xl font-bold'
          }`}
        >
          {title}
        </h3>
      )}

      {/* Container for Arrows + Carousel */}
      <div style={{ position: 'relative', padding: '0 40px' }}>
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          style={{
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)',
            color: '#D7B673',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: currentIndex === 0 ? 'default' : 'pointer',
            opacity: currentIndex === 0 ? 0 : 1,
          }}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Carousel Window */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          {/* Slider Track */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row', // Forces horizontal row
              transition: 'transform 0.5s ease-out',
              transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                style={{
                  flex: '0 0 auto', // Prevents shrinking
                  width: `${100 / itemsPerSlide}%`,
                  padding: '0 10px', // Spacing between cards
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedVideo(video)}
              >
                {/* THE VIDEO CARD */}
                <div
                  style={{
                    position: 'relative', // Vital for play button positioning
                    width: '100%',
                    aspectRatio: '9/16', // Forces Vertical Rectangle
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #3A3F45',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                  }}
                  className="group"
                >
                  {/* Image */}
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                      }}
                      className="group-hover:scale-110"
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: '#2A2F34' }} />
                  )}

                  {/* Dark Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}
                  />

                  {/* PLAY BUTTON (Explicitly Centered) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)', // Perfect centering
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid rgba(255,255,255,0.5)',
                      backdropFilter: 'blur(4px)',
                      zIndex: 20
                    }}
                  >
                    <FaPlay style={{ color: 'white', fontSize: '24px', paddingLeft: '4px' }} />
                  </div>

                  {/* Title */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '15px',
                      textAlign: 'center',
                    }}
                  >
                    <p style={{ color: '#E9E4D8', fontWeight: '500', fontSize: '1rem', margin: 0 }}>
                      {video.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= videos.length - Math.floor(itemsPerSlide)}
          style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)',
            color: '#D7B673',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: currentIndex >= videos.length - Math.floor(itemsPerSlide) ? 'default' : 'pointer',
            opacity: currentIndex >= videos.length - Math.floor(itemsPerSlide) ? 0 : 1,
          }}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* --- MODAL (Forced Centering) --- */}
      {selectedVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 99999, // Super high z-index
            display: 'flex', // This centers children
            alignItems: 'center', // Vertical center
            justifyContent: 'center', // Horizontal center
            backdropFilter: 'blur(5px)',
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '900px',
              maxHeight: '90vh',
              background: '#000',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid #3A3F45'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 20px', background: '#1A1D21', borderBottom: '1px solid #3A3F45' }}>
              <h3 style={{ color: '#D7B673', margin: 0, fontSize: '1.2rem' }}>{selectedVideo.title}</h3>
              <button onClick={() => setSelectedVideo(null)} style={{ background: 'none', border: 'none', color: '#7A7F85', cursor: 'pointer' }}>
                <FaTimes size={24} />
              </button>
            </div>

            {/* Video */}
            <div style={{ width: '100%', height: '70vh', background: 'black', display: 'flex', justifyContent: 'center' }}>
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
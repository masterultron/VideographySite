import { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

export default function VideoCarousel({ videos = [], title, subsection = false }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

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
      
      <div className="video-carousel">
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

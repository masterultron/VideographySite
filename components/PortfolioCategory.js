import VideoCarousel from './VideoCarousel';

export default function PortfolioCategory({ category }) {
  if (!category) return null;

  return (
    <div style={{ marginBottom: '80px' }}>
      {/* Centered Title & Description */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 15px' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#D7B673', 
          fontFamily: 'serif', 
          marginBottom: '15px' 
        }}>
          {category.title}
        </h2>
        {category.description && (
          <p style={{ 
            color: '#E9E4D8', 
            maxWidth: '800px', 
            margin: '0 auto', 
            fontSize: '1.1rem',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            {category.description}
          </p>
        )}
      </div>
      
      {category.subsections ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {category.subsections.map((subsection, index) => (
            <VideoCarousel 
              key={index}
              title={subsection.title}
              videos={subsection.videos}
              subsection={true}
            />
          ))}
        </div>
      ) : (
        <VideoCarousel videos={category.videos} />
      )}
    </div>
  );
}
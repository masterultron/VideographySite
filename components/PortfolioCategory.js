import VideoCarousel from './VideoCarousel';

export default function PortfolioCategory({ category }) {
  return (
    <div className="carousel-category">
      <h2 className="carousel-category-title">{category.title}</h2>
      {category.description && (
        <p className="carousel-category-description">{category.description}</p>
      )}
      
      {category.subsections ? (
        category.subsections.map((subsection, index) => (
          <VideoCarousel 
            key={index}
            title={subsection.title}
            videos={subsection.videos}
            subsection={true}
          />
        ))
      ) : (
        <VideoCarousel videos={category.videos} />
      )}
    </div>
  );
}

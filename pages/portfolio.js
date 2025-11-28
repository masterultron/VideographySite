import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortfolioCategory from '../components/PortfolioCategory';
import SocialIcons from '../components/SocialIcons';

const portfolioData = [
  {
    title: 'Weddings',
    description: 'Capturing the most magical moments of your special day. From intimate ceremonies to grand celebrations, every love story deserves to be told beautifully.',
    subsections: [
      {
        title: 'Cupid Moments',
        videos: [
          { thumbnail: '/images/wedding-cupid-1.jpg', videoUrl: '' },
          { thumbnail: '/images/wedding-cupid-2.jpg', videoUrl: '' },
          { thumbnail: '/images/wedding-cupid-3.jpg', videoUrl: '' },
        ],
      },
      {
        title: 'Event Highlights',
        videos: [
          { thumbnail: '/images/wedding-highlights-1.jpg', videoUrl: '' },
          { thumbnail: '/images/wedding-highlights-2.jpg', videoUrl: '' },
          { thumbnail: '/images/wedding-highlights-3.jpg', videoUrl: '' },
        ],
      },
      {
        title: 'Special Moments',
        videos: [
          { thumbnail: '/images/wedding-special-1.jpg', videoUrl: '' },
          { thumbnail: '/images/wedding-special-2.jpg', videoUrl: '' },
        ],
      },
      {
        title: 'Transitions',
        videos: [
          { thumbnail: '/images/wedding-transitions-1.jpg', videoUrl: '' },
          { thumbnail: '/images/wedding-transitions-2.jpg', videoUrl: '' },
        ],
      },
      {
        title: 'Decor',
        videos: [
          { thumbnail: '/images/wedding-decor-1.jpg', videoUrl: '' },
          { thumbnail: '/images/wedding-decor-2.jpg', videoUrl: '' },
        ],
      },
    ],
  },
  {
    title: 'Brand',
    description: 'Elevating brands through compelling visual narratives. From fashion shoots to product showcases, we create content that resonates with your audience.',
    subsections: [
      {
        title: 'Fashion',
        videos: [
          { thumbnail: '/images/brand-fashion-1.jpg', videoUrl: '' },
          { thumbnail: '/images/brand-fashion-2.jpg', videoUrl: '' },
          { thumbnail: '/images/brand-fashion-3.jpg', videoUrl: '' },
        ],
      },
      {
        title: 'Food',
        videos: [
          { thumbnail: '/images/brand-food-1.jpg', videoUrl: '' },
          { thumbnail: '/images/brand-food-2.jpg', videoUrl: '' },
        ],
      },
      {
        title: 'Products',
        videos: [
          { thumbnail: '/images/brand-products-1.jpg', videoUrl: '' },
          { thumbnail: '/images/brand-products-2.jpg', videoUrl: '' },
          { thumbnail: '/images/brand-products-3.jpg', videoUrl: '' },
        ],
      },
    ],
  },
  {
    title: 'Events',
    description: 'From corporate gatherings to social celebrations, we document the energy and essence of every event with precision and creativity.',
    subsections: [
      {
        title: 'Corporate',
        videos: [
          { thumbnail: '/images/events-corporate-1.jpg', videoUrl: '' },
          { thumbnail: '/images/events-corporate-2.jpg', videoUrl: '' },
        ],
      },
      {
        title: 'Social',
        videos: [
          { thumbnail: '/images/events-social-1.jpg', videoUrl: '' },
          { thumbnail: '/images/events-social-2.jpg', videoUrl: '' },
          { thumbnail: '/images/events-social-3.jpg', videoUrl: '' },
        ],
      },
    ],
  },
  {
    title: 'Lifestyle / Instagrammable',
    description: 'Creating visually stunning content perfect for social media. Trendy, engaging, and scroll-stopping visuals that capture attention.',
    videos: [
      { thumbnail: '/images/lifestyle-1.jpg', videoUrl: '' },
      { thumbnail: '/images/lifestyle-2.jpg', videoUrl: '' },
      { thumbnail: '/images/lifestyle-3.jpg', videoUrl: '' },
      { thumbnail: '/images/lifestyle-4.jpg', videoUrl: '' },
    ],
  },
  {
    title: 'Video Editing',
    description: 'Professional post-production services that bring raw footage to life. Color grading, transitions, effects, and storytelling through expert editing.',
    videos: [
      { thumbnail: '/images/editing-1.jpg', videoUrl: '' },
      { thumbnail: '/images/editing-2.jpg', videoUrl: '' },
      { thumbnail: '/images/editing-3.jpg', videoUrl: '' },
    ],
  },
];

const socialLinks = {
  instagram: 'https://instagram.com/byempress',
  tiktok: 'https://tiktok.com/@byempress',
  facebook: 'https://facebook.com/byempress',
  linkedin: 'https://linkedin.com/in/byempress',
};

export default function Portfolio() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio | byEmpress</title>
        <meta name="description" content="Explore our portfolio of weddings, events, brand content, lifestyle videos, and professional editing work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        <HeroSection
          title="A Glimpse Into My<br/><span>World of Creativity</span>"
          subtitle="Timeless stories captured with passion"
          isPortfolio={true}
        />

        <section className="carousel-section container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title">Past Works</h2>
            <p className="section-subtitle">
              These are some of the projects I&apos;ve brought to life. Each one reflects my passion, 
              creativity, and dedication to telling meaningful stories.
            </p>
          </div>

          {portfolioData.map((category, index) => (
            <PortfolioCategory key={index} category={category} />
          ))}

          <div style={{
            textAlign: 'center',
            padding: '60px 0',
            borderTop: '1px solid var(--slate-grey)',
            marginTop: '40px'
          }}>
            <h2 style={{
              fontSize: '2rem',
              color: 'var(--primary-gold)',
              marginBottom: '20px'
            }}>
              Secure Your Date With Us
            </h2>
            <p style={{
              color: 'var(--off-white)',
              marginBottom: '30px',
              maxWidth: '500px',
              margin: '0 auto 30px'
            }}>
              Ready to bring your vision to life? Let&apos;s create something beautiful together.
            </p>
            <button 
              className="btn-primary"
              onClick={() => router.push('/contact')}
            >
              Book Now
            </button>

            <div style={{ marginTop: '40px' }}>
              <p style={{ 
                color: 'var(--off-white)', 
                marginBottom: '15px',
                fontSize: '0.95rem'
              }}>
                Follow my journey
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SocialIcons links={socialLinks} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

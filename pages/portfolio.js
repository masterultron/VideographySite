import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortfolioCategory from '../components/PortfolioCategory';
import SocialIcons from '../components/SocialIcons';
import { portfolioVideos } from '../data/portfolioData'; // Import the Real Data

export default function Portfolio() {
  const router = useRouter();

  // --- 1. DEFINING SOCIAL LINKS (Fixed: This was missing) ---
  const socialLinks = {
    instagram: 'https://www.instagram.com/shotbyanike?igsh=d2tnODhyZHNrdGlh',
    tiktok: 'https://tiktok.com/@byempress',
    facebook: 'https://facebook.com/byempress',
    linkedin: 'https://linkedin.com/in/byempress',
    twitter: 'https://x.com/shotbyanike?s=21&t=JsGfU-l9pFBFZYGpFYZ0ww'
  };

  // --- 2. CONFIGURATION ---
  const categoriesConfig = [
    {
      id: 'Weddings',
      title: 'Weddings',
      description: 'Capturing the most magical moments of your special day. From intimate ceremonies to grand celebrations, every love story deserves to be told beautifully.',
      hasSubsections: true
    },
    {
      id: 'Brand',
      title: 'Brand',
      description: 'Elevating brands through compelling visual narratives. From fashion shoots to product showcases, we create content that resonates with your audience.',
      hasSubsections: true
    },
    {
      id: 'Events',
      title: 'Events',
      description: 'From corporate gatherings to social celebrations, we document the energy and essence of every event with precision and creativity.',
      hasSubsections: true
    },
    {
      id: 'Lifestyle',
      title: 'Lifestyle / Instagrammable',
      description: 'Creating visually stunning content perfect for social media. Trendy, engaging, and scroll-stopping visuals that capture attention.',
      hasSubsections: false
    },
    {
      id: 'Video Editing',
      title: 'Video Editing',
      description: 'Professional post-production services that bring raw footage to life. Color grading, transitions, effects, and storytelling through expert editing.',
      hasSubsections: false
    }
  ];

  // --- 3. MERGE LOGIC ---
  const dynamicPortfolioData = categoriesConfig.map(config => {
    // We match the "id" here to the "category" in portfolioData.js
    const videos = portfolioVideos.filter(v => v.category === config.id);

    if (config.hasSubsections) {
      const groups = videos.reduce((acc, video) => {
        const sub = video.subCategory || "General";
        if (!acc[sub]) acc[sub] = [];
        acc[sub].push(video);
        return acc;
      }, {});

      return {
        title: config.title,
        description: config.description,
        subsections: Object.keys(groups).map(subKey => ({
          title: subKey,
          videos: groups[subKey]
        }))
      };
    } else {
      return {
        title: config.title,
        description: config.description,
        videos: videos
      };
    }
  });

  return (
    <>
      <Head>
        <title>Portfolio</title>
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

          {/* Render the Dynamic Data */}
          {dynamicPortfolioData.map((category, index) => {
            // Only render if there is data
            if ((category.videos && category.videos.length > 0) || (category.subsections && category.subsections.length > 0)) {
               return <PortfolioCategory key={index} category={category} />;
            }
            return null;
          })}

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
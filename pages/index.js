import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();

  const heroSlides = [
    { image: '/images/HomeHeroSection2.JPG' },
    { image: '/images/HomeHeroSection.JPG' },
    { image: '/images/HomeHeroSection3.JPG' },
    { image: '/images/HomeHeroSection4.PNG' },
    { image: '/images/HomeHeroSection5.PNG' },
    { image: '/images/HomeHeroSection6.PNG ' },  
    { image: '/images/HomeHeroSection7.PNG' },
    { image: '/images/HomeHeroSection8.PNG' },
    { image: '/images/HomeHeroSection9.PNG' },
    { image: '/images/HomeHeroSection10.PNG' },
  ];

  const handleLearnMore = () => {
    router.push('/portfolio');
  };

  return (
    <>
      <Head>
        <title>ShotByAnike| Videography & Creative Storytelling</title>
        <meta name="description" content="Professional videography services - capturing moments, crafting stories. Weddings, events, brand content, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <HeroSection
          slides={heroSlides}
          title="Capturing <span>Moments</span>,<br/>Crafting Stories"
          subtitle="Professional videography that turns your memories into timeless art"
          showButton={true}
          buttonText="Learn More"
          onButtonClick={handleLearnMore}
        />
        
        <StorySection />
        
        <section className="cta-section" style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: 'var(--slate-grey)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: 'var(--off-white)',
            marginBottom: '20px'
          }}>
            Want to explore my creative journey?
          </h2>
          <button className="btn-primary" onClick={handleLearnMore}>
            View Portfolio
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}

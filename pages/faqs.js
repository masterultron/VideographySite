import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQItem from '../components/FAQItem';

const faqData = [
  {
    question: 'What types of events do you cover?',
    answer: 'We cover a wide range of events including weddings, corporate events, social gatherings, fashion shoots, product launches, and lifestyle content. Each project is approached with creativity and professionalism to ensure your vision is perfectly captured.',
  },
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 2-3 months in advance for major events like weddings. For smaller projects, 2-4 weeks notice is usually sufficient. However, we always try to accommodate last-minute requests when possible.',
  },

  {
    question: 'What is your payment policy?',
    answer: 'A 75% deposit is required before work begins, and the remaining balance must be paid before the final edited videos are delivered.',
  },

  {
    question: 'What is included in your videography packages?',
    answer: 'Our packages typically include pre-event consultation, professional filming with high-quality equipment, expert editing, color grading, music licensing, and delivery of the final product in your preferred format. Custom packages are available based on your specific needs.',
  },
  {
    question: 'How long does it take to receive the final video?',
    answer: 'Turnaround time depends on the project and type of content. Standard delivery is usually within 24–72 hours. Same-day delivery is available upon request for an additional fee per video.',
  },
  {
    question: 'Do you travel for destination events?',
    answer: 'Yes! We’re available to travel by flight for destination projects. For out-of-state events, suitable accommodation should be provided. We recommend early booking to ensure availability for travel-based projects.',
  },
  // {
  //   question: 'What equipment do you use?',
  //   answer: 'We use professional-grade cameras, lenses, stabilizers, drones (where permitted), and audio equipment. Our gear is regularly updated to ensure we deliver the highest quality footage using the latest technology.',
  // },
  {
    question: 'Can I request specific songs for my video?',
    answer: 'Absolutely! We can incorporate your preferred music, or we can suggest tracks from our licensed music library. If using copyrighted music, licensing fees may apply depending on the usage rights required.',
  },
  {
    question: 'Do you offer raw footage?',
    answer: 'Yes, raw footage can be provided upon request for an additional fee. This includes all unedited clips from your event or project. Please note that raw footage files are quite large and may require external storage.',
  },
  
  {
    question: 'How do I get started?',
    answer: 'Simply visit our Contact page and fill out the booking form with your project details, or reach out via phone, email, or WhatsApp. We\'ll schedule a consultation to discuss your vision, requirements, and provide a customized quote.',
  },
];

const reviewsData = [
  {
    category: 'Wedding',
    note: 'You made me so happy today , I love my videos so much I’m glad I get to relive all this beautiful memories thank youuu 🥹❤️!',
    name: 'Bride sakeenah',
  },
  {
    category: 'Corporate',
    note: 'Anike you did a big one with this one, I love love it!',
    name: 'YN Interior Designer',
  },
  {
    category: 'Fashion',
    note: 'Working with Anike was a game-changer for our brand. The visual storytelling elevated our collection launch to another level.',
    name: 'Amara Williams, Fashion Designer',
  },
  {
    category: 'Event',
    note: 'From start to finish, the experience was seamless. The birthday video captured the essence of the celebration perfectly!',
    name: 'Jennifer Okonkwo',
  },
  {
    category: 'Wedding',
    note: 'heyyy, thank you so so much for all of the beautiful videos ♥️♥️♥️ you&apo;ve captured so many of my wedding moments in the most beautiful way, thank you so much im so happy with the videos 🥹🥹♥️♥️♥️',
    name: '#Aishab.25, Aisha Alkali',
  },
  {
    category: 'Product',
    note: 'Your videos are so clean, neat, i love how you captured every detail',
    name: 'Attik, Brand-Owner',
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQs & Reviews | shotbyanike</title>
        <meta name="description" content="Frequently asked questions and customer reviews for byEmpress videography services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="faq-page">
        <div className="container">
          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={activeIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </section>

          <section className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-list">
              {reviewsData.map((review, index) => (
                <div key={index} className="review-item">
                  <span className="review-category">{review.category}</span>
                  <p className="review-text">&ldquo;{review.note}&rdquo;</p>
                  <p className="review-author">— {review.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

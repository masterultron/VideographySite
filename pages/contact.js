import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormModal from '../components/FormModal';
import SocialIcons from '../components/SocialIcons';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const contactInfo = {
  phone: '08134231274',
  email: 'workwithanike@gmail.com',
  whatsapp: '08134231274',
};

// 1. Add Twitter here so it gets passed to the SocialIcons component
const socialLinks = {
  instagram: 'https://www.instagram.com/shotbyanike?igsh=d2tnODhyZHNrdGlh',
  tiktok: 'https://tiktok.com/@byempress',
  twitter: 'https://twitter.com/byempress', // Added Twitter
  facebook: 'https://facebook.com/byempress',
  linkedin: 'https://linkedin.com/in/byempress',
};

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with byEmpress for your videography needs. Book your session today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="contact-page">
        <div className="container">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p className="section-subtitle">
              We&apos;d love to hear from you. Reach out through any of the channels below.
            </p>
          </div>

          <section className="contact-section">
            <div className="contact-details">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="contact-item"
              >
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-info">
                  <h3>Phone</h3>
                  <p>{contactInfo.phone}</p>
                </div>
              </a>

              <a 
                href={`mailto:${contactInfo.email}`}
                className="contact-item"
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-info">
                  <h3>Email</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </a>

              <a 
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I'm interested in your videography services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-info">
                  <h3>WhatsApp</h3>
                  <p>{contactInfo.whatsapp}</p>
                </div>
              </a>
            </div>

            {/* The Twitter link inside socialLinks will now be rendered here */}
            <div className="social-icons-section">
              <h3>Connect With Us</h3>
              <SocialIcons links={socialLinks} />
            </div>
          </section>

          <section className="booking-section">
            <h2>Secure Your Date With Us</h2>
            <p>
              Ready to create something amazing together? Fill out our booking form 
              and we&apos;ll get back to you as soon as possible.
            </p>
            <button className="btn-primary" onClick={openModal}>
              Book Now
            </button>
          </section>
        </div>
      </main>

      <Footer />

      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
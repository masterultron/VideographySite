import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">byEmpress</div>
        <p className="footer-tagline">Capturing Moments, Crafting Stories</p>
        
        <ul className="footer-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/faqs">FAQs</Link></li>
        </ul>
        
        <div className="footer-divider"></div>
        
        <p className="footer-copyright">
          &copy; {currentYear} byEmpress. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

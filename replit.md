# byEmpress - Professional Videography Portfolio

## Overview
A professional videography portfolio website for "byEmpress" built with Next.js. Features a luxury gold and grey color theme, video carousels, EmailJS booking system, and four main pages.

## Tech Stack
- **Framework**: Next.js 16 (Pages Router)
- **Styling**: CSS with CSS Variables
- **UI Libraries**: react-icons, swiper, sweetalert2
- **Email Service**: EmailJS (@emailjs/browser)
- **Deployment**: Configured for Vercel

## Project Structure
```
/pages
  _app.js           - Global app wrapper with CSS imports
  index.js          - Landing page (Hero, Story, CTA)
  portfolio.js      - Portfolio with categorized video sections
  contact.js        - Contact methods and booking form
  faqs.js           - FAQ accordion and customer reviews

/components
  Navbar.js         - Navigation with mobile hamburger menu
  Footer.js         - Site footer with links
  HeroSection.js    - Hero slideshow with overlay
  StorySection.js   - "How It Started" narrative section
  VideoCarousel.js  - Horizontal video carousel with modal
  PortfolioCategory.js - Category sections with subsections
  FormModal.js      - Booking form with EmailJS integration
  FAQItem.js        - Accordion FAQ component
  SocialIcons.js    - Social media icon links

/styles
  globals.css       - All CSS consolidated (colors, components, responsive)

/data
  portfolioData.js  - Video content data (placeholder structure)

/public
  /images           - Image assets (hero backgrounds, thumbnails)
```

## Color Theme (Luxury Gold & Grey)
- Primary Gold: #D7B673
- Metallic Gold: #B48A3C
- Deep Charcoal: #2A2F34
- Charcoal Grey: #3A3F45
- Slate Grey: #4A4F55
- Steel Grey: #7A7F85
- Off-White: #E9E4D8

## Key Features
1. **Landing Page**: Auto-sliding hero, story section, CTA button
2. **Portfolio Page**: 5 categories (Weddings with 5 subsections, Brand with 3, Events with 2, Lifestyle, Video Editing)
3. **Contact Page**: Clickable Phone/Email/WhatsApp, social icons, booking form modal
4. **FAQs Page**: Accordion-style FAQs, customer review cards

## EmailJS Setup Required
To enable the booking form:
1. Create EmailJS account at emailjs.com
2. Set up email service and template
3. Add environment variables:
   - NEXT_PUBLIC_EMAILJS_SERVICE_ID
   - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

## Development
- Server runs on port 5000
- Command: `npm run dev`

## Future Enhancements (Planned)
- Instagram Graph API integration for automatic portfolio updates
- Cloudinary integration for video hosting
- Instagram hashtag system (#byEmpressPortfolio)

## Recent Changes
- November 28, 2025: Initial build complete with all 4 pages and gold/grey theme

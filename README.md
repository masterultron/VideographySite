# Videography Portfolio Website  

## Overview  
This is a fully responsive videography portfolio website I developed to showcase professional video projects, manage bookings, and allow the client to easily update content via Instagram. The site emphasizes high-quality visuals, smooth user experience, and automatic portfolio updates.  

## Features  
- *Landing Page:*  
  - Hero slideshow of previous works (videos/images)  
  - Personal story section detailing the client’s journey and unique style  
  - Call-to-action button linking to Portfolio page  
  - Footer with logo, tagline, and quick links  

- *Portfolio Page:*  
  - Hero section with background image/video  
  - Organized categories: Weddings, Events, Brand (Fashion, Food, Products), Lifestyle, Video Editing  
  - Horizontal, swipeable carousels with playable, expandable videos  
  - Call-to-action linking to Contact page  
  - Social media links  

- *Contact Page:*  
  - Clickable phone, email, and WhatsApp for immediate contact  
  - Booking form with fields: Name, Phone, Email, Project type, Event date, Consultation date, Notes  
  - Client-side validation and feedback using SweetAlert  
  - Form submissions sent via EmailJS directly to client’s email  

- *FAQs & Customer Reviews Page:*  
  - Accordion-style FAQ section  
  - Customer reviews with category, note, and name  

- *Automatic Portfolio Updates:*  
  - Instagram Graph API fetches videos with the hashtag #anikeshotit  
  - Caption hashtags automatically categorize videos  
  - Videos display seamlessly in existing carousels  

## Technology Stack  
- *Frontend:* Next.js (React framework) for performance, routing, SEO optimization, and responsive design  
- *Hosting:* Vercel (free hosting) for static and server-rendered content with CDN edge delivery  
- *Video Hosting (Development):* Cloudinary for initial portfolio videos  
- *Form Integration:* EmailJS with SweetAlert for success/error notifications  
- *Future Updates:* Instagram Graph API + hashtag parsing for self-managed portfolio updates  

## Project Structure  


/public
    /images         → hero images, icons, thumbnails
    /videos         → initial portfolio videos (Cloudinary)
    favicon.ico
    logo.png
/styles
    globals.css
    navbar.css
    footer.css
    carousel.css
/components
    Navbar.js
    Footer.js
    HeroSection.js
    StorySection.js
    PortfolioCategory.js
    VideoCarousel.js
    SocialIcons.js
    ContactForm.js
    FAQItem.js
/pages
    index.js        → Landing Page
    portfolio.js    → Portfolio Page
    contact.js      → Contact Page
    faq.js          → FAQs & Customer Reviews Page
/utils
    email.js        → EmailJS helper
    instagramApi.js → Instagram feed fetch helper
/data
    faqs.json
    customerReviews.json


## Design & UI  
- *Color Scheme:* Luxury Gold (#D7B673) & Metallic Gold (#B48A3C) accents, Dark Charcoal Grey (#2A2F34) main background, Soft Steel Grey (#7A7F85) page background, Deep Slate Grey (#3A3F45) video/card backgrounds, Off-White text (#E9E4D8), Warm Beige (#C9B79A) glow highlights.  
- *Typography & Buttons:* Clean, readable fonts with consistent styling; call-to-action buttons use gold accents for prominence.  
- *Responsiveness:* Fully optimized for desktop, tablet, and mobile devices.  

## Installation & Setup  
1. Clone the repository.  
2. Install dependencies:  
   bash
   npm install
     
3. Configure EmailJS credentials in /utils/email.js.  
4. Run the development server:  
   bash
   npm run dev
     
5. Open the site at http://localhost:3000.  

## Notes & Recommendations  
- Initial videos are hosted on Cloudinary during development; future videos are automatically pulled from Instagram.  
- Ensure Instagram posts include both #anikeshotit and a category hashtag for correct display.  
- All videos, carousels, hover effects, and modals are consistent across Cloudinary and Instagram sources.  
- Client can manage portfolio updates independently without accessing the code.  

## License  

© [2025] [TheeAbdurrahamanJamiu]. All rights reserved.  

This project and its content (including code, design, and media) are the intellectual property of the author and/or client.  

- *Personal Use:* You may view and study the project for educational purposes.  
- *Commercial Use:* Redistribution, modification, or commercial use is strictly prohibited without prior written permission.  
- *Attribution:* Any approved use must credit the original author.  

For permissions or inquiries, please contact [abdurrahamanjamiu75@outlook.com].
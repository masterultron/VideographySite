import { FaInstagram, FaTiktok, FaFacebookF, FaTwitter } from 'react-icons/fa';
// If 'react-icons/fa6' fails, delete the line below and use FaTwitter instead
import { FaXTwitter } from 'react-icons/fa6'; 

export default function SocialIcons({ links = {} }) {
  const socialPlatforms = [
    { key: 'instagram', icon: FaInstagram, label: 'Instagram' },
    // Use FaXTwitter for the "X" logo, or FaTwitter for the bird
    { key: 'twitter', icon: FaXTwitter || FaTwitter, label: 'X' }, 
    { key: 'tiktok', icon: FaTiktok, label: 'TikTok' },
    { key: 'facebook', icon: FaFacebookF, label: 'Facebook' },
  ];

  const activeLinks = socialPlatforms.filter(platform => links[platform.key]);

  if (activeLinks.length === 0) return null;

  return (
    <div className="social-icons">
      {activeLinks.map((platform) => {
        const IconComponent = platform.icon;
        return (
          <a
            key={platform.key}
            href={links[platform.key]}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={platform.label}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}
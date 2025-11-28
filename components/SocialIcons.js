import { FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function SocialIcons({ links = {} }) {
  const socialPlatforms = [
    { key: 'instagram', icon: FaInstagram, label: 'Instagram' },
    { key: 'tiktok', icon: FaTiktok, label: 'TikTok' },
    { key: 'facebook', icon: FaFacebookF, label: 'Facebook' },
    { key: 'linkedin', icon: FaLinkedinIn, label: 'LinkedIn' },
    { key: 'youtube', icon: FaYoutube, label: 'YouTube' },
    { key: 'twitter', icon: FaTwitter, label: 'Twitter' },
  ];

  const activeLinks = socialPlatforms.filter(platform => links[platform.key]);

  if (activeLinks.length === 0) {
    return null;
  }

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

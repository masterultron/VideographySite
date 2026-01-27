// utils/instagram.js

// ⚠️ Ensure this is set in your .env.local file:
// NEXT_PUBLIC_INSTAGRAM_TOKEN=your_long_access_token_here
const INSTAGRAM_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN; 

const FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username';
const INSTAGRAM_URL = `https://graph.instagram.com/me/media?fields=${FIELDS}&access_token=${INSTAGRAM_TOKEN}`;

export const fetchInstagramPosts = async () => {
  if (!INSTAGRAM_TOKEN) {
    console.error("Instagram Token is missing in .env.local");
    return [];
  }

  try {
    const response = await fetch(INSTAGRAM_URL);
    const data = await response.json();

    if (!data || !data.data) {
      console.error("Instagram API Error:", data);
      return [];
    }

    // --- FILTERING LOGIC ---
    // We only keep posts where the caption includes the specific hashtag.
    // We convert to lowercase so #AnikeShotIt and #anikeshotit both work.
    const hashtag = '#anikeshotit'; 
    
    const portfolioPosts = data.data.filter(post => 
      post.caption && post.caption.toLowerCase().includes(hashtag)
    );

    return portfolioPosts;
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return [];
  }
};
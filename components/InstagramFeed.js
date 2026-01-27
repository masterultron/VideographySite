import { useState, useEffect } from 'react';
import { fetchInstagramPosts } from '../utils/instagram';
import { FaInstagram, FaPlay, FaClone } from 'react-icons/fa'; // FaClone for carousels

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchInstagramPosts();
      // Limit to the latest 6 matching posts so the footer doesn't get too long
      setPosts(data.slice(0, 6)); 
      setLoading(false);
    };

    getPosts();
  }, []);

  if (loading) return null; 
  if (posts.length === 0) return null; // Hides section completely if no hashtag posts exist

  return (
    <section className="py-24 bg-[#1A1D21] border-t border-[#3A3F45]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#D7B673] mb-4">
            Fresh From The Feed
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-8">
            Latest updates tagged with <span className="text-[#E9E4D8] font-bold">#anikeshotit</span>
          </p>
          
          <a 
            href="https://www.instagram.com/theanikee?igsh=NzU2N2Q3cHNrc2tp" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[#D7B673] border border-[#D7B673] px-8 py-3 rounded-full hover:bg-[#D7B673] hover:text-[#1A1D21] transition-all font-bold tracking-wide"
          >
            <FaInstagram size={20} /> Follow on Instagram
          </a>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href={post.permalink} 
              target="_blank" 
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-2xl border border-[#3A3F45] bg-black shadow-xl hover:border-[#D7B673] transition-colors"
            >
              {/* IMAGE LOGIC: 
                 If it's VIDEO, Instagram provides a 'thumbnail_url'.
                 If it's IMAGE/CAROUSEL, we use 'media_url'.
              */}
              <img 
                src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url} 
                alt={post.caption ? post.caption.slice(0, 100) : 'Instagram Post'} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />

              {/* Type Indicator Badge (Top Right) */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white shadow-lg">
                {post.media_type === 'VIDEO' ? <FaPlay size={12} /> : 
                 post.media_type === 'CAROUSEL_ALBUM' ? <FaClone size={12} /> : 
                 <FaInstagram size={14} />}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <p className="text-[#E9E4D8] text-sm line-clamp-3 font-medium leading-relaxed">
                  {post.caption || 'View on Instagram'}
                </p>
                <div className="mt-4 text-[#D7B673] text-xs font-bold uppercase tracking-widest">
                  View Post &rarr;
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
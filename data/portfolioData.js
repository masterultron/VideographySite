// /data/portfolioData.js

// Helper function to make videos load fast (f_auto, q_auto)
const optimizeCloudinaryUrl = (url) => {
  if (!url) return "";
  if (url.includes("f_auto,q_auto")) return url;
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};

export const portfolioVideos = [
  // ============================
  // BRAND -> FASHION
  // ============================
  {
    id: 1,
    category: "Brand",
    subCategory: "Fashion",
    title: "The Occasion - BTS (Creative Director)",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768076404/The_occasion_is_here_Here_s_the_Behind_the_scenes_for_theoccasion.hof_Creative_director_mery_xy7uos.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768076404/The_occasion_is_here_Here_s_the_Behind_the_scenes_for_theoccasion.hof_Creative_director_mery_xy7uos.jpg"),
  },
  {
    id: 2,
    category: "Brand",
    subCategory: "Fashion",
    title: "And It's a Wrap - Hafsa",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768076328/And_it_s_a_wrap_with_Hafsa_whiteliliesng_or_is_it_stay_tuned_Congratulations_Hafsa_%EF%B8%8F_%D8%A8%D9%8E_kwg86b.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768076328/And_it_s_a_wrap_with_Hafsa_whiteliliesng_or_is_it_stay_tuned_Congratulations_Hafsa_%EF%B8%8F_%D8%A8%D9%8E_kwg86b.jpg"),
  },
  {
    id: 3,
    category: "Brand",
    subCategory: "Fashion",
    title: "The Hinata Dress",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768076000/The_Hinata_dress_%EF%B8%8F_%EF%B8%8F_for_theoccasion.hof_Video_by_shotbyanike_Creative_director_stylist_-_y6ihab.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768076000/The_Hinata_dress_%EF%B8%8F_%EF%B8%8F_for_theoccasion.hof_Video_by_shotbyanike_Creative_director_stylist_-_y6ihab.jpg"),
  },

  // ============================
  // BRAND -> FOOD
  // ============================
  {
    id: 4,
    category: "Brand",
    subCategory: "Food",
    title: "Strawberry Cheese Cake",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080132/IMG_9283_ed5i51.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080132/IMG_9283_ed5i51.jpg"),
  },

  // ============================
  // BRAND -> PRODUCTS
  // ============================
  {
    id: 5,
    category: "Brand",
    subCategory: "Products",
    title: "Product Showcase",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1772024980/ArtisticWoodenPieces_ski0f2.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1772024980/ArtisticWoodenPieces_ski0f2.jpg"),
  },

  // ============================
  // BRAND -> REAL ESTATE / INTERIOR
  // ============================
  {
    id: 6,
    category: "Brand",
    subCategory: "Real Estate & Interior",
    title: "The Office",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768079403/IMG_8579_utolax.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768079403/IMG_8579_utolax.jpg"),
  },

  // ============================
  // LIFESTYLE
  // ============================
  {
    id: 7,
    category: "Lifestyle",
    subCategory: null,
    title: "Tech Summit",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768079732/IMG_8203_yl6s62.mov"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768079732/IMG_8203_yl6s62.jpg"),
  },
  {
    id: 8,
    category: "Lifestyle",
    subCategory: null,
    title: "Vlog: Anike in Lagos",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768079662/Welcome_to_my_new_series_of_Anike_in_Lagos._If_you_are_like_me_and_the_only_thing_you_know_ab_gy8ynp.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768079662/Welcome_to_my_new_series_of_Anike_in_Lagos._If_you_are_like_me_and_the_only_thing_you_know_ab_gy8ynp.jpg"),
  },

  // ============================
  // WEDDINGS -> CUPID MOMENTS
  // ============================
  {
    id: 9,
    category: "Weddings",
    subCategory: "Cupid Moments",
    title: "Love Indeed Lives Here",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081749/Love_indeed_lives_here_for_the_grand_dinner_of_Sanusi_and_Fatima_dangote_Planner_nsignature__2_q749do.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081749/Love_indeed_lives_here_for_the_grand_dinner_of_Sanusi_and_Fatima_dangote_Planner_nsignature__2_q749do.jpg"),
  },
  {
    id: 10,
    category: "Weddings",
    subCategory: "Cupid Moments",
    title: "From Strangers to Lovers",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081766/From_Strangers_to_lovers_forever_%EF%B8%8FThe_MA_LOVE_STORYYYYYYY_%EF%B8%8FContent_shotbyanike_Makeup_racyb_sssjc4.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081766/From_Strangers_to_lovers_forever_%EF%B8%8FThe_MA_LOVE_STORYYYYYYY_%EF%B8%8FContent_shotbyanike_Makeup_racyb_sssjc4.jpg"),
  },
  {
    id: 11,
    category: "Weddings",
    subCategory: "Cupid Moments",
    title: "Adaugo Bride Life",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081765/Adaugo_%EF%B8%8FBride_lifeofbenita_MUA_greyce_makeoversContent_creator_shotbyanikeHair_okukuandgel_nscenh.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081765/Adaugo_%EF%B8%8FBride_lifeofbenita_MUA_greyce_makeoversContent_creator_shotbyanikeHair_okukuandgel_nscenh.jpg"),
  },

  // ============================
  // WEDDINGS -> DECOR
  // ============================
  {
    id: 12,
    category: "Weddings",
    subCategory: "Decor",
    title: "Decor: Grand Kamu",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080880/Decor_of_the_Grand_Kamu_of_Tasnim_Baba-Ahmed_Sani_Dangote_Planner_exquisiteluxuryevents_Event_2_ntkwtl.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080880/Decor_of_the_Grand_Kamu_of_Tasnim_Baba-Ahmed_Sani_Dangote_Planner_exquisiteluxuryevents_Event_2_ntkwtl.jpg"),
  },
  {
    id: 13,
    category: "Weddings",
    subCategory: "Decor",
    title: "Fairytale Decor",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080841/A_fairytale_decor_for_a_fairy_tale_queen_and_king_%EF%B8%8FPlanner_nsignature_events_Decor_perfectinte_2_luomwu.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080841/A_fairytale_decor_for_a_fairy_tale_queen_and_king_%EF%B8%8FPlanner_nsignature_events_Decor_perfectinte_2_luomwu.jpg"),
  },

  // ==============================
  // WEDDINGS -> EVENTS (Corporate & Social)
  // ==============================
  {
    id: 14,
    category: "Weddings",
    subCategory: "Event",
    title: "60th NMGS Annual Conference",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081014/The_60th_NMGS_Annual_international_conference_and_exhibition_Food_sweetishbyfakab.ng_p0urk2.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081014/The_60th_NMGS_Annual_international_conference_and_exhibition_Food_sweetishbyfakab.ng_p0urk2.jpg"),
  },
  {
    id: 15,
    category: "Weddings",
    subCategory: "Event",
    title: "Birthday Coverage",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081274/Brand-birthday_coverage_for_sara.michelleoni_%EF%B8%8F_%EF%B8%8FDecor_bloom_byzuwi_Venue_kidcity_abuja_odqx2o.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081274/Brand-birthday_coverage_for_sara.michelleoni_%EF%B8%8F_%EF%B8%8FDecor_bloom_byzuwi_Venue_kidcity_abuja_odqx2o.jpg"),
  },

  // ============================
  // WEDDINGS -> EVENT HIGHLIGHTS
  // ============================
  {
    id: 16,
    category: "Weddings",
    subCategory: "Event Highlights",
    title: "It's a Wrap: Mr & Mrs AB",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081683/And_it_s_a_wrap_with_MR_AND_MRS_AB_Congratulations_my_gorgeous_couple._May_Allah_keep_xwgbdb.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081683/And_it_s_a_wrap_with_MR_AND_MRS_AB_Congratulations_my_gorgeous_couple._May_Allah_keep_xwgbdb.jpg"),
  },
  {
    id: 17,
    category: "Weddings",
    subCategory: "Event Highlights",
    title: "The Kaulu",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081575/The_kaulu_%EF%B8%8FWedding_page_aishab.25_nho0wf.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081575/The_kaulu_%EF%B8%8FWedding_page_aishab.25_nho0wf.jpg"),
  },
  {
    id: 18,
    category: "Weddings",
    subCategory: "Event Highlights",
    title: "4 Events, 1 Minute",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081536/4_events_1_minute_let_s_gooo_%EF%B8%8F_%EF%B8%8F_anuoluwatobi24_wrap_%EF%B8%8F_%EF%B8%8FPlanner_sola_rahman_Bride_awotunde_siztot.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768081536/4_events_1_minute_let_s_gooo_%EF%B8%8F_%EF%B8%8F_anuoluwatobi24_wrap_%EF%B8%8F_%EF%B8%8FPlanner_sola_rahman_Bride_awotunde_siztot.jpg"),
  },

  // ============================
  // WEDDINGS -> SPECIAL MOMENTS
  // ============================
  {
    id: 19,
    category: "Weddings",
    subCategory: "Special Moments",
    title: "MEJI MEJI",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080444/MEJI_MEJI_-_we_came_to_the_world_two_by_two_%EF%B8%8FContent_shotbyanike_Planner_amsaas_royal_events_2_eas5j1.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080444/MEJI_MEJI_-_we_came_to_the_world_two_by_two_%EF%B8%8FContent_shotbyanike_Planner_amsaas_royal_events_2_eas5j1.jpg"),
  },
  {
    id: 20,
    category: "Weddings",
    subCategory: "Special Moments",
    title: "Bride Nimi & The Girls",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080376/Bride_Nimi_and_her_girlsss_for_her_traditional_dayyy_%EF%B8%8FBridal_styling-_thebridalboudoircoMakeup-_jjnmll.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080376/Bride_Nimi_and_her_girlsss_for_her_traditional_dayyy_%EF%B8%8FBridal_styling-_thebridalboudoircoMakeup-_jjnmll.jpg"),
  },
  {
    id: 21,
    category: "Weddings",
    subCategory: "Special Moments",
    title: "A Quiet Unveiling",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080341/A_quiet_unveiling_of_a_love_meant_to_be_seen_felt_and_remembered._%EF%B8%8FWedding_page_aishab.25Dr_qxuowl.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080341/A_quiet_unveiling_of_a_love_meant_to_be_seen_felt_and_remembered._%EF%B8%8FWedding_page_aishab.25Dr_qxuowl.jpg"),
  },
  {
    id: 22,
    category: "Weddings",
    subCategory: "Special Moments",
    title: "Entrance of the Bride",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080309/Entrance_of_the_bride_Tasnim_Baba_ahmed_Bride-_Tasnim_Baba-AhmedGroom-_Sani_Dangote_JrCouple_ti_pxrci4.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080309/Entrance_of_the_bride_Tasnim_Baba_ahmed_Bride-_Tasnim_Baba-AhmedGroom-_Sani_Dangote_JrCouple_ti_pxrci4.jpg"),
  },

  // ============================
  // WEDDINGS -> TRANSITIONS
  // ============================
  {
    id: 23,
    category: "Weddings",
    subCategory: "Transitions",
    title: "Squad Goals (Asoebi)",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080234/Squad_goals_in_every_stitch_Asoebi_girls_never_looked_this_good_Planner_sola_rahmanAso_lnunls.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080234/Squad_goals_in_every_stitch_Asoebi_girls_never_looked_this_good_Planner_sola_rahmanAso_lnunls.jpg"),
  },
  {
    id: 24,
    category: "Weddings",
    subCategory: "Transitions",
    title: "The Men (Groom)",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080202/The_MEN_For_foreverEngama_shotbyanike_Groom-_izzyenangyBride_-_lifeofbenitaPhotography_imtcdo.mp4"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080202/The_MEN_For_foreverEngama_shotbyanike_Groom-_izzyenangyBride_-_lifeofbenitaPhotography_imtcdo.jpg"),
  },
  {
    id: 25,
    category: "Weddings",
    subCategory: "Transitions",
    title: "Bridal Transition",
    videoUrl: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080172/Bridal_transition_lkkmtl.mov"),
    thumbnail: optimizeCloudinaryUrl("https://res.cloudinary.com/ddk0mcae2/video/upload/v1768080172/Bridal_transition_lkkmtl.jpg"),
  }
];
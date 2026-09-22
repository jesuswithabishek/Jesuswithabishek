/* =========================
   NAVIGATION LINKS
========================= */

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Bible College', href: '#bible-college' },
  { label: 'Outreach', href: '#outreach' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Prayer', href: '#prayer' },
  { label: 'Contact', href: '#contact' },
];


/* =========================
   SOCIAL MEDIA LINKS
========================= */

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/alarming_voice_of_jesus',

  youtube: 'https://www.youtube.com/',

  instagram:
    'https://www.instagram.com/alarming_voice_of_jesus/',
};


/* =========================
   WEBSITE IMAGES
========================= */

import heroImage from './HERO_IMAGE.jpg';
import scriptureImage from './SCRIPTURE_IMAGE.jpg';
import prayerBgImage from './PRAYER_BG_IMAGE.jpg';
import bibleCollegeImage from './BIBLE_COLLEGE_IMAGE.jpg';
import galleryImage from './GALLERY_IMAGE.jpg';
import ministryImage from './MINISTRY_IMAGE.jpg';


/* =========================
   MAIN WEBSITE IMAGES
========================= */

export const HERO_IMAGE = heroImage;

export const SCRIPTURE_IMAGE = scriptureImage;

export const PRAYER_BG_IMAGE = prayerBgImage;

export const OUTREACH_BG_IMAGE = galleryImage;

export const BIBLE_COLLEGE_IMAGE = bibleCollegeImage;


/* =========================
   GALLERY IMAGES
========================= */

export const GALLERY_IMAGES = [
  {
    src: galleryImage,
    alt: 'Gospel meeting with hands raised in worship',
    label: 'Gospel Meetings',
  },

  {
    src: prayerBgImage,
    alt: 'Prayer gathering in church',
    label: 'Prayer Meetings',
  },

  {
    src: bibleCollegeImage,
    alt: 'Bible College graduation ceremony',
    label: 'Bible College',
  },

  {
    src: ministryImage,
    alt: 'Choir singing in worship',
    label: 'Worship',
  },

  {
    src: galleryImage,
    alt: 'Community outreach activities',
    label: 'Outreach',
  },

  {
    src: ministryImage,
    alt: 'Church congregation in ministry service',
    label: 'Ministry Activities',
  },

  {
    src: scriptureImage,
    alt: 'Youth group reading the Bible together',
    label: 'Youth Ministry',
  },

  {
    src: galleryImage,
    alt: 'Children learning together',
    label: 'Children Ministry',
  },
];


/* =========================
   MINISTRY IMAGES
========================= */

export const MINISTRY_IMAGES: Record<string, string> = {
  gospel: galleryImage,

  prayer: prayerBgImage,

  bible: bibleCollegeImage,

  discipleship: scriptureImage,

  youth: scriptureImage,

  children: galleryImage,

  worship: ministryImage,

  outreach: galleryImage,
};
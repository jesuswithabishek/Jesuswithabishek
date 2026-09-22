import galleryImage from './gallery.jpg';
import bibleCollegeImage from './biblecollege.jpg';
import ministryImage from './ministry.jpg';

import andhraImage from './andhra.jpg';
import bibleBatchImage from './biblebatch.jpg';
import chennaiImage from './chennai.jpg';
import veppambattuImage from './veppambattu.jpg';
import childrenImage from './childrens.jpg';
import communityImage from './community.jpg';
import communityOutreachImage from './outreach.jpg';
import worshipImage from './worship.jpg';
import youthImage from './youth.png';

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

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/alarming_voice_of_jesus',
  youtube: 'https://youtu.be/PZU6CNzxSXM?si=3vy_P0VGaadVzc35',
  instagram: 'https://www.instagram.com/alarming_voice_of_jesus/',
};

export const HERO_IMAGE = galleryImage;

export const SCRIPTURE_IMAGE = galleryImage;

export const PRAYER_BG_IMAGE = galleryImage;

export const OUTREACH_BG_IMAGE = communityOutreachImage;

export const BIBLE_COLLEGE_IMAGE = bibleCollegeImage;

export const GALLERY_IMAGES = [
  {
    src: andhraImage,
    alt: 'Andhra Childrens',
    label: 'Andhra Childrens',
  },
  {
    src: bibleBatchImage,
    alt: 'Bible College Second Batch',
    label: 'Bible College Second Batch',
  },
  {
    src: galleryImage,
    alt: 'Bible Teaching',
    label: 'Bible Teaching',
  },
  {
    src: chennaiImage,
    alt: 'Chennai Childrens',
    label: 'Chennai Childrens',
  },
  {
    src: veppambattuImage,
    alt: 'Childrens Veppambattu',
    label: 'Childrens Veppambattu',
  },
  {
    src: childrenImage,
    alt: 'Childrens',
    label: 'Childrens',
  },
  {
    src: communityOutreachImage,
    alt: 'Community Outreach',
    label: 'Community Outreach',
  },
  {
    src: communityImage,
    alt: 'Community Reachs',
    label: 'Community Reachs',
  },
  {
    src: galleryImage,
    alt: 'Gallery Image',
    label: 'Gallery Image',
  },
  {
    src: worshipImage,
    alt: 'Worship',
    label: 'Worship',
  },
  {
    src: youthImage,
    alt: 'Youth Meeting',
    label: 'Youth Meeting',
  },
];

export const MINISTRY_IMAGES: Record<string, string> = {
  gospel: galleryImage,
  prayer: galleryImage,
  bible: bibleCollegeImage,
  discipleship: galleryImage,
  youth: youthImage,
  children: childrenImage,
  worship: worshipImage,
  outreach: communityOutreachImage,
};
/* ============================================================
   EntroLabs — Projects Data
   24 project case studies with categories and descriptions
   ============================================================ */

// Import project images
import swmRfid from '../assets/projects/02a5caffe35e7c07d3a809fa7bf93407.png';
import covidApp from '../assets/projects/0f4839fa0a5977e45fe0963a16921059.png';
import drCare from '../assets/projects/109213c7f55948ad7955cfcaab1e004d.png';
import greenMyStreet from '../assets/projects/147dd5880a0c44413ec55e1da64ba3db.png';
import gvmcLights from '../assets/projects/1a2a5218d518536a4cd7f71a3177f414.png';
import paintMyStreet from '../assets/projects/1e5a01bfd96251192010be6519745448.png';
import uda from '../assets/projects/2342fb31542b4a467bc99757d427e3fa.jpg';
import supervision from '../assets/projects/278a8764fbe8d565dbc369260be45ca8.jpg';
import ddns from '../assets/projects/2bcca58ad9518e6954a7c013f1815212.png';
import lms from '../assets/projects/2d8d5f709e6ddb5657c6073e87d0e8db.png';
import templeAccommodation from '../assets/projects/2e2401d014055f2cb14670e5137f3187.png';
import villageLms from '../assets/projects/4080f141c6eeb50fc431bfaaf95c41ee.jpg';
import wdsc from '../assets/projects/452d65350934b60f8cb39847fa3880d2.jpg';
import sdc from '../assets/projects/4606cbfc6da84d7ca21b4d0877628a59.png';
import tflQa from '../assets/projects/52c9bd75df30ade32dc98b6444036374.png';
import srkrAlumni from '../assets/projects/53787fa75a89a2984fb0f20dda4f36a6.jpg';
import mbc from '../assets/projects/54d42354b484924c82635c35d25ebfa7.png';
import rizee from '../assets/projects/57ce0c2600e2f25eedcb7676566e301c.jpg';
import whatsappChatbot from '../assets/projects/5b3cd4c1756356e8adc642ea40fe7e37.png';
import mckgc from '../assets/projects/5b6a361d9c54602c080e9c377c055cf1.png';
import apCfms from '../assets/projects/62d3f047381f16c5735e336fb8e5732e.jpg';
import apPolice from '../assets/projects/62f285e2207ea2703939ac1627ec08d0.png';
import igotKarmayogi from '../assets/projects/63abc90d2a00d4d7b14fc13141749a9f.png';
import govService from '../assets/projects/731ebbe86431a83eacbb2a583c91bc6c.png';

export const PROJECTS = [
  {
    id: 1,
    title: 'SWM RFID',
    description: 'An IoT-Driven Garbage Collection Project',
    category: 'Smart City',
    image: swmRfid,
    tags: ['IoT', 'Smart City', 'RFID'],
  },
  {
    id: 2,
    title: 'AP COVID-19 APP AND DASHBOARD',
    description: 'Covid app - Gateway to COVID-19 Care Services',
    category: 'Healthcare',
    image: covidApp,
    tags: ['Healthcare', 'Government', 'Mobile App'],
  },
  {
    id: 3,
    title: 'Dr Care',
    description: 'Digital Healthcare Ecosystem for Citizens of Andhra Pradesh',
    category: 'Healthcare',
    image: drCare,
    tags: ['Healthcare', 'Government', 'E-Governance'],
  },
  {
    id: 4,
    title: 'Green My Street',
    description: 'Mobile Solution that plays a crucial part in Eco Vizag campaign',
    category: 'Smart City',
    image: greenMyStreet,
    tags: ['Smart City', 'Environment', 'Mobile App'],
  },
  {
    id: 5,
    title: 'GVMC Street Lights',
    description: 'Application that keeps tabs on the real-time status of electric poles managed by GVMC',
    category: 'Smart City',
    image: gvmcLights,
    tags: ['Smart City', 'IoT', 'Government'],
  },
  {
    id: 6,
    title: 'Paint My Street - GVMC Vizag',
    description: 'Exclusive mobile app designed for the GVMC secretariats, aimed to turn the city into an awe-inspiring canvas of creativity',
    category: 'Smart City',
    image: paintMyStreet,
    tags: ['Smart City', 'Mobile App', 'Government'],
  },
  {
    id: 7,
    title: 'Urban Development Authority (UDA) Application',
    description: 'Web application developed to revolutionize the building plan approval process',
    category: 'Government',
    image: uda,
    tags: ['E-Governance', 'Government', 'Web App'],
  },
  {
    id: 8,
    title: 'Supervision App - WDCW',
    description: 'Supervision app developed for easy monitoring and enhancing of services at Anganwadi Centers',
    category: 'Government',
    image: supervision,
    tags: ['Government', 'Mobile App', 'Monitoring'],
  },
  {
    id: 9,
    title: 'DDNS - Dhoopa Deepa Naivedyam Scheme For Temples',
    description: 'Application for effortless management of temple data',
    category: 'Government',
    image: ddns,
    tags: ['Government', 'Web App', 'Management'],
  },
  {
    id: 10,
    title: 'LMS Application',
    description: 'Application for effortless management of temple lands',
    category: 'Government',
    image: lms,
    tags: ['Government', 'Web App', 'Land Management'],
  },
  {
    id: 11,
    title: 'Temple Accommodation application',
    description: 'User-friendly application developed to streamline the way lodging is handled at temples',
    category: 'Government',
    image: templeAccommodation,
    tags: ['Government', 'Web App', 'Booking'],
  },
  {
    id: 12,
    title: 'The Village LMS',
    description: 'Lead management System for The Village Project by Phoenix Group in Chennai',
    category: 'Enterprise',
    image: villageLms,
    tags: ['Enterprise', 'CRM', 'Real Estate'],
  },
  {
    id: 13,
    title: 'WDSC - Welfare of Disabled',
    description: 'Application designed for Disabled and Senior Citizen Community to avail various schemes/services',
    category: 'Government',
    image: wdsc,
    tags: ['Government', 'Social Welfare', 'Web App'],
  },
  {
    id: 14,
    title: 'SDC - Skill Development Corporation for PWD',
    description: 'Bridges Candidates/Employers/Training Centers',
    category: 'Government',
    image: sdc,
    tags: ['Government', 'Education', 'Employment'],
  },
  {
    id: 15,
    title: 'TFL-QA',
    description: 'Complete product test reports management solution system',
    category: 'Enterprise',
    image: tflQa,
    tags: ['Enterprise', 'QA', 'Testing'],
  },
  {
    id: 16,
    title: 'SRKR Alumni',
    description: 'App intended to connect all 18000 SRKREC old students across the globe',
    category: 'Education',
    image: srkrAlumni,
    tags: ['Education', 'Mobile App', 'Social Network'],
  },
  {
    id: 17,
    title: 'MBC (Most Backward Classes) Portal',
    description: 'Used by citizens of Most Backward Classes to apply to various schemes',
    category: 'Government',
    image: mbc,
    tags: ['Government', 'Social Welfare', 'Portal'],
  },
  {
    id: 18,
    title: 'Rizee',
    description: 'Online Learning Platform for NEET',
    category: 'Education',
    image: rizee,
    tags: ['Education', 'E-Learning', 'Web App'],
  },
  {
    id: 19,
    title: 'Whatsapp Chatbot for Covid Helpline - Andhra Pradesh',
    description: 'Whatsapp Chatbot service for citizens to report grievances regarding Covid-19 Services',
    category: 'Healthcare',
    image: whatsappChatbot,
    tags: ['Healthcare', 'Government', 'Chatbot'],
  },
  {
    id: 20,
    title: 'MCKGC',
    description: 'Mission for Clean Krishna and Godavari Canals website',
    category: 'Government',
    image: mckgc,
    tags: ['Government', 'Environment', 'Web App'],
  },
  {
    id: 21,
    title: 'AP CFMS',
    description: 'Comprehensive Financial Management System for Andhra Pradesh Government',
    category: 'Government',
    image: apCfms,
    tags: ['Government', 'Finance', 'E-Governance'],
  },
  {
    id: 22,
    title: 'AP Police Services',
    description: 'Integrated police services management platform for Andhra Pradesh',
    category: 'Government',
    image: apPolice,
    tags: ['Government', 'Law Enforcement', 'Web App'],
  },
  {
    id: 23,
    title: 'iGOT Karmayogi',
    description: 'Integrated Government Online Training platform for capacity building',
    category: 'Government',
    image: igotKarmayogi,
    tags: ['Government', 'Education', 'Training'],
  },
  {
    id: 24,
    title: 'Government Service Portal',
    description: 'Unified portal for citizens to access various government services online',
    category: 'Government',
    image: govService,
    tags: ['Government', 'E-Governance', 'Portal'],
  },
];

export const PROJECT_CATEGORIES = [
  'All',
  'Government',
  'Healthcare',
  'Smart City',
  'Education',
  'Enterprise',
];

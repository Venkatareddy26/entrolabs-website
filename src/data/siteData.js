/* ============================================================
   EntroLabs — Centralized site data
   All static copy, stats, links, etc. in one file.
   ============================================================ */

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  {
    label: 'Technologies',
    path: '/technologies',
    children: [
      { label: 'Mobile App Development', path: '/technologies#mobile' },
      { label: 'Web Application Development', path: '/technologies#web' },
      { label: 'API Development', path: '/technologies#api' },
    ],
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact', isCTA: true },
];

export const HERO = {
  badge: 'Enterprise IT · Hyderabad · Since 2015',
  headline: ['We Help Bridging', 'Businesses & Industries', 'with Our', 'Software Technologies', 'and Innovations.'],
  lead: 'Next-generation digital capabilities for government, education, and enterprise — from e-Governance platforms to mobility, POS, and IoT product engineering.',
  cta: { primary: 'Start a Project', secondary: 'Explore Services' },
  ticker: [
    'Drive Business Value',
    'Creating Live Enterprises',
    'Tactical Agility at Scale',
    'Dynamic Customer Engagement',
    'Accelerate Process Optimization',
    'De-scaling Organizational Complexity',
  ],
};

export const ABOUT = {
  label: 'EntroLabs: An Overview',
  title: 'Transforming enterprises with next-gen digital capabilities',
  paragraphs: [
    'Entro Labs transforms business enterprises with next-generation digital capabilities. We offer end-to-end support on innovative, competitive digital solutions that help businesses navigate new possibilities and achieve higher quality and operational efficiency.',
    'We work as your dedicated software services partner. Our IT competencies cover Enterprise Application Services, Software Product Engineering, Mobility Solutions, Business Process Services, and industry-specific solutions.',
  ],
  stat: { value: '250+', label: 'Projects delivered' },
  image: 'https://entrolabs.com/assets/images/about_image.jpg',
};

export const SOLUTIONS = [
  {
    title: 'E-Governance',
    desc: 'Multi-level hierarchy e-Governance systems in compliance with existing government processes and security standards.',
    image: 'https://entrolabs.com/assets/dev/web1.png',
    size: 'large',
  },
  {
    title: 'E-Ticketing',
    desc: 'Web portal and POS ticketing applications with payment gateway integration and real-time reporting.',
    image: 'https://entrolabs.com/assets/dev/eticket1.png',
    size: 'small',
  },
  {
    title: 'POS Solutions',
    desc: 'Customized POS solution development with device assistance, inventory management, and support.',
    image: 'https://entrolabs.com/assets/dev/pos2.png',
    size: 'small',
  },
  {
    title: 'QA Automation',
    desc: 'Industry-grade quality assurance and testing process automation applications for enterprise software.',
    image: 'https://entrolabs.com/assets/dev/qa2.png',
    size: 'small',
  },
  {
    title: 'SIS Software',
    desc: 'Student information systems and education management platforms for institutions of all sizes.',
    image: 'https://entrolabs.com/assets/dev/sis2.png',
    size: 'small',
  },
  {
    title: 'IoT Product Engineering',
    desc: 'Custom IoT-based product development, wearables integration, and embedded systems support.',
    image: 'https://entrolabs.com/assets/dev/iot1.png',
    size: 'large',
  },
];

export const SERVICES = [
  {
    title: 'Enterprise Application Services',
    desc: 'Responsive, engaging web experiences engineered for startups and large enterprises. We curate your design and delivery journey from ideation to launch.',
    icon: 'Monitor',
  },
  {
    title: 'Software Product Engineering',
    desc: 'High technical standards and exceptional customer service, backed by years of flawless development that make EntroLabs a trusted engineering partner.',
    icon: 'Layers',
  },
  {
    title: 'Mobility Solutions',
    desc: 'iOS, Android, and cross-platform mobile applications designed for modern traffic patterns, enterprise mobility, and consumer-facing experiences.',
    icon: 'Smartphone',
  },
  {
    title: 'Business Process Services',
    desc: 'Transform value-driven concepts into diligent solutions with modern software techniques focused on accuracy, efficiency, and regulatory compliance.',
    icon: 'Box',
  },
  {
    title: 'Industry & Platform Solutions',
    desc: 'Optimized performance, secure hosting, and application maintenance to strengthen your web presence across industry-specific, mission-critical platforms.',
    icon: 'Building2',
  },
];

export const STATS = [
  { value: 7, suffix: '+', label: 'Years of experience', icon: 'Calendar' },
  { value: 250, suffix: '+', label: 'Projects delivered', icon: 'CheckCircle' },
  { value: 60, suffix: '+', label: 'Happy clients', icon: 'Users' },
  { value: 90, suffix: '+', label: 'Mobile apps built', icon: 'Smartphone' },
];

export const TECHNOLOGIES = [
  {
    title: 'Mobile App Development',
    overviewTitle: 'Mobile App Development Overview',
    overviewDesc: 'We live in a mobile-first world. Here, your customers and your staff have high expectations of each mobile app. The movement is towards finding greater and efficient ways to engage with your brand. Entro Labs helps in building mobile apps that meet the needs of customers and staff with efficiency and far lesser turnaround timelines.',
    image: 'https://entrolabs.com/assets/images/technologies/mobile-application-development-technology.jpg',
    items: [
      { name: 'Android Java/Kotlin Development', desc: 'Java and Kotlin programming for native high-performance apps.' },
      { name: 'Flutter', desc: 'Cross-platform app development for Android, iOS, Windows, and web from a single codebase.' },
      { name: 'Hybrid Apps Development', desc: 'React Native programming, HTML5 mobile app development, and Progressive Web Apps (PWA) using React JS.' },
      { name: 'Mobile SDK Integrations', desc: 'Facial Recognition Integrations, Bluetooth Printers, Barcode Scanners, USB/Bluetooth device integrations, and POS Integrations.' }
    ]
  },
  {
    title: 'Web Application Development',
    overviewTitle: 'Web Application Development Overview',
    overviewDesc: 'Entro Labs offers reliable, innovative and value-driven web application development services. We design, build, and evolve web-based software. We custom develop impactful, full-scale and next-gen web apps. Each web app developed is totally business-specific and customer-centric. We design and develop web applications as per the business needs of our clients.',
    image: 'https://entrolabs.com/assets/images/technologies/web-application-development-technolgy.jpg',
    items: [
      { name: 'E-Commerce Applications', desc: 'Help companies update product listings, manage payments, and handle B2B, B2C, C2C, or C2B transactions. Features reporting tools, email marketing, payment options, and promotion/discount code tools.' },
      { name: 'CMS Web Applications', desc: 'Robust and dynamic content management systems allowing clients to easily create, edit, and publish content saved as accessible databases.' },
      { name: 'React JS', desc: 'Open-source JavaScript library leveraged to build user interfaces specifically for single-page applications and reusable UI components.' },
      { name: 'Next JS', desc: 'React framework used to build server-side rendering and static web applications with rich features.' },
      { name: 'PHP Web Development', desc: 'Scripting for making dynamic interactive web pages and seamless database interaction.' },
      { name: 'MERN Stack', desc: 'Full-stack JavaScript development comprising MongoDB, Express, React, and Node.js for master web applications.' },
      { name: 'Javascript / HTML / CSS', desc: 'Fundamental web tech leveraged to achieve faster and easier development of full-stack web applications.' },
      { name: 'Web SDK Integrations', desc: 'WebRTC, Web Sockets Programming, Digital Document Signing, Aadhar Biometric / IRIS integrations, Barcode / Thermal Printers / Bluetooth devices integration, and Payment gateway / POS API integrations.' },
      { name: 'Backend Development', desc: 'Node JS (Express, GraphQL), PHP, AWS/GCP Cloud services, MQTT, and Docker Containers.' },
      { name: 'Data Visualization Tools', desc: 'Interactive dashboards and reporting using Tableau and Apache Superset.' }
    ]
  },
  {
    title: 'Services & API Development',
    overviewTitle: 'API Development and Integration Services Overview',
    overviewDesc: 'Entro Labs puts the right and custom API interfaces in place. Through our API development services you can eliminate silos and completely transform your business model with a data-driven, and real-time strategy. We will help you to achieve information flows across your business better. This means to create faster decision-making, more accurate forecasting and the ability to jump onto opportunities faster. Significantly, the API (Application Programming Interface) gives programmers the ability to connect their custom applications with external systems either in network or cloud. This helps speed up development time and cut costs. Entro Labs is the system integration partner of many PaaS, SaaS, and Software solutions providers. We work hand-in-hand with these providers to develop and integrate a range of APIs for B2B and consumer-facing applications.',
    image: 'https://entrolabs.com/assets/images/technologies/api-development-services.jpg',
    items: [
      { name: 'Node JS', desc: 'Open source server environment allowing running JavaScript on the server. Designed with real-time, push-based architecture for web services.' },
      { name: 'PHP', desc: 'Widely-used, free, and efficient server scripting language for making dynamic interactive web pages.' },
      { name: 'GraphQL', desc: 'Declarative, self-documenting data query language enabling apps to fetch precise data from servers.' },
      { name: 'AWS', desc: 'Amazon Web Services offering cloud computing servers, storage, networking, remote computing, email, mobile development, and security (IaaS, PaaS, SaaS).' },
      { name: 'Google APIs', desc: 'Allowing direct communications and integrations with Google Services.' },
      { name: 'Cloud Telephony APIs', desc: 'Reliable cloud communications and best-in-class APIs for voice, messages, and user verification without additional infrastructure.' },
      { name: 'WhatsApp', desc: 'Verified WhatsApp Business Solution Provider (BSP) offering developer-friendly APIs directly or on-premise in your own cloud environment.' },
      { name: 'Teleconferencing', desc: 'Integration of secure video calling APIs and SDKs to add video calling capabilities to existing or new apps.' },
      { name: 'WebRTC', desc: 'High quality video call experience on any browser and device with pre-built UIs or custom layout APIs.' },
      { name: 'Databases', desc: 'Robust data storage systems using MySQL, MongoDB, Postgres, and Apache Druid.' }
    ]
  }
];

export const TECH_STACK = [
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Swift', category: 'Mobile' },
  { name: 'Kotlin', category: 'Mobile' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: '.NET', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
];

export const CLIENTS = [
  { name: 'AP Govt', logo: 'https://entrolabs.com/admin/files/AP-GOVT.png' },
  { name: 'TS Govt', logo: 'https://entrolabs.com/admin/files/TS-GOVT.png' },
  { name: 'NHM', logo: 'https://entrolabs.com/admin/files/NationalHealthMissionlogo.png' },
  { name: 'APMSIDC', logo: 'https://entrolabs.com/admin/files/APMSIDC.png' },
  { name: 'APSDM', logo: 'https://entrolabs.com/admin/files/APSDM.png' },
  { name: 'Swatch Andhra', logo: 'https://entrolabs.com/admin/files/SwatchAndhra.png' },
  { name: 'Panchayath Raj', logo: 'https://entrolabs.com/admin/files/PANCHAYATHRAJ.png' },
  { name: 'Godhavari Gas', logo: 'https://entrolabs.com/admin/files/GODHAVARI-GAS.png' },
  { name: 'Phoenix', logo: 'https://entrolabs.com/admin/files/Phoenix.png' },
  { name: 'Pine Labs', logo: 'https://entrolabs.com/admin/files/Pinelabs.png' },
  { name: 'Ezetap', logo: 'https://entrolabs.com/admin/files/Ezetap.png' },
  { name: 'Celekt', logo: 'https://entrolabs.com/admin/files/CELEKTmobiles.png' },
  { name: 'NTT Data', logo: 'https://entrolabs.com/admin/files/NTTdatalogo.png' },
  { name: 'SRKR', logo: 'https://entrolabs.com/admin/files/SRKRengcollege.png' },
  { name: 'YSR Arogyasree', logo: 'https://entrolabs.com/admin/files/YSRarogyaSree.png' },
];

export const WHY_US = {
  label: 'Why EntroLabs',
  title: 'Why choose EntroLabs?',
  paragraphs: [
    'Entrolabs bridges the gap for your businesses and industries. Our innovative software simplifies tasks using advanced technology — delivered by a skilled team with years of experience focused on client convenience.',
    'We prefer stable, long-term client commitment. The majority of our clients have been with us since the company was founded. Our collaborative approach tackles industry challenges while upholding core values.',
  ],
  checks: [
    'Quality-first project delivery',
    'Flexible, agile, affordable IT services',
    'Industry-specific technology solutions',
    'Long-term partnership approach',
    'End-to-end development lifecycle',
  ],
  highlight: "Choose EntroLabs to streamline your business and industry needs. Let's work hand in hand to overcome obstacles and achieve success.",
};

export const PROCESS_STEPS = [
  { num: '01', title: 'Discovery', desc: 'We understand your business, audience, and goals through deep research and stakeholder interviews.' },
  { num: '02', title: 'Strategy & Design', desc: 'We craft the architecture, user flows, and high-fidelity designs that align with your vision.' },
  { num: '03', title: 'Development', desc: 'Our engineers build scalable, performant software using modern frameworks and best practices.' },
  { num: '04', title: 'Launch & Support', desc: 'We deploy, monitor, and continuously improve your product with dedicated support.' },
];

export const TEAM = [
  { name: 'Leadership', count: '5+', desc: 'Senior leaders with 15+ years in enterprise IT' },
  { name: 'Engineers', count: '40+', desc: 'Full-stack, mobile, and cloud specialists' },
  { name: 'Designers', count: '8+', desc: 'UX/UI experts who create delightful experiences' },
  { name: 'QA & DevOps', count: '10+', desc: 'Quality assurance and infrastructure engineers' },
];

export const CAREERS_BENEFITS = [
  { title: 'Flexible Work', desc: 'Hybrid and remote options for a balanced lifestyle.', icon: 'Home' },
  { title: 'Growth Path', desc: 'Clear career progression and mentorship programs.', icon: 'TrendingUp' },
  { title: 'Health Benefits', desc: 'Comprehensive health insurance for you and family.', icon: 'Heart' },
  { title: 'Learning Budget', desc: 'Annual budget for courses, conferences, and certifications.', icon: 'BookOpen' },
  { title: 'Team Events', desc: 'Regular team outings, hackathons, and celebrations.', icon: 'PartyPopper' },
  { title: 'Competitive Pay', desc: 'Market-leading salaries with performance bonuses.', icon: 'DollarSign' },
];

export const OPEN_POSITIONS = [
  { title: 'Sr. PHP Developer', dept: 'Engineering', type: 'Full-time', location: 'Vijayawada' },
  { title: 'Android Developer', dept: 'Engineering', type: 'Full-time', location: 'Vijayawada' },
];

export const CONTACT_INFO = {
  email: 'support@entrolabs.com',
  phone: '+91-4042016637',
  address: 'First Floor, Plot No:479, Road No:10, Kakatiya Hills, Madhapur, Hyderabad, Telangana 500081',
};

export const SOCIAL_LINKS = [
  { label: 'Facebook', url: 'https://www.facebook.com/entrolabs' },
  { label: 'Instagram', url: 'https://www.instagram.com/entrolabs/' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/entrolabs/' },
  { label: 'YouTube', url: 'https://youtube.com/@91-Care' },
];

export const FOOTER = {
  tagline: 'We expertise in building enterprise-scale sophisticated technology solutions for diverse business processes.',
  copyright: '© 2016 – 2026 EntroLabs IT Solutions Pvt Ltd. All Rights Reserved.',
};

export const FAQ = [
  {
    q: 'What industries does EntroLabs serve?',
    a: 'We serve government (e-Governance, public health), education (SIS, LMS), retail & hospitality (POS, e-Ticketing), healthcare, and enterprise sectors across India and globally.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Timelines vary by scope — a mobile MVP takes 8-12 weeks, while a full enterprise platform may take 4-6 months. We provide detailed timelines during the discovery phase.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes, we offer dedicated post-launch support packages including bug fixes, performance monitoring, feature updates, and 24/7 critical issue resolution.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'Our core stack includes React, Angular, Flutter, React Native, Node.js, Java, Python, .NET, AWS, Azure, and modern DevOps tooling. We choose the right tech for each project.',
  },
  {
    q: 'How do you ensure project quality?',
    a: 'We follow agile methodologies with CI/CD pipelines, automated testing, code reviews, and dedicated QA engineers on every project. Quality is built into our process, not bolted on.',
  },
];

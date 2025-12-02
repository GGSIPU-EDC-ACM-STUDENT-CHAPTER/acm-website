export interface EventData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  date: string;
  endDate?: string;
  year: string;
  category: string;
  categoryColor: string;
  description: string;
  fullDescription: string;
  venue: string;
  venueAddress?: string;
  participants?: string;
  organizers?: string[];
  highlights: string[];
  prizes?: {
    position: string;
    prize: string;
    emoji: string;
  }[];
  gallery?: string[];
  tags: string[];
  links?: {
    label: string;
    url: string;
  }[];
  schedule?: {
    time: string;
    activity: string;
  }[];
  speakers?: {
    name: string;
    role: string;
    company?: string;
  }[];
  isUpcoming?: boolean;
  isFeatured?: boolean;
  registrationUrl?: string;
  registrationDeadline?: string;
}

export const eventsData: EventData[] = [
  {
    id: "1",
    slug: "75-days-dsa-challenge",
    title: "75 Days DSA Challenge",
    subtitle: "New Year 2026 Edition",
    emoji: "🔥",
    date: "January 1, 2026",
    endDate: "March 15, 2026",
    year: "2026",
    category: "Challenge",
    categoryColor: "#FF6B6B",
    description: "Start 2026 with consistency, logic, and problem-solving power.",
    fullDescription: "The 75 Days DSA Challenge by GGSIPU EDC ACM Student Chapter is a structured coding initiative designed to help students strengthen their Data Structures and Algorithms (DSA) skills through daily problem-solving. Whether you're a beginner or looking to sharpen your skills for placements and competitive programming, this challenge is for you.\n\nThis isn't just about solving problems—it's about building discipline, creating a habit, and becoming part of a community that pushes each other to be better every single day. With curated problem sets, weekly reviews, and a supportive Discord community, you'll never feel alone in this journey.",
    venue: "Online (ACM Portal + LeetCode)",
    participants: "Expected 300+",
    organizers: ["Arsh Singh", "Sheelendra Kumar", "DSA Team"],
    highlights: [
      "✦ Master fundamental and advanced DSA concepts",
      "✦ Daily tracking and live leaderboard",
      "✦ Peer learning through ACM Discord",
      "✦ Weekly review meetups for doubt resolution",
      "✦ Completion certificate for full 75-day streak",
      "✦ Special badges for top performers",
    ],
    prizes: [
      { position: "1st Place", prize: "Premium LeetCode Subscription + Swag Kit", emoji: "🥇" },
      { position: "2nd Place", prize: "6-Month LeetCode Premium", emoji: "🥈" },
      { position: "3rd Place", prize: "3-Month LeetCode Premium", emoji: "🥉" },
      { position: "Consistency Award", prize: "ACM Exclusive Merchandise", emoji: "⭐" },
    ],
    tags: ["DSA", "Competitive Programming", "Algorithms", "Data Structures"],
    links: [
      { label: "LeetCode Group", url: "#" },
      { label: "Discord Server", url: "#" },
      { label: "Problem Sheet", url: "#" },
    ],
    schedule: [
      { time: "Daily", activity: "Solve 1-2 DSA problems from curated list" },
      { time: "Every Sunday", activity: "Weekly review session & doubt resolution" },
      { time: "Bi-Weekly", activity: "Mock contests for practice" },
      { time: "Final Week", activity: "Grand finale contest & awards" },
    ],
    isUpcoming: true,
    isFeatured: true,
    registrationUrl: "#",
    registrationDeadline: "December 25, 2025",
  },
  {
    id: "2",
    slug: "faang-weekend-nvidia",
    title: "FAANG Weekend EP3 — NVIDIA",
    subtitle: "Inside the GPU Revolution",
    emoji: "💚",
    date: "November 22, 2025",
    year: "2025",
    category: "Webinar",
    categoryColor: "#76B900",
    description: "Exclusive session with NVIDIA professionals exploring GPU computing and AI acceleration.",
    fullDescription: "The third episode of our acclaimed FAANG Weekend series brought us face-to-face with professionals from NVIDIA—the company that's literally powering the AI revolution. From gaming GPUs to data center accelerators, NVIDIA's impact on technology is unparalleled.\n\nOur speakers shared insights into what it takes to work at NVIDIA, the exciting projects they're building, and how students can prepare for careers in GPU computing and AI infrastructure.",
    venue: "Online (Google Meet)",
    participants: "200+",
    organizers: ["Career Development Cell", "ACM Core Team"],
    highlights: [
      "✦ Deep dive into NVIDIA's AI and GPU ecosystem",
      "✦ Interview preparation strategies for hardware companies",
      "✦ Live Q&A with NVIDIA engineers",
      "✦ Insights into CUDA programming careers",
      "✦ Networking opportunities with industry professionals",
    ],
    tags: ["Career", "AI", "GPU Computing", "NVIDIA", "Webinar"],
    speakers: [
      { name: "Guest Speaker", role: "Senior Engineer", company: "NVIDIA" },
    ],
    links: [
      { label: "Recording", url: "#" },
      { label: "Resources Shared", url: "#" },
    ],
    isFeatured: true,
  },
  {
    id: "3",
    slug: "codecatalyst-0x6",
    title: "ACM CodeCatalyst 0x6",
    subtitle: "6 Days of Intensive Learning",
    emoji: "⚡",
    date: "October 29 - November 3, 2025",
    year: "2025",
    category: "Bootcamp",
    categoryColor: "#FF6B6B",
    description: "An intensive 6-day bootcamp covering DSA fundamentals, ML basics, and hands-on projects.",
    fullDescription: "CodeCatalyst 0x6 was our flagship bootcamp event—six days of intensive learning, coding, and building. From data structures to machine learning, participants went through a transformative journey guided by industry mentors and experienced seniors.\n\nThe bootcamp featured morning theory sessions, afternoon coding challenges, and evening project building time. Participants formed teams and built real projects that they could showcase in their portfolios.",
    venue: "GGSIPU EDC Campus",
    venueAddress: "Maharaja Surajmal Institute of Technology, New Delhi",
    participants: "150+",
    organizers: ["Technical Team", "Workshop Coordinators"],
    highlights: [
      "✦ 6 days of intensive hands-on training",
      "✦ DSA fundamentals with practice problems",
      "✦ Introduction to Machine Learning",
      "✦ Project building sessions",
      "✦ Industry mentor guidance",
      "✦ Certificate of completion",
    ],
    schedule: [
      { time: "Day 1-2", activity: "DSA Fundamentals: Arrays, Strings, Linked Lists" },
      { time: "Day 3-4", activity: "Advanced DSA: Trees, Graphs, Dynamic Programming" },
      { time: "Day 5", activity: "ML Basics: Python for ML, Intro to Scikit-learn" },
      { time: "Day 6", activity: "Project Day: Build & Present" },
    ],
    tags: ["DSA", "ML", "Workshop", "Bootcamp", "Project Building"],
    links: [
      { label: "Session Recordings", url: "#" },
      { label: "GitHub Resources", url: "#" },
    ],
    isFeatured: true,
  },
  {
    id: "4",
    slug: "silicon-quest-animeverse",
    title: "Silicon Quest: ANIMEVERSE",
    subtitle: "Where Anime Meets Innovation",
    emoji: "🎌",
    date: "October 5-7, 2025",
    year: "2025",
    category: "Hackathon",
    categoryColor: "#FF69B4",
    description: "A creative tech hackathon merging anime culture with cutting-edge innovation.",
    fullDescription: "Silicon Quest: ANIMEVERSE was not your typical hackathon. We challenged participants to build projects inspired by their favorite anime universes—from Naruto's ninja tools to Attack on Titan's ODM gear simulations.\n\nThis 48-hour hackathon saw incredible creativity as teams combined their love for anime with technical skills to build unique projects. The event featured cosplay corners, anime screenings during breaks, and special anime-themed swag for winners.",
    venue: "GGSIPU EDC Campus",
    venueAddress: "Maharaja Surajmal Institute of Technology, New Delhi",
    participants: "120+",
    organizers: ["Creative Team", "Technical Team", "Event Management"],
    highlights: [
      "✦ 48-hour anime-themed hackathon",
      "✦ Unique anime-inspired project themes",
      "✦ Cosplay corners and anime screenings",
      "✦ Industry judges and mentors",
      "✦ Anime merchandise prizes",
      "✦ Best Cosplay awards",
    ],
    prizes: [
      { position: "1st Place", prize: "₹15,000 + Anime Collectibles", emoji: "🏆" },
      { position: "2nd Place", prize: "₹10,000 + Manga Collection", emoji: "🥈" },
      { position: "3rd Place", prize: "₹5,000 + Figurines", emoji: "🥉" },
      { position: "Best Theme", prize: "Limited Edition Merch", emoji: "🎌" },
    ],
    tags: ["Hackathon", "Creative", "Anime", "Innovation", "48-Hours"],
    links: [
      { label: "Project Showcase", url: "#" },
      { label: "Photo Gallery", url: "#" },
    ],
  },
  {
    id: "5",
    slug: "hela-crossroads",
    title: "HeLa Crossroads",
    subtitle: "Navigating the Web3 Frontier",
    emoji: "🌐",
    date: "September 26, 2025",
    year: "2025",
    category: "Workshop",
    categoryColor: "#9B59B6",
    description: "Deep dive into Web3 and blockchain technology with hands-on smart contract development.",
    fullDescription: "HeLa Crossroads marked our entry into the Web3 space. This comprehensive workshop covered everything from blockchain fundamentals to building and deploying your first smart contract.\n\nParticipants learned about decentralized applications, tokenomics, and the future of the internet. The hands-on sessions included writing Solidity code, deploying on testnets, and understanding DeFi protocols.",
    venue: "GGSIPU EDC Auditorium",
    venueAddress: "Maharaja Surajmal Institute of Technology, New Delhi",
    participants: "100+",
    organizers: ["Blockchain SIG", "Technical Team"],
    highlights: [
      "✦ Blockchain fundamentals explained",
      "✦ Hands-on smart contract development",
      "✦ Solidity programming workshop",
      "✦ Deploy your first contract on testnet",
      "✦ Understanding DeFi and DAOs",
      "✦ NFT creation walkthrough",
    ],
    speakers: [
      { name: "Blockchain Expert", role: "Smart Contract Developer", company: "Web3 Startup" },
    ],
    tags: ["Web3", "Blockchain", "DApps", "Solidity", "Workshop"],
    links: [
      { label: "Workshop Materials", url: "#" },
      { label: "Code Repository", url: "#" },
    ],
  },
  {
    id: "6",
    slug: "faang-weekend-meta",
    title: "FAANG Weekend EP2 — Meta",
    subtitle: "Building for Billions",
    emoji: "💙",
    date: "September 21, 2025",
    year: "2025",
    category: "Mentorship",
    categoryColor: "#0668E1",
    description: "Mentorship session with Meta engineers on system design and interview preparation.",
    fullDescription: "Episode 2 of FAANG Weekend brought us insights from Meta—the company connecting billions of people worldwide. Our Meta guests shared their experiences building products at massive scale and what it takes to crack the Meta interview.\n\nThe session covered system design principles, behavioral interview tips, and the unique culture at Meta. Attendees got to ask direct questions about life at Meta and received personalized career advice.",
    venue: "Online (Google Meet)",
    participants: "180+",
    organizers: ["Career Development Cell", "ACM Core Team"],
    highlights: [
      "✦ System design principles at scale",
      "✦ Meta interview preparation guide",
      "✦ Behavioral interview mastery",
      "✦ Live mock interview demonstration",
      "✦ Q&A with Meta engineers",
      "✦ Resume review tips",
    ],
    speakers: [
      { name: "Meta Engineer", role: "Software Engineer", company: "Meta" },
    ],
    tags: ["Career", "System Design", "Mentorship", "Meta", "Interview Prep"],
    links: [
      { label: "Recording", url: "#" },
      { label: "Interview Resources", url: "#" },
    ],
  },
  {
    id: "7",
    slug: "faang-weekend-microsoft",
    title: "FAANG Weekend EP1 — Microsoft",
    subtitle: "The Beginning of a Series",
    emoji: "🔷",
    date: "August 30, 2025",
    year: "2025",
    category: "Career",
    categoryColor: "#00A4EF",
    description: "Kickstart of the FAANG Weekend series with Microsoft professionals.",
    fullDescription: "FAANG Weekend EP1 marked the beginning of our most popular event series. Microsoft engineers joined us to share their journey from campus to becoming software engineers at one of the world's largest tech companies.\n\nThe session covered Microsoft's interview process, the different teams and products you can work on, and how to stand out as a candidate. This episode set the tone for what would become a beloved recurring event.",
    venue: "Online (Google Meet)",
    participants: "220+",
    organizers: ["Career Development Cell", "ACM Core Team"],
    highlights: [
      "✦ Microsoft hiring process demystified",
      "✦ Day in the life at Microsoft",
      "✦ Project showcase from Microsoft employees",
      "✦ Tips for campus placements",
      "✦ Open Q&A session",
      "✦ Networking with professionals",
    ],
    speakers: [
      { name: "Microsoft SWE", role: "Software Engineer", company: "Microsoft" },
    ],
    tags: ["Career", "Interview Prep", "Big Tech", "Microsoft"],
    links: [
      { label: "Recording", url: "#" },
      { label: "Slides", url: "#" },
    ],
  },
  {
    id: "8",
    slug: "building-ai-chatbots",
    title: "Building AI Chatbots",
    subtitle: "From Zero to Conversational AI",
    emoji: "🤖",
    date: "August 22, 2025",
    year: "2025",
    category: "Workshop",
    categoryColor: "#00D9FF",
    description: "Hands-on workshop on building intelligent chatbots using modern AI frameworks.",
    fullDescription: "This workshop took participants on a journey from understanding basic NLP concepts to building and deploying their own AI-powered chatbot. Using modern frameworks and APIs, attendees created conversational agents capable of understanding context and providing meaningful responses.\n\nThe hands-on nature of the workshop ensured everyone left with a working chatbot and the knowledge to expand upon it for their own projects.",
    venue: "GGSIPU EDC Lab",
    venueAddress: "Maharaja Surajmal Institute of Technology, New Delhi",
    participants: "80+",
    organizers: ["AI/ML SIG", "Technical Team"],
    highlights: [
      "✦ NLP fundamentals crash course",
      "✦ Introduction to LLM APIs",
      "✦ Building chatbot pipelines",
      "✦ Context management techniques",
      "✦ Deployment on cloud platforms",
      "✦ Best practices for conversational AI",
    ],
    schedule: [
      { time: "10:00 AM", activity: "NLP Fundamentals & Setup" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Building Your First Chatbot" },
      { time: "3:00 PM", activity: "Advanced Features & Deployment" },
      { time: "5:00 PM", activity: "Project Showcase & Wrap-up" },
    ],
    tags: ["AI", "NLP", "Chatbots", "Workshop", "LLM"],
    links: [
      { label: "Workshop Code", url: "#" },
      { label: "API Documentation", url: "#" },
    ],
  },
  {
    id: "9",
    slug: "kickstart-with-acm",
    title: "Kickstart with ACM",
    subtitle: "Your Journey Begins Here",
    emoji: "🚀",
    date: "August 12, 2025",
    year: "2025",
    category: "Orientation",
    categoryColor: "#0085CA",
    description: "Welcome event for new members introducing ACM's mission, activities, and opportunities.",
    fullDescription: "Kickstart with ACM is where every ACM member's journey begins. This orientation event welcomed new students to the GGSIPU EDC ACM Student Chapter, introducing them to the vibrant community they're now part of.\n\nSenior members shared their experiences, project showcases demonstrated what's possible, and interactive sessions helped newcomers find their interests. From competitive programming to web development, AI to design—everyone found their niche.",
    venue: "GGSIPU EDC Auditorium",
    venueAddress: "Maharaja Surajmal Institute of Technology, New Delhi",
    participants: "300+",
    organizers: ["Core Team", "All SIGs"],
    highlights: [
      "✦ Introduction to ACM and our chapter",
      "✦ SIG showcases and demos",
      "✦ Interactive team-building activities",
      "✦ Meet your seniors and mentors",
      "✦ Roadmap for the year ahead",
      "✦ Membership registration",
    ],
    schedule: [
      { time: "10:00 AM", activity: "Welcome & ACM Introduction" },
      { time: "11:00 AM", activity: "SIG Presentations & Demos" },
      { time: "12:30 PM", activity: "Lunch & Networking" },
      { time: "2:00 PM", activity: "Interactive Activities" },
      { time: "4:00 PM", activity: "Q&A and Registration" },
    ],
    tags: ["Orientation", "Community", "Welcome", "Networking"],
    links: [
      { label: "ACM Portal", url: "#" },
      { label: "Discord Server", url: "#" },
    ],
  },
  {
    id: "10",
    slug: "indo-american-seminar",
    title: "Indo-American Seminar",
    subtitle: "Bridging Continents Through Technology",
    emoji: "🌏",
    date: "January 23, 2025",
    year: "2025",
    category: "Seminar",
    categoryColor: "#FFD700",
    description: "International collaboration bringing together thought leaders from India and USA.",
    fullDescription: "A landmark event in our chapter's history, the Indo-American Seminar brought together academicians, industry leaders, and students from both India and the United States. This collaborative seminar focused on the future of technology education and global opportunities for students.\n\nKeynote speakers from top US universities and Indian tech companies shared insights on emerging technologies, research opportunities, and how students can prepare for a global career in tech.",
    venue: "GGSIPU Main Auditorium",
    venueAddress: "Guru Gobind Singh Indraprastha University, Dwarka",
    participants: "500+",
    organizers: ["University Administration", "ACM Core Team", "International Relations Cell"],
    highlights: [
      "✦ Keynotes from US university professors",
      "✦ Panel discussions on global tech trends",
      "✦ Research collaboration opportunities",
      "✦ Student exchange program announcements",
      "✦ Networking with international guests",
      "✦ Career opportunities in global tech",
    ],
    speakers: [
      { name: "Prof. John Smith", role: "Professor of CS", company: "Stanford University" },
      { name: "Dr. Priya Sharma", role: "Research Director", company: "Google Research India" },
    ],
    tags: ["International", "Education", "Collaboration", "Seminar", "Global"],
    links: [
      { label: "Event Highlights", url: "#" },
      { label: "Speaker Slides", url: "#" },
    ],
    isFeatured: true,
  },
  {
    id: "11",
    slug: "smart-delhi-ideathon",
    title: "Smart Delhi Ideathon",
    subtitle: "Innovating for a Smarter Capital",
    emoji: "🏙️",
    date: "December 24, 2024 - February 4, 2025",
    year: "2024-25",
    category: "Ideathon",
    categoryColor: "#2ECC71",
    description: "City-wide ideathon focused on solving urban challenges in Delhi through innovation.",
    fullDescription: "The Smart Delhi Ideathon was an ambitious initiative to harness student innovation for solving real urban challenges in the national capital. From traffic management to waste disposal, air quality monitoring to public safety—teams tackled problems that affect millions of Delhi residents daily.\n\nThe ideathon spanned six weeks, with multiple rounds of mentorship, prototyping, and pitching. Top ideas were presented to government officials and industry experts, with the best solutions being considered for actual implementation.",
    venue: "Multiple Venues",
    venueAddress: "GGSIPU Campus & Delhi Secretariat",
    participants: "400+",
    organizers: ["Delhi Government", "GGSIPU", "ACM Chapter"],
    highlights: [
      "✦ Six-week innovation marathon",
      "✦ Real urban problem statements",
      "✦ Government & industry mentorship",
      "✦ Prototype development support",
      "✦ Pitch to government officials",
      "✦ Top ideas considered for implementation",
    ],
    prizes: [
      { position: "Grand Prize", prize: "₹50,000 + Incubation Support", emoji: "🏆" },
      { position: "1st Runner Up", prize: "₹30,000 + Mentorship", emoji: "🥈" },
      { position: "2nd Runner Up", prize: "₹20,000", emoji: "🥉" },
      { position: "Special Innovation", prize: "₹10,000 + Recognition", emoji: "💡" },
    ],
    schedule: [
      { time: "Week 1-2", activity: "Problem Understanding & Ideation" },
      { time: "Week 3-4", activity: "Prototype Development" },
      { time: "Week 5", activity: "Mentorship & Refinement" },
      { time: "Week 6", activity: "Final Pitches & Awards" },
    ],
    tags: ["Urban Tech", "Innovation", "Smart City", "Government", "Ideathon"],
    links: [
      { label: "Project Submissions", url: "#" },
      { label: "Final Presentations", url: "#" },
    ],
    isFeatured: true,
  },
];

export const upcomingEvents = eventsData.filter((e) => e.isUpcoming);
export const pastEvents = eventsData.filter((e) => !e.isUpcoming);
export const featuredEvents = eventsData.filter((e) => e.isFeatured);

export function getEventBySlug(slug: string): EventData | undefined {
  return eventsData.find((e) => e.slug === slug);
}

export function getEventById(id: string): EventData | undefined {
  return eventsData.find((e) => e.id === id);
}

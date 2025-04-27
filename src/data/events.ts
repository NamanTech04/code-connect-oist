import Images from '@/assets/images';

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  longDescription: string[];
  year: string;
}


export const eventsData: Event[] = [
  {
    id: 1,
    title: "Cypher 30 Coding Contest",
    date: "April 1, 2025",
    description: "A fast-paced coding competition testing algorithmic skills and problem-solving abilities.",
    image: Images.Cypher30, 
    longDescription: [
      "AI Club, Department of CSE-AIML, OIST, proudly presents Cypher-30 3.0 — a dynamic 30-day coding challenge designed to sharpen your problem-solving skills, foster consistency, and ignite a passion for programming.",
      "",
      "From 1st April to 1st May 2025, participants will tackle daily challenges hosted on HackerRank, progressing through a carefully curated set of topics each week. Whether you're a beginner eager to build a strong foundation, or an advanced coder aiming to polish your skills, Cypher-30 is the perfect opportunity to push your limits.",
      "",
      "-- Why Join Cypher-30 3.0?",
      "-> Daily Practice: Strengthen your coding abilities through consistent practice.",
      "-> Skill Development: Cover core topics like Arrays, Sorting, Recursion, Data Structures, Dynamic Programming, and Graphs.",
      "-> Professional Growth: Build an impressive HackerRank profile while preparing for future technical interviews.",
      "-> Recognition: Receive an E-certificate for participation, and stand a chance to win cash prizes for top performance.",
      "",
      "-- Key Highlights:",
      "-> Open for 1st, 2nd, and 3rd-year students from all backgrounds.",
      "-> Individual participation only — no team entries.",
      "-> Weekly challenges must be completed before the next set is released.",
      "-> Top 3 participants will be awarded cash prizes along with special certificates.",
      "-> Final round will be conducted at the AI Lab.",
      "",
      "-- Important Dates:",
      "-> Last Date for Registration: 30th March 2025",
      "-> Challenge Duration: 1st April – 1st May 2025",
      "",
      "Gear up for an intense, exciting, and rewarding journey.",
      "Challenge yourself. Code consistently. Rise higher.",
      "",
      "Registrations are closed",
      "for futher updates contact us"
    ],
    
    year: "2025",
  },
  
  {
    id: 2,
    title: "Logo Designing Contest TEDx",
    date: "May 20, 2023",
    description: "Creative design challenge focused on creating impactful visual identities for TEDx events.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    longDescription: ["In collaboration with TEDx OIST, the AI Club organized a logo design contest that challenged participants to create innovative visual identities that captured the essence of ideas worth spreading. The contest received over 50 submissions, with designs judged on creativity, relevance, and technical execution. The winning logo was adopted for the TEDx OIST event and the designer received recognition and prizes including design software subscriptions."],
    year: "2023"
  },
  {
    id: 3,
    title: "AI Workshop Series",
    date: "February 10, 2024",
    description: "Hands-on sessions exploring machine learning, deep learning, and practical AI applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    longDescription: ["The AI Workshop Series consisted of six weekly sessions covering different aspects of artificial intelligence. Topics included introduction to machine learning, deep learning with TensorFlow, computer vision applications, natural language processing, reinforcement learning, and ethical considerations in AI. Each workshop combined theoretical foundations with practical hands-on exercises, allowing participants to build real working models. Industry experts were invited as guest instructors for specialized topics."],
    year: "2024"
  },
  {
    id: 4,
    title: "AI in Healthcare Symposium",
    date: "April 5, 2024",
    description: "A collaborative event exploring the applications of AI in modern healthcare systems.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    longDescription: ["The AI in Healthcare Symposium brought together students, faculty, and healthcare professionals to discuss and showcase the transformative potential of AI in medical diagnostics, patient care, and healthcare administration. The event featured keynote speeches from leading researchers, panel discussions on ethical implications, and demonstrations of AI-powered healthcare solutions developed by students. The symposium highlighted the interdisciplinary nature of AI applications and encouraged collaboration between technical and medical domains."],
    year: "2024"
  },
  {
    id: 5,
    title: "AI Project Showcase",
    date: "November 12, 2023",
    description: "Exhibition of innovative AI projects developed by club members throughout the year.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    longDescription: ["The AI Project Showcase was the culmination of months of work by club members on various AI initiatives. Projects ranged from smart home automation systems and computer vision applications to natural language processing tools and predictive analytics solutions. Each team presented their work through demonstrations, posters, and short presentations. The event was attended by students, faculty, and industry representatives, providing valuable networking opportunities and feedback for the participants."],
    year: "2023"
  },
  {
    id: 6,
    title: "Future of AI Panel Discussion",
    date: "September 8, 2024",
    description: "Engaging dialogue on emerging trends and ethical considerations in artificial intelligence.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
    longDescription: ["The Future of AI Panel Discussion featured experts from academia and industry discussing emerging trends, potential challenges, and ethical considerations in the rapidly evolving field of artificial intelligence. Topics included the impact of AI on employment, privacy concerns, bias in AI systems, and regulatory frameworks. The interactive format allowed audience members to ask questions and engage with panelists, fostering a rich exchange of ideas and perspectives on how AI might shape our future society."],
    year: "2024"
  }
];

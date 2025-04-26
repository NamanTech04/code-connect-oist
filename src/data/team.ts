
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  year: string;
  isExecutive: boolean;
}

export const teamData: TeamMember[] = [
  // ... 2025 Team
  {
    id: 13,
    name: "Mitanshi Jain",
    position: "President",
    photo: "https://ai-club-oist.netlify.app/assets/Mitanshi-NXEbaF7K.jpg",
    bio: "Software engineer graduated from oriental institute of science and technology",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "maya@aiclub.com"
    },
    year: "2025",
    isExecutive: true
  },
  {
    id: 14,
    name: "Zeeshan Lucknowi",
    position: "Vice President",
    photo: "https://ai-club-oist.netlify.app/assets/Zeeshan-DbME457F.jpg",
    bio: "AI ethics researcher specializing in fairness and transparency in machine learning systems. Published author on AI governance.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "zain@aiclub.com"
    },
    year: "2025",
    isExecutive: true
  },
  {
    id: 15,
    name: "Khush Paliwal",
    position: "Secretary",
    photo: "https://ai-club-oist.netlify.app/assets/Khus-CdB9sb98.jpg",
    bio: "Computational linguist with expertise in multilingual NLP. Developed award-winning language models for low-resource languages.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "sophia@aiclub.com"
    },
    year: "2025",
    isExecutive: true
  },
  {
    id: 16,
    name: "Deshbandhu Badhauliya",
    position: "Technical Lead",
    photo: "https://ai-club-oist.netlify.app/assets/Deshbandhu-C-nMu_jt.jpg",
    bio: "Full-stack AI engineer specializing in production ML systems. Previously worked at leading AI research laboratories.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "leo@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 17,
    name: "Taru Shrivastava",
    position: "Editorial Lead",
    photo: "https://ai-club-oist.netlify.app/assets/Taru-ByTVuLux.jpg",
    bio: "Community building expert with experience in organizing tech conferences. Passionate about creating inclusive AI education opportunities.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "amara@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 19,
    name: "Akansha Sinha",
    position: "Social Media & Design",
    photo: "https://ai-club-oist.netlify.app/assets/Akansha-Be_Ceg-B.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 20,
    name: "Utkarsh Pathak",
    position: "Event & Marketing Lead",
    photo: "https://ai-club-oist.netlify.app/assets/Utkarsh-Cir6GLDL.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 21,
    name: "Ishan Gupta",
    position: "Event & Marketing Lead",
    photo: "https://ai-club-oist.netlify.app/assets/Ishan-CZkZnSkt.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 22,
    name: "Ujjwal Dubey",
    position: "Event & Marketing Lead",
    photo: "https://ai-club-oist.netlify.app/assets/Ujjwal-BdkHa-a9.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 23,
    name: "Naman Vyas",
    position: "Technical Team",
    photo: "https://ai-club-oist.netlify.app/assets/Naman-BhbmoWZi.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 24,
    name: "Aman Kumar",
    position: "Technical Team",
    photo: "https://ai-club-oist.netlify.app/assets/Aman-CG9YFRvC.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 25,
    name: "Archana Nair",
    position: "Technical Team",
    photo: "https://ai-club-oist.netlify.app/assets/Archana-C-U655ch.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 26,
    name: "Mahi Paliwal",
    position: "Editorial Team",
    photo: "https://ai-club-oist.netlify.app/assets/Mahi-zWLpnM4F.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 27,
    name: "Sunidhi Patle",
    position: "Editorial Team",
    photo: "https://ai-club-oist.netlify.app/assets/Sunidhi-Cgc6psN-.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 28,
    name: "Anshul Kushwaha",
    position: "Social Media & Design Team",
    photo: "https://ai-club-oist.netlify.app/assets/Anshul-DTYNEZJ2.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 29,
    name: "Vedant Agrawal",
    position: "Social Media & Design Team",
    photo: "https://ai-club-oist.netlify.app/assets/Vedant-B-9fQuBK.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 30,
    name: "Sarthak Dwivedi",
    position: "Social Media & Design Team",
    photo: "https://ai-club-oist.netlify.app/assets/Sarthak-COG51B1s.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 31,
    name: "Muskan Gurjar",
    position: "Social Media & Design",
    photo: "https://ai-club-oist.netlify.app/assets/Muskan--O6jjmMJ.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 32,
    name: "Swati Mishra",
    position: "Social Media & Design",
    photo: "https://ai-club-oist.netlify.app/assets/Swati-V4e93ctI.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 33,
    name: "Mehvish Khan",
    position: "Social Media & Design",
    photo: "https://ai-club-oist.netlify.app/assets/Mehvish-7qNZ-2jO.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 34,
    name: "Hardik Rahangdale",
    position: "Social Media & Design",
    photo: "https://ai-club-oist.netlify.app/assets/Hardik-CQW7_pF5.jpg",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },

  // ... 2024 Team
  // {
  //   id: 7,
  //   name: "Rohan Verma",
  //   position: "President",
  //   photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
  //   bio: "Machine learning researcher focusing on reinforcement learning and robotics. Previously interned at major AI research labs.",
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     github: "https://github.com",
  //     email: "rohan@aiclub.com"
  //   },
  //   year: "2024",
  //   isExecutive: true
  // },
  // {
  //   id: 8,
  //   name: "Ishita Jain",
  //   position: "Vice President",
  //   photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
  //   bio: "Computer vision specialist with experience in developing AI solutions for healthcare. Passionate about accessibility tech.",
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     github: "https://github.com",
  //     email: "ishita@aiclub.com"
  //   },
  //   year: "2024",
  //   isExecutive: true
  // },
  // {
  //   id: 9,
  //   name: "Karthik Rao",
  //   position: "Secretary",
  //   photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
  //   bio: "Data engineer with strong background in big data technologies. Streamlined the club's data infrastructure.",
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     github: "https://github.com",
  //     email: "karthik@aiclub.com"
  //   },
  //   year: "2024",
  //   isExecutive: true
  // },
  // {
  //   id: 10,
  //   name: "Aisha Khan",
  //   position: "Technical Lead",
  //   photo: "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?auto=format&fit=crop&w=256&q=80",
  //   bio: "Backend developer specialized in scalable AI systems. Leads the development of the club's project management platform.",
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     github: "https://github.com",
  //     email: "aisha@aiclub.com"
  //   },
  //   year: "2024",
  //   isExecutive: false
  // },
  // {
  //   id: 11,
  //   name: "Siddharth Tiwari",
  //   position: "Events Coordinator",
  //   photo: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=256&q=80",
  //   bio: "Creative professional with experience in organizing tech events. Responsible for workshop series and hackathons.",
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     email: "siddharth@aiclub.com"
  //   },
  //   year: "2024",
  //   isExecutive: false
  // },
  // {
  //   id: 12,
  //   name: "Divya Malhotra",
  //   position: "Content Creator",
  //   photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=256&q=80",
  //   bio: "Digital marketer and content strategist. Manages the club's online presence and AI Insights Magazine.",
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     github: "https://github.com",
  //     email: "divya@aiclub.com"
  //   },
  //   year: "2024",
  //   isExecutive: false
  // },
  // ... 2024 Team
  {
    id: 1,
    name: "Aalok Kumar Singh",
    position: "President",
    photo: "https://aiclub-oist.web.app/static/media/Aalok.52694f50a194ea847be1.png",
    bio: "Computer Science graduate with a passion for AI and machine learning. Led multiple research projects in computer vision.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ananya@aiclub.com"
    },
    year: "2024",
    isExecutive: true
  },
  {
    id: 2,
    name: "Satvik Shrivastava",
    position: "Vice President",
    photo: "https://aiclub-oist.web.app/static/media/satvik.e432785d0307e03415e7.jpg",
    bio: "AI researcher specializing in natural language processing and generative models. Published in top AI conferences.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "rahul@aiclub.com"
    },
    year: "2024",
    isExecutive: true
  },
  {
    id: 3,
    name: "Abhishek Chappani",
    position: "Secretary",
    photo: "https://aiclub-oist.web.app/static/media/chhapani.a7bbd25d0c23cda68263.jpg",
    bio: "Data scientist with expertise in statistical analysis and predictive modeling. Passionate about AI ethics.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "priya@aiclub.com"
    },
    year: "2024",
    isExecutive: true
  },
  {
    id: 4,
    name: "Nipun Yadav",
    position: "General Secretary",
    photo: "https://aiclub-oist.web.app/static/media/Nipun.4d1b7807fe141f00e531.jpg",
    bio: "Full-stack developer with expertise in AI-powered web applications. Led the development of the club's project management platform.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "vikram@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 5,
    name: "Moulik Sharma",
    position: "Lead Marketing and PR",
    photo: "https://aiclub-oist.web.app/static/media/Moulik.e4917331a344cb08fec4.jpg",
    bio: "Marketing specialist with a background in event management. Organized the successful Cypher 30 Coding Contest.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "neha@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 6,
    name: "Nazim Khan",
    position: "Lead Marketing and PR",
    photo: "https://aiclub-oist.web.app/static/media/nazim.db68c56102cfd4153f6a.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 7,
    name: "Anshika Gupta",
    position: "Editorial Lead",
    photo: "https://aiclub-oist.web.app/static/media/Anshika.81a67fd1c8325f4f1207.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 8,
    name: "Nakul Bisen",
    position: "Technical",
    photo: "https://aiclub-oist.web.app/static/media/Nakul.88892803c1d17b004482.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 9,
    name: "Riya Chourasia",
    position: "Event Management Lead",
    photo: "https://aiclub-oist.web.app/static/media/Riya.ae15eae8b837ad65c605.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 10,
    name: "Angelika Thomas",
    position: "Editorial",
    photo: "https://aiclub-oist.web.app/static/media/Angelika.8c0de517c1dac3df941f.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 11,
    name: "Affan Ahmed",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Affan.66278c5f431ad8bfab84.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 12,
    name: "Akansha Sinha",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Akansha.f50a754416ca7b6f6978.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 13,
    name: "Animesh Tandon",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Animesh.64140ef82decc56bd987.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 14,
    name: "Alveera Ali",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Alveera.68c5a36241fdeb9e6867.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 15,
    name: "Mayank Patil",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Mayank.5cc49dbf1bfb2433a818.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 16,
    name: "Mitanshi Jain",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Mitanshi.af8865e69328cfb2f8f6.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 17,
    name: "Khush Paliwal",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Khush.ba2de236cce3a06a21e3.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 18,
    name: "Huzaifa Imam",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Huzaifa.ec0aa8d81b85522f5181.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 19,
    name: "Taru Shrivastava",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Taru.d2286dcfaf500e2d0ad7.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 20,
    name: "Samarth Shrivastava",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Shivam.71eee573809e40217964.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 21,
    name: "Zeeshan",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Zeeshan.6a789b18fb1f59dce650.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 22,
    name: "Shivam Prakash",
    position: "Team Member",
    photo: "https://aiclub-oist.web.app/static/media/Samarth.813dd5a25a9591c2e020.jpg",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
];

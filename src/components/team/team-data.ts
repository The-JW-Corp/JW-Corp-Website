export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  description: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    telegram?: string;
    email?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "matheo",
    name: "Mathéo",
    role: "Founder",
    title: "Full-Stack Smart Contract Developer",
    description:
      "Solidity expert, building secure & scalable blockchain protocols.",
    imageUrl: "/assets/rami.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/matheo",
      telegram: "https://t.me/matheo",
      email: "matheo@example.com",
    },
  },
  {
    id: "rami",
    name: "Rami",
    role: "Founder",
    title: "Blockchain Architect",
    description:
      "Former Ethereum Foundation researcher with 7+ years in Web3 development.",
    imageUrl: "/assets/rami.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/alexandra",
      telegram: "https://t.me/alexandra",
      email: "alexandra@example.com",
    },
  },
  {
    id: "nicolas",
    name: "Nicolas",
    role: "Lead Developer",
    title: "Full-Stack Engineer",
    description:
      "JavaScript wizard specializing in decentralized applications and tooling.",
    imageUrl: "/assets/rami.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/nicolas",
      telegram: "https://t.me/nicolas",
      email: "nicolas@example.com",
    },
  },
  {
    id: "elena",
    name: "Elena",
    role: "Product Designer",
    title: "UX/UI Specialist",
    description:
      "Creating intuitive interfaces for complex blockchain applications.",
    imageUrl: "/assets/rami.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/elena",
      telegram: "https://t.me/elena",
      email: "elena@example.com",
    },
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamData.find((member) => member.id === id);
};

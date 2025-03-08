export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  description: string;
  imageUrl: string;
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
  },
  {
    id: "alexandra",
    name: "Alexandra",
    role: "Chief Technology Officer",
    title: "Blockchain Architect",
    description:
      "Former Ethereum Foundation researcher with 7+ years in Web3 development.",
    imageUrl: "/assets/rami.jpg",
  },
  {
    id: "nicolas",
    name: "Nicolas",
    role: "Lead Developer",
    title: "Full-Stack Engineer",
    description:
      "JavaScript wizard specializing in decentralized applications and tooling.",
    imageUrl: "/assets/rami.jpg",
  },
  {
    id: "elena",
    name: "Elena",
    role: "Product Designer",
    title: "UX/UI Specialist",
    description:
      "Creating intuitive interfaces for complex blockchain applications.",
    imageUrl: "/assets/rami.jpg",
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamData.find((member) => member.id === id);
};

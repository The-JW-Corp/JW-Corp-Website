export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  credentials?: string;
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
      "Smartcontracts expert, building secure & scalable web3 applications on EVM & Solana chains",
    imageUrl: "/assets/rami.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/matheo",
      telegram: "https://t.me/JW_Matheo",
      email: "matheo@jwcorp.fr",
    },
  },
  {
    id: "rami",
    name: "Rami",
    role: "Founder",
    title: "Fullstack Developer, Web3 Advisor",
    credentials: "Ex Banking, university professor",
    description: "Fullstack developer, web3 advisor",
    imageUrl: "/assets/rami.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/rami-abdou1",
      telegram: "https://t.me/JW_Rami",
      email: "rami@jwcorp.fr",
    },
  },
  {
    id: "baptiste",
    name: "Baptiste",
    role: "",
    title: "Blockchain engineer, audit",
    credentials: "Ex CTO Nefture, Ex Curve Finance",
    description:
      "Full-stack architect specialized in EVM smart contracts and cross-chain solutions. Expert in Safe ecosystem, account abstraction, and Web3 backend development",
    imageUrl: "/assets/baptiste.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/baptiste-florentin/",
      telegram: "https://t.me/Pybast",
      email: "baptiste@jwcorp.fr",
    },
  },
  {
    id: "daniel",
    name: "Daniel",
    role: "",
    title: "Product Designer",
    description: "",
    imageUrl: "/assets/daniel.png",
    socials: {
      linkedin: "https://linkedin.com/in/rami-abdou1",
      telegram: "https://t.me/JW_Rami",
      email: "rami@jwcorp.fr",
    },
  },
  {
    id: "ismael",
    name: "Ismael",
    role: "",
    credentials: "Ex Barclay, SNCF, Carrefour",
    title:
      "Senior Product Manager",
    description: "10+ years of experience in retail & banking",
    imageUrl: "/assets/ismael.jpeg",
    socials: {
      linkedin: "https://linkedin.com/in/ismael-alaoui",
      telegram: "https://t.me/ismael",
      email: "",
    },
  },
  {
    id: "jean-charles",
    name: "Jean-Charles",
    role: "Advisor",
    title:
      "Head of Staff Cube3 (French web3 Incubator) & Head of International Relations ESCE",
    description: "",
    imageUrl: "/assets/jean-charles.jpeg",
    socials: {
      linkedin: "https://linkedin.com/in/elena",
      telegram: "https://t.me/elena",
      email: "",
    },
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamData.find((member) => member.id === id);
};

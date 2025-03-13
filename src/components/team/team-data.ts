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
    imageUrl: "/assets/matheo.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/matheo-vallone/",
      telegram: "https://t.me/JW_Matheo",
      email: "matheo@jwcorp.fr",
    },
  },
  {
    id: "rami",
    name: "Rami",
    role: "Founder",
    title: "Fullstack Developer, Web3 Advisor",
    credentials:
      "Ex Banking, Ex university professor, crypto investor since 2017",
    description:
      "Gamification expert, building engaging web3 applications to optimize user engagement and retention",
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
    title: "Blockchain engineer and auditor",
    credentials: "Ex CTO Nefture, Decentralization Academic at ESILV",
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
    id: "remi",
    name: "Rémi",
    role: "",
    title: "Senior Full Stack Engineer",
    credentials: "Ex Lead dev Total, Ex Aura(LVMH)",
    description:
      "Senior Web3 engineer specialized in Ethereum technologies and advanced web development. Over 7 years of experience as Lead Developer/CTO and two Masters in Computer Science.",
    imageUrl: "/assets/remi.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/remi-blaise/",
      email: "remi@jwcorp.fr",
    },
  },
  {
    id: "eddy",
    name: "Eddy",
    role: "",
    title: "Senior Full Stack Smartcontract Engineer",
    credentials: "Ex Lead dev Total, Ex Aura(LVMH)",
    description:
      "+14y FullStack Engineer, +4y Blockchain Engineer, Skilled in .NET, Azure integrations, and CI/CD pipelines, delivering robust decentralized solutions and modern web architectures.",
    imageUrl: "/assets/eddy.jpg",
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
    credentials: "Ex KlubX, ",
    description: "",
    imageUrl: "/daniel.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/daniel-d-b8b90b23a/",
      telegram: "https://t.me/don_don_01",
      email: "daniel@jwcorp.fr",
    },
  },
  {
    id: "ismael",
    name: "Ismael",
    role: "Advisor",
    credentials: "Ex Barclay, SNCF, Carrefour",
    title: "Senior Product Manager",
    description: "10+ years of experience in retail & banking",
    imageUrl: "/assets/ismael.jpeg",
    socials: {
      linkedin: "https://linkedin.com/in/ismael-alaoui",
      telegram: "https://t.me/ismastg",
      email: "ismael@jwcorp.fr",
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
      linkedin: "https://www.linkedin.com/in/jcgalli/",
      telegram: "https://t.me/JC_tlgm",
      email: "",
    },
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamData.find((member) => member.id === id);
};

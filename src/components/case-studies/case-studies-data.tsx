export interface Technology {
  name: string;
  id: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  logoUrl: string;
  backgroundUrl: string;
  technologies: Technology[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "nobrainer",
    title: "NoBrainer",
    subtitle: "dApp launching platform",
    description:
      "A DAO made up of European influencers asked us to develop a no-code tool for launching customizable ERC404 standard smart contracts.",
    logoUrl: "/assets/nobrainer-logo.svg",
    backgroundUrl: "/assets/nobrainer.png",
    technologies: [
      { id: "solidity", name: "Solidity" },
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "tailwind", name: "Tailwind CSS" },
    ],
  },
  {
    id: "nobrainer-2",
    title: "NoBrainer",
    subtitle: "dApp launching platform",
    description:
      "A DAO made up of European influencers asked us to develop a no-code tool for launching customizable ERC404 standard smart contracts.",
    logoUrl: "/assets/nobrainer-logo.svg",
    backgroundUrl: "/assets/nobrainer.png",
    technologies: [
      { id: "solidity", name: "Solidity" },
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "tailwind", name: "Tailwind CSS" },
    ],
  },
  {
    id: "nobrainer-3",
    title: "NoBrainer",
    subtitle: "dApp launching platform",
    description:
      "A DAO made up of European influencers asked us to develop a no-code tool for launching customizable ERC404 standard smart contracts.",
    logoUrl: "/assets/nobrainer-logo.svg",
    backgroundUrl: "/assets/nobrainer.png",
    technologies: [
      { id: "solidity", name: "Solidity" },
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "tailwind", name: "Tailwind CSS" },
    ],
  },
];

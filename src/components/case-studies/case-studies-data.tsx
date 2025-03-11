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
    id: "philippe-gonnet",
    title: "Philippe Gonnet",
    subtitle: "Champagne brand",
    description:
      "Artisan winemakers for 7 generations, Philippe Gonet produces Blanc de Blancs Grands Crus champagnes of the highest precision We helped them to create a NFT Club with chefs from 'Top Chef' TV Show",
    logoUrl: "/assets/logo/philippe-gonnet.svg",
    backgroundUrl: "/assets/philippegonnet.svg",
    technologies: [
      { id: "solidity", name: "Solidity" },
      { id: "nextjs", name: "Next.js" },
      { id: "firebase", name: "Firebase" },
      { id: "tailwind", name: "Tailwind" },
    ],
  },
  {
    id: "nobrainer",
    title: "Hape Trading",
    subtitle: "Neo Dex - Fast trading",
    description:
      "Hape Trading is a startup based in Dubai founded by successfull entrepeneurs who did 2 exit. Hape is a neo DEX on Solana that enable to tokens very fast with embedded wallet on pumpfun, raydium, meteora..). The platform has a dApp and a telegram bot.",
    logoUrl: "/assets/logo/hape.svg",
    backgroundUrl: "/assets/hape-2.jpg",
    technologies: [
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
      { id: "tailwind", name: "Tailwind" },
      { id: "zustand", name: "Zustand" },
      { id: "tanstack", name: "Tanstack" },
      { id: "nestjs", name: "NestJS" },
      { id: "graphql", name: "GraphQL" },
    ],
  },
  {
    id: "nobrainer",
    title: "NoBrainer",
    subtitle: "dApp launching platform",
    description:
      "A DAO made up of European influencers asked us to develop a no-code tool for launching customizable ERC404 standard smart contracts.",
    logoUrl: "/assets/nobrainer-logo.svg",
    backgroundUrl: "/assets/nobrainer.png",
    technologies: [
      { id: "nextjs", name: "Next.js" },
      { id: "solidity", name: "Solidity" },
      { id: "foundry", name: "Foundry" },
    ],
  },
  {
    id: "lux",
    title: "Lux resort group",
    subtitle: "5* Hotel group",
    description:
      "The Lux Collective is an international 5-star hotel group based in Singapore . We worked closely with Metalyde, a web3 agency focused on branding and marketing strategy. For the festive season, the group wanted to run an NFT lottery offering a chance to win one of 6 unique experiences at LUX* hotels.",
    logoUrl: "/assets/logo/lux.jpg",
    backgroundUrl: "/assets/lux.svg",
    technologies: [
      { id: "nextjs", name: "Next.js" },
      { id: "solidity", name: "Solidity" },
      { id: "react", name: "React" },
      { id: "tailwind", name: "Tailwind" },
    ],
  },
  {
    id: "republike",
    title: "Republike",
    subtitle: "Web3 social network",
    description:
      "Republike is a French startup with thousands of users they have a web3 social network universe developed on the Republike Enfine for Democracy (RED) with self moderation.",
    logoUrl: "/assets/logo/republike.svg",
    backgroundUrl: "/assets/republike.svg",
    technologies: [
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
      { id: "prisma", name: "Prisma" },
      { id: "trpc", name: "tRPC" },
      { id: "tailwind", name: "Tailwind" },
    ],
  },
  {
    id: "stone",
    title: "Stone real estate",
    subtitle: "RWA, Real estate tokenization",
    description:
      "Stone Real Estate is a real estate tokenization platform. The team behind the project is a real estate agency. The aim is to democratize real estate investment by making it more liquid, allowing you to invest with a wallet from as little as €100.",
    logoUrl: "/assets/nobrainer-logo.svg",
    backgroundUrl: "/assets/stone.JPG",
    technologies: [
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
      { id: "foundry", name: "Foundry" },
      { id: "python", name: "Python" },
      { id: "tailwind", name: "Tailwind" },
    ],
  },
  {
    id: "borpa",
    title: "Borpa",
    subtitle: "Memecoin next generation",
    description:
      "Borpa is a project set up by a DAO. They launched 2 rounds of fund-raising, raising more than 1.3M, and then made 2 launches. The first at 80m capitalization and the second at 30m. With over 500k followers on Twitter and 50k members on Discord, expectations were high and Ddos attacks were expected. The team consisted of around 20 people, including 4 developers.",
    logoUrl: "",
    backgroundUrl: "/assets/Borpa.svg",
    technologies: [
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
      { id: "chakra", name: "ChakraUI" },
      { id: "tailwind", name: "Tailwind" },
      { id: "solana", name: "Solana" },
    ],
  },
];

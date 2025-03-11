import React from "react";

export interface ServiceDataItem {
  title: string;
  description: React.ReactNode;
  width: "w-3/5" | "w-2/5";
  imageUrl: string;
}

export const servicesData: ServiceDataItem[] = [
  {
    title: "FullStack Web3 Development",
    description: "We develop secure, scalable, and efficient blockchain applications that bring your vision to life.",
    width: "w-3/5",
    imageUrl: "/elixir.jpg",
  },
  {
    title: "Technical Advisory",
    description: (
      <>
        <p>
          We provide expert guidance on technical strategy,
          architecture, and implementation to ensure your project is
          built for long-term success.
        </p>
        <p>
          We save you money and time by avoiding costly mistakes, with
          a focus on scalability, security, and maintainability.
        </p>
        <p className="mt-2">
          <span className="text-primary-light-2">TLDR;</span> We make
          you scale and save you money.
        </p>
      </>
    ),
    width: "w-2/5",
    imageUrl: "/elixir.jpg",
  },
  {
    title: "Product Design",
    description: "We design user-friendly, intuitive, and engaging interfaces that bring your vision to life.",
    width: "w-2/5",
    imageUrl: "/elixir.jpg",
  },
  {
    title: "Go-To-Market",
    description: (
      <>
        <p>
          We help ambitious teams{" "}
          <strong>build, fund, and scale</strong>
          high-quality Web3 projects—from{" "}
          <strong>business strategy</strong> to
          <strong>MVP development</strong>,{" "}
          <strong>fundraising</strong>, and{" "}
          <strong>market expansion</strong>.
        </p>
        <p>
          Our <strong>global network</strong> (Dubai, Europe, Asia)
          connects you with{" "}
          <strong>
            VCs, incubators, T1/T2/T3 CEXs, KOLs, DAOs, market makers,
            and PR agencies
          </strong>{" "}
          to ensure long-term success.
        </p>
        <p className="mt-2">
          <span className="text-primary-light-2">TLDR;</span> We help
          you{" "}
          <strong>
            build smart, raise capital, and go to market fast.
          </strong>
        </p>
      </>
    ),
    width: "w-3/5",
    imageUrl: "/elixir.jpg",
  },
]; 
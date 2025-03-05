function KeyMetrics() {
  const keyMetrics = [
    {
      title: "4+ years",
      description: "of Web3 development experience",
    },
    {
      title: "20+ projects",
      description: "across DeFi, DAOs & startups",
    },
    {
      title: "5 blockchains",
      description: "across DeFi, DAOs & startups",
    },
    {
      title: "Millions secured",
      description: "in smart contract volume",
    },
    {
      title: "Trusted",
      description: " by Certik, Hacken, FinPR & more",
    },
  ];
  return (
    <div className="flex gap-12">
      <div className="w-full flex justify-between">
        <div className="text-h2-medium">
          Technical excellence meets real Web3 ecosystem access.
        </div>
        <div className="text-body-regular w-[432px]">
          From smart contracts to high-performance bots, from technical advisory
          to full-stack project execution, we deliver scalable, secure, and
          production-ready blockchain solutions.
        </div>
      </div>
      <div className="w-full">
        <div className="">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="">
              <div className="">{metric.title}</div>
              <div className="">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyMetrics;
"use client";

import { cn } from "@/lib/utils";
import { memo, useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const AnimatedText = dynamic(() => import("./ui/animated-text"), {
  ssr: false,
  loading: () => <div className="opacity-0"></div>,
});

const MetricCard = memo(function MetricCard({
  metric,
  delay,
  isInViewport,
  index,
}: {
  metric: { title: string; description: string };
  delay: { title: number; description: number };
  isInViewport: boolean;
  index: number;
}) {
  return (
    <motion.div
      className="w-1/5 max-md:w-full"
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: false, margin: "-2.5% 0px" }}
    >
      <div
        className={cn(
          "flex flex-col max-w-[224px] w-full h-[300px] justify-end py-12 px-6 rounded-radius-10 relative",
          "max-md:h-[200px] max-md:w-full max-md:py-4 max-md:px-2",
          "max-lg:h-[250px] max-lg:py-6 max-lg:px-4",
          "before:content-[''] before:absolute before:inset-0 before:rounded-radius-10 before:bg-gradient-to-bl before:from-white before:to-transparent before:-z-10",
          "after:content-[''] after:absolute after:inset-[1px] after:rounded-[calc(theme(borderRadius.radius-10)-1px)] after:bg-background after:-z-[5]"
        )}
      >
        <>
          <div
            className={cn(
              "text-body-large-medium",
              "max-lg:text-body-large-medium",
              "max-md:text-body-medium",
              isInViewport ? "visible" : "invisible"
            )}
          >
            <AnimatedText
              delay={delay.title}
              once={false}
              animationType="reveal"
            >
              {metric.title}
            </AnimatedText>
          </div>
          <div
            className={cn(
              "text-body-normal-regular",
              "max-lg:text-body-extra-small max-md:text-body-extra-small",
              isInViewport ? "visible" : "invisible"
            )}
          >
            <AnimatedText
              delay={delay.description}
              once={false}
              animationType="reveal"
            >
              {metric.description}
            </AnimatedText>
          </div>
        </>
      </div>
    </motion.div>
  );
});

function KeyMetrics() {
  const keyMetrics = [
    {
      title: "4+ years",
      description: "of Web3 development xp",
    },
    {
      title: "20+ projects",
      description: "across DeFi, DAOs & startups",
    },
    {
      title: "Trusted",
      description: " by Certik, Hacken, FinPR & more",
    },
    {
      title: "Millions secured",
      description: "in smart contract volume",
    },
    {
      title: "5 blockchains",
      description: "across DeFi, DAOs & startups",
    },
  ];

  const delays = keyMetrics.map((_, index) => {
    const baseDelay = index * 0.45;
    return {
      title: baseDelay,
      description: baseDelay + 0.3,
    };
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [hasTriggeredAnimation, setHasTriggeredAnimation] = useState(false);

  useEffect(() => {
    if (isInView && !hasTriggeredAnimation) {
      setHasTriggeredAnimation(true);
    }
  }, [isInView, hasTriggeredAnimation]);

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center gap-12">
      <div className={cn("w-full flex justify-between", "max-md:flex-col max-md:gap-2")}>
        <div
          className={cn("text-h2-medium", "max-lg:text-h3 max-md:text-h3", 
            "max-sm:text-body-large-medium")}
        >
          Technical excellence meets real Web3 ecosystem access.
        </div>
        <div
          className={cn(
            "text-body-regular w-[432px]",
            "max-lg:text-body-small max-lg:w-1/3",
            "max-md:text-body-extra-small",
            "max-sm:w-full"
          )}
        >
          From smart contracts to high-performance bots, from technical advisory
          to full-stack project execution, we deliver scalable, secure, and
          production-ready blockchain solutions.
        </div>
      </div>

      <div
        ref={containerRef}
        className={cn(
          "w-full flex justify-between gap-0",
          "max-lg:gap-2 max-md:gap-2",
          "max-md:grid max-md:grid-cols-2 max-md:gap-4"
        )}
      >
        {keyMetrics.map((metric, index) => (
          <MetricCard
            key={index}
            metric={metric}
            delay={delays[index]}
            isInViewport={hasTriggeredAnimation}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(KeyMetrics);

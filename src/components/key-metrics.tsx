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
      className="w-1/5"
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: true, margin: "-2.5% 0px" }}
    >
      <div
        className={cn(
          "flex flex-col w-full h-[300px] justify-end py-12 px-6 rounded-radius-10 relative",
          "before:content-[''] before:absolute before:inset-0 before:rounded-radius-10 before:bg-gradient-to-bl before:from-white before:to-transparent before:-z-10",
          "after:content-[''] after:absolute after:inset-[1px] after:rounded-[calc(theme(borderRadius.radius-10)-1px)] after:bg-background after:-z-[5]"
        )}
      >
        <>
          <div
            className={cn(
              "text-body-large-medium",
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
              "text-body-regular",
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
    <div className="flex flex-col gap-12">
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

      <div ref={containerRef} className="w-full flex justify-between gap-4">
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

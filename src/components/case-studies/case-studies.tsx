"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Label from "../ui/label";
import Image from "next/image";
import { caseStudiesData } from "./case-studies-data";
import { motion } from "framer-motion";

function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = caseStudiesData.length;

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const itemWidth = 46;
  const gap = 2;
  const offset = currentIndex * (itemWidth + gap);

  return (
    <div className="flex flex-col justify-center gap-4 h-[100dvh]">
      <Label>Case Studies</Label>
      <div className="text-h2-medium">
        Built for Web3. Proven in Production.
      </div>
      <div className="text-body-normal-regular">
        Every project we build solves a real problem in Web3—whether it&apos;s
        scalability, security, or user adoption. Here are some of our most
        impactful case studies.
      </div>

      {/* Carousel container */}
      <div className="relative w-full overflow-hidden px-4 py-8">
        <motion.div
          className="flex gap-[2vw]"
          initial={false}
          animate={{
            x: `calc(40% - ${offset}vw - ${itemWidth / 2}vw)`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
        >
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.id}
              animate={{
                scale: index === currentIndex ? 1 : 0.9,
                opacity: index === currentIndex ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
              className={cn(
                "min-w-[46vw] p-14 flex h-[500px] justify-end flex-col rounded-radius-10 border-r-1",
                "gap-4 border-white relative overflow-hidden before:content-[''] before:absolute before:inset-0",
                "before:bg-cover before:bg-center before:opacity-40 before:-z-10 before:bg-[url('/assets/nobrainer.png')]"
              )}
            >
              <div>
                <Image
                  src={study.logoUrl}
                  alt={`${study.title}-logo`}
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-h2-medium">
                {study.title}
                <p className="text-body-normal-regular">{study.subtitle}</p>
              </div>
              <p className="text-body">{study.description}</p>
              <div className="flex gap-2">
                {study.technologies.map((tech) => (
                  <Label key={tech.id} size="small">
                    {tech.name}
                  </Label>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation controls */}
      <div className="w-full flex justify-between gap-1">
        <div className="flex gap-1">
          {caseStudiesData.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-[4px] rounded-radius-10",
                idx === currentIndex
                  ? "w-[50px] bg-primary"
                  : "w-[34px] bg-white opacity-30"
              )}
              onClick={() => setCurrentIndex(idx)}
              style={{ cursor: "pointer" }}
            ></div>
          ))}
        </div>
        <div className="flex">
          <div className="flex gap-2">
            <button
              onClick={prevCase}
              className={cn(
                "flex justify-center items-center",
                "rounded-radius-100 w-[50px] bg-primary p-3",
                "hover:opacity-80 transition-opacity duration-300"
              )}
            >
              <Image
                src="/assets/icons/left-arrow.svg"
                alt="left-arrow"
                width={11}
                height={12}
              />
            </button>
            <button
              onClick={nextCase}
              className={cn(
                "flex justify-center right-center",
                "rounded-radius-100 w-[50px] bg-primary p-3",
                "hover:opacity-80 transition-opacity duration-300"
              )}
            >
              <Image
                src="/assets/icons/right-arrow.svg"
                alt="right-arrow"
                width={11}
                height={12}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;

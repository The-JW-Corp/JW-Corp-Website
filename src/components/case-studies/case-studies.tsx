"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Label from "../ui/label";
import Image from "next/image";
import { caseStudiesData } from "./case-studies-data";
import { motion } from "framer-motion";

function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(46);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalItems = caseStudiesData.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.clientWidth;
      setContainerWidth(containerWidth);
      
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      if (isMobileView) {
        setSlideWidth(containerWidth);
      } else {
        setSlideWidth(window.innerWidth * 0.46);
      }
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const getXPosition = () => {
    if (isMobile) {

      return `calc(50% - (${currentIndex} * ${slideWidth}px) - (${slideWidth}px / 2))`;
    } else {
      const gap = 2 * 16;
      const totalOffset = currentIndex * (slideWidth + gap);
      return `calc(50% - ${totalOffset}px - (${slideWidth}px / 2))`;
    }
  };

  return (
    <div className="flex flex-col justify-center gap-4 h-[100dvh]">
      <Label className="max-md:text-body-extra-small" size="small">
        Case Studies
      </Label>
      <div className="text-h2-medium max-md:text-body-large-medium">
        Built for Web3. Proven in Production.
      </div>
      <div className="text-body-normal-regular max-md:text-body-small">
        Every project we build solves a real problem in Web3—whether it&apos;s
        scalability, security, or user adoption. Here are some of our most
        impactful case studies.
      </div>
      
      {/* Carousel container */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden px-4 py-8"
      >
        <motion.div
          className={cn(
            "flex", 
            isMobile ? "gap-0" : "gap-8"
          )}
          initial={false}
          animate={{
            x: getXPosition(),
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
              ref={(el: HTMLDivElement | null) => {
                if (slideRefs.current) slideRefs.current[index] = el;
              }}
              animate={{
                scale: index === currentIndex ? 1 : 0.9,
                opacity: index === currentIndex ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: `${slideWidth}px`,
                flexShrink: 0,
              }}
              className={cn(
                "py-4 flex h-[500px] justify-end flex-col rounded-radius-10 border-r-1",
                "gap-4 border-white relative overflow-hidden",
                "max-md:h-[350px]",
                isMobile ? "px-4" : "px-8"
              )}
            >
              <div
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${study.backgroundUrl})` }}
              />
              <div>
                <Image
                  className={
                    study.id === "lux" || study.id === "republike"
                      ? "w-14 rounded-radius-8"
                      : "max-md:w-10"
                  }
                  src={study.logoUrl}
                  alt={`${study.title}-logo`}
                  width={120}
                  height={120}
                />
              </div>
              <div className={cn("text-h2-medium", "max-lg:text-h3-medium", "max-md:text-body-large-medium")}>
                {study.title}
                <p className="text-body-normal-regular">{study.subtitle}</p>
              </div>
              <p
                className={cn(
                  "text-body",
                  "max-lg:text-body-small",
                  "max-md:text-body-extra-small"
                )}
              >
                {study.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {study.technologies.map((tech) => (
                  <Label
                    className="max-md:text-body-extra-small"
                    key={tech.id}
                    size="small"
                  >
                    {tech.name}
                  </Label>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation controls */}
      <div
        className={cn(
          "w-full flex justify-between gap-1",
          "max-md:flex-col max-md:gap-4 max-md:items-center"
        )}
      >
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
                "flex justify-center items-center select-none",
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
                "flex justify-center right-center select-none",
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

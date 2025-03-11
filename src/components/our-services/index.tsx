"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import ServiceCard from "./service-card";
import { servicesData } from "./service-data";
import Label from "../ui/label";
import { cn } from "@/lib/utils";
export default function OurServices() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1]);

  const motionProps = { y, scale };

  return (
    <div
      ref={containerRef}
      className={cn("relative min-h-[100dvh]", "max-md:mt-12")}
    >
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <ServiceHeader />
          <div className="flex gap-2">
            <Button
              className="max-md:text-body-small max-md:px-4 max-md:py-[13px] max-md:h-fit"
              href="#calendly"
              variant="primary"
              size="lg"
            >
              Book a call
            </Button>
            <Button
              className="max-md:text-body-small max-md:px-4 max-md:py-3 max-md:h-fit"
              href="https://t.me/jw_corp"
              variant="secondary"
              size="lg"
            >
              Chat on Telegram
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className={cn("w-full flex gap-4", "max-md:flex-col")}>
            <ServiceCard {...servicesData[0]} motionProps={motionProps} />
            <ServiceCard {...servicesData[1]} motionProps={motionProps} />
          </div>
          <div className={cn("w-full flex gap-4", "max-md:flex-col")}>
            <ServiceCard {...servicesData[2]} motionProps={motionProps} />
            <ServiceCard {...servicesData[3]} motionProps={motionProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceHeader() {
  return (
    <>
      <Label className="max-md:text-body-extra-small" size="small">
        Our services
      </Label>
      <div
        className={cn(
          "text-h2-medium max-w-[600px] text-center",
          "max-md:text-body-large-medium"
        )}
      >
        Building, Designing, and Scaling Web3 Products.
      </div>
      <div
        className={cn(
          "text-white/80 text-body-large-regular max-w-[600px] text-center",
          "max-md:text-body-small"
        )}
      >
        From full-stack development to high-level advisory and product design,
        we ensure your project is built for long-term success.
      </div>
    </>
  );
}

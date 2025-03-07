"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import ServiceCard from "./service-card";
import { servicesData } from "./service-data";
import Label from "../ui/label";
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
    <div ref={containerRef} className="relative min-h-[100dvh]">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <ServiceHeader />
          <div className="flex gap-2">
            <Button href="#calendly" variant="primary" size="lg">
              Book a call
            </Button>
            <Button href="https://t.me/jw_corp" variant="secondary" size="lg">
              Chat on Telegram
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <ServiceCard {...servicesData[0]} motionProps={motionProps} />
            <ServiceCard {...servicesData[1]} motionProps={motionProps} />
          </div>
          <div className="w-full flex gap-4">
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
      <Label>Our services</Label>
      <div className="text-h2-medium max-w-[600px] text-center">
        Building, Designing, and Scaling Web3 Products.
      </div>
      <div className="text-white/80 text-body-large-regular max-w-[600px] text-center">
        From full-stack development to high-level advisory and product design,
        we ensure your project is built for long-term success.
      </div>
    </>
  );
}

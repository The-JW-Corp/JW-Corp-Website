"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

export interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  width: "w-3/5" | "w-2/5";
  motionProps: {
    y: MotionValue<string>;
    scale: MotionValue<number>;
  };
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
  width,
  motionProps,
}: ServiceCardProps) {
  return (
    <div className={`${width} flex h-[570px] flex-col rounded-radius-10 border-r-1 border-white bg-white bg-opacity-[0.03] relative overflow-hidden`}>
      <motion.div
        className="absolute inset-[-10%] w-[120%] h-[120%] z-0"
        style={{
          y: motionProps.y,
          scale: motionProps.scale,
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        <Image
          src={imageUrl}
          alt={`${title} Background`}
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-background/90 z-10"></div>
      </motion.div>
      <div className="relative z-20 p-6 flex flex-col w-full h-full m-4 gap-2">
        <div className="text-h3-medium">{title}</div>
        <div className="text-body w-3/5">{description}</div>
        <div className="flex items-center">
          <Button
            href="https://t.me/jw_corp"
            openInNewTab
            variant="link"
            className="text-primary-light-2 p-0"
          >
            Learn more
            <Image
              src="assets/icons/right-arrow.svg"
              width={16}
              height={16}
              alt="right-arrow"
            />
          </Button>
        </div>
      </div>
    </div>
  );
} 
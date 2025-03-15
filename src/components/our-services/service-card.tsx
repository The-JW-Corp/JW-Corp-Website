"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        `${width} flex h-[570px] flex-col rounded-radius-10 border-r-1 border-white bg-white bg-opacity-[0.03] relative overflow-hidden`,
        "max-lg:h-[350px]",
        "max-md:w-full max-md:h-[250px]"
        // "md:h-[300px]"
      )}
    >
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
      <div
        className={cn(
          "relative z-20 p-6 flex flex-col w-full h-full m-4 gap-2",
          "max-md:flex max-md:p-0",
        )}
      >
        <div
          className={cn(
            "text-h3-medium",
            "max-lg:text-body-large-medium",
            // "md:text-normal-medium"
          )}
        >
          {title}
        </div>
        <div
          className={cn(
            "text-body w-3/5",
            // "lg:text-body-extra-small",
            "max-lg:text-body-extra-small w-full"
          )}
        >
          {description}
        </div>
        <div className="flex items-center">
          <Button
            href="https://t.me/jw_corp"
            openInNewTab
            variant="link"
            className={cn(
              "text-primary-light-2 p-0",
              // "lg:text-body-extra-small",
              "max-lg:text-body-extra-small"
            )}
          >
            Learn more
            <Image
              src="assets/icons/right-arrow-violet.svg"
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

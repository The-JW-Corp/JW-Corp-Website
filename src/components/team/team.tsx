"use client";

import { useState, useRef, useEffect } from "react";
import Label from "../ui/label";
import { cn } from "@/lib/utils";
import { teamData } from "./team-data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function Team() {
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleInteraction = (memberId: string) => {
    if (isTouchDevice) {
      setHoveredMemberId(hoveredMemberId === memberId ? null : memberId);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-[100dvh] flex flex-col justify-center gap-12"
    >
      <div className="flex flex-col gap-4">
        <Label className="max-md:text-body-extra-small" size="small">
          Team
        </Label>
        <div className="text-h2-medium max-md:text-body-large-medium">
          Meet the Experts Behind Your Next Web3 Project{" "}
        </div>
        <div className="text-body-normal-regular max-md:text-body-small">
          A team of Web3-native developers, architects, and strategists turning
          ideas into reality.
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-3">
        {teamData.map((member, index) => {
          const isHovered = hoveredMemberId === member.id;

          return (
            <motion.div
              key={member.id}
              // TODO: Add animation later
              initial={{ opacity: 1, y: 0 }}
              // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={cn(
                "flex flex-col justify-end gap-1 p-[30px] h-[400px] rounded-radius-6 relative overflow-hidden w-full",
                isTouchDevice ? "cursor-pointer" : "",
                "max-md:h-[300px]"
              )}
              onClick={() => handleInteraction(member.id)}
              onHoverStart={!isTouchDevice ? () => setHoveredMemberId(member.id) : undefined}
              onHoverEnd={!isTouchDevice ? () => setHoveredMemberId(null) : undefined}
            >
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-radius-6">
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center rounded-radius-6"
                  style={{ backgroundImage: `url(${member.imageUrl})` }}
                  initial={{ opacity: 0.2, scale: 1 }}
                  animate={{
                    opacity: isHovered ? 0.8 : 0.2,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <motion.div
                className="flex flex-col gap-1"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-[10px] text-body-small max-md:text-body-extra-small max-md:p-[6px] w-fit text-primary rounded-radius-6">
                  {member.role}
                </div>
                <div className="text-h3-medium max-md:text-body-medium">
                  {member.name}
                </div>
                <div className="text-body max-md:text-body-small">
                  {member.title}
                </div>
                <div className="text-body max-md:text-body-small">
                  {member.credentials}
                </div>
                <div className="opacity-60 text-body-small max-md:text-body-extra-small">
                  {member.description}
                </div>
              </motion.div>

              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-end h-full w-full gap-6 p-6"
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  pointerEvents: isHovered ? "auto" : "none",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-h3-medium text-center">{member.name}</div>

                <div className="flex items-center">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src="/assets/icons/linkedin.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                      />
                    </a>
                  )}

                  {member.socials.telegram && (
                    <a
                      href={member.socials.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src="/assets/icons/telegram.svg"
                        alt="Telegram"
                        width={20}
                        height={20}
                      />
                    </a>
                  )}

                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="flex items-center p-4 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src="/assets/icons/email.svg"
                        alt="Email"
                        width={20}
                        height={20}
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;

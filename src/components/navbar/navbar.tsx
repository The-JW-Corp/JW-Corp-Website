"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import AnimatedText from "../ui/animated-text";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Go-To-Market", href: "#" },
    { title: "Projects", href: "#" },
    { title: "Contact", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="w-full flex justify-center h-16 fixed z-50 top-8">
      <div
        className={cn(
          "w-[80%] mx-4 h-[70px] justify-between flex items-center rounded-[100px] px-4 py-3",
          "bg-[rgba(255,255,255,0.1)] backdrop-blur-md",
          "transition-transform duration-300 ease-in-out",
          isNavbarVisible ? "translate-y-0" : "-translate-y-32"
        )}
      >
        <div className="pl-3">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/jwlogosolutionblanc.svg?alt=media&token=7c0af8d1-bdc2-4933-8911-2862ee8c33f7"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <ul className="flex gap-4">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-body-medium cursor-pointer hover:opacity-70 hover:transition-opacity duration-300"
            >
              <Link href={link.href}>
                <AnimatedText delay={index * 0.15}>{link.title}</AnimatedText>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Button href="#calendly" variant="primary">
            Book a call
          </Button>
          <Button href="https://t.me/jw_corp" variant="secondary">
            Chat on Telegram
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

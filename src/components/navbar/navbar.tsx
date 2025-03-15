"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import AnimatedText from "../ui/animated-text";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { title: "Home", href: "#hero" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="w-full flex justify-center h-16 fixed z-50 top-8">
        <div
          className={cn(
            "w-[80%] max-w-[1400px] mx-4 h-[70px] justify-between flex items-center rounded-[100px] px-4 py-3",
            "bg-[rgba(255,255,255,0.1)] backdrop-blur-md",
            "transition-transform duration-300 ease-in-out",
            "max-md:bg-transparent",
            isNavbarVisible ? "translate-y-0" : "-translate-y-32"
          )}
        >
          <div className="pl-2">
            <Image src="/assets/jwcorp.png" alt="logo" width={80} height={80} />
          </div>

          {/* Desktop Navigation */}
          <ul className={cn("flex gap-4", "max-md:hidden", "max-lg:gap-2")}>
            {links.map((link, index) => (
              <li
                key={index}
                className={cn(
                  "text-body-medium cursor-pointer",
                  "hover:opacity-70 hover:transition-opacity duration-300",
                  "max-lg:text-body-small"
                )}
              >
                <Link href={link.href}>
                  <AnimatedText animationType="fade" delay={index * 0.15}>
                    {link.title}
                  </AnimatedText>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className={cn("flex gap-2", "max-md:hidden")}>
            <Button
              href="https://calendly.com/jw_corp/exploration"
              openInNewTab
              className="max-lg:text-body-small max-lg:hidden"
              variant="primary"
            >
              Book a call
            </Button>
            <Button
              className="max-lg:text-body-small"
              href="https://t.me/jw_corp"
              openInNewTab
              variant="secondary"
            >
              Chat on Telegram
            </Button>
          </div>

          {/* Hamburger Menu Button */}
          <div className="hidden max-md:block">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 relative z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full block mb-1.5"
                animate={
                  isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full block mb-1.5"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full block"
                animate={
                  isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center gap-8">
              <ul className="flex flex-col items-center gap-6">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-h3 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="flex flex-col gap-4 w-64 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: links.length * 0.1, duration: 0.5 }}
              >
                <Button href="#calendly" variant="primary" className="w-full">
                  Book a call
                </Button>
                <Button
                  href="https://t.me/jw_corp"
                  variant="secondary"
                  className="w-full"
                >
                  Chat on Telegram
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

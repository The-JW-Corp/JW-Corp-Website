"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer } from "../ui/drawer";
import { usePathname } from "next/navigation";

interface FooterProps {
  langageState?: boolean;
}

const Footer: React.FC<FooterProps> = ({ langageState = false }) => {
  const year = new Date().getFullYear();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  // Legal content for the drawer
  const LegalContent = () => (
    <div className="p-6 md:p-8 flex flex-col gap-6 text-white">
      <h2 className="text-h3 max-md:text-body-large-medium">
        Legal Information
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-body-large-medium mb-2 text-primary-color">
            Company Information
          </h3>
          <p className="text-body-small text-gray-300">
            JW Corp
            <br />
            Tour CB21 - La Défense
            <br />
            16 Place de l'iris
            <br />
            92400 Courbevoie, France
            <br />
            SIRET: 123 456 789 00012
            <br />
            VAT Number: FR12345678900
          </p>
        </div>

        <div>
          <h3 className="text-body-large-medium mb-2 text-primary-color">
            Privacy Policy
          </h3>
          <p className="text-body-small text-gray-300">
            JW Corp is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and disclose your personal
            information when you visit our website or use our services.
          </p>
        </div>

        <div>
          <h3 className="text-body-large-medium mb-2 text-primary-color">
            Cookie Policy
          </h3>
          <p className="text-body-small text-gray-300">
            Our website uses cookies to enhance your browsing experience. By
            continuing to use our website, you consent to our use of cookies
            in accordance with our Cookie Policy.
          </p>
        </div>

        <div>
          <h3 className="text-body-large-medium mb-2 text-primary-color">
            Terms of Service
          </h3>
          <p className="text-body-small text-gray-300">
            By accessing and using our website and services, you agree to be
            bound by these Terms of Service. Please read these terms carefully
            before using our website.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-[#0a0a0a] mt-24 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-between items-start">
          {/* Address and Copyright (Left) */}
          <div className="w-1/3 flex flex-col items-center">
            <div className="text-center space-y-2">
              <p className="text-sm leading-relaxed tracking-wide">
                Tour CB21 - La Défense <br />
                16 Place de l'iris <br />
                92400 Courbevoie, France <br />
              </p>
              <Drawer
                trigger={
                  <p className="text-xs mt-4 cursor-pointer group">
                    © {year}{" "}
                    <span className="text-primary-color group-hover:text-white transition-colors duration-500">
                      JW Corp
                    </span>
                    . All rights reserved
                  </p>
                }
                open={isDrawerOpen}
                onOpenChange={handleDrawerOpenChange}
                title="Legal Information"
                className="bg-[#0a0a0a] border-t border-[#97f0b8]/10"
              >
                <LegalContent />
              </Drawer>
            </div>
          </div>

          {/* Logo and Social Links (Center) */}
          <div className="w-1/3 flex flex-col items-center space-y-6">
            <Link
              href="/#"
              className="transform hover:opacity-70 transition-opacity duration-500"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/jwlogosolutionblanc.svg?alt=media&token=7c0af8d1-bdc2-4933-8911-2862ee8c33f7"
                alt="logo jwcorp"
                width={220}
                height={80}
                className="w-auto h-auto"
              />
            </Link>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/jwcorp_"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-500 hover:text-primary-color"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-8 h-8 fill-current"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/jwcorp/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-500 hover:text-primary-color"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-8 h-8 fill-current"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information (Right) */}
          <div className="w-1/3 flex flex-col items-center">
            <div className="text-center space-y-2">
              <p className="text-sm tracking-wide">
                {langageState ? "Tél:" : "Phone:"}
                <a
                  href="tel:06 18 28 62 67"
                  className="text-primary-color hover:text-white transition-colors duration-1000"
                >
                  {" "}
                  06 18 28 62 67{" "}
                </a>
                /
                <a
                  href="tel:07 70 07 84 84"
                  className="text-primary-color hover:text-white transition-colors duration-1000"
                >
                  {" "}
                  07 70 07 84 84
                </a>
              </p>
              <p className="text-sm tracking-wide">
                Email:
                <a
                  href="mailto:contact@jwcorp.fr"
                  className="text-primary-color hover:text-white transition-colors duration-1000"
                >
                  {" "}
                  contact@jwcorp.fr
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col items-center space-y-8 md:hidden">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center space-y-6">
            <Link
              href="/#"
              className="transform hover:opacity-70 transition-opacity duration-500"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/jwlogosolutionblanc.svg?alt=media&token=7c0af8d1-bdc2-4933-8911-2862ee8c33f7"
                alt="logo jwcorp"
                width={125}
                height={50}
                className="w-auto h-auto"
              />
            </Link>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/jwcorp_"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-500 hover:text-primary-color"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/jwcorp/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-500 hover:text-primary-color"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Address and Copyright */}
          <div className="text-center space-y-2">
            <p className="text-xs leading-relaxed tracking-wide">
              Tour CB21 - La Défense <br />
              16 Place de l'iris <br />
              92400 Courbevoie, France <br />
            </p>
            <Drawer
              trigger={
                <p className="text-xs mt-2 cursor-pointer group">
                  © {year}{" "}
                  <span className="text-primary-color group-hover:text-white transition-colors duration-500">
                    JW Corp
                  </span>
                  . All rights reserved
                </p>
              }
              open={isDrawerOpen}
              onOpenChange={handleDrawerOpenChange}
              title="Legal Information"
              className="bg-[#0a0a0a] border-t border-[#97f0b8]/10"
            >
              <LegalContent />
            </Drawer>
          </div>

          {/* Contact Information */}
          <div className="text-center space-y-2 pt-4 mt-4 border-t border-gray-800 w-full">
            <p className="text-xs tracking-wide">
              {langageState ? "Tél:" : "Phone:"}
              <a
                href="tel:06 18 28 62 67"
                className="text-primary-color hover:text-white transition-colors duration-1000"
              >
                {" "}
                06 18 28 62 67{" "}
              </a>
              /
              <a
                href="tel:07 70 07 84 84"
                className="text-primary-color hover:text-white transition-colors duration-1000"
              >
                {" "}
                07 70 07 84 84
              </a>
            </p>
            <p className="text-xs tracking-wide">
              Email:
              <a
                href="mailto:contact@jwcorp.fr"
                className="text-primary-color hover:text-white transition-colors duration-1000"
              >
                {" "}
                contact@jwcorp.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

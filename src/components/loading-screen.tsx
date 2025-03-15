"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(1);
  const [showComplete, setShowComplete] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        setFontLoaded(true);
        updateProgress();
      });
    } else {
      setTimeout(() => {
        setFontLoaded(true);
        updateProgress();
      }, 500);
    }

    if (typeof document !== "undefined") {
      const imgElements = document.querySelectorAll("img");
      setTotalImages(Math.max(imgElements.length, 1));

      let loadedCount = 0;

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;

            if (img.complete) {
              incrementImageCount();
            } else {
              img.addEventListener("load", incrementImageCount);
              img.addEventListener("error", incrementImageCount);
            }

            imageObserver.unobserve(img);
          }
        });
      });

      imgElements.forEach((img) => {
        imageObserver.observe(img);
      });

      function incrementImageCount() {
        loadedCount++;
        setImagesLoaded(loadedCount);
        updateProgress();
      }

      setTimeout(() => {
        if (progress < 100) {
          animateToCompletion(progress);
        }
      }, 7000);
    }

    function animateToCompletion(startFrom: number) {
      const duration = 1500;
      const increment = (100 - startFrom) / (duration / 50);

      const interval = setInterval(() => {
        setProgress((prev) => {
          const newValue = Math.min(prev + increment, 100);
          if (newValue >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowComplete(true);
            }, 800);
          }
          return newValue;
        });
      }, 50);
    }

    function updateProgress() {
      const fontWeight = 0.3;
      const imagesWeight = 0.7;

      const fontProgress = fontLoaded ? 100 : 0;
      const imagesProgress = (imagesLoaded / totalImages) * 100;

      const totalProgress = Math.round(
        fontProgress * fontWeight + imagesProgress * imagesWeight
      );

      const nextProgress = Math.min(totalProgress, 100);

      if (nextProgress > progress) {
        if (nextProgress === 100) {
          animateToCompletion(progress);
        } else {
          const interval = setInterval(() => {
            setProgress((prev) => {
              const increment = Math.max(
                0.5,
                Math.floor((nextProgress - prev) / 15)
              );
              const newValue = Math.min(prev + increment, nextProgress);

              if (newValue >= nextProgress) {
                clearInterval(interval);
              }

              return newValue;
            });
          }, 60);
        }
      }
    }
  }, [progress, imagesLoaded, totalImages]);

  useEffect(() => {
    if (showComplete && !isComplete) {
      setIsComplete(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 1200);
    }
  }, [showComplete, isComplete, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <div className="container mx-auto px-4 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Image
                src="/assets/jwcorp.png"
                alt="logo"
                width={80}
                height={80}
              />
            </motion.div>

            <motion.h2
              className="text-h3-medium text-white mb-8 font-clash"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              JW Corp
            </motion.h2>

            <motion.div
              className="text-[72px] font-medium text-primary-color mb-8 font-clash"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {Math.floor(progress)}%
            </motion.div>

            <div className="w-full max-w-md h-[3px] bg-[#1a1a1a] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <motion.p
              className="mt-4 text-body-small text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {progress < 20
                ? "Initializing..."
                : progress < 50
                ? "Loading resources..."
                : progress < 80
                ? "Preparing assets..."
                : progress < 99
                ? "Almost there..."
                : "Ready!"}
            </motion.p>

            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div
                className={cn(
                  "absolute w-[70%] h-[40%]",
                  "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                )}
              >
                <motion.div
                  className="w-[400px] h-[200px] bg-primary-color blur-[157px]"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

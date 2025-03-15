"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "./loading-screen";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setIsLoading(prevState => {
        if (prevState) return prevState;
        return false;
      });
    }, 4000);
    
    return () => clearTimeout(minLoadTime);
  }, []);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
      setIsLoading(false);
    }, 1200);
  };
  
  useEffect(() => {
    if (typeof document !== 'undefined' && isLoading) {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading]);

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      <div 
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PageWrapper; 
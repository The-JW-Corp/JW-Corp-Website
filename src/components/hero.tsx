"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Particles } from "./particles";
function hero() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center relative" id="hero">
        <div
          className={cn(
            "absolute w-[100%] h-[100%]",
            "top-0 left-0 flex items-center justify-center pointer-events-none"
          )}
        >
          <div className="w-[652px] h-[255px] bg-primary blur-[157px]"></div>
        </div>
        <div className="flex flex-col gap-4 text-center z-10">
          <div className={cn("text-body-medium text-[#FFFF5D]", "max-md:text-body-small-medium")}>
            Innovate, Build, Scale
          </div>
          <h1 className={cn("text-h1-medium", "max-md:text-h3-medium")}>We don’t just build. We ship.</h1>
          <p className={cn("text-body-medium", "max-md:text-body-small")}>
            We are crypto-native developers shaping the future of Web3. since
            2021
          </p>
          <div className="flex justify-center gap-4">
            <Button className="max-md:text-body-small max-md:px-4 max-md:py-[13px] max-md:h-fit" href="#calendly" size="lg" variant="primary">
              Book a call
            </Button>
            <Button className="max-md:text-body-small max-md:px-4 max-md:py-3 max-md:h-fit" href="https://t.me/jw_corp" size="lg" variant="secondary">
              Chat on Telegram
            </Button>
          </div>
        </div>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={25}
          color="#ffffff"
          refresh
        />
      </div>
    </>
  );
}
export default hero;

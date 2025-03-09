"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Particles } from "./particles";
function hero() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center relative">
        <div
          className={cn(
            "absolute w-[100%] h-[100%]",
            "top-0 left-0 flex items-center justify-center pointer-events-none"
          )}
        >
          <div className="w-[652px] h-[255px] bg-primary blur-[157px]"></div>
        </div>
        <div className="flex flex-col gap-4 text-center z-10">
          <div className="text-body-medium text-[#FFFF5D]">
            Innovate, Build, Scale
          </div>
          <h1 className="text-h1-medium">We don’t just build. We ship.</h1>
          <p className="text-body-medium">
            We are crypto-native developers shaping the future of Web3. since
            2017
          </p>
          <div className="flex justify-center gap-4">
            <Button href="#calendly" size="lg" variant="primary">
              Book a call
            </Button>
            <Button href="https://t.me/jw_corp" size="lg" variant="secondary">
              Chat on Telegram
            </Button>
          </div>
        </div>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          // color={color}
          color="#ffffff"
          refresh
        />
      </div>
    </>
  );
}
export default hero;

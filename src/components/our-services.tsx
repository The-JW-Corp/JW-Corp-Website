import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

function OurServices() {
  return (
    <>
      <div className="h-[100dvh] flex flex-col">
        <div className="flex flex-col items-center gap-4">
          <div
            className={cn(
              "flex flex-col w-fit h-fit justify-end py-4 px-6 rounded-radius-10 relative",
              "before:content-[''] before:absolute before:inset-0 before:rounded-radius-10 before:bg-gradient-to-bl before:from-white before:to-transparent before:-z-10",
              "after:content-[''] after:absolute after:inset-[1px] after:rounded-[calc(theme(borderRadius.radius-10)-1px)] after:bg-background after:-z-[5]",
              "text-body-normal-medium"
            )}
          >
            Our services
          </div>
          <div className="text-h2-medium max-w-[600px] text-center">
            Building, Designing, and Scaling Web3 Products.
          </div>
          <div className="text-white/80 text-body-large-regular max-w-[600px] text-center">
            From full-stack development to high-level advisory and product
            design, we ensure your project is built for long-term success.
          </div>
          <div className="flex gap-2">
            <Button href="#calendly" variant="primary" size="lg">
              Book a call
            </Button>
            <Button href="https://t.me/jw_corp" variant="secondary" size="lg">
              Chat on Telegram
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <div className="w-2/3 flex flex-col rounded-radius-10 border-r-1 border-white bg-white/10">
              <div>FullStack Development</div>
              <div>
                We develop secure, scalable, and efficient blockchain
                applications that bring your vision to life.
              </div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default OurServices;

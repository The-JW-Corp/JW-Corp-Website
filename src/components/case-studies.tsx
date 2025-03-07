import { cn } from "@/lib/utils";
import Label from "./ui/label";
import Image from "next/image";
function CaseStudies() {
  return (
    <div className="flex flex-col justify-center gap-4 h-[100dvh]">
      <Label>Case Studies</Label>
      <div className="text-h2-medium">
        Built for Web3. Proven in Production.
      </div>
      <div className="text-body-normal-regular">
        Every project we build solves a real problem in Web3—whether it&apos;s
        scalability, security, or user adoption. Here are some of our most
        impactful case studies.
      </div>
      <div
        className={cn(
          "w-[46dvw] mt-12 p-14 flex h-[500px] justify-end flex-col rounded-radius-10 border-r-1",
          "gap-4 border-white relative overflow-hidden before:content-[''] before:absolute before:inset-0",
          "before:bg-[url('/assets/nobrainer.png')] before:bg-cover before:bg-center before:opacity-40 before:-z-10"
        )}
      >
        <div>
          <Image
            src="/assets/nobrainer-logo.svg"
            alt="nobrainer-logo"
            width={120}
            height={120}
          />
        </div>
        <div className="text-h2-medium">
          NoBrainer
          <p className="text-body-normal-regular">dApp launching platform</p>
        </div>
        <p className="text-body">
          A DAO made up of European influencers asked us to develop a no-code
          tool for launching customizable ERC404 standard smart contracts.
        </p>
        <div className="flex gap-2">
          <Label size="small">Solidity</Label>
          <Label size="small">React</Label>
          <Label size="small">Next.js</Label>
          <Label size="small">Tailwind CSS</Label>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;

import Label from "../ui/label";
import { cn } from "@/lib/utils";
function Team() {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center gap-12">
      <div className="flex flex-col gap-4">
        <Label>Team</Label>
        <div className="text-h2-medium">
          Meet the Experts Behind Your Next Web3 Project{" "}
        </div>
        <div className="text-nody-normal-regular">
          A team of Web3-native developers, architects, and strategists turning
          ideas into reality.
        </div>
      </div>
      <div className="flex">
        <div
          className={cn(
            "flex flex-col justify-end gap-1 p-[30px] max-w-[386px] h-[400px] rounded-radius-6 relative",
            "before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center before:opacity-50 before:-z-10 before:bg-[url('/assets/rami.jpg')] before:rounded-radius-6"
          )}
        >
          <div
            className={cn(
              "p-[10px] text-body-small w-fit text-primary",
              "rounded-radius-6"
            )}
          >
            Founder
          </div>
          <div className="text-h3-medium">Mathéo</div>
          <div className="text-body">Full-Stack Smart Contract Developer</div>
          <div className="opacity-30 text-body-small">
            Solidity expert, building secure & scalable blockchain protocols.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;

"use client"
import Label from "../ui/label";
import { cn } from "@/lib/utils";
import { teamData } from "./team-data";

function Team() {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center gap-12">
      <div className="flex flex-col gap-4">
        <Label>Team</Label>
        <div className="text-h2-medium">
          Meet the Experts Behind Your Next Web3 Project{" "}
        </div>
        <div className="text-body-normal-regular">
          A team of Web3-native developers, architects, and strategists turning
          ideas into reality.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {teamData.map((member) => (
          <div
            key={member.id}
            className={cn(
              "flex flex-col justify-end gap-1 p-[30px] max-w-[386px] h-[400px] rounded-radius-6 relative",
              "before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center before:opacity-20 before:-z-10 before:rounded-radius-6"
            )}
            style={{
              "--member-bg": `url(${member.imageUrl})`
            } as React.CSSProperties}
          >
            <style jsx>{`
              div::before {
                background-image: var(--member-bg);
              }
            `}</style>
            <div
              className={cn(
                "p-[10px] text-body-small w-fit text-primary",
                "rounded-radius-6"
              )}
            >
              {member.role}
            </div>
            <div className="text-h3-medium">{member.name}</div>
            <div className="text-body">{member.title}</div>
            <div className="opacity-60 text-body-small">
              {member.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

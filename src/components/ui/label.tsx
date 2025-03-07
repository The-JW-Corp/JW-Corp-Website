import { cn } from "@/lib/utils";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small";
}

function Label({ children, className, size = "default" }: LabelProps) {
  return (
    <div
      className={cn(
        "flex flex-col w-fit h-fit justify-end rounded-radius-10 relative",
        "before:content-[''] before:absolute before:inset-0 before:rounded-radius-10 before:bg-gradient-to-bl before:from-white before:to-transparent before:-z-10",
        "after:content-[''] after:absolute after:inset-[1px] after:rounded-[calc(theme(borderRadius.radius-10)-1px)] after:bg-background after:-z-[5]",
        "text-body-normal-medium",
        size === "default" ? "py-4 px-6" : "py-2 px-4 text-body",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Label;

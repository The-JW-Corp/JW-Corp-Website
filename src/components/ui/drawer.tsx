"use client";

import * as React from "react";
import { Drawer as VaulDrawer } from "vaul";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
interface DrawerProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
  title?: string;
}

export function Drawer({
  trigger,
  children,
  className,
  open,
  onOpenChange,
  "aria-label": ariaLabel = "Dialog",
  "aria-hidden": ariaHidden,
  title,
}: DrawerProps) {
  return (
    <VaulDrawer.Root open={open} onOpenChange={onOpenChange}>
      <VaulDrawer.Trigger asChild>{trigger}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 bg-black/40" />
        <VaulDrawer.Content
          className={cn(
            "z-50 flex flex-col max-h-[80vh] rounded-t-[10px] w-[100vw] mt-24 !overflow-hidden fixed bottom-0 left-0 right-0 outline-none",
            "bg-[#0f0f0f] border-t border-[#97f0b8]/10 after:content-[''] after:absolute after:inset-0 after:bg-gray-5 after:z-[-1] after:[height:0%!important]",
            className
          )}
          aria-label={ariaLabel}
          aria-hidden={ariaHidden}
        >
          <VisuallyHidden asChild>
            <VaulDrawer.Title>{title}</VaulDrawer.Title>
          </VisuallyHidden>
          <div className="sticky top-0 z-30 h-[100px] flex items-center justify-center cursor-grab active:cursor-grabbing bg-gray-5 border-b border-gray-10">
            <VaulDrawer.Handle className="h-full w-full flex items-center justify-center" />
          </div>
          <div className="flex-1 pt-4 bg-gray-5 overflow-y-auto">
            {children}
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root> 
  );
}

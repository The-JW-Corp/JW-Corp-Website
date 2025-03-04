import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "select-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",
  {
    variants: {
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      variant: {
        default:
          "bg-background text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
        primary:
          "bg-primary rounded-radius-60 px-[12px] py-[6px] hover:opacity-70 hover:transition-opacity duration-300 disabled:bg-gray-4 disabled:text-subtle",
        secondary:
          "bg-transparent border border-white text-white rounded-radius-60 px-[12px] py-[6px] hover:opacity-70 hover:transition-opacity duration-300 disabled:border-border-gray-3 disabled:text-text-subtle",
        white:
          "bg-white text-black px-[12px] h-8 !typography-small-regular py-[6px] rounded-radius-8 hover:bg-white/80 disabled:bg-gray-4 disabled:text-text-subtle",
        destructive:
          "bg-danger-sell text-white py-[6px] px-[12px] hover:bg-danger-sell-hover disabled:bg-border-gray disabled:text-gray-3 disabled:rounded-radius-8",
        outline:
          "border border-sky-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
        ghost:
          "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  openInNewTab?: boolean;
}

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & 
  LinkProps & {
    className?: string;
    openInNewTab?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, openInNewTab = false, ...props }, ref) => {
    if (href) {
      const linkProps: ButtonLinkProps = {
        href,
        className: cn(buttonVariants({ variant, size, className })),
        target: openInNewTab ? "_blank" : undefined,
        rel: openInNewTab ? "noopener noreferrer" : undefined,
      };
      
      return (
        <Link
          {...linkProps}
        >
          {props.children}
        </Link>
      );
    }
    
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
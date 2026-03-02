import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-mono uppercase tracking-wider ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-transparent border-2 border-primary text-primary cyber-chamfer-sm hover:bg-primary hover:text-primary-foreground hover:shadow-neon hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground border-2 border-destructive cyber-chamfer-sm hover:shadow-[0_0_10px_rgba(255,51,102,0.5)] hover:scale-105",
        outline:
          "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary hover:shadow-neon-sm hover:scale-105",
        secondary:
          "bg-transparent border-2 border-secondary text-secondary cyber-chamfer-sm hover:bg-secondary hover:text-secondary-foreground hover:shadow-neon-secondary hover:scale-105",
        ghost: "text-muted-foreground hover:bg-accent/10 hover:text-accent hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        glitch: "bg-primary text-primary-foreground cyber-chamfer-sm shadow-neon hover:brightness-110 hover:scale-105 hover:shadow-neon-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

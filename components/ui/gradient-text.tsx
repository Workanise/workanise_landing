import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#00faa7] to-[#6e7777] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  )
}


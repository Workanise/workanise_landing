"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string
  children: React.ReactNode
}

export function GlowCard({
  glowColor = "#00faa7",
  className,
  children,
  ...props
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800",
        "before:absolute before:-inset-[1px] before:rounded-xl before:p-[1px]",
        "before:bg-gradient-to-b before:from-zinc-800 before:to-transparent",
        "before:-z-10",
        className
      )}
      style={{
        '--glow-color': glowColor,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
}


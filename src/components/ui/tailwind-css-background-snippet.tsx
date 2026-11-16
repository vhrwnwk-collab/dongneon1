import { cn } from "@/lib/utils";
import React from "react";

export interface HeroBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const Hero = ({ className, children }: HeroBackgroundProps = {}) => {
  return (
    <div className={cn("w-full relative", children ? "" : "h-screen", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      {children}
    </div>
  );
};

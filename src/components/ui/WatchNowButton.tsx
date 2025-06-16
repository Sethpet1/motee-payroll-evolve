import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface WatchNowButtonProps {
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
}

const WatchNowButton: React.FC<WatchNowButtonProps> = ({ 
  size = "lg", 
  className,
  children = "Watch Now",
  onClick,
  variant = "default"
}) => {
  const baseClasses = "font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group";
  
  const variantClasses = {
    default: "bg-motee-orange hover:bg-orange-600 text-white",
    outline: "border-2 border-motee-orange text-motee-orange hover:bg-motee-orange hover:text-white",
    ghost: "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-6 text-lg"
  };

  return (
    <Button 
      size={size}
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <div className="flex items-center space-x-2 relative z-10">
        <Play className="h-5 w-5 fill-current" />
        <span>{children}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Button>
  );
};

export default WatchNowButton; 
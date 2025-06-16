import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookDemoButtonProps {
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
}

const BookDemoButton: React.FC<BookDemoButtonProps> = ({ 
  size = "lg", 
  className,
  children = "Book Demo",
  onClick,
  variant = "default"
}) => {
  const baseClasses = "font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group";
  
  const variantClasses = {
    default: "bg-motee-orange hover:bg-orange-500 text-white",
    outline: "border-2 border-motee-orange text-motee-orange hover:bg-motee-orange hover:text-white"
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
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Button>
  );
};

export default BookDemoButton; 
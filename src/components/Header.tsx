
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-motee-blue to-motee-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold gradient-text">MOTEE Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-motee-gray hover:text-motee-blue transition-colors duration-200">Mission</a>
            <a href="#vision" className="text-motee-gray hover:text-motee-blue transition-colors duration-200">Vision</a>
            <a href="#solutions" className="text-motee-gray hover:text-motee-blue transition-colors duration-200">Solutions</a>
            <a href="#contact" className="text-motee-gray hover:text-motee-blue transition-colors duration-200">Contact</a>
            <Button className="bg-motee-orange hover:bg-motee-orange-dark text-white animate-pulse-glow">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#mission" className="block px-3 py-2 text-motee-gray hover:text-motee-blue transition-colors duration-200">Mission</a>
              <a href="#vision" className="block px-3 py-2 text-motee-gray hover:text-motee-blue transition-colors duration-200">Vision</a>
              <a href="#solutions" className="block px-3 py-2 text-motee-gray hover:text-motee-blue transition-colors duration-200">Solutions</a>
              <a href="#contact" className="block px-3 py-2 text-motee-gray hover:text-motee-blue transition-colors duration-200">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-motee-orange hover:bg-motee-orange-dark text-white">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MSLBackground from '@/components/MSLBackground';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsMenu = [
    { name: "HR Management", href: "/solutions/hr-management" },
    { name: "Leave and Absence", href: "/solutions/leave-absence" },
    { name: "Payroll", href: "/solutions/payroll" },
    { name: "Time & Attendance", href: "/solutions/time-attendance" },
    { name: "Performance Management", href: "/solutions/performance" },
    { name: "E-Learning", href: "/solutions/e-learning" },
  ];

  const whoWeHelpMenu = [
    { name: "SMEs", href: "/who-we-help/smes" },
    { name: "Medium & Large Enterprise", href: "/who-we-help/enterprise" },
    { name: "Public Sector", href: "/who-we-help/public-sector" },
  ];

  return (
    <>
      <MSLBackground />
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-motee-green to-motee-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent">
                  MOTEE Solutions
                </span>
                <span className="text-xs text-gray-500">Revolutionizing Payroll</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex items-center space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-medium bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent hover:from-motee-orange hover:to-motee-green transition-all duration-300">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {solutionsMenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-motee-green"
                        >
                          <div className="text-sm font-medium leading-none">{item.name}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-medium bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent hover:from-motee-orange hover:to-motee-green transition-all duration-300">
                    Who We Help
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-3 p-4">
                      {whoWeHelpMenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-motee-green"
                        >
                          <div className="text-sm font-medium leading-none">{item.name}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/why-msl"
                    className="h-12 px-4 flex items-center text-gray-700 hover:text-motee-green hover:bg-gray-50"
                  >
                    Why MSL
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about-msl"
                    className="h-12 px-4 flex items-center text-gray-700 hover:text-motee-green hover:bg-gray-50"
                  >
                    About MSL
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/calculator"
                    className="h-12 px-4 flex items-center text-gray-700 hover:text-motee-green hover:bg-gray-50"
                  >
                    Calculator
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/pricing"
                    className="h-12 px-4 flex items-center text-gray-700 hover:text-motee-green hover:bg-gray-50"
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button
                    asChild
                    className="h-12 px-6 bg-gradient-to-r from-motee-green to-motee-orange hover:from-motee-orange hover:to-motee-green text-white font-medium"
                  >
                    <Link to="/book-demo">Book a Demo</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

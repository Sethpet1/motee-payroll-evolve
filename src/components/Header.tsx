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
import BookDemoButton from '@/components/ui/BookDemoButton';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileMenuOpen]);

  const solutionsMenu = [
    { name: "HR Management", href: "/solutions/hr-management", desc: "Centralize employee data and HR processes." },
    { name: "Leave and Absence", href: "/solutions/leave-absence", desc: "Automate leave requests and approvals." },
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-sm shadow-md' : 'bg'
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
                  MOTEE Solutions Limited (MSL)
            </span>
                <span className="text-xs text-gray-500">One Stop Shop for Your Payroll Solutions</span>
              </div>
          </Link>

          {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex items-center space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-medium bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent hover:from-motee-orange hover:to-motee-green hover:bg-gray-50/50 transition-all duration-300">
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4 text-black hover:text-motee-green transition-colors duration-300" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-0 p-0 border border-gray-800 rounded-xl shadow-2xl bg-black overflow-hidden">
                      {solutionsMenu.map((item, idx) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={
                            "block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors text-white hover:bg-motee-orange/90 hover:text-black" +
                            (idx !== solutionsMenu.length - 1 ? " border-b border-gray-800" : "")
                          }
                        >
                          <div className="text-base font-semibold leading-none">{item.name}</div>
                          {item.desc && (
                            <div className="text-xs text-gray-300">{item.desc}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-medium bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent hover:from-motee-orange hover:to-motee-green hover:bg-gray-50/50 transition-all duration-300">
                    Who We Help
                    <ChevronDown className="ml-1 h-4 w-4 text-black hover:text-motee-green transition-colors duration-300" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-0 p-0 border border-gray-800 rounded-xl shadow-2xl bg-black overflow-hidden">
                      {whoWeHelpMenu.map((item, idx) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={
                            "block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors text-white hover:bg-motee-orange/90 hover:text-black" +
                            (idx !== whoWeHelpMenu.length - 1 ? " border-b border-gray-800" : "")
                          }
                        >
                          <div className="text-base font-semibold leading-none">{item.name}</div>
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
                <Link to="/book-demo">
                    <BookDemoButton />
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <div className="lg:hidden z-[100]">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-motee-green"
                aria-label="Open menu"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(true)}
                tabIndex={0}
                onTouchStart={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[99] bg-black/70 backdrop-blur-sm flex justify-end">
            <div 
              ref={mobileMenuRef} 
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
              className="w-72 max-w-full h-full bg-white shadow-xl p-6 flex flex-col space-y-2 animate-slide-left focus:outline-none"
            >
              <button
                className="self-end mb-4 text-gray-700 hover:text-motee-green text-2xl focus:outline-none focus:ring-2 focus:ring-motee-green"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                tabIndex={0}
                onTouchStart={() => setMobileMenuOpen(false)}
              >
                ×
              </button>
              <Link to="/" className="py-2 text-lg font-semibold text-motee-green hover:text-motee-orange" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <div className="border-t border-gray-200 my-2"></div>
              {/* Solutions Dropdown */}
              <details className="group">
                <summary className="py-2 text-lg font-semibold cursor-pointer text-gray-700 hover:text-motee-green flex items-center justify-between">Solutions <span className="ml-2">▼</span></summary>
                <div className="pl-4 flex flex-col space-y-1 mt-1">
                  {solutionsMenu.map((item) => (
                    <Link key={item.name} to={item.href} className="py-1 text-gray-600 hover:text-motee-green" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                  ))}
                </div>
              </details>
              {/* Who We Help Dropdown */}
              <details className="group">
                <summary className="py-2 text-lg font-semibold cursor-pointer text-gray-700 hover:text-motee-green flex items-center justify-between">Who We Help <span className="ml-2">▼</span></summary>
                <div className="pl-4 flex flex-col space-y-1 mt-1">
                  {whoWeHelpMenu.map((item) => (
                    <Link key={item.name} to={item.href} className="py-1 text-gray-600 hover:text-motee-green" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                  ))}
                </div>
              </details>
              <Link to="/why-msl" className="py-2 text-lg font-semibold text-gray-700 hover:text-motee-green" onClick={() => setMobileMenuOpen(false)}>Why MSL</Link>
              <Link to="/about-msl" className="py-2 text-lg font-semibold text-gray-700 hover:text-motee-green" onClick={() => setMobileMenuOpen(false)}>About MSL</Link>
              <Link to="/calculator" className="py-2 text-lg font-semibold text-gray-700 hover:text-motee-green" onClick={() => setMobileMenuOpen(false)}>Calculator</Link>
              <Link to="/pricing" className="py-2 text-lg font-semibold text-gray-700 hover:text-motee-green" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/book-demo" className="py-2 text-lg font-semibold text-white bg-gradient-to-r from-motee-green to-motee-orange rounded-lg text-center mt-4" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
        </div>
      </div>
        )}
    </header>
    </>
  );
};

export default Header;

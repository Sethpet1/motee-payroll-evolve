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
                  MOTEE Solutions
            </span>
                <span className="text-xs text-gray-500">One Stop Shop for Your Payroll Solutions</span>
              </div>
          </Link>

          {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex items-center space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-bold text-motee-green hover:text-motee-orange transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-motee-orange rounded-none focus:outline-none focus:ring-0">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1200px] max-w-[99vw] grid grid-cols-3 gap-10 p-10 bg-black rounded-2xl shadow-2xl border-2 border-lime-500">
                      <div>
                        <h3 className="text-1xl font-bold text-motee-green mb-2">Solutions</h3>
                        <p className="text-motee-gray mb-4 text-white/80">Designed to simplify employee management and accelerate growth.</p>
                        <ul className="space-y-2">
                          <li><Link to="/solutions/hr-management" className="hover:text-motee-orange font-medium text-white">HR Management</Link></li>
                          <li><Link to="/solutions/leave-absence" className="hover:text-motee-orange font-medium text-white">Leave and Absence</Link></li>
                          <li><Link to="/solutions/payroll" className="hover:text-motee-orange font-medium text-white">Payroll</Link></li>
                          <li><Link to="/solutions/time-attendance" className="hover:text-motee-orange font-medium text-white">Time & Attendance</Link></li>
                        </ul>
                      </div>
                      <div className="border-l border-lime-500 pl-10">
                        <h3 className="text-1xl font-bold text-motee-green mb-2">For Organizations</h3>
                        <ul className="space-y-2">
                          <li><Link to="/solutions/performance" className="hover:text-motee-orange font-medium text-white">Performance Management</Link></li>
                          <li><Link to="/solutions/e-learning" className="hover:text-motee-orange font-medium text-white">E-Learning</Link></li>
                          <li><Link to="/solutions/startups" className="hover:text-motee-orange font-medium text-white">Startups</Link></li>
                          <li><Link to="/solutions/enterprise" className="hover:text-motee-orange font-medium text-white">Medium & Large Enterprise</Link></li>
                          <li><Link to="/solutions/public-sector" className="hover:text-motee-orange font-medium text-white">Public Sector</Link></li>
                        </ul>
                      </div>
                      <div className="border-l-2 border-lime-500 pl-10">
                        <h3 className="text-1xl font-bold text-motee-green mb-2">More Solutions</h3>
                        <ul className="space-y-2">
                          <li><Link to="/solutions/retail" className="hover:text-motee-orange font-medium text-white">Retail</Link></li>
                          <li><Link to="/solutions/manufacturing" className="hover:text-motee-orange font-medium text-white">Manufacturing</Link></li>
                          <li><Link to="/solutions/transport-logistics" className="hover:text-motee-orange font-medium text-white">Transport & Logistics</Link></li>
                          <li><Link to="/solutions/construction-real-estate" className="hover:text-motee-orange font-medium text-white">Construction & Real Estate</Link></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-bold text-motee-green hover:text-motee-orange transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-motee-orange rounded-none focus:outline-none focus:ring-0">
                    Who We Help
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1200px] max-w-[99vw] grid grid-cols-3 gap-10 p-10 bg-black rounded-2xl shadow-2xl border-2 border-lime-500">
                      <div>
                        <h3 className="text-1xl font-bold text-motee-green mb-2">SMEs</h3>
                        <ul className="space-y-2">
                          <li><Link to="/who-we-help/smes" className="hover:text-motee-orange font-medium text-white">Small & Medium Enterprises</Link></li>
                        </ul>
                      </div>
                      <div className="border-l border-lime-500 pl-10">
                        <h3 className="text-1xl font-bold text-motee-green mb-2">Enterprise</h3>
                        <ul className="space-y-2">
                          <li><Link to="/who-we-help/enterprise" className="hover:text-motee-orange font-medium text-white">Medium & Large Enterprise</Link></li>
                        </ul>
                      </div>
                      <div className="border-l-2 border-lime-500 pl-10">
                        <h3 className="text-1xl font-bold text-motee-green mb-2">Public Sector</h3>
                        <ul className="space-y-2">
                          <li><Link to="/who-we-help/public-sector" className="hover:text-motee-orange font-medium text-white">Public Sector</Link></li>
                        </ul>
                      </div>
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

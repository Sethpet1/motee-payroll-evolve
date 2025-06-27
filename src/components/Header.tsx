import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Briefcase, Building2, Users } from 'lucide-react';
import { Link } from "react-router-dom";
import WavyBackground from './ui/WavyBackground';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import BookDemoButton from '@/components/ui/BookDemoButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hrSubmenuOpen, setHrSubmenuOpen] = useState(false);
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
    { name: "Payroll", href: "/solutions/payroll", desc: "Streamline payroll processing and compliance." },
    { name: "Time & Attendance", href: "/solutions/time-attendance", desc: "Track time and attendance efficiently." },
    { name: "Performance Management", href: "/solutions/performance", desc: "Track and improve employee performance." },
    { name: "E-Learning", href: "/solutions/e-learning", desc: "Empower employees with online training." },
    { name: "Asset Tracking", href: "/hr-pages", desc: "Manage and track company assets." },
  ];

  const whoWeHelpMenu = [
    { name: "SMEs", href: "/who-we-help/smes" },
    { name: "Medium & Large Enterprise", href: "/who-we-help/enterprise" },
    { name: "Public Sector", href: "/who-we-help/public-sector" },
  ];

  const hrManagementSubmenu = [
    { name: "Cup", href: "/hr-management/cup" },
    { name: "Stick", href: "/hr-management/stick" },
    { name: "Time", href: "/hr-management/time" },
    { name: "Money", href: "/hr-management/money" },
    { name: "Bad", href: "/hr-management/bad" },
    { name: "Perform", href: "/hr-management/perform" },
    { name: "Candy", href: "/hr-management/candy" },
    { name: "Asset", href: "/hr-management/asset" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-1px shadow-gray-200 ">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-motee-green to-motee-orange rounded-lg flex items-center justify-center">
                <img src="/logos/ChatGPT Image Jun 18, 2025, 08_30_37 PM.png" alt="MSL Logo" className="w-100 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-poppins bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent tracking-tight">
                  MOTEE Solutions Ltd (MSL)
                </span>
                <span className="text-xs text-gray-500">One Stop Shop for Your Payroll Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex items-center space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-bold text-black hover:text-motee-green transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-motee-orange rounded-none focus:outline-none focus:ring-0">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <WavyBackground />
                    <div className="w-[1000px] max-w-[60vw] p-8 bg-white rounded-2xl shadow-lg border border-lime-500/50">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="col-span-3">
                          <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-1 bg-gradient-to-b from-motee-green to-motee-orange rounded-full"></div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent">
                              What Sets Us Apart
                            </h3>
                          </div>
                          <WavyBackground />
                          <div className="grid grid-cols-3 gap-6">
                            {solutionsMenu.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="group relative p-5 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300 hover:shadow-md"
                                onMouseEnter={item.name === "HR Management" ? () => setHrSubmenuOpen(true) : undefined}
                                onMouseLeave={item.name === "HR Management" ? () => setHrSubmenuOpen(false) : undefined}
                              >
                                <div className="flex items-start gap-4">
                                  <div className="p-3 rounded-xl bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                                    {/* You can add icons here based on item.name or another property */}
                                    <svg className="w-6 h-6 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                  </div>
                                  <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">{item.name}</h4>
                                    <p className="text-sm leading-relaxed text-gray-500 group-hover:text-motee-orange/70">{item.desc}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* HR Management Submenu - Floating */}
                {hrSubmenuOpen && (
                  <div 
                    className="fixed right-55 top-20 w-56 bg-white border-2 border-motee-green/20 rounded-xl shadow-2xl py-3 z-[70] backdrop-blur-sm animate-in slide-in-from-left-2 duration-200"
                    onMouseEnter={() => setHrSubmenuOpen(true)}
                    onMouseLeave={() => setHrSubmenuOpen(false)}
                    style={{ marginLeft: '100px' }}
                  >
                    <div className="px-3 py-2 border-b border-motee-green/10 mb-2">
                      <h5 className="text-sm font-semibold text-motee-green flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        HR Management
                      </h5>
                    </div>
                    {hrManagementSubmenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-motee-green/10 hover:to-motee-orange/10 hover:text-motee-green transition-all duration-200 border-l-2 border-transparent hover:border-motee-green/30"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-motee-green/30 group-hover:bg-motee-green transition-colors duration-200"></div>
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-bold text-black hover:text-motee-green transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-motee-orange rounded-none focus:outline-none focus:ring-0">
                    Who We Help
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[700px] max-w-[60vw] p-8 bg-white rounded-2xl shadow-lg border border-lime-500/50">
                      <div className="grid grid-cols-3 gap-6">
                        <Link
                          to="/who-we-help/smes"
                          className="group relative p-5 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300 hover:shadow-md flex flex-col items-center"
                        >
                          <div className="p-3 rounded-xl bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300 mb-3">
                            <Briefcase className="w-7 h-7 text-motee-green" />
                          </div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300 mb-1">SMEs</h4>
                          <p className="text-sm text-gray-500 group-hover:text-motee-orange/70 text-center">Small & Medium Enterprises</p>
                        </Link>
                        <Link
                          to="/who-we-help/enterprise"
                          className="group relative p-5 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300 hover:shadow-md flex flex-col items-center"
                        >
                          <div className="p-3 rounded-xl bg-motee-blue/10 group-hover:bg-motee-blue/20 transition-colors duration-300 mb-3">
                            <Building2 className="w-7 h-7 text-motee-blue" />
                          </div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-motee-blue transition-colors duration-300 mb-1">Enterprise</h4>
                          <p className="text-sm text-gray-500 group-hover:text-motee-orange/70 text-center">Medium & Large Enterprise</p>
                        </Link>
                        <Link
                          to="/who-we-help/public-sector"
                          className="group relative p-5 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300 hover:shadow-md flex flex-col items-center"
                        >
                          <div className="p-3 rounded-xl bg-motee-orange/10 group-hover:bg-motee-orange/20 transition-colors duration-300 mb-3">
                            <Users className="w-7 h-7 text-motee-orange" />
                          </div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-motee-orange transition-colors duration-300 mb-1">Public Sector</h4>
                          <p className="text-sm text-gray-500 group-hover:text-motee-orange/70 text-center">Government & Institutions</p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/why-msl"
                    className="h-12 px-4 font-bold flex items-center text-gray-700 hover:text-motee-green hover:bg-gray-50"
                  >
                    Why MSL
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about-msl"
                    className="h-12 px-4 font-bold flex items-center text-gray-700 hover:text-motee-green hover:bg-gray-50"
                  >
                    About MSL
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/calculator"
                    className="h-12 px-2 font-bold flex items-center text-gray-700 hover:text-motee-green hover:bg-gray-50"
                  >
                    Calculator
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/pricing"
                    className="h-12 px-4 font-bold flex items-center text-gray-700 hover:text-motee-green hover:bg-gray-50"
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
          <div className="fixed inset-0 z-[99] bg-black/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
            <div 
              ref={mobileMenuRef} 
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 w-72 max-w-[80vw] h-full bg-white shadow-xl p-6 flex flex-col space-y-2 transform transition-transform duration-300 ease-in-out translate-x-0"
              style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
            >
              <button
                className="self-end mb-4 text-gray-700 hover:text-motee-green text-3xl focus:outline-none focus:ring-2 focus:ring-motee-green"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
              <Link to="/" className="py-2 text-lg font-semibold text-motee-green hover:text-motee-orange" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <div className="border-t border-gray-200 my-2"></div>
              {/* Solutions Dropdown */}
              <details className="group">
                <summary className="py-2 text-lg font-semibold cursor-pointer text-gray-700 hover:text-motee-green flex items-center justify-between list-none">
                  Solutions <ChevronDown className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="pl-4 flex flex-col space-y-1 mt-1">
                  {solutionsMenu.map((item) => (
                    <Link key={item.name} to={item.href} className="py-1 text-gray-600 hover:text-motee-green" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                  ))}
                </div>
              </details>
              {/* Who We Help Dropdown */}
              <details className="group">
                <summary className="py-2 text-lg font-semibold cursor-pointer text-gray-700 hover:text-motee-green flex items-center justify-between list-none">
                  Who We Help <ChevronDown className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" />
                </summary>
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

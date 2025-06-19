import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
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
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div className="w-[1000px] max-w-[60vw] p-8 bg-white rounded-2xl shadow-lg border border-lime-500/50">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="col-span-3">
                          <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-1 bg-gradient-to-b from-motee-green to-motee-orange rounded-full"></div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent">
                              What Sets Us Apart
                            </h3>
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            <Link to="/solutions/hr-management" 
                              className="group relative p-5 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300 hover:shadow-md"
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                                  <svg className="w-6 h-6 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">HR Management</h4>
                                  <p className="text-sm leading-relaxed text-gray-500 group-hover:text-motee-orange/70">Centralize employee data and HR processes</p>
                                </div>
                              </div>
                            </Link>
                            <Link to="/solutions/leave-absence" 
                              className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                                  <svg className="w-5 h-5 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">Leave and Absence</h4>
                                  <p className="text-sm text-gray-500 mt-1 group-hover:text-motee-orange/70">Automate leave requests and approvals</p>
                                </div>
                              </div>
                            </Link>
                            <Link to="/solutions/payroll" 
                              className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                                  <svg className="w-5 h-5 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">Payroll</h4>
                                  <p className="text-sm text-gray-500 mt-1 group-hover:text-motee-orange/70">Streamline payroll processing and compliance</p>
                                </div>
                              </div>
                            </Link>
                            <Link to="/solutions/time-attendance" 
                              className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                                  <svg className="w-5 h-5 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">Time & Attendance</h4>
                                  <p className="text-sm text-gray-500 mt-1 group-hover:text-motee-orange/70">Track time and attendance efficiently</p>
                                </div>
                              </div>
                            </Link>
                            <Link to="/solutions/performance" 
                              className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                                  <svg className="w-5 h-5 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">Performance Management</h4>
                                  <p className="text-sm text-gray-500 mt-1 group-hover:text-motee-orange/70">Track and improve employee performance</p>
                                </div>
                              </div>
                            </Link>
                            <Link to="/solutions/e-learning" 
                              className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                                  <svg className="w-5 h-5 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">E-Learning</h4>
                                  <p className="text-sm text-gray-500 mt-1 group-hover:text-motee-orange/70">Empower employees with online training</p>
                                </div>
                              </div>
                            </Link>
                            <Link to="/hr-pages" 
                              className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                                  <svg className="w-5 h-5 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">Asset Tracking</h4>
                                  <p className="text-sm text-gray-500 mt-1 group-hover:text-motee-orange/70">Manage and track company assets</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-4 font-bold text-black hover:text-motee-green transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-motee-orange rounded-none focus:outline-none focus:ring-0">
                    Who We Help
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1000px] max-w-[60vw] grid grid-cols-3 gap-10 p-10 bg-white rounded-1xl shadow-1xl border-2 border-lime-500">
                      <div>
                        <h3 className="text-1xl font-bold text-motee-green mb-2">SMEs</h3>
                        <ul className="space-y-2">
                          <li><Link to="/who-we-help/smes" className="hover:text-motee-orange font- text-black">Small & Medium Enterprises</Link></li>
                        </ul>
                      </div>
                      <div className="border-l border-lime-500 pl-10">
                        <h3 className="text-1xl font-bold text-motee-green mb-2">Enterprise</h3>
                        <ul className="space-y-2">
                          <li><Link to="/who-we-help/enterprise" className="hover:text-motee-orange font-medium text-black">Medium & Large Enterprise</Link></li>
                        </ul>
                      </div>
                      <div className="border-l-2 border-lime-500 pl-10">
                        <h3 className="text-1xl font-bold text-motee-green mb-2">Public Sector</h3>
                        <ul className="space-y-2">
                          <li><Link to="/who-we-help/public-sector" className="hover:text-motee-orange font-medium text-black">Public Sector</Link></li>
                        </ul>
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

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const solutionsMenu = [
    { title: "HR Management", href: "/solutions/hr-management" },
    { title: "Leave and Absence", href: "/solutions/leave-absence" },
    { title: "Payroll", href: "/solutions/payroll" },
    { title: "Time & Attendance", href: "/solutions/time-attendance" },
    { title: "Performance Management", href: "/solutions/performance" },
    { title: "E-Learning", href: "/solutions/e-learning" },
  ];

  const whoWeHelpMenu = [
    { title: "SMEs", href: "/who-we-help/smes" },
    { title: "Medium & Large Enterprise", href: "/who-we-help/enterprise" },
    { title: "Public Sector", href: "/who-we-help/public-sector" },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-[100]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-motee-blue to-motee-green rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-motee-blue to-motee-green bg-clip-text text-transparent">
                MOTEE Solutions
              </span>
              <span className="text-xs text-motee-gray -mt-1">MSL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {/* Solutions Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center gap-1 text-motee-gray hover:text-motee-blue px-3 py-2 text-sm font-medium"
                onClick={() => toggleDropdown('solutions')}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </Button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-[200]">
                  {solutionsMenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Help Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center gap-1 text-motee-gray hover:text-motee-blue px-3 py-2 text-sm font-medium"
                onClick={() => toggleDropdown('whoWeHelp')}
              >
                Who We Help
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'whoWeHelp' ? 'rotate-180' : ''}`} />
              </Button>
              {activeDropdown === 'whoWeHelp' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-[200]">
                  {whoWeHelpMenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/why-msl" className="text-motee-gray hover:text-motee-blue px-3 py-2 text-sm font-medium">Why MSL</a>
            <a href="/about-msl" className="text-motee-gray hover:text-motee-blue px-3 py-2 text-sm font-medium">About MSL</a>
            <a href="/calculator" className="text-motee-gray hover:text-motee-blue px-3 py-2 text-sm font-medium">Calculator</a>
            <a href="/pricing" className="text-motee-gray hover:text-motee-blue px-3 py-2 text-sm font-medium">Pricing</a>
            
            <Button className="ml-4 bg-motee-orange hover:bg-motee-orange-dark text-white px-6 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200">
              Book a Demo
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('solutions')}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5 rounded-md"
                >
                  Solutions
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="pl-4 mt-1 space-y-1">
                    {solutionsMenu.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5 rounded-md"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Who We Help Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('whoWeHelp')}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5 rounded-md"
                >
                  Who We Help
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'whoWeHelp' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'whoWeHelp' && (
                  <div className="pl-4 mt-1 space-y-1">
                    {whoWeHelpMenu.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5 rounded-md"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/why-msl" className="block px-3 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5 rounded-md">Why MSL</a>
              <a href="/about-msl" className="block px-3 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5 rounded-md">About MSL</a>
              <a href="/calculator" className="block px-3 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5 rounded-md">Calculator</a>
              <a href="/pricing" className="block px-3 py-2 text-sm text-motee-gray hover:text-motee-blue hover:bg-motee-blue/5 rounded-md">Pricing</a>

              <div className="px-3 py-2 mt-4">
                <Button className="w-full bg-motee-orange hover:bg-motee-orange-dark text-white shadow-sm hover:shadow-md transition-all duration-200">
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

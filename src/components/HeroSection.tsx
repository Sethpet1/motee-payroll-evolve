import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import BookDemoButton from "@/components/ui/BookDemoButton";
import { ArrowRight, ChevronRight } from 'lucide-react';

const keyBenefits = [
  "Faster onboarding",
  "Accurate payroll processing",
  "Reliable compliance"
];

const complianceDetails = [
  `Year-end Reporting
  Reviewing payroll setting and reconciliation activities
  Updating employee records and notifying local authorities
  Producing and distributing final pay runs and reports`
];

const HeroSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCompliance, setShowCompliance] = useState(false);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="mt-12 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
              Revolutionizing <span className="text-motee-green">Payroll</span> Management in Nigeria
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Eliminate fraud, reduce costs by 40% and<br/>
              regain employee trust with our AI-powered<br/>
              payroll solution for Nigerian businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative group"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => { setShowDropdown(false); setShowCompliance(false); }}
                onTouchStart={() => setShowDropdown(!showDropdown)}
              >
                <Button 
                  size="lg" 
                  className="bg-motee-green hover:bg-motee-green-dark text-white px-8 py-6 text-lg font-semibold group"
                >
                  Key Benefits
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute left-0 mt-2 min-w-[12rem] w-full sm:w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-20 animate-fade-in block">
                    <ul className="flex flex-col block divide-y divide-gray-100">
                      <li className="px-6 py-5 text-motee-gray-dark text-base font-medium hover:bg-motee-green/10 transition-colors cursor-pointer text-left">
                        Faster onboarding
                      </li>
                      <li className="px-6 py-5 text-motee-gray-dark text-base font-medium hover:bg-motee-green/10 transition-colors cursor-pointer text-left">
                        Accurate payroll processing
                      </li>
                      <li 
                        className="relative px-6 py-5 text-motee-gray-dark text-base font-medium hover:bg-motee-green/10 transition-colors cursor-pointer text-left flex items-center justify-between"
                        onMouseEnter={() => setShowCompliance(true)}
                        onMouseLeave={() => setShowCompliance(false)}
                        onTouchStart={e => { e.stopPropagation(); setShowCompliance(!showCompliance); }}
                      >
                        <span>Reliable compliance</span>
                        <ChevronRight className="ml-2 h-4 w-4 text-motee-green" />
                        {/* Nested Dropdown */}
                        {showCompliance && (
                          <div className="absolute top-0 left-full ml-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-30 animate-fade-in block">
                            <ul className="flex flex-col block divide-y divide-gray-100 py-2">
                              {complianceDetails.map((detail, idx) => (
                                <li key={idx} className="px-6 py-3 text-motee-gray-dark text-sm font-normal hover:bg-motee-green/10 transition-colors cursor-pointer text-left whitespace-normal">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <BookDemoButton />
            </div>
            
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold bg-gradient-to-r from-motee-green to-orange-500 bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-gray-600">Fraud Prevention</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-motee-green bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600">Companies Trust Us</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '1.5s' }}>
                <div className="text-3xl font-bold bg-gradient-to-r from-motee-green to-orange-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="animate-slide-right">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500">
                <img 
                  src="/src/assets/Images/man-4334177_1280.jpg" 
                  alt="MOTEE Solutions Dashboard" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Biometric Authentication Active</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Real-time Fraud Detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Tax Compliance Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
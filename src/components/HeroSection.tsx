import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import WatchNowButton from "./ui/WatchNowButton";
import FeaturesSection from "@/components/FeaturesSection";
import PayrollSmilingSection from "@/components/PayrollSmilingSection";

const keyBenefits = [
  "Faster onboarding",
  "Accurate payroll processing",
  "Reliable compliance",
];

const complianceDetails = [
  `Year-end Reporting
  Reviewing payroll setting and reconciliation activities
  Updating employee records and notifying local authorities
  Producing and distributing final pay runs and reports`,
];

const HeroSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCompliance, setShowCompliance] = useState(false);

  return (
    <section className="relative py-4 lg:py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold mb-3 mt-4 animate-slide-up">
              Revolutionizing{" "}
              <span className="relative inline-block">
                <span className="text-motee-green font-bold bg-gradient-to-r from-motee-green via-motee-green/80 to-motee-green/60 bg-clip-text text-transparent transition-colors duration-700">
                  <span className="animate-payroll-wiggle text-motee-green font-bold inline-block">
                    Payroll
                  </span>
                </span>
              </span>{" "}
              Management in Nigeria
            </h1>
            <p
              className="font-14px text-gray-600 mb-8 mt-5 animate-slide-up justify-center"
              style={{ animationDelay: "0.1s" }}
            >
              Payroll is not just about numbers — it is about trust. <br /> Mistakes in
              payroll do not just cause frustration; they make employees feel
              undervalued. <br />
              <br /> At MSL, we have built a payroll system that puts your
              people first. With reliability, security, and care at its core,
              our solution ensures your employees are always paid accurately —
              and on time.
            </p>

            <div
              className="flex flex-coL sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="relative group"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => {
                  setShowDropdown(false);
                  setShowCompliance(false);
                }}
                onTouchStart={() => setShowDropdown(!showDropdown)}
              >
                <Button
                  size="lg"
                  className="bg-motee-green hover:bg-motee-green-dark text-white px-6 py-4 text-sm font-semibold group"
                >
                  Key Benefits
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute left-0 mt-2 min-w-[32rem] w-auto sm:w-auto bg-white rounded-xl shadow-xl border border-gray-100 z-20 animate-fade-in block px-2">
                    <ul className="flex flex-row divide-x divide-gray-100">
                      <li className="px-10 py-5 text-motee-gray-dark text-base font-medium hover:bg-motee-green/10 transition-colors cursor-pointer text-center">
                        Faster onboarding
                      </li>
                      <li className="px-10 py-5 text-motee-gray-dark text-base font-small hover:bg-motee-green/10 transition-colors cursor-pointer text-center">
                        Accurate payroll processing
                      </li>
                      <li
                        className="relative px-10 py-5 text-motee-gray-dark text-base font-medium hover:bg-motee-green/10 transition-colors cursor-pointer text-center flex items-center justify-between"
                        onMouseEnter={() => setShowCompliance(true)}
                        onMouseLeave={() => setShowCompliance(false)}
                        onTouchStart={(e) => {
                          e.stopPropagation();
                          setShowCompliance(!showCompliance);
                        }}
                      >
                        <span>Reliable compliance</span>
                        <ChevronRight className="ml-2 h-4 w-4 text-motee-green" />
                        {/* Nested Dropdown */}
                        {showCompliance && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-30 animate-fade-in block">
                            <ul className="flex flex-col block divide-y divide-gray-100 py-2">
                              {complianceDetails.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="px-6 py-3 text-motee-gray-dark text-sm font-normal hover:bg-motee-green/10 transition-colors cursor-pointer text-left whitespace-normal"
                                >
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
              <WatchNowButton />
            </div>

            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200">
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-motee-green to-orange-500 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Fraud Prevention</div>
              </div>
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-motee-green bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-gray-600">Companies Trust Us</div>
              </div>
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-motee-green to-orange-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="animate-slide-right">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 mb-12">
                <img
                  src="/assets/images/man-4334177_1280.jpg"
                  alt="MOTEE Solutions Dashboard"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Biometric Authentication
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Real-time Fraud Detection
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Automated Tax compliant Update
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Mobile-First Interface
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Nigeria Data Protection Regulation (NDPR) Compliant
                      Integrated System
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      PENCOM Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PayrollSmilingSection />
      <FeaturesSection />
    </section>
  );
};

export default HeroSection;

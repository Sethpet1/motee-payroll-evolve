import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WatchNowButton from "./ui/WatchNowButton";
import FeaturesSection from "@/components/FeaturesSection";
import PayrollSmilingSection from "@/components/PayrollSmilingSection";
import MSLBackground from "./MSLBackground";

const keyBenefits = [
  "Faster onboarding",
  "Accurate payroll processing",
  "Reliable compliance",
];
   
const mslBackground = [
  "/assets/images/MSL Background.png",
  "/assets/images/MSL Background.png",
  "/assets/images/MSL Background.png",
  "/assets/images/MSL Background.png",
  "/assets/images/MSL Background.png",
  "/assets/images/MSL Background.png",
  
];



const HeroSection = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleWatchNow = () => {
    setShowVideoModal(true);
  };

  const handleNavigateToPage = (path: string) => {
    setShowDropdown(false);
    navigate(path);
  };

  return (
    <section className="relative py-4 md:py-8 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <MSLBackground opacity={0.08} shadow={0.6} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 mt-4 animate-slide-up">
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
              Payroll is more than numbers — it's about trust, accuracy, and peace of mind. <br /> Mistakes in
              payroll do not just cause frustration; they make employees feel
              undervalued. <br />
              <br /> MSL delivers a people-first payroll platform built for speed, compliance, and fraud prevention. With reliability, security, and care at its core,
              our solution ensures your employees are always paid accurately —
              and on time.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="relative group w-full sm:w-auto"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => {
                  setShowDropdown(false);
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setShowDropdown(!showDropdown);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                }}
              >
                <Button
                  size="lg"
                  className="bg-[#8dca02] hover:bg-[#8dca02] text-black px-6 py-4 text-sm font-semibold w-full sm:w-auto transition-colors duration-200"
                >
                  Key Benefits
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 mt-2 w-[800px] max-w-[90vw] bg-white rounded-2xl shadow-xl border border-lime-500/50 z-20 animate-fade-in block p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-8 w-1 bg-gradient-to-b from-motee-green to-motee-orange rounded-full"></div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent">
                        Key Benefits
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        className="group relative p-5 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300 hover:shadow-md cursor-pointer"
                        onClick={() => handleNavigateToPage('/key-benefits/faster-onboarding')}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          handleNavigateToPage('/key-benefits/faster-onboarding');
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                            <svg className="w-6 h-6 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">Faster Onboarding</h4>
                            <p className="text-sm leading-relaxed text-gray-500 group-hover:text-motee-orange/70">Get your team up and running in minutes, not days</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="group relative p-5 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300 hover:shadow-md cursor-pointer"
                        onClick={() => handleNavigateToPage('/key-benefits/accurate-payroll-processing')}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          handleNavigateToPage('/key-benefits/accurate-payroll-processing');
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                            <svg className="w-6 h-6 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">Accurate Payroll Processing</h4>
                            <p className="text-sm leading-relaxed text-gray-500 group-hover:text-motee-orange/70">100% precision, every time — no missed hours or deductions</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="group relative p-5 rounded-xl hover:bg-gradient-to-r hover:from-motee-green/5 hover:to-motee-orange/5 transition-all duration-300 hover:shadow-md cursor-pointer"
                        onClick={() => handleNavigateToPage('/key-benefits/reliable-compliance')}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          handleNavigateToPage('/key-benefits/reliable-compliance');
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-motee-green/10 group-hover:bg-motee-green/20 transition-colors duration-300">
                            <svg className="w-6 h-6 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900 group-hover:text-motee-green transition-colors duration-300">Reliable Compliance</h4>
                            <p className="text-sm leading-relaxed text-gray-500 group-hover:text-motee-orange/70">Stay compliant with Nigerian regulations automatically</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full sm:w-auto">
                <WatchNowButton className="w-full sm:w-auto" onClick={handleWatchNow} />
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-12 pt-8 border-t border-gray-200">
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
                <div className="rounded-xl shadow-lg overflow-hidden aspect-square">
                  <img
                    src="/assets/images/IMG_6210.PNG"
                    alt="MOTEE Solutions Dashboard"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
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

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-xl font-semibold mb-2">MSL Payroll System Demo</h3>
                <p className="text-gray-300">Video content coming soon...</p>
                <p className="text-sm text-gray-400 mt-2">Experience our revolutionary payroll management system</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;

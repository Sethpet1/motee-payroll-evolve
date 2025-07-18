import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MSLBackground from "@/components/MSLBackground";
import { Check, Star, ArrowRight, Shield, Zap, Users } from "lucide-react";

interface PricingTier {
  name: string;
  description: string;
  includedFeatures: string[];
  optionalAddOns: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
  icon: React.ReactNode;
  color: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic Package",
    description: "Ideal for startups and small businesses starting their payroll journey",
    includedFeatures: [
      "Standard payroll processing",
      "Biometric employee validation",
      "Payslip generation",
      "Basic analytics & reporting",
      "Email-based support",
      "Bulk salary disbursement",
    ],
    optionalAddOns: [
      "Time Tracking Management",
      "Asset Tracking",
      "Performance Management",
      "E-Learning Modules",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    icon: <Users className="w-6 h-6" />,
    color: "motee-green"
  },
  {
    name: "Standard Package",
    description: "Designed for growing businesses with advanced operational needs",
    includedFeatures: [
      "Enhanced payroll processing",
      "Automated tax filings",
      "Detailed & customizable reporting",
      "Leave Management system",
      "Employee self-service (Android & iOS apps)",
      "Document management",
      "Screen sharing support for real-time assistance",
    ],
    optionalAddOns: [
      "Time Tracking Management",
      "Asset Tracking",
      "Performance Management",
      "E-Learning Modules",
    ],
    isPopular: true,
    buttonText: "Start Free Trial",
    buttonLink: "/contact",
    icon: <Zap className="w-6 h-6" />,
    color: "motee-blue"
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-site-bg relative">
      <MSLBackground />
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 text-center bg-gradient-to-b from-white to-site-bg">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-motee-blue via-motee-green to-motee-orange bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-motee-gray max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business. All plans include our core payroll features – no hidden fees, no surprises.
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-motee-gray-light">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-motee-green" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-motee-green" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-motee-orange" />
                <span>Trusted by 500+ Businesses</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`relative group transition-all duration-500 ${
                    tier.isPopular
                      ? "lg:scale-105"
                      : "hover:scale-[1.02]"
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-motee-orange to-motee-green text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Card */}
                  <div className={`relative h-full rounded-3xl p-8 transition-all duration-500 ${
                    tier.isPopular
                      ? "bg-gradient-to-br from-motee-blue via-motee-blue/95 to-motee-blue/90 text-white shadow-2xl border-2 border-motee-green/20"
                      : "bg-white text-motee-gray shadow-xl hover:shadow-2xl border border-motee-blue/10"
                  }`}>
                    
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 rounded-3xl opacity-5 ${
                      tier.isPopular ? "bg-white" : "bg-motee-blue"
                    }`} style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                          tier.isPopular 
                            ? "bg-white/20 text-white" 
                            : `bg-${tier.color}/10 text-${tier.color}`
                        }`}>
                          {tier.icon}
                        </div>
                        <h3 className={`text-2xl font-bold mb-3 ${
                          tier.isPopular ? "text-white" : "text-motee-blue"
                        }`}>
                          {tier.name}
                        </h3>
                        <p className={`text-base leading-relaxed ${
                          tier.isPopular ? "text-white/90" : "text-motee-gray"
                        }`}>
                          {tier.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-6">
                        {/* Included Features */}
                        <div>
                          <h4 className={`font-semibold mb-4 flex items-center gap-2 ${
                            tier.isPopular ? "text-motee-green" : "text-motee-orange"
                          }`}>
                            <Check className="w-4 h-4" />
                            Included Features
                          </h4>
                          <ul className="space-y-3">
                            {tier.includedFeatures.map((feature) => (
                              <li key={feature} className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  tier.isPopular 
                                    ? "bg-motee-green/20 text-motee-green" 
                                    : "bg-motee-orange/20 text-motee-orange"
                                }`}>
                                  <Check className="w-3 h-3" />
                                </div>
                                <span className={`text-sm leading-relaxed ${
                                  tier.isPopular ? "text-white/90" : "text-motee-gray"
                                }`}>
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Optional Add-Ons */}
                        <div>
                          <h4 className={`font-semibold mb-4 flex items-center gap-2 ${
                            tier.isPopular ? "text-motee-green/80" : "text-motee-orange/80"
                          }`}>
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              tier.isPopular ? "border-motee-green/60" : "border-motee-orange/60"
                            }`}></div>
                            Optional Add-Ons
                          </h4>
                          <ul className="space-y-3">
                            {tier.optionalAddOns.map((addon) => (
                              <li key={addon} className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  tier.isPopular 
                                    ? "bg-motee-green/10 text-motee-green/60" 
                                    : "bg-motee-orange/10 text-motee-orange/60"
                                }`}>
                                  <div className={`w-2 h-2 rounded-full ${
                                    tier.isPopular ? "bg-motee-green/60" : "bg-motee-orange/60"
                                  }`}></div>
                                </div>
                                <span className={`text-sm leading-relaxed ${
                                  tier.isPopular ? "text-white/70" : "text-motee-gray/70"
                                }`}>
                                  {addon}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <a
                          href={tier.buttonLink}
                          className={`block w-full py-4 px-6 text-center rounded-xl font-semibold transition-all duration-300 group/btn ${
                            tier.isPopular
                              ? "bg-gradient-to-r from-motee-green to-motee-orange text-white hover:shadow-lg hover:shadow-motee-green/20 hover:scale-[1.02]"
                              : "bg-motee-blue text-white hover:bg-motee-blue-dark hover:shadow-lg hover:scale-[1.02]"
                          }`}
                        >
                          <span className="flex items-center justify-center gap-2">
                            {tier.buttonText}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-motee-gray-dark">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-motee-blue/5 to-motee-green/5 rounded-2xl p-8 border border-motee-blue/10">
                  <h3 className="text-xl font-semibold mb-3 text-motee-blue">
                    Can I change plans later?
                  </h3>
                  <p className="text-motee-gray leading-relaxed">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle with no additional fees.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-motee-green/5 to-motee-orange/5 rounded-2xl p-8 border border-motee-green/10">
                  <h3 className="text-xl font-semibold mb-3 text-motee-green">
                    Is there a setup fee?
                  </h3>
                  <p className="text-motee-gray leading-relaxed">
                    No, there are no setup fees. You only pay the monthly subscription fee for your chosen plan. We believe in transparent pricing.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-motee-orange/5 to-motee-blue/5 rounded-2xl p-8 border border-motee-orange/10">
                  <h3 className="text-xl font-semibold mb-3 text-motee-orange">
                    What kind of support do you offer?
                  </h3>
                  <p className="text-motee-gray leading-relaxed">
                    All plans include email support. Standard Package includes priority support with faster response times and screen sharing for real-time assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage; 
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MSLBackground from "@/components/MSLBackground";
import BackgroundAnimations from "@/components/BackgroundAnimations";

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for small businesses just getting started with payroll",
    features: [
      "Up to 10 employees",
      "Basic payroll processing",
      "Tax calculations",
      "Payslip generation",
      "Email support",
      "Basic reporting",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
  },
  {
    name: "Professional",
    price: 99,
    description: "Ideal for growing businesses with more complex needs",
    features: [
      "Up to 50 employees",
      "Advanced payroll processing",
      "Automated tax filing",
      "HR management tools",
      "Priority support",
      "Advanced reporting",
      "Employee self-service",
      "Leave management",
    ],
    isPopular: true,
    buttonText: "Start Free Trial",
    buttonLink: "/contact",
  },
  {
    name: "Enterprise",
    price: 199,
    description: "Complete solution for large organizations",
    features: [
      "Unlimited employees",
      "Custom payroll solutions",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom reporting",
      "API access",
      "Multi-country payroll",
      "Advanced analytics",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-motee-blue/5 relative">
      <MSLBackground />
      <BackgroundAnimations />
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-motee-blue to-motee-green bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-motee-gray max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include our core payroll features with no hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-12 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    tier.isPopular
                      ? "bg-gradient-to-br from-motee-blue via-motee-blue/95 to-motee-blue/90 text-white shadow-2xl scale-105 border-2 border-motee-green/20 hover:scale-[1.02] hover:shadow-motee-green/20"
                      : "bg-white text-motee-gray shadow-lg hover:shadow-xl hover:scale-[1.02] border border-motee-blue/10"
                  }`}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-motee-green to-motee-orange text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      tier.isPopular ? "text-white" : "text-motee-blue"
                    }`}>
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold ${
                        tier.isPopular ? "text-white" : "text-motee-blue"
                      }`}>
                        £{tier.price}
                      </span>
                      <span className={`text-lg ${
                        tier.isPopular ? "text-white/80" : "text-motee-gray/80"
                      }`}>
                        /month
                      </span>
                    </div>
                    <p className={`text-sm ${
                      tier.isPopular ? "text-white/90" : "text-motee-gray/80"
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-3 ${
                            tier.isPopular 
                              ? "text-motee-green" 
                              : "text-motee-orange"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className={tier.isPopular ? "text-white" : "text-motee-gray"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.buttonLink}
                    className={`block w-full py-3 px-6 text-center rounded-lg font-semibold transition-all duration-300 ${
                      tier.isPopular
                        ? "bg-gradient-to-r from-motee-green to-motee-orange text-white hover:shadow-lg hover:shadow-motee-green/20 hover:scale-[1.02]"
                        : "bg-motee-blue text-white hover:bg-motee-blue/90 hover:shadow-lg hover:scale-[1.02]"
                    }`}
                  >
                    {tier.buttonText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-motee-gray">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-motee-blue/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-motee-blue">
                  Can I change plans later?
                </h3>
                <p className="text-motee-gray">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div className="bg-motee-blue/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-motee-blue">
                  Is there a setup fee?
                </h3>
                <p className="text-motee-gray">
                  No, there are no setup fees. You only pay the monthly subscription fee for your chosen plan.
                </p>
              </div>
              <div className="bg-motee-blue/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-motee-blue">
                  What kind of support do you offer?
                </h3>
                <p className="text-motee-gray">
                  All plans include email support. Professional and Enterprise plans include priority support with faster response times.
                </p>
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
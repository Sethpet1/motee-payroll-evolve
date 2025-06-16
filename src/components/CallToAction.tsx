import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import BookDemoButton from './ui/BookDemoButton';

const CallToAction = () => {
  const ctaOptions = [
    {
      title: "Basic",
      description: "Perfect for small businesses starting with payroll management.",
      action: "Get Started",
      color: "motee-green",
      primary: false,
      icon: ArrowRight
    },
    {
      title: "Professional",
      description: "Advanced features for growing businesses with complex needs.",
      action: "Choose Pro",
      color: "motee-orange",
      primary: true,
      icon: ArrowRight
    },
    {
      title: "Enterprise",
      description: "Custom solutions for large organizations.",
      action: "Contact Sales",
      color: "motee-blue",
      primary: false,
      icon: ArrowRight
    }
  ];

  const guarantees = [
    "100% Fraud Prevention",
    "24/7 Support",
    "Data Security",
    "Tax Compliance"
  ];

  return (
    <section id="contact" className="py-12 bg-[#FAF6E9] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl lg:text-4xl font-bold text-motee-gray-dark mb-4">
            Let's Fix Payroll
          </h2>
          <p className="text-base text-motee-gray max-w-2xl mx-auto leading-relaxed">
            Join 500+ Nigerian businesses that have eliminated payroll fraud and reduced costs by 40%.
          </p>
        </div>
        {/* Book a demo button */}
        <div className="text-center">
          <BookDemoButton />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

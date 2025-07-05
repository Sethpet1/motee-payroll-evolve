import React from 'react';
import { Check, Shield, FileText, Target, Award, Clock, Users, Zap } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const ReliableCompliance = () => {
  const complianceFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-motee-green" />,
      title: "Real-time Updates",
      description: "Stay informed with immediate updates on regulatory changes as they happen, ensuring you're always compliant."
    },
    {
      icon: <FileText className="w-8 h-8 text-motee-green" />,
      title: "Automated Calculations",
      description: "Smart automation handles tax and pension calculations, eliminating manual errors and ensuring accuracy."
    },
    {
      icon: <Target className="w-8 h-8 text-motee-green" />,
      title: "Seamless Integration",
      description: "Direct integration with government compliance platforms including PAYE, NHF, NSITF, and ITF."
    },
    {
      icon: <Zap className="w-8 h-8 text-motee-green" />,
      title: "Audit-Ready Records",
      description: "Complete visibility into payroll obligations with comprehensive audit trails and historical records."
    }
  ];

  const regulatoryBodies = [
    "PAYE (Pay As You Earn)",
    "NHF (National Housing Fund)",
    "NSITF (Nigeria Social Insurance Trust Fund)",
    "ITF (Industrial Training Fund)",
    "PENCOM (Pension Commission)",
    "FIRS (Federal Inland Revenue Service)"
  ];

  const complianceBenefits = [
    {
      icon: <Award className="w-8 h-8 text-motee-green" />,
      title: "Trust & Transparency",
      description: "Full visibility into your payroll obligations with complete audit trails and historical records."
    },
    {
      icon: <Clock className="w-8 h-8 text-motee-green" />,
      title: "Stay Ahead",
      description: "Real-time updates on regulatory changes ensure you're always ahead of compliance requirements."
    },
    {
      icon: <Users className="w-8 h-8 text-motee-green" />,
      title: "Built-in DNA",
      description: "Compliance isn't a checkbox — it's built into our DNA, preventing errors before they happen."
    }
  ];

  const complianceReports = [
    "Accurate statutory remittance",
    "Automated tax calculations",
    "Pension contribution tracking",
    "Real-time compliance monitoring",
    "Audit-ready documentation",
    "Government platform integration"
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Reliable Compliance: Stay Ahead of the Curve
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">
              Trust, Transparency, and Control
            </h2>
            <p className="text-l text-gray-600 mb-8 leading-relaxed">
              In today's dynamic regulatory environment, non-compliance isn't just risky — it's costly. 
              At MOTEE Solutions, we take the burden of ever-changing payroll and tax regulations off your shoulders, 
              so you can focus on growing your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">Real-time regulatory updates</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">Automated calculations</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">Government platform integration</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">Audit-ready records</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                What Makes Our Compliance Reliable?
              </h2>
              <p className="text-l text-gray-600">
                We blend deep regional expertise with smart automation to ensure every payroll run aligns with Nigeria's latest regulations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h4 className="text-xl font-semibold ml-3 text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                What We Deliver
              </h2>
              <p className="text-l text-gray-600">
                Whether you're managing a small business or a large enterprise, we deliver comprehensive solutions
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-motee-green/5 p-6 rounded-xl border border-motee-green/20">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Real-time updates on regulatory changes</span>
                </div>
              </div>
              <div className="bg-motee-green/5 p-6 rounded-xl border border-motee-green/20">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Automated tax and pension calculations</span>
                </div>
              </div>
              <div className="bg-motee-green/5 p-6 rounded-xl border border-motee-green/20">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Seamless integration with government compliance platforms (e.g., PAYE, NHF, NSITF, ITF)</span>
                </div>
              </div>
              <div className="bg-motee-green/5 p-6 rounded-xl border border-motee-green/20">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Accurate statutory remittance and reporting</span>
                </div>
              </div>
              <div className="bg-motee-green/5 p-6 rounded-xl border border-motee-green/20">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Audit-ready records and history for peace of mind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Government Platform Integration
              </h2>
              <p className="text-l text-gray-600">
                Seamless integration with all major Nigerian compliance platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regulatoryBodies.map((body, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Reports */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                What We Deliver
              </h2>
              <p className="text-l text-gray-600">
                Whether you're managing a small business or a large enterprise, we deliver comprehensive compliance solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceReports.map((report, index) => (
                <div key={index} className="bg-motee-green/5 p-6 rounded-xl border border-motee-green/20">
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{report}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Reliable Compliance */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Built into Our DNA
              </h2>
              <p className="text-l text-gray-600">
                Our systems are designed to prevent errors before they happen and provide full visibility into your payroll obligations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {complianceBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 bg-motee-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold mb-6 text-white">
              🔐 Trust, Transparency, and Control — that's Reliable Compliance with MOTEE
            </h2>
            <p className="text-l text-white/90 mb-8 leading-relaxed">
              With MOTEE, compliance isn't a checkbox — it's built into our DNA. Our systems are designed 
              to prevent errors before they happen and provide full visibility into your payroll obligations. 
              Join hundreds of Nigerian businesses that trust us for their compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-motee-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Compliant Today
              </button>
              <button className="px-8 py-4 bg-motee-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ReliableCompliance; 
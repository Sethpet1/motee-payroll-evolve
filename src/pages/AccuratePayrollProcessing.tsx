import React from 'react';
import { Check, Shield, Zap, FileText, Target, Award, Clock, Users } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const AccuratePayrollProcessing = () => {
  const accuracyAdvantages = [
    {
      icon: <Zap className="w-8 h-8 text-motee-green" />,
      title: "Automated Calculations",
      description: "From gross to net, taxes to benefits—every calculation is automated and aligned with Nigerian statutory regulations."
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-green" />,
      title: "Error-Proof Validation",
      description: "Real-time data validation and biometric staff verification reduce fraud and ensure only legitimate payouts."
    },
    {
      icon: <FileText className="w-8 h-8 text-motee-green" />,
      title: "Audit-Ready Reporting",
      description: "Every payroll run is traceable, reviewable, and ready for audit at a moment's notice."
    },
    {
      icon: <Target className="w-8 h-8 text-motee-green" />,
      title: "Zero Reconciliation Hassles",
      description: "Seamless bank integrations and built-in checks ensure your figures always balance."
    }
  ];

  const whyAccuracyMatters = [
    "Inaccurate payroll leads to frustrated employees, regulatory penalties, and broken trust.",
    "With MOTEE, you eliminate guesswork and manual errors.",
    "Our payroll engine delivers 100% precision, every time—no missed hours, no incorrect deductions, no late payments."
  ];

  const peaceOfMindFeatures = [
    {
      icon: <Users className="w-8 h-8 text-motee-green" />,
      title: "Scalable for Any Team Size",
      description: "Whether you're managing a team of 10 or 1,000, MOTEE's payroll solution guarantees smooth, accurate, and on-time salary processing."
    },
    {
      icon: <Clock className="w-8 h-8 text-motee-green" />,
      title: "Focus on Growth",
      description: "So you can focus on growing your business, not fixing payroll errors."
    },
    {
      icon: <Award className="w-8 h-8 text-motee-green" />,
      title: "Trusted by Nigerian Businesses",
      description: "Join hundreds of companies that trust MOTEE for their payroll processing needs."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Accurate Payroll Processing
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">
              You Can Trust
            </h2>
            <p className="text-l text-gray-600 mb-8 leading-relaxed">
              At MOTEE Solutions Ltd., we believe payroll is more than just numbers—it's about trust, 
              timeliness, and compliance. That's why accuracy sits at the heart of everything we do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">100% precision, every time</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">No missed hours or deductions</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Audit-ready reporting</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Zero reconciliation hassles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Accuracy Matters */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Why Accuracy Matters
              </h2>
              <p className="text-l text-gray-600">
                The cost of inaccurate payroll goes far beyond simple mistakes
              </p>
            </div>
            
            <div className="space-y-6">
              {whyAccuracyMatters.map((matter, index) => (
                <div key={index} className="bg-motee-green/5 p-6 rounded-xl border border-motee-green/20">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{matter}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Accuracy Advantage */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Our Accuracy Advantage
              </h2>
              <p className="text-l text-gray-600">
                Four key pillars that ensure your payroll is always accurate and compliant
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {accuracyAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-6">
                    {advantage.icon}
                    <h4 className="text-xl font-semibold ml-3 text-gray-900">{advantage.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind, Every Payday */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Peace of Mind, Every Payday
              </h2>
              <p className="text-l text-gray-600">
                Trust MOTEE to handle your payroll with the precision and care your employees deserve
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {peaceOfMindFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
              Pay Your People Right. Every Time. With MOTEE.
            </h2>
            <p className="text-l text-white/90 mb-8 leading-relaxed">
              Join the growing number of Nigerian businesses that trust MOTEE for accurate, 
              reliable, and compliant payroll processing. Experience the difference that 
              precision makes for your business and your employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-motee-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-motee-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AccuratePayrollProcessing; 
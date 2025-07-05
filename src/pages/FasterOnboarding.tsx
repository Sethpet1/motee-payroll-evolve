import React from 'react';
import { Check, Zap, Users, Clock, Shield, Target, Award, Rocket } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const FasterOnboarding = () => {
  const onboardingBenefits = [
    {
      icon: <Zap className="w-8 h-8 text-motee-green" />,
      title: "Zero Downtime",
      description: "Start working immediately with minimal disruption to your workflow. Our platform ensures seamless transition without any business interruption."
    },
    {
      icon: <Users className="w-8 h-8 text-motee-green" />,
      title: "No Learning Curve",
      description: "Our user-friendly interface makes adoption seamless for any team. Intuitive design means your staff can start using the system immediately."
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-green" />,
      title: "Immediate ROI",
      description: "The faster you start, the faster you see results — it's that simple. Begin experiencing the benefits of automated payroll from day one."
    },
    {
      icon: <Target className="w-8 h-8 text-motee-green" />,
      title: "Scalable Setup",
      description: "Add users, tools, and workflows with just a few clicks. Our platform grows with your business needs effortlessly."
    }
  ];

  const onboardingSteps = [
    "Platform activation and initial setup",
    "User account creation and permissions",
    "Workflow configuration and customization",
    "Team training and system familiarization",
    "Go-live with full system access",
    "Ongoing support and optimization"
  ];

  const whyChooseFastOnboarding = [
    {
      icon: <Clock className="w-8 h-8 text-motee-green" />,
      title: "Blazingly Fast",
      description: "Get your team up and running in minutes, not days. No long training sessions or complex integrations required."
    },
    {
      icon: <Award className="w-8 h-8 text-motee-green" />,
      title: "Smooth Experience",
      description: "Intuitive design ensures seamless adoption for any team size, from growing startups to established enterprises."
    },
    {
      icon: <Rocket className="w-8 h-8 text-motee-green" />,
      title: "Focus on Growth",
      description: "We remove friction so you can focus on what matters most: growing your business and serving your customers."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 via-orange-50 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Fast Onboarding, Real Results — Instantly
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">
              Minutes, Not Days
            </h2>
            <p className="text-l text-gray-600 mb-8 leading-relaxed">
              At Motee Solution, we understand that time is your most valuable asset. That's why we've made onboarding 
              not just simple, but blazingly fast. Whether you're a growing startup or an established enterprise, 
              our platform is built to get your team up and running in minutes, not days. No long training sessions. 
              No complex integrations. Just a smooth, intuitive experience from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">Minutes, not days</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">Zero learning curve</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">Immediate ROI</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">Scalable setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Benefits */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                What Fast Onboarding Means for You
              </h2>
              <p className="text-l text-gray-600">
                Four key benefits that transform your onboarding experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {onboardingBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-6">
                    {benefit.icon}
                    <h4 className="text-xl font-semibold ml-3 text-gray-900">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Simple Steps to Success
              </h2>
              <p className="text-l text-gray-600">
                Six streamlined steps to get your team up and running with MOTEE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onboardingSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-motee-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-600 font-medium">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fast Onboarding */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                The MOTEE Philosophy
              </h2>
              <p className="text-l text-gray-600">
                Fast onboarding isn't a feature — it's our philosophy
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {whyChooseFastOnboarding.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
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
              Ready to Experience Blazingly Fast Onboarding?
            </h2>
            <p className="text-l text-white/90 mb-8 leading-relaxed">
              Join hundreds of Nigerian businesses that have transformed their onboarding experience 
              with MOTEE's philosophy of removing friction. Start your journey to faster results today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-motee-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Onboarding
              </button>
              <button className="px-8 py-4 bg-motee-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FasterOnboarding; 
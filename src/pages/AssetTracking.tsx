import React from 'react';
import { Eye, Shield, TrendingUp, Clock, CheckCircle, Laptop, Smartphone, Key, HardHat, Wifi, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AssetTracking = () => {
  const trackingBenefits = [
    {
      icon: <Eye className="w-8 h-8 text-motee-green" />,
      title: 'Real-Time Visibility',
      description: 'Know exactly what assets you own, who is using them, and where they are at any time.',
      color: 'text-motee-green'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-motee-blue" />,
      title: 'Informed Decision-Making',
      description: 'Make smarter business decisions with data-driven insights that improve planning for repairs, replacements, or reallocations.',
      color: 'text-motee-blue'
    },
    {
      icon: <Clock className="w-8 h-8 text-motee-orange" />,
      title: 'Streamlined Offboarding',
      description: 'Ensure all company assets are returned before employees leave, preventing lost or unaccounted-for equipment.',
      color: 'text-motee-orange'
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-green" />,
      title: 'Reduced Loss & Theft',
      description: 'Minimize asset leakage by automatically logging movements and receiving alerts for unauthorized access or misplaced items.',
      color: 'text-motee-green'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-motee-blue" />,
      title: 'Improved Productivity',
      description: 'Eliminate time spent on manual checks by automating asset tracking and ensuring assets are easy to locate.',
      color: 'text-motee-blue'
    }
  ];

  const assetTypes = [
    {
      icon: <Laptop className="w-8 h-8 text-motee-green" />,
      title: 'Laptops or Mobile Devices',
      description: 'Computers, tablets, and smartphones assigned to employees'
    },
    {
      icon: <Key className="w-8 h-8 text-motee-blue" />,
      title: 'ID Cards or Access Badges',
      description: 'Security credentials and building access cards'
    },
    {
      icon: <HardHat className="w-8 h-8 text-motee-orange" />,
      title: 'Uniforms or Safety Gear',
      description: 'Work clothing and protective equipment'
    },
    {
      icon: <FileText className="w-8 h-8 text-motee-green" />,
      title: 'Work Tools or Equipment',
      description: 'Specialized tools and equipment for job functions'
    },
    {
      icon: <Wifi className="w-8 h-8 text-motee-blue" />,
      title: 'SIM Cards, Routers, or Connectivity Assets',
      description: 'Network and communication devices'
    }
  ];

  const clearanceSteps = [
    {
      step: '1',
      title: 'Verification',
      description: 'Ensure all assigned items are confirmed by IT or your department, ensuring accountability for every asset.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: '2',
      title: 'Return',
      description: 'Return all physical items in good condition and clear any software or digital assets to complete the return.',
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Logging',
      description: 'Once returned, the asset is logged as "Returned" in the ESS portal to finalize your exit clearance.',
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const problemsWithoutTracking = [
    {
      title: 'Eliminate Wasted Resources',
      description: 'Save time and money by ensuring that assets are always accounted for.'
    },
    {
      title: 'Reduced Operational Costs',
      description: 'Reduce costs associated with misplaced or underutilized assets.'
    },
    {
      title: 'Compliance Assurance',
      description: 'Stay compliant with regulatory requirements and avoid costly penalties.'
    },
    {
      title: 'Improved Productivity',
      description: 'Enhance efficiency by knowing exactly where your assets are and how they are being used.'
    }
  ];

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Asset Tracking & Clearance
              </h1>
              <p className="text-l opacity-90 leading-relaxed">
              In today's competitive business environment, every organization needs tools to enhance efficiency, reduce costs, and optimize resource utilization.
              </p>
              <p className="text-l opacity-90 mt-4">
              Yet, one often overlooked but mission-critical element is effective asset tracking.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="rounded-xl shadow-2xl overflow-hidden aspect-video bg-white/10 backdrop-blur-sm">
                <img src="/assets/images/ChatGPT Image Aug 1, 2025, 11_29_16 PM.png" alt="Asset Tracking" className="w-full h-full object-fit" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-8">
              The Case for a Robust Asset Tracking System
            </h2>
            <p className="text-l text-gray-600 mb-8">
              Without proper tracking, company assets can easily go missing, become underutilised, or remain unaccounted for — leading to:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problemsWithoutTracking.map((problem, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                  <h3 className="text-gray-900 font-bold mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
            By implementing a strategic, technology-driven asset tracking solution, organisations gain:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackingBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-${benefit.color.split('-')[1]}/10 rounded-full flex items-center justify-center mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTEE Promise Section */}
      <section className="py-20 bg-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold mb-6">
            At Motee Solutions, we ensure accountability and transparency in asset management.
            </h2>
            <p className="text-l opacity-90">
            With our robust system, we help you track and manage all company assets in real-time, giving you the confidence that everything is where it should be.
            </p>
          </div>
        </div>
      </section>

      {/* What is Asset Tracking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">What is Asset Tracking?</h2>
              <p className="text-l text-gray-600 mb-8">
                Asset Tracking is the process of monitoring and recording all company-owned items that are in an employee's possession during their employment.
              </p>
              <p className="text-l text-gray-600 mb-8">
              Asset tracking is the process of monitoring and recording all company-owned items that are in an employee's possession during their employment. It ensures that all assets are accounted for throughout their lifecycle, from assignment to return.
              </p>
              <p className="text-l text-gray-600 mb-8">
              As part of the employee offboarding process, all assigned assets must be returned and cleared. This is a mandatory step before an employee can fully exit the company.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {assetTypes.map((asset, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-motee-green/10 rounded-lg flex items-center justify-center">
                    {asset.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{asset.title}</h4>
                    <p className="text-gray-600">{asset.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clearance Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              Clearance Process
            </h2>
            <p className="text-l text-gray-600 max-w-3xl mx-auto">
            Before an employee's exit can be finalized, all assigned assets must be properly cleared through our systematic and automated process.
            </p>
            <p className="text-l text-gray-600 mt-4 max-w-3xl mx-auto">
            Our solution ensures seamless clearance by tracking and managing all assets during offboarding, preventing loss and reducing the risk of unaccounted equipment.
            </p>
            <p className="text-l text-gray-600 mt-4 max-w-3xl mx-auto">
            Start Your Asset Tracking Journey Today
            </p>
            <p className="text-semibold font-bold text-gray-600 mt-4 max-w-4xl mx-auto">
            Contact us for a free demo and see how our asset tracking system can improve your efficiency and reduce costs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {clearanceSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-100 text-black p-8 rounded-xl text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="opacity-90">{step.description}</p>
                </div>
                {index < clearanceSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-motee-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to View Assets Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">How to View Your Assigned Assets</h2>
              <div className="bg-motee-green/10 p-6 rounded-lg mb-6">
                <p className="text-motee-green font-semibold text-lg mb-2">Go to: ESS Portal → My Profile → Assets</p>
                <p className="text-gray-700">
                  You'll see a list of all assigned items, along with their status, assigned date, and return instructions.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-12 h-12 text-motee-green mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Asset List</h4>
                  <p className="text-gray-600">Complete inventory of assigned items</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-12 h-12 text-motee-blue mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Status Tracking</h4>
                  <p className="text-gray-600">Real-time status of each asset</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-12 h-12 text-motee-orange mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Return Instructions</h4>
                  <p className="text-gray-600">Clear guidelines for asset return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-1xl md:text-2xl font-bold mb-6">
              Transform Your Asset Management Today
            </h2>
            <p className="text-l opacity-90 mb-8">
              Join organizations that have eliminated asset loss and improved operational efficiency with MOTEE's comprehensive asset tracking solution.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-motee-green hover:bg-gray-100">
              Get Started with Asset Tracking
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AssetTracking; 
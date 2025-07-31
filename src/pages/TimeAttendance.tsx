import React from 'react';
import { Check, Clock, Shield, TrendingUp, Users, BarChart3, Smartphone, MapPin, Calendar, Zap, Target, Award, Building2, Eye, FileText, Smartphone as Mobile } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const TimeAttendance = () => {
  const whyItMatters = [
    {
      title: "Accuracy",
      description: "Track work hours with exact timestamps to avoid manual errors."
    },
    {
      title: "Compliance with labour laws", 
      description: "Ensure working hours align with labour regulations."
    },
    {
      title: "Informed decision-making",
      description: "Use attendance data to make smarter staffing choices."
    },
    {
      title: "Improved workforce productivity",
      description: "Identify trends and reduce time wastage."
    }
  ];
  

  const keyBenefits = [
    {
      icon: <Shield className="w-8 h-8 text-motee-green" />,
      title: "Reduce Manual Errors",
      description: "Automatically track time to avoid typing errors and stop time theft."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-motee-green" />,
      title: "Increase Efficiency & Profitability",
      description: "Streamline scheduling, time tracking, and payroll processing—all from a single platform."
    },
    {
      icon: <FileText className="w-8 h-8 text-motee-green" />,
      title: "Ensure Compliance",
      description: "Follow Nigerian labour laws easily with automatic reports and records ready for audits."
    },
    {
      icon: <Target className="w-8 h-8 text-motee-green" />,
      title: "Lower Labour Costs",
      description: "Control overtime, forecast staffing needs, and deploy the right people at the right time—for the right cost."
    }
  ];

  const advancedFeatures = [
    {
      title: "Smart Shift Scheduling",
      description: "Easily assign custom shifts, manage flexible shift patterns, and accommodate flexible or fixed work hours."
    },
    {
      title: "Staff Planning & Budgeting",
      description: "Predict workforce needs and plan payroll costs ahead of time."
    },
    {
      title: "Enforce attendance rules automatically",
      description: "Automatically apply rules for lateness, absenteeism, and time-off limits."
    },
    {
      title: "Leave Case Management",
      description: "Handle time-off requests, approvals, and records in one place."
    },
    {
      title: "Real-time Workforce Analytics",
      description: "Get instant insights into hours worked, attendance trends, and productivity."
    }
  ];

  const systemFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-motee-green" />,
      title: "Accurate Time Tracking",
      description: "Biometric verification, location-based check-ins, secure digital clock-ins eliminate when one employee clocks in for another."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-motee-green" />,
      title: "Real-Time Dashboards",
      description: "See who's present, late, or absent—instantly. Make proactive decisions and respond to trends as they emerge."
    },
    {
      icon: <Zap className="w-8 h-8 text-motee-green" />,
      title: "Seamless Payroll Integration",
      description: "Automatically sync attendance with MOTEE Payroll for faster, more accurate payroll runs—no delays, no disputes."
    },
    {
      icon: <Calendar className="w-8 h-8 text-motee-green" />,
      title: "Smart Shift Scheduling",
      description: "Easily assign custom shifts, manage rotating rosters, and accommodate flexible or fixed work hours."
    },
    {
      icon: <Users className="w-8 h-8 text-motee-green" />,
      title: "Employee Self-Service (ESS)",
      description: "Employees can easily request time off, view schedules, or clock in/out using a secure mobile app—improving transparency and engagement."
    },
    {
      icon: <Award className="w-8 h-8 text-motee-green" />,
      title: "Compliance-Ready Reporting",
      description: "Stay compliant with Nigerian Labour Laws using audit-ready, exportable reports—protecting your business from legal risks."
    }
  ];

  const techFeatures = [
    {
      icon: <Smartphone className="w-8 h-8 text-motee-green" />,
      title: "Biometric & Mobile-First Tech",
      description: "From facial recognition to mobile geo-tagging, MOTEE leverages the latest tech to verify attendance accurately—wherever your employees are."
    },
    {
      icon: <Building2 className="w-8 h-8 text-motee-green" />,
      title: "Centralised Control, Local Flexibility",
      description: "Whether you're managing a single office or multiple sites across Nigeria and West Africa, MOTEE scales with your business—supporting remote teams, field staff, and multi-location operations."
    }
  ];

  const idealFor = [
    " Small and medium-sized enterprises (SMEs) with mobile or shift-based teams.",
    " Large enterprises optimizing HR and payroll operations.",
    " Government bodies and educational institutions.",
    " EOR clients using MOTEE's HR outsourcing services."
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  Time & Attendance
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">
                  Every Second Counts
                </h2>
                <p className="text-l text-gray-600 mb-8 leading-relaxed">
                  Every second counts—for your people, your operations, and your bottom line. 
                  MOTEE's smart Time & Attendance system empowers Nigerian businesses to track, 
                  manage, and optimise employee work hours with precision, ease, and compliance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {whyItMatters.map((matter, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                      <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{matter.title}</h4>
                        <p className="text-xs text-gray-600">{matter.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-motee-green/20 to-blue-500/20 rounded-2xl p-8">
                  <img 
                    src="/assets/images/image 2.png" 
                    alt="Time and Attendance Management System"
                    className="w-full h-80 object-fill rounded-xl shadow-lg"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-80 bg-gradient-to-br from-motee-green/10 to-blue-500/10 rounded-xl border-2 border-dashed border-motee-green/30 items-center justify-center">
                    <div className="text-center">
                      <Clock className="w-16 h-16 text-motee-green/50 mx-auto mb-4" />
                      <p className="text-motee-green/70 font-medium">Time & Attendance Hero Image</p>
                      <p className="text-sm text-gray-500 mt-2">Add your image here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Time & Attendance Matters */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Why Time & Attendance Matters
              </h2>
              <p className="text-l text-gray-600 mb-8">
              Tracking work hours isn't just about logging time — it's about staying accurate, following labour laws, making smart decisions, and helping your team be more productive.

              </p>
            </div>
            
            <div className="bg-motee-green/10 p-8 rounded-xl">
              <h3 className="text-l font-semibold mb-4 text-motee-green">Full Visibility</h3>
              <p className="text-gray-600">
              With MOTEE, you can clearly see how your team is working — helping you cut costs, boost efficiency, and make better decisions about your workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Key Benefits
              </h2>
              <p className="text-l text-gray-600">
                Transform your workforce management with intelligent time tracking solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keyBenefits.map((benefit, index) => (
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

      {/* Advanced Workforce Management Features */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Advanced Workforce Management Features
              </h2>
              <p className="text-l text-gray-600">
                When you're ready for more, MOTEE's Workforce Management suite adds even more powerful capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-3 mb-3">
                    <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                    <h4 className="text-sm font-semibold text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 ml-8">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MOTEE's Time & Attendance System */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Why Choose MOTEE's Time & Attendance System?
              </h2>
              <p className="text-l text-gray-600">
                Built for the modern workforce with cutting-edge technology and local expertise
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {systemFeatures.map((feature, index) => (
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

      {/* Built for the Modern Workforce */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Built for the Modern Workforce
              </h2>
              <p className="text-l text-gray-600">
                Advanced technology meets local business needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {techFeatures.map((feature, index) => (
                <div key={index} className="bg-motee-green/5 p-8 rounded-xl border border-motee-green/20">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h4 className="text-xl font-semibold ml-3 text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Technology Showcase Image */}
            <div className="relative">
              <img 
                src="/public/assets/images/modern-workforce-tech.jpg" 
                alt="Modern Workforce Technology"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-64 bg-gradient-to-br from-motee-green/5 to-blue-500/5 rounded-xl border-2 border-dashed border-motee-green/30 items-center justify-center">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-motee-green/50 mx-auto mb-4" />
                  <p className="text-motee-green/70 font-medium">Modern Workforce Technology</p>
                  <p className="text-sm text-gray-500 mt-2">Add your technology showcase image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="relative z-10 py-16 bg-motee-green/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Who Is It For?
              </h2>
              <p className="text-l text-gray-600 mb-8">
              MOTEE's Time & Attendance system is built for organizations of all sizes—across every industry. Whether you're managing shift workers or automating enterprise payroll, MOTEE adapts to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {idealFor.map((target, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{target}</span>
                  </div>
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
            Streamline Your Workforce with Confidence.
            </h2>
            <p className="text-l text-white/90 mb-8 leading-relaxed">
            MOTEE helps you boost operational efficiency, build employee trust, and ensure accurate payroll—so you can leave manual tracking behind and embrace the future of work in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-motee-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-motee-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Contact MOTEE Solutions Ltd
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TimeAttendance; 
import React from 'react';
import { Check, Users, Shield, Heart, TrendingUp, FileText, UserPlus, Target, MessageSquare, Award, Zap, Building } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const HrManagement = () => {
  const challenges = [
    "Rising Workforce Expectations: Today's employees want more than a paycheck—they want purpose, clarity, and respect.",
    "Compliance Challenges: With constantly evolving labour laws and regional requirements, businesses need expert guidance to stay protected.",
    "High Turnover & Low Morale: Many companies lose great talent due to unclear roles, poor onboarding, or lack of engagement.",
    "Limited Access to Expertise: SMEs often can't afford full-time HR teams. We bring professional HR support to businesses of all sizes."
  ];

  const hrServices = [
    {
      icon: <UserPlus className="w-8 h-8 text-motee-green" />,
      title: "Recruitment & Onboarding That Inspires",
      description: "We help you find the right candidates and ensure a smooth, engaging onboarding experience that sets new employees up for success from day one."
    },
    {
      icon: <FileText className="w-8 h-8 text-motee-green" />,
      title: "Employee Handbook & Policy Design",
      description: "Clear, compliant HR policies aligned with Nigerian Labor Law that reflect your company culture and support your business goals."
    },
    {
      icon: <Target className="w-8 h-8 text-motee-green" />,
      title: "Performance Management & Team Development",
      description: "Tools and strategies to align team goals, track performance, recognize excellence, and foster continuous growth and development."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-motee-green" />,
      title: "Conflict Resolution & Employee Relations",
      description: "Proactive communication, conflict resolution, and employee feedback strategies to build strong, cohesive teams."
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-green" />,
      title: "Compliance, Risk Mitigation & HR Advisory",
      description: "We keep you up to date with labor laws and employment standards to protect your business and ensure full compliance."
    },
    {
      icon: <Zap className="w-8 h-8 text-motee-green" />,
      title: "Payroll & Benefits Integration",
      description: "Reliable, streamlined systems for managing compensation, benefits, and employee queries for total workforce care."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Heart className="w-8 h-8 text-motee-green" />,
      title: "People-Centric Approach",
      description: "We align HR strategy with your company vision and values, putting people at the heart of every decision."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-motee-green" />,
      title: "Scalable Support",
      description: "Our services grow with your business, from startup to enterprise, providing the right level of support at every stage."
    },
    {
      icon: <Award className="w-8 h-8 text-motee-green" />,
      title: "Expertise You Can Trust",
      description: "Backed by industry know-how and local compliance expertise, ensuring your HR practices meet Nigerian standards."
    }
  ];

  const businessRealities = [
    "Irregular payroll systems",
    "Unclear HR policies", 
    "Limited employee support",
    "Rising cost of turnover"
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Human Resource Management
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">
                That Powers Business Growth
              </h2>
              <p className="text-l text-gray-600 mb-8 leading-relaxed">
                In Nigeria today, businesses are evolving—but the way we manage people hasn't always kept pace. 
                From inconsistent labour practices to employee dissatisfaction, many organizations struggle to 
                build trust, retain talent, and stay compliant. That's where Motee Solutions comes in.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {businessRealities.map((reality, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{reality}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-motee-green/20 to-blue-500/20 rounded-xl overflow-hidden mb-6">
                    <img 
                      src="/Images/group.jpg" 
                      alt="HR Management Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Talent Acquisition</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Employee Relations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Performance Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Compliance & Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Understanding Nigerian Business Realities
              </h2>
              <p className="text-l text-gray-600 mb-8">
                We understand the realities Nigerian businesses face—irregular payroll systems, 
                unclear HR policies, limited employee support, and the rising cost of turnover. 
                We also see the heart and potential in our workforce.
              </p>
            </div>
            
            <div className="bg-motee-green/10 p-8 rounded-xl">
              <h3 className="text-l font-semibold mb-4 text-motee-green">Our Mission</h3>
              <p className="text-gray-600">
                That's why we offer HR management solutions designed to bridge the gap between 
                employer expectations and employee needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our HR Services Are Needed */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Why Our HR Management Services Are Needed in Nigeria
              </h2>
              <p className="text-l text-gray-600">
                At Motee Solutions, we believe every employee deserves a workplace that values them—and 
                every employer deserves tools that help them succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{challenge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Human-Centred HR Services */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Our Human-Centred HR Services
              </h2>
              <p className="text-l text-gray-600">
                Built for Nigerian Businesses. Designed for People.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {hrServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h4 className="text-xl font-semibold ml-3 text-gray-900">{service.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="relative z-10 py-16 bg-motee-green/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="w-16 h-16 text-motee-green mx-auto mb-6" />
            <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
              From Lagos to Abuja, Port Harcourt to Ibadan
            </h2>
            <p className="text-l text-gray-600 mb-8">
              We're helping Nigerian businesses create workplaces where people feel heard, 
              respected, and empowered to grow.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-xl font-semibold text-motee-green">
                Because when your people succeed, your business thrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Motee Solutions */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                Why Choose Motee Solutions?
              </h2>
              <p className="text-l text-gray-600">
                Whether you're a startup building your first team or a growing company in need of 
                scalable HR solutions, we provide tailored support to meet your needs—efficiently and compliantly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
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
              Ready to Transform Your HR Management?
            </h2>
            <p className="text-l text-white/90 mb-8 leading-relaxed">
              At Motee Solutions, we believe that people are at the heart of every successful business. 
              Our comprehensive HR management services are designed to help organizations attract top talent, 
              retain high performers, and foster a thriving workplace culture.
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

export default HrManagement; 
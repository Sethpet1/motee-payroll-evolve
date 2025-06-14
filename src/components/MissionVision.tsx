import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-dark">Purpose</span>
          </h2>
          <p className="text-xl text-motee-gray max-w-3xl mx-auto">
            Driven by integrity, innovation, and the belief that every Nigerian business 
            deserves reliable, fraud-proof payroll solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto relative">
          {/* Mission */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-102 border-0 shadow-md animate-slide-in-left max-w-md mx-auto">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-motee-blue to-motee-blue-light rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-100">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-4">
              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                To restore trust in payroll across Nigeria by delivering fraud-resistant, employee-first payroll solutions that serve public institutions, SMEs, and enterprises.
                <br /><br />
                We help eliminate fictitious workers, empower small businesses with simple, compliant payroll tools, and support large organizations with secure, scalable systems.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-motee-blue rounded-full"></div>
                  <span className="text-gray-300 text-xs">Eliminate payroll fraud</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-motee-blue rounded-full"></div>
                  <span className="text-gray-300 text-xs">Ensure tax compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-motee-blue rounded-full"></div>
                  <span className="text-gray-300 text-xs">Empower businesses</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Zigzag Arrow */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <svg width="80" height="60" viewBox="0 0 80 60" className="animate-pulse">
                <path
                  d="M10 30 L25 15 L40 30 L55 15 L70 30"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw"
                />
                <polygon
                  points="65,25 70,30 65,35 75,30"
                  fill="#10B981"
                  className="animate-bounce"
                />
              </svg>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-motee-green rounded-full animate-ping"></div>
            </div>
          </div>
          
          {/* Vision */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-102 border-0 shadow-md animate-slide-in-right max-w-md mx-auto">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-motee-green to-motee-green-light rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-100">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-4">
              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                We imagine a Nigeria where payroll should not trigger fear, confusion, or corruption—but a system of trust, dignity, and progress.
                <br /><br />
                We see a civil servant who no longer dreads payday, a small business owner growing confidently with automated payroll, and a finance leader sleeping well knowing every employee is paid accurately.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-motee-green rounded-full"></div>
                  <span className="text-gray-300 text-xs">Nigeria's #1 payroll partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-motee-green rounded-full"></div>
                  <span className="text-gray-300 text-xs">Global integrity standards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-motee-green rounded-full"></div>
                  <span className="text-gray-300 text-xs">Workforce empowerment</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Values */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-motee-orange">Core Values</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-motee-orange rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-motee-orange text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-motee-gray">Uncompromising honesty in every transaction and relationship.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-motee-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-motee-blue text-xl font-semibold mb-2">Innovation</h4>
              <p className="text-motee-gray">Cutting-edge technology that solves real-world problems.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-motee-green rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-motee-green text-xl font-semibold mb-2">Excellence</h4>
              <p className="text-motee-gray">Delivering beyond expectations, every single time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

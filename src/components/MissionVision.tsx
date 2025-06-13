import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-xl text-motee-gray max-w-3xl mx-auto">
            Driven by integrity, innovation, and the belief that every Nigerian business 
            deserves reliable, fraud-proof payroll solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-slide-in-left">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-motee-blue to-motee-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-motee-blue">OurMission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-motee-gray-dark leading-relaxed">
                To restore trust in payroll across Nigeria by delivering fraud-resistant, employee-first payroll solutions that serve public institutions, SMEs, and enterprises.<br /><br />
                We help eliminate fictitious workers, empower small businesses with simple, compliant payroll tools, and support large organizations with secure, scalable systems.<br /><br />
                Because every honest worker deserves to be paid right—on time, every time.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-motee-blue rounded-full"></div>
                  <span className="text-sm text-motee-gray">Eliminate payroll fraud</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-motee-blue rounded-full"></div>
                  <span className="text-sm text-motee-gray">Ensure tax compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-motee-blue rounded-full"></div>
                  <span className="text-sm text-motee-gray">Empower businesses</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Vision */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-slide-in-right">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-motee-green to-motee-green-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-motee-green">OurVision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-motee-gray-dark leading-relaxed">
                We imagine a Nigeria where payroll should not trigger fear, confusion, or corruption—but a system of trust, dignity, and progress.<br /><br />
                We see a civil servant who no longer dreads payday, because her salary arrives exactly when promised—no delays, no ghost workers stealing her due.<br /><br />
                We see a small business owner, once buried in spreadsheets, now growing confidently with automated payroll that keeps him compliant and stress-free.<br /><br />
                We see a finance leader at a large enterprise sleeping well at night, knowing every employee—across every branch—is paid accurately, and legally.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-motee-green rounded-full"></div>
                  <span className="text-sm text-motee-gray">Nigeria's #1 payroll partner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-motee-green rounded-full"></div>
                  <span className="text-sm text-motee-gray">Global integrity standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-motee-green rounded-full"></div>
                  <span className="text-sm text-motee-gray">Workforce empowerment</span>
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
              <h4 className="text-xl font-semibold mb-2 text-motee-gray-dark">Integrity</h4>
              <p className="text-motee-gray">Uncompromising honesty in every transaction and relationship.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-motee-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-motee-gray-dark">Innovation</h4>
              <p className="text-motee-gray">Cutting-edge technology that solves real-world problems.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-motee-green rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-motee-gray-dark">Excellence</h4>
              <p className="text-motee-gray">Delivering beyond expectations, every single time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;


import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-motee-blue/5 via-motee-green/5 to-motee-orange/5"></div>
      
      {/* Animated floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-motee-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-motee-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-motee-orange/8 rounded-full blur-3xl animate-bounce-gentle"></div>
      
      {/* Moving decorative shapes */}
      <div className="absolute top-32 right-1/4 w-8 h-8 bg-motee-blue/20 rounded-full animate-float-side"></div>
      <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-motee-green/20 transform rotate-45 animate-rotate-float"></div>
      <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-motee-orange/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Why <span className="gradient-text">MOTEE</span> is{' '}
              <span className="text-motee-orange">Different</span>
            </h1>
            
            <p className="text-xl text-motee-gray-dark mb-8 leading-relaxed">
              We don't just process payroll—we revolutionize it. With cutting-edge biometric security, 
              anti-fraud protection, and human-centered design, MOTEE Solutions delivers integrity 
              you can trust for Nigeria's most complex payroll challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-motee-blue hover:bg-motee-blue-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-motee-green text-motee-green hover:bg-motee-green hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-motee-blue">99.9%</div>
                <div className="text-sm text-motee-gray">Fraud Prevention</div>
              </div>
              <div className="text-center animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-motee-green">500+</div>
                <div className="text-sm text-motee-gray">Companies Trust Us</div>
              </div>
              <div className="text-center animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>
                <div className="text-3xl font-bold text-motee-orange">24/7</div>
                <div className="text-sm text-motee-gray">Support</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="MOTEE Solutions Dashboard" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-motee-green rounded-full animate-pulse"></div>
                    <span className="text-sm text-motee-gray">Biometric Authentication Active</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-motee-blue rounded-full animate-pulse delay-300"></div>
                    <span className="text-sm text-motee-gray">Real-time Fraud Detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-motee-orange rounded-full animate-pulse delay-600"></div>
                    <span className="text-sm text-motee-gray">Tax Compliance Monitoring</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-motee-orange rounded-2xl flex items-center justify-center animate-bounce delay-1000 hover:animate-pulse">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-motee-green rounded-2xl flex items-center justify-center animate-bounce delay-500 hover:animate-pulse">
                <span className="text-xl">✓</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-motee-blue rounded-full flex items-center justify-center animate-float-side">
                <span className="text-sm">💎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

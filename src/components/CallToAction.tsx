import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';

const CallToAction = () => {
  const ctaOptions = [
    {
      title: "Basic",
      description: "Perfect for small businesses just starting out with payroll management.",
      action: "Get Started",
      color: "motee-green",
      primary: false,
      icon: ArrowRight
    },
    {
      title: "Professional",
      description: "Advanced features for growing businesses with complex payroll needs.",
      action: "Choose Pro",
      color: "motee-orange",
      primary: true,
      icon: ArrowRight
    },
    {
      title: "Enterprise",
      description: "Custom solutions for large organizations with unique requirements.",
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
    "Tax Compliance",
    "Easy Integration",
    "Regular Updates",
    "Training Included",
    "Money-back Guarantee"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-motee-blue via-motee-green to-motee-orange relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Let's Fix Payroll
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join 500+ Nigerian businesses that have eliminated payroll fraud, 
            reduced costs by 40%, and regained their employees' trust with MOTEE Solutions.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`group hover:scale-105 transition-all duration-500 border-0 shadow-2xl ${option.primary ? 'ring-4 ring-white/30' : ''} animate-scale-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-motee-gray-dark mb-4">{option.title}</h3>
                <p className="text-motee-gray mb-6 leading-relaxed">{option.description}</p>
                
                <Button 
                  className={`w-full bg-${option.color} hover:bg-${option.color}-dark text-white py-3 text-lg font-semibold group transition-all duration-300`}
                  size="lg"
                >
                  {option.action}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                {option.primary && (
                  <div className="mt-4 text-sm text-motee-gray">
                    🎯 Most Popular Choice
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Promise */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-fade-in">
          <h4 className="text-2xl font-bold text-white text-center mb-8">Our Promise to You</h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                <span className="text-sm">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center animate-slide-in-right">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-4 text-white/80" />
              <h5 className="font-semibold mb-2">Call Us</h5>
              <p className="text-white/90">+234 (0) 123 456 7890</p>
            </div>
            
            <div>
              <Mail className="h-8 w-8 mx-auto mb-4 text-white/80" />
              <h5 className="font-semibold mb-2">Email Us</h5>
              <p className="text-white/90">hello@moteesolutions.com</p>
            </div>
            
            <div>
              <Calendar className="h-8 w-8 mx-auto mb-4 text-white/80" />
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-white/90">Mon-Fri: 8AM-6PM WAT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

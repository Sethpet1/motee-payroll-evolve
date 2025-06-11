
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Phone, Mail, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const ctaOptions = [
    {
      title: "Schedule a Demo",
      description: "See MOTEE in action with a personalized demonstration",
      icon: Calendar,
      action: "Book Demo",
      color: "motee-blue",
      primary: true
    },
    {
      title: "Speak to an Expert",
      description: "Get answers to your specific payroll challenges",
      icon: Phone,
      action: "Call Now",
      color: "motee-green",
      primary: false
    },
    {
      title: "Get a Quote",
      description: "Receive a customized pricing proposal for your business",
      icon: Mail,
      action: "Get Quote",
      color: "motee-orange",
      primary: false
    }
  ];

  const guarantees = [
    "30-day money-back guarantee",
    "Free migration and setup",
    "24/7 dedicated support",
    "No long-term contracts"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-motee-blue via-motee-green to-motee-orange relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-motee-blue/90 via-motee-green/90 to-motee-orange/90"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
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

        {/* Main CTA */}
        <div className="text-center mb-16 animate-slide-in-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Payroll?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let another day pass with vulnerable payroll systems. 
              Start your journey to fraud-free, efficient payroll management today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-motee-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-motee-blue px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>

        {/* Guarantees */}
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

        {/* Urgency Element */}
        <div className="mt-12 text-center animate-pulse">
          <div className="inline-flex items-center space-x-2 bg-motee-orange/20 backdrop-blur-sm rounded-full px-6 py-3 border border-motee-orange/30">
            <div className="w-3 h-3 bg-motee-orange rounded-full animate-ping"></div>
            <span className="text-white font-medium">Limited Time: 50% Off Implementation Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

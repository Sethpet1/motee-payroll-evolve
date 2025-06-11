
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Fingerprint, Calculator, Zap, CheckCircle, ArrowRight, BarChart, Users, Lock } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Fingerprint,
      title: "Biometric Fraud Protection",
      description: "Advanced fingerprint and facial recognition technology ensures only verified employees can access payroll systems.",
      features: ["Real-time identity verification", "Anti-spoofing algorithms", "Multi-factor biometric auth", "Audit trail tracking"],
      color: "motee-blue",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Calculator,
      title: "Simple Tax Tools",
      description: "Automated tax calculations, deductions, and compliance reporting that eliminates errors and ensures regulatory adherence.",
      features: ["Auto tax calculations", "Real-time compliance checks", "Regulatory updates", "Penalty prevention"],
      color: "motee-green",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Zap,
      title: "Scalable Enterprise Systems",
      description: "Cloud-based infrastructure that grows with your business, handling everything from startups to enterprise corporations.",
      features: ["Cloud-native architecture", "Auto-scaling capability", "Enterprise-grade security", "24/7 monitoring"],
      color: "motee-orange",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const benefits = [
    { icon: Shield, title: "99.9% Fraud Prevention", description: "Industry-leading security protocols" },
    { icon: CheckCircle, title: "100% Tax Compliance", description: "Never miss a regulation again" },
    { icon: BarChart, title: "80% Time Savings", description: "Automated processes reduce manual work" },
    { icon: Users, title: "Employee Satisfaction", description: "Transparent, accurate, on-time payments" }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The <span className="gradient-text">MOTEE</span> Solution
          </h2>
          <p className="text-xl text-motee-gray max-w-4xl mx-auto leading-relaxed">
            Revolutionary payroll technology that combines cutting-edge biometric security, 
            intelligent automation, and human-centered design to eliminate fraud and empower your business.
          </p>
        </div>

        {/* Main Solutions */}
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-left`}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 bg-${solution.color} rounded-2xl flex items-center justify-center group-hover:animate-pulse`}>
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-motee-gray-dark">{solution.title}</CardTitle>
                    </div>
                    <p className="text-lg text-motee-gray leading-relaxed">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${solution.color} flex-shrink-0`} />
                          <span className="text-sm text-motee-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`bg-${solution.color} hover:bg-${solution.color}-dark text-white group`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-in-right`}>
                <div className="relative group">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r from-${solution.color}/20 to-transparent rounded-2xl`}></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-${solution.color} rounded-full animate-pulse`}></div>
                        <span className="text-sm font-medium text-motee-gray-dark">System Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mt-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Measurable <span className="text-motee-orange">Results</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-motee-blue to-motee-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-motee-gray-dark">{benefit.title}</h4>
                <p className="text-motee-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-8">
            Powered by <span className="gradient-text">Cutting-Edge Technology</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-motee-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Military-Grade Security</h4>
              <p className="text-sm text-motee-gray">AES-256 encryption, multi-layer authentication, and zero-trust architecture.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-motee-green rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">AI-Powered Automation</h4>
              <p className="text-sm text-motee-gray">Machine learning algorithms for fraud detection and process optimization.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-motee-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Real-Time Analytics</h4>
              <p className="text-sm text-motee-gray">Live dashboards, predictive insights, and comprehensive reporting.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

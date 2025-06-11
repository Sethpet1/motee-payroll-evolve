
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Clock, Users, TrendingDown } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Rampant Payroll Fraud",
      description: "Ghost workers, inflated salaries, and unauthorized deductions cost Nigerian businesses billions annually.",
      impact: "₦2.4B+ lost yearly",
      color: "motee-orange"
    },
    {
      icon: Clock,
      title: "Manual Inefficiencies",
      description: "Time-consuming manual processes lead to errors, delays, and frustrated employees.",
      impact: "40+ hours monthly",
      color: "motee-blue"
    },
    {
      icon: DollarSign,
      title: "Tax Compliance Issues",
      description: "Complex regulations and manual calculations result in costly penalties and audit failures.",
      impact: "₦500M+ in penalties",
      color: "motee-green"
    },
    {
      icon: Users,
      title: "Employee Dissatisfaction",
      description: "Late payments, incorrect calculations, and lack of transparency damage employee trust.",
      impact: "60% turnover increase",
      color: "motee-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The <span className="text-red-600">Broken</span> Payroll Reality in Nigeria
          </h2>
          <p className="text-xl text-motee-gray max-w-4xl mx-auto leading-relaxed">
            Nigerian businesses are bleeding money, time, and trust due to outdated payroll systems. 
            The status quo isn't just inefficient—it's costing lives and livelihoods.
          </p>
        </div>

        {/* Statistics Banner */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 animate-scale-in">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">₦2.4B+</div>
              <div className="text-sm text-motee-gray">Lost to fraud annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">78%</div>
              <div className="text-sm text-motee-gray">Manual payroll errors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">45 days</div>
              <div className="text-sm text-motee-gray">Average audit delays</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">60%</div>
              <div className="text-sm text-motee-gray">Employee dissatisfaction</div>
            </div>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${problem.color} rounded-xl flex items-center justify-center group-hover:animate-pulse`}>
                    <problem.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-motee-gray-dark">{problem.title}</CardTitle>
                    <div className={`text-sm font-semibold text-${problem.color}`}>{problem.impact}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-motee-gray leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The Cost Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-white animate-slide-in-left">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                The True Cost of Broken Payroll
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingDown className="h-6 w-6 text-orange-200" />
                  <span>Decreased productivity and employee morale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingDown className="h-6 w-6 text-orange-200" />
                  <span>Legal penalties and regulatory violations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingDown className="h-6 w-6 text-orange-200" />
                  <span>Damaged reputation and stakeholder trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingDown className="h-6 w-6 text-orange-200" />
                  <span>Competitive disadvantage in talent acquisition</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="text-6xl font-bold mb-4">₦847M</div>
              <div className="text-xl opacity-90">Average annual cost to medium enterprises</div>
              <div className="mt-6 text-sm opacity-75">
                *Based on industry studies and regulatory reports
              </div>
            </div>
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl lg:text-3xl font-bold text-motee-gray-dark mb-4">
            But there's a better way...
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-motee-blue to-motee-green mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

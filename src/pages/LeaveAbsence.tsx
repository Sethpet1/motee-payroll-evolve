import React from 'react';
import { Calendar, CheckCircle, Shield, TrendingUp, Users, FileText, Clock, Heart, Smartphone, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LeaveAbsence = () => {
  const moteePromises = [
    {
      icon: <Heart className="w-8 h-8 text-motee-green" />,
      title: 'To Employees',
      description: 'Request leave from your phone, see balances clearly, and get approvals faster — without explaining your story to five different people.',
      emoji: '🌱'
    },
    {
      icon: <Users className="w-8 h-8 text-motee-blue" />,
      title: 'To Managers',
      description: 'Get real-time visibility into who\'s off, why, and how to plan better — so compassion and business can walk hand in hand.',
      emoji: '💼'
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-orange" />,
      title: 'To HR & Business Leaders',
      description: 'Stay compliant, organized, and ready — while honouring the humanity at the heart of every absence.',
      emoji: '🛡️'
    }
  ];

  const employerBenefits = [
    'Track attendance and leave balances with clarity',
    'Stay compliant with company policies and labour regulations',
    'Automate leave approvals and streamline communication',
    'Ensure team coverage and reduce workflow interruptions'
  ];

  const employeeFeatures = [
    'Check leave balances anytime',
    'View their absence history',
    'Submit and track leave requests online'
  ];

  const complianceFeatures = [
    'Policy-compliant',
    'Consistently applied',
    'Audit-ready'
  ];

  const analyticsInsights = [
    'Absenteeism trends',
    'Departmental patterns',
    'Burnout warning signs'
  ];

  const costBenefits = [
    'Avoid payroll miscalculations',
    'Cut down administrative overhead',
    'Reduce costs related to unplanned absences'
  ];

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section with Ada's Story */}
      <section className="py-20 bg-gradient-to-br from-motee-blue to-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Because Every Absence Has a Story
              </h1>
              <p className="text-l opacity-90 mb-8 italic">
                "On a rainy Tuesday in Abuja, Ada sat at her desk, the hum of office chatter all around her — but her heart was elsewhere. Her father, in a quiet hospital room, battles an illness that came too soon and too strong. She needs to be with him — Just a few days. Just enough time to hold his hand, to show up for family— but she dreads the stress of navigating outdated leave forms, chasing down approvals, and HR back-and-forth."
              </p>
              <p className="text-l opacity-90">
                This is the reality in countless businesses: people caught between life and paperwork, between humanity and inefficiency.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="rounded-xl shadow-2xl overflow-hidden aspect-video bg-white/10 backdrop-blur-sm">
                <img src="/assets/DFA902A0-3C42-4727-8129-917EBB4B2E66.PNG" alt="Leave and Absence Management" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOTEE Promise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              Our Leave and Absence Automation isn't just a feature — it's a promise.
            </h2>
            <p className="text-l text-gray-600 max-w-3xl mx-auto">
              At MOTEE Solutions, we believe every absence tells a story — a wedding, a birth, a loss, a moment of healing, or a simple need to breathe. And those stories deserve dignity, speed, and understanding.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {moteePromises.map((promise, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{promise.emoji}</div>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-motee-green/10 rounded-full flex items-center justify-center">
                    {promise.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{promise.title}</h3>
                <p className="text-gray-600">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Absence Management Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Absence Management Software?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Absence management software is a smart digital solution designed to simplify, track, and automate how businesses manage employee time away from work. Whether it's sick leave, annual holidays, compassionate leave, parental leave, or personal days, this tool ensures that every absence is properly logged, approved, and covered — with minimal disruption.
              </p>
              <h3 className="text-2xl font-semibold text-motee-green mb-4">With MOTEE's Absence Management system, employers can:</h3>
              <ul className="space-y-3">
                {employerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-motee-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why It Matters</h3>
              <p className="text-gray-600 mb-6">
                When absence is managed well, it does more than fill gaps. It protects your business, boosts morale, and fosters trust. It shows your people that life's moments — both joyful and difficult — are not only understood but supported.
              </p>
              <div className="bg-motee-green/10 p-6 rounded-lg">
                <p className="text-motee-green font-semibold text-lg">
                  "Leave is not just time off — it's life happening."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How can absence management software help improve an organisation?
            </h2>
          </div>
          
          {/* Less Admin, More Impact */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Less admin. More impact.</h3>
              <p className="text-gray-600 mb-6">
                By automating absence-related tasks, HR teams spend less time buried in spreadsheets and more time focusing on what truly matters — people development, culture, and strategy.
              </p>
              <p className="text-gray-600">
                Leave requests are handled swiftly. Approvals are transparent. Workflows stay uninterrupted. It's a win for everyone.
              </p>
            </div>
            <div className="bg-gradient-to-r from-motee-blue to-motee-green p-8 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 mr-3" />
                <h4 className="text-xl font-bold">Efficiency Gains</h4>
              </div>
              <ul className="space-y-2">
                <li>• Automated leave approvals</li>
                <li>• Real-time notifications</li>
                <li>• Integrated workflows</li>
                <li>• Reduced manual processing</li>
              </ul>
            </div>
          </div>

          {/* Empowered Employees */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 bg-motee-green/10 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Smartphone className="w-8 h-8 text-motee-green mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Self-Service Portal</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                {employeeFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowered employees are engaged employees.</h3>
              <p className="text-gray-600 mb-6">
                Through our self-service portal, employees can manage their own leave requests and view their history at any time.
              </p>
              <p className="text-gray-600">
                This reduces dependency on HR, improves transparency, and gives employees a sense of control over their time.
              </p>
            </div>
          </div>

          {/* Compliance Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Improved compliance - Stay on the right side of the law. Always</h3>
              <p className="text-gray-600 mb-6">
                Whether it's local labour laws, internal policies, or industry-specific leave entitlements, our platform ensures that all leave requests and calculations are:
              </p>
              <ul className="space-y-3">
                {complianceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-motee-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-4 font-semibold">
                No more manual errors or compliance headaches.
              </p>
            </div>
            <div className="bg-motee-orange/10 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-motee-orange mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Compliance Assurance</h4>
              </div>
              <p className="text-gray-700">
                Our system automatically applies the correct policies and regulations, ensuring your organization stays compliant without manual intervention.
              </p>
            </div>
          </div>

          {/* Data-Driven Insights */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-motee-blue/10 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-motee-blue mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Analytics Dashboard</h4>
              </div>
              <p className="text-gray-700 mb-4">Let the data speak.</p>
              <ul className="space-y-2 text-gray-700">
                {analyticsInsights.map((insight, index) => (
                  <li key={index}>• {insight}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600 mb-6">
                Our analytics engine provides real-time reports that help you identify patterns and trends in employee absences.
              </p>
              <p className="text-gray-600">
                By acting on these insights, managers can address root causes early — supporting employee well-being while keeping productivity high.
              </p>
            </div>
          </div>

          {/* Cost Reduction */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Reduction</h3>
              <p className="text-gray-600 mb-6">
                Efficiency today. Savings tomorrow.
              </p>
              <p className="text-gray-600 mb-6">
                By eliminating manual tasks, integrating with payroll, and reducing errors, our software helps businesses achieve significant cost savings.
              </p>
              <ul className="space-y-3">
                {costBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-motee-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-4">
                And by spotting absence trends early, organisations can take targeted actions that prevent long-term productivity loss.
              </p>
            </div>
            <div className="bg-gradient-to-r from-motee-green to-motee-blue p-8 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 mr-3" />
                <h4 className="text-xl font-bold">Financial Impact</h4>
              </div>
              <ul className="space-y-2">
                <li>• Reduced administrative costs</li>
                <li>• Fewer payroll errors</li>
                <li>• Improved productivity</li>
                <li>• Better resource planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Behind every absence is a story.
            </h2>
            <p className="text-xl opacity-90 mb-8">
              MOTEE's system makes sure that time off is managed with empathy, accuracy, and purpose — because people are your most valuable asset.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-motee-green hover:bg-gray-100">
              Let MOTEE Help You Automate with Empathy
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LeaveAbsence; 
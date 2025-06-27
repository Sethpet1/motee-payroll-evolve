import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Users, ShieldCheck, BarChart3, Globe, ArrowRight, Cloud, Calculator } from 'lucide-react';

const features = [
  {
    icon: <Cloud className="w-8 h-8 text-motee-green" />,
    title: 'Operational Control You Can Count On',
    desc: 'Automate complex payroll tasks, reduce manual errors, and free up your HR teams to focus on people, not paperwork. Our system empowers you to manage your workforce with clarity, confidence, and speed.'
  },
  {
    icon: <Users className="w-8 h-8 text-motee-blue" />,
    title: 'Employee Experience That Builds Loyalty',
    desc: 'When salaries are paid accurately and on time, when leave requests are processed smoothly, and when HR policies are transparent, your team feels seen and valued.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-motee-orange" />,
    title: 'Compliance Without the Chaos',
    desc: 'Our solutions ensure full alignment with Nigerian laws—from PAYE and pensions to NHF, NSITF, and minimum wage requirements. Avoid penalties. Stay audit ready. Sleep better at night.'
  },
  {
    icon: <Calculator className="w-8 h-8 text-motee-green" />,
    title: 'Cost Efficiency That Drives Growth',
    desc: 'From detecting ghost workers to eliminating payroll leakages, we help you plug financial holes and reclaim lost revenue. Plus, accurate forecasting and budgeting tools keep your leadership informed and agile.'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-motee-blue" />,
    title: 'Data-Driven HR Intelligence',
    desc: 'Make better decisions with real-time dashboards and reports. Track employee performance, manage promotions, and identify training needs. Turn your HR data into strategic business insights.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-motee-orange" />,
    title: 'Corporate Transparency That Builds Trust',
    desc: "Clear audit trails and accessible records foster accountability at every level. This isn't just good governance—it's a message to your employees, investors, and regulators that you take integrity seriously."
  },
  {
    icon: <Globe className="w-8 h-8 text-motee-green" />,
    title: 'Built for Africa. Ready for the World.',
    desc: "We know the Nigerian terrain. We understand the hurdles—bureaucracy, low tech adoption, unstable infrastructure, cybersecurity risks. And we've designed MSL to overcome them—so that your business is resilient, compliant, and future-ready."
  }
];

const Enterprise = () => (
  <div className="relative min-h-screen bg-gray-50 flex flex-col">
    <Header />
    {/* Hero Section with Wavy SVG */}
    <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 to-orange-500/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-80 -z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#34d399" fillOpacity="0.12" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Empowering Nigeria's Enterprises for Growth</h1>
          <p className="text-l md:text-l text-gray-700 mb-8 leading-relaxed">
            In Nigeria's fast-evolving economic landscape, staying ahead requires more than ambition—it demands the right systems to support your workforce, ensure compliance, and streamline operations.
          </p>
        </div>
      </div>
    </section>

    {/* Strategic Pillar Section */}
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">Payroll & HR: Your Strategic Pillar</h2>
        <p className="text-l md:text-l text-gray-700 mb-6 leading-relaxed">
          For medium and large enterprises, a reliable payroll and HR management system is not just a backend function. It is a strategic pillar—one that drives efficiency, builds employee trust, ensures regulatory compliance, and lays the foundation for long-term success.
        </p>
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-8 border-motee-green/30">
          <p className="text-l text-gray-700 mb-2">
            At MSL, we understand the challenges Nigerian businesses face daily: managing growing teams, navigating ever-changing labour laws, ensuring timely salary payments, and maintaining internal controls in a complex environment.<br/><br/>
            We're here to help you overcome those challenges with solutions that are built for Nigeria—and designed for growth.
          </p>
        </div>
      </div>
    </section>

    {/* Features Section - Cards */}
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-900">What We Deliver</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-all border border-motee-green/10 animate-fade-in" style={{animationDelay: `${0.1 * idx}s`}}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-motee-green">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Built for Africa Section */}
    <section className="container mx-auto px-4 py-12 bg-gradient-to-br from-motee-green/5 to-orange-100/10 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Built for Africa. Ready for the World.</h2>
        <p className="text-l text-gray-700 mb-6 leading-relaxed">
          We know the Nigerian terrain.<br/>
          We understand the hurdles—bureaucracy, low tech adoption, unstable infrastructure, cybersecurity risks. And we've designed MSL to overcome them—so that your business is resilient, compliant, and future-ready.<br/><br/>
          Our platform blends global best practices with deep local expertise, ensuring that your business not only survives—but thrives.
        </p>
      </div>
    </section>

    {/* Decorative Divider */}
    <div className="w-full flex justify-center my-8">
      <div className="w-32 h-1 bg-gradient-to-r from-motee-green to-motee-orange rounded-full"></div>
    </div>

    {/* Call to Action */}
    <section className="container mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-r from-motee-green to-motee-orange rounded-2xl p-8 md:p-12 shadow-xl inline-block animate-fade-in">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Let's Build Together</h3>
        <p className="text-l text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          You have a vision. We have the tools to support it.<br/>
          Whether you're a fast-scaling enterprise or a well-established organization, MSL is here to walk with you, every step of the way.<br/><br/>
          Let's simplify your payroll. Empower your HR. Strengthen your future.
        </p>
        <a href="/book-demo" className="inline-flex items-center gap-2 bg-white text-motee-green font-semibold px-8 py-3 rounded-lg shadow hover:bg-motee-green hover:text-white transition-colors">
          <ArrowRight className="w-5 h-5" /> Book a Demo
        </a>
      </div>
    </section>
    <Footer />
  </div>
);

export default Enterprise; 
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  Users, 
  ShieldCheck, 
  Globe, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Scale,
  Building2,
  Zap,
  Target,
  FileText,
  UserCheck,
  TrendingUp,
  MapPin
} from 'lucide-react';

const whyEORFeatures = [
  {
    icon: <Clock className="w-8 h-8 text-motee-green" />,
    title: 'Faster Hiring Across Regions',
    desc: 'When expanding into a new city, state, or country, direct hiring can take months due to legal registrations, tax setups, and compliance requirements. An EOR already has the legal infrastructure in place, allowing organizations to onboard talent within days instead of months.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-motee-blue" />,
    title: 'Full Compliance Without the Headache',
    desc: 'Employment laws, tax regulations, and labour rights vary widely between regions—and penalties for mistakes can be severe. An EOR takes on the legal responsibility of being the official employer, ensuring payroll compliance, tax filings, and adherence to labour laws.'
  },
  {
    icon: <FileText className="w-8 h-8 text-motee-orange" />,
    title: 'Reduced Administrative Overload',
    desc: 'Direct hiring means managing contracts, payroll, benefits, leave policies, and ongoing employee documentation. With an EOR, all HR administration is handled externally, freeing your internal team to focus on core business growth instead of paperwork.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-motee-green" />,
    title: 'Lower Expansion Costs',
    desc: 'Setting up a legal entity in a new location is expensive—often costing thousands in registration fees, plus ongoing maintenance costs. An EOR removes the need for a local entity, letting companies test new markets without heavy investment.'
  },
  {
    icon: <Zap className="w-8 h-8 text-motee-blue" />,
    title: 'Flexibility and Scalability',
    desc: 'EOR arrangements are ideal for project-based hires, remote teams, and seasonal needs. Companies can scale up or down quickly without long-term contractual liabilities, something direct hiring can\'t easily offer.'
  },
  {
    icon: <Globe className="w-8 h-8 text-motee-orange" />,
    title: 'Access to Global Talent Pools',
    desc: 'With remote work on the rise, the best candidate for the job might be halfway across the world. An EOR lets you hire them legally and compliantly, no matter where they live, without the cost or complexity of opening a branch there.'
  }
];

const mslEORServices = [
  {
    icon: <Scale className="w-8 h-8 text-motee-green" />,
    title: 'Legal Employer',
    desc: 'We act as the official employer for your staff, ensuring all local labour laws and tax requirements are met across Nigeria and West Africa.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-motee-blue" />,
    title: 'Payroll & Benefits',
    desc: 'Timely salary payments, tax deductions, pension contributions, and employee benefits administration handled seamlessly.'
  },
  {
    icon: <FileText className="w-8 h-8 text-motee-orange" />,
    title: 'HR Compliance',
    desc: 'Employment contracts, statutory filings, and regulatory updates handled for you with full compliance assurance.'
  },
  {
    icon: <UserCheck className="w-8 h-8 text-motee-green" />,
    title: 'Onboarding & Offboarding',
    desc: 'Smooth hiring processes and compliant exits, ensuring seamless transitions for your team members.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-motee-blue" />,
    title: 'Risk Reduction',
    desc: 'Minimize legal and financial risks of cross-border employment with our comprehensive compliance framework.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-motee-orange" />,
    title: 'Strategic Growth Support',
    desc: 'Focus on your core business while we handle the complexities of international employment and compliance.'
  }
];

const whoBenefits = [
  {
    icon: <Building2 className="w-8 h-8 text-motee-green" />,
    title: 'International Companies',
    desc: 'Companies hiring in Nigeria or West Africa without local entities can leverage our EOR services for seamless expansion.'
  },
  {
    icon: <Users className="w-8 h-8 text-motee-blue" />,
    title: 'Local Businesses',
    desc: 'Local businesses engaging remote or project-based staff can benefit from our comprehensive EOR solutions.'
  },
  {
    icon: <Target className="w-8 h-8 text-motee-orange" />,
    title: 'Startups',
    desc: 'Startups testing new markets without the cost of a local entity can use our EOR services for rapid market entry.'
  }
];

const EOR = () => (
  <div className="relative min-h-screen bg-gray-50 flex flex-col">
    <Header />
    
    {/* Hero Section */}
    <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 to-orange-500/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-80 -z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#34d399" fillOpacity="0.12" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            Employer of Record (EOR) Services
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">
            Hire Anywhere. Stay Compliant. Focus on Growth.
          </h2>
          <p className="text-l text-gray-700 mb-8 leading-relaxed">
            At MSL, we make it easy for you to expand your team without the complexity of setting up a legal entity in a new location. Our Employer of Record (EOR) service lets you hire and manage employees legally in Nigeria and across West Africa — while we take care of payroll, benefits, contracts, and compliance.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose EOR Section */}
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
            Why Organizations Should Use an Employer of Record (EOR) Instead of Recruiting Directly
          </h2>
          <p className="text-l text-gray-700 mb-8 leading-relaxed">
            In today's rapidly changing business environment, companies are under pressure to hire talent faster, manage compliance across multiple jurisdictions, and remain cost-efficient. While direct recruitment may seem straightforward, it often comes with hidden risks and administrative burdens. An Employer of Record (EOR) offers a smarter, safer, and more strategic alternative.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyEORFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-all border border-motee-green/10 animate-fade-in" style={{animationDelay: `${0.1 * idx}s`}}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom Line Section */}
    <section className="container mx-auto px-4 py-12 bg-gradient-to-br from-motee-green/5 to-orange-100/10 rounded-3xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">Bottom Line</h2>
        <p className="text-l text-gray-700 mb-6 leading-relaxed">
          An Employer of Record is not just an outsourcing service—it's a strategic growth partner. It gives organizations speed, flexibility, compliance security, and cost savings, while eliminating the risks and resource drain of direct hiring.
        </p>
        <p className="text-l text-gray-700 leading-relaxed">
          For organizations that want to stay agile, expand confidently, and attract the best talent without legal or administrative headaches, using an EOR is the smarter choice.
        </p>
      </div>
    </section>

    {/* MSL EOR Services Section */}
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
            What We Do for You
          </h2>
          <p className="text-l text-gray-700 mb-8 leading-relaxed">
            Our comprehensive EOR services cover every aspect of international employment, ensuring your business can focus on growth while we handle the complexities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mslEORServices.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-all border border-motee-green/10 animate-fade-in" style={{animationDelay: `${0.1 * idx}s`}}>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Who Benefits Section */}
    <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-motee-blue/5 to-motee-green/5 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
            Who Benefits?
          </h2>
          <p className="text-l text-gray-700 mb-8 leading-relaxed">
            Our EOR services are designed to support businesses of all sizes and industries in their international expansion efforts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {whoBenefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all border border-motee-green/10 animate-fade-in" style={{animationDelay: `${0.1 * idx}s`}}>
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Coverage Area Section */}
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <MapPin className="w-8 h-8 text-motee-green" />
          <h2 className="text-1xl md:text-2xl font-bold text-gray-900">
            Our Coverage Area
          </h2>
        </div>
        <p className="text-l text-gray-700 mb-8 leading-relaxed">
          We provide EOR services across Nigeria and West Africa, ensuring comprehensive coverage for your regional expansion needs.
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-motee-green/10">
          <h3 className="text-l font-semibold mb-4 text-motee-green">Countries We Cover</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Primary Coverage:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Nigeria (All States)</li>
                <li>• Ghana</li>
                <li>• Senegal</li>
                <li>• Côte d'Ivoire</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Expanding Coverage:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Kenya</li>
                <li>• South Africa</li>
                <li>• Morocco</li>
                <li>• Egypt</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Summary */}
    <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-motee-green/5 to-orange-100/10 rounded-3xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-1xl md:text-2xl font-bold mb-8 text-gray-900">
          With MSL EOR, you get:
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-motee-green" />
              <span className="text-l text-gray-700">Fast market entry</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-motee-green" />
              <span className="text-l text-gray-700">100% local compliance</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-motee-green" />
              <span className="text-l text-gray-700">Reduced operational burden</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-motee-green" />
              <span className="text-l text-gray-700">More time to focus on your core business</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-motee-green" />
              <span className="text-l text-gray-700">Risk mitigation</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-motee-green" />
              <span className="text-l text-gray-700">Scalable solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Decorative Divider */}
    <div className="w-full flex justify-center my-8">
      <div className="w-32 h-1 bg-gradient-to-r from-motee-green to-motee-orange rounded-full"></div>
    </div>

    {/* Call to Action */}
    <section className="container mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-r from-motee-green to-motee-orange rounded-2xl p-8 md:p-12 shadow-xl inline-block animate-fade-in">
        <h3 className="text-1xl md:text-2xl font-bold mb-6 text-white">Ready to Expand Globally?</h3>
        <p className="text-l text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Don't let compliance complexities slow down your growth. Let MSL handle the legal, administrative, and regulatory challenges while you focus on building your business.<br/><br/>
          Start hiring talent anywhere in Nigeria and West Africa today.
        </p>
        <a href="/book-demo" className="inline-flex items-center gap-2 bg-white text-motee-green font-semibold px-8 py-3 rounded-lg shadow hover:bg-motee-green hover:text-white transition-colors">
          <ArrowRight className="w-5 h-5" /> Book a Demo
        </a>
      </div>
    </section>
    
    <Footer />
  </div>
);

export default EOR;

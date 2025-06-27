import React from 'react';
import { Clock, CheckCircle, Shield, TrendingUp, Users, BarChart, Cloud, ArrowRight, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/*// Example trusted brands (replace with real logos if available)
const brands = [
  '/public/logos/aso-savings.svg',
  '/public/logos/barter.svg',
  '/public/logos/bolt.svg',
  '/public/logos/guaranty-trust-bank.svg',
  '/public/logos/ibom-air.svg',
  '/public/logos/mainstreet-bank.svg',
  '/public/logos/milo.svg',
  '/public/logos/oando-plc.svg',
  '/public/logos/paystack.svg',
  '/public/logos/polaris-bank.svg',
  '/public/logos/sterling-bank-plc.svg',
  '/public/logos/total-nigeria.svg',
  '/public/logos/ups.svg',
];*/

const benefits = [
  {
    title: 'More Time for What Matters',
    icon: <Clock className="w-8 h-8 text-motee-green" />,
    points: [
      'Say goodbye to time-consuming manual payroll runs.',
      'Automate calculations for PAYE, pensions, and deductions—fast, accurate, and stress-free.',
      'Free your team to focus on sales, service, and strategy—not paperwork.'
    ]
  },
  {
    title: 'Stay Compliant, Stay Confident',
    icon: <CheckCircle className="w-8 h-8 text-motee-blue" />,
    points: [
      'We take the guesswork out of tax and labour laws.',
      'Built-in updates ensure you stay aligned with PAYE, NHF, NSITF, and pension obligations—no penalties, no stress.',
      'Reliable cloud records give you confidence during audits or inspections.'
    ]
  },
  {
    title: 'Cut Costs, Not Corners',
    icon: <TrendingUp className="w-8 h-8 text-motee-orange" />,
    points: [
      'Reduce admin overhead and eliminate payroll errors.',
      'Only pay for what you use—scale your plan as your team grows.',
      'Outsource where needed without sacrificing control or visibility.'
    ]
  },
  {
    title: 'Empowered & Happy Employees',
    icon: <Users className="w-8 h-8 text-motee-green" />,
    points: [
      'Timely, accurate salary payments build trust and boost morale.',
      'Employees can access payslips, leave balances, and benefits anytime via self-service portals.',
      'Transparent communication reduces HR backlogs and frustration.'
    ]
  },
  {
    title: 'Better Decisions with Real Data',
    icon: <BarChart className="w-8 h-8 text-motee-blue" />,
    points: [
      'Track attendance, performance, and trends to inform smarter hires and retention strategies.',
      'Use insights to spot risks early, improve productivity, and support strategic growth decisions.'
    ]
  },
  {
    title: 'Secure, Risk-Free Operations',
    icon: <Shield className="w-8 h-8 text-motee-orange" />,
    points: [
      'Your sensitive data is protected with enterprise-grade encryption, backups, and access controls.',
      'Our compliance experts keep you up to date with regulatory changes—no surprises.'
    ]
  },
  {
    title: 'Built to Help You Grow',
    icon: <Cloud className="w-8 h-8 text-motee-green" />,
    points: [
      'Whether you\'re just starting or scaling fast, our systems grow with you.',
      'Enjoy tools previously only available to large companies—without the big price tag.',
      'Integrate payroll, recruitment, training, performance, and analytics into a single platform.'
    ]
  }
];

const whyItMatters = [
  'Manual payroll = lost time, errors, and penalties',
  'Automation = faster processing, better accuracy, more trust',
  'Integrated systems = better decisions and smoother operations',
  'Employee self-service = less admin, happier teams',
  'Scalable tools = you\'re ready for growth anytime',
];

const tips = [
  'Choose cloud-based HRMS platforms with local tax and pension compliance built-in',
  'Prioritize tools with self-service and analytics features to enhance transparency',
  'Consider outsourcing payroll to reduce risks while you grow',
];

const SMEs = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header />
    {/* Decorative Wavy SVG Background */}
    <div className="absolute top-0 left-0 w-full h-96 -z-10">
      <svg viewBox="0 0 1440 320" className="w-full h-full">
        <path fill="#34d399" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
    </div>
    {/* Hero Section */}
    <section className="container mx-auto px-4 py-16 text-center relative">
      <div className="inline-flex items-center gap-2 mb-4 animate-fade-in">
        <Sparkles className="w-7 h-7 text-motee-orange animate-bounce" />
        <span className="uppercase tracking-widest text-motee-orange font-bold text-xs md:text-sm">For African SMEs</span>
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 animate-fade-in">Empowering SMEs with Smarter Payroll & HR Systems</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">Handle HR & Payroll the smart way</h2>
      <p className="text-l md:text-l text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
        For growing businesses, payroll and HR are not just admin functions—they're the backbone of your company's efficiency, compliance, and employee satisfaction.
      </p>
      <p className="text-l md:text-l text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
        At MSL, we believe that even the smallest businesses deserve the best tools. That's why we've created solutions designed specifically for African SMEs—solutions that save time, reduce risk, build trust, and scale with your growth.
      </p>
    </section>

    {/* Industries We Empower - Horizontal Scroll */}
    <div className="w-full bg-white py-6 border-y border-gray-100 overflow-x-hidden animate-fade-in" style={{animationDelay: '0.1s'}}>
      <div className="flex items-center gap-6 px-4 animate-marquee" style={{animation: 'marquee 50s linear infinite', justifyContent: 'flex-end' }}>
        {[
          { icon: <Clock className="w-8 h-8 text-orange-500" />, name: 'Retail', tagline: 'Fast, accurate payroll for shops & stores.' },
          { icon: <CheckCircle className="w-8 h-8 text-blue-500" />, name: 'Tech', tagline: 'Empowering startups & IT firms.' },
          { icon: <TrendingUp className="w-8 h-8 text-green-500" />, name: 'Food', tagline: 'Restaurants & food services made easy.' },
          { icon: <Users className="w-8 h-8 text-purple-500" />, name: 'Services', tagline: 'From salons to consultancies.' },
          { icon: <BarChart className="w-8 h-8 text-teal-500" />, name: 'Education', tagline: 'Schools & training centers.' },
          { icon: <Cloud className="w-8 h-8 text-pink-500" />, name: 'Health', tagline: 'Clinics & health SMEs.' },
          { icon: <ArrowRight className="w-8 h-8 text-yellow-500" />, name: 'Logistics', tagline: 'Transport & delivery businesses.' },
        ].map((industry, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-2xl shadow-md px-8 py-6 min-w-[180px] max-w-xs border border-orange-100 hover:scale-105 transition-transform">
            <div className="mb-2">{industry.icon}</div>
            <div className="font-bold text-lg text-gray-700 mb-1">{industry.name}</div>
            <div className="text-xs text-gray-500 text-center">{industry.tagline}</div>
          </div>
        ))}
      </div>
      <div className="text-center text-xs text-gray-400 mt-3">We support all kinds of SMEs across Africa</div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </div>

    {/* Benefits Section with Gradient Overlay */}
    <section className="container mx-auto px-4 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-motee-green/5 via-white/0 to-motee-orange/10 rounded-3xl -z-10" />
      {benefits.map((benefit, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-all animate-fade-in border border-motee-green/10" style={{animationDelay: `${0.1 * idx}s`}}>
          <div className="mb-4">{benefit.icon}</div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-motee-gray-dark">{benefit.title}</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            {benefit.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>

    {/* What You Gain Section */}
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Why It Matters for Your Business</h3>
      <ul className="grid md:grid-cols-2 gap-4 mb-8">
        {whyItMatters.map((item, idx) => (
          <li key={idx} className="bg-motee-green/10 rounded-lg px-6 py-4 text-motee-green font-medium flex items-center gap-3 text-sm">
            <ArrowRight className="w-5 h-5" /> {item}
          </li>
        ))}
      </ul>
    </section>

    {/* Tips Section with unique card style */}
    <section className="container mx-auto px-4 py-8">
      <h4 className="text-xl md:text-2xl font-semibold mb-3 text-motee-blue">Smart Tips for SMEs</h4>
      <ul className="grid md:grid-cols-3 gap-4">
        {tips.map((tip, idx) => (
          <li key={idx} className="bg-gradient-to-br from-blue-50 via-white to-motee-green/10 border-l-4 border-motee-blue rounded-lg px-6 py-4 text-motee-blue flex items-center gap-2 animate-fade-in shadow-sm text-sm" style={{animationDelay: `${0.1 * idx}s`}}>
            <CheckCircle className="w-5 h-5" /> {tip}
          </li>
        ))}
      </ul>
    </section>

    {/* Call to Action with gradient background */}
    <section className="container mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-r from-motee-green to-motee-orange rounded-2xl p-8 md:p-12 shadow-xl inline-block animate-fade-in">
        <h5 className="text-xl md:text-2xl font-bold mb-6 text-white">Let's grow your business together—smarter, faster, and stronger.</h5>
        <p className="text-l text-white/90 mb-8 leading-relaxed">Book a free demo or talk to our experts today.</p>
        <a href="/book-demo" className="inline-block bg-white text-motee-green font-semibold px-8 py-3 rounded-lg shadow hover:bg-motee-green hover:text-white transition-colors">Book a Demo</a>
      </div>
    </section>
    <Footer />
  </div>
);

export default SMEs; 
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Fingerprint, Cloud, Calculator, Users, BarChart3, ShieldCheck, ArrowRight, Mail } from 'lucide-react';


const features = [
  {
    icon: <Fingerprint className="w-8 h-8 text-motee-green" />, title: 'Biometric & BVN Identity Verification',
    desc: 'Every employee is validated using biometric data (fingerprint or facial recognition) linked to their Bank Verification Number—ensuring only legitimate workers are paid.'
  },
  {
    icon: <Cloud className="w-8 h-8 text-motee-blue" />, title: 'Cloud-Based Payroll Infrastructure',
    desc: 'All payroll data is centralized, up-to-date, and accessible in real time across all government departments and agencies.'
  },
  {
    icon: <Calculator className="w-8 h-8 text-motee-orange" />, title: 'Automation of Calculations & Compliance',
    desc: 'Taxes, pensions, allowances, and deductions are auto-calculated and fully auditable—eliminating human error and manipulation.'
  },
  {
    icon: <Users className="w-8 h-8 text-motee-green" />, title: 'Integrated HR & Payroll Workflows',
    desc: 'Our system ensures seamless coordination between HR actions and payroll changes, such as promotions, exits, or transfers.'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-motee-blue" />, title: 'Live Dashboards & Full Audit Trails',
    desc: 'Government stakeholders can monitor payroll operations with real-time reporting, anomaly detection, and traceable transaction history.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-motee-orange" />, title: 'Employee Self-Service Portal',
    desc: 'Civil servants can access payslips, tax records, leave balances, and pension contributions from any device—improving transparency and reducing reliance on intermediaries.'
  },
];

const whyChoose = [
  'Eliminate ghost workers',
  'Ensure timely, accurate salary payments',
  'Strengthen transparency and internal controls',
  'Boost employee confidence and satisfaction',
  'Prevent fraud and reduce financial losses',
];

const PublicSector = () => (
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Revolutionizing Public Payroll in Nigeria</h1>
          <p className="text-l md:text-l text-gray-700 mb-8 leading-relaxed">
            Payroll is the financial backbone of every public institution. Yet across Nigeria, outdated systems, manual processes, and poor oversight have led to widespread challenges: ghost workers, delayed salaries, and lack of transparency.
          </p>
        </div>
      </div>
    </section>

    {/* The Story Begins Here */}
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">The Story Begins Here</h2>
        <p className="text-l md:text-l text-gray-700 mb-6 leading-relaxed">
          In every corner of Nigeria, public servants wake up each morning ready to serve—nurses caring for patients, teachers shaping futures, civil servants keeping institutions running. They do their part with dignity.<br/><br/>
          But too often, the system meant to support them fails.
        </p>
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-8 border-motee-orange/30">
          <h3 className="text-xl font-bold text-motee-orange mb-2">Delayed Pay. Broken Trust.</h3>
          <p className="text-l text-gray-700 mb-4">
            Imagine a father waiting three months for his salary. A mother nearing retirement who can't find her pension records. A young graduate who joined public service full of hope—only to see her wages delayed by a system too broken to care.
          </p>
          <p className="text-l text-gray-700 mb-2">It's more than a payroll issue.<br/>It's a trust issue.<br/>It's a livelihood issue.<br/>It's a dignity issue.</p>
        </div>
      </div>
    </section>

    {/* The System Is Failing Its People */}
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">The System Is Failing Its People</h2>
        <ul className="list-disc pl-6 mb-6 text-l text-gray-700 space-y-2">
          <li>Ghost workers thrive, while real employees wait in frustration.</li>
          <li>Salaries come late—or not at all.</li>
          <li>Data is manipulated. Records are lost.</li>
          <li>Transparency is an illusion.</li>
        </ul>
        <p className="text-l text-gray-700 mb-4">These aren't just technical glitches—they are real lives affected, families strained, and futures compromised.</p>
      </div>
    </section>

    {/* MOTEE: A New Standard for Public Payroll */}
    <section className="container mx-auto px-4 py-12 bg-gradient-to-br from-motee-green/5 to-orange-100/10 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">MOTEE: A New Standard for Public Payroll</h2>
        <p className="text-l text-gray-700 mb-6">
          MOTEE Solutions was created to restore what matters most—trust, fairness, and transparency in public service payroll.<br/><br/>
          We believe that:
        </p>
        <ul className="list-disc pl-6 mb-6 text-l text-gray-700 space-y-2">
          <li>Every salary must be accurate.</li>
          <li>Every civil servant deserves to be seen, validated, and paid on time.</li>
          <li>Every transaction should leave a trace.</li>
          <li>Every kobo must be accounted for.</li>
        </ul>
      </div>
    </section>

    {/* The MOTEE Difference - Features Timeline */}
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-900">The MOTEE Difference</h2>
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-y-12 md:gap-y-0 md:gap-x-8 relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-motee-green/20 to-motee-orange/20 rounded-full -translate-x-1/2" />
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0"
            >
              <div className="bg-white rounded-full shadow-lg p-4 mb-4 border-4 border-motee-green/10" style={{minWidth: 0}}>
                {feature.icon}
              </div>
              <div className="max-w-xs w-full">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-motee-green">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
              {idx < features.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-8 h-1 bg-gradient-to-r from-motee-green/20 to-motee-orange/20 -z-10" style={{left: '100%', transform: 'translateY(-50%)'}}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Government Institutions Choose MOTEE */}
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Why Government Institutions Choose MOTEE</h2>
        <ul className="list-disc pl-6 mb-8 text-sm text-motee-green space-y-2">
          {whyChoose.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* Decorative Divider */}
    <div className="w-full flex justify-center my-8">
      <div className="w-32 h-1 bg-gradient-to-r from-motee-green to-motee-orange rounded-full"></div>
    </div>

    {/* Trusted Partner CTA */}
    <section className="container mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-r from-motee-green to-motee-orange rounded-2xl p-8 md:p-12 shadow-xl inline-block animate-fade-in">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">A Trusted Partner in Public Sector Transformation</h3>
        <p className="text-l text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          At MOTEE Solutions, we're not just solving payroll problems—we're restoring trust, enhancing productivity, and empowering institutions to do more with less.<br/><br/>
          We bring expertise, innovation, and deep understanding of public sector operations to help governments deliver what matters most: integrity, accountability, and service to their people.
        </p>
        <a href="mailto:hello@motee.com" className="inline-flex items-center gap-2 bg-white text-motee-green font-semibold px-8 py-3 rounded-lg shadow hover:bg-motee-green hover:text-white transition-colors">
          <Mail className="w-5 h-5" /> Contact Us Today
        </a>
      </div>
    </section>
    <Footer />
  </div>
);

export default PublicSector; 
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  FileText, 
  UserCheck, 
  GraduationCap,
  CreditCard,
  MapPin,
  Users,
  Building2,
  Scale,
  Zap,
  Target,
  Heart,
  Award,
  Phone,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <UserCheck className="w-8 h-8 text-motee-green" />,
    title: "Identity Verification",
    description: "Confirm the authenticity of candidate identities using secure and compliant processes."
  },
  {
    icon: <FileText className="w-8 h-8 text-motee-blue" />,
    title: "Employment History Checks",
    description: "Validate previous job roles, responsibilities, and performance to ensure accuracy of CV/resume details."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-motee-orange" />,
    title: "Academic & Professional Qualification Verification",
    description: "Cross-check educational credentials and professional certifications with issuing institutions and regulatory bodies."
  },
  {
    icon: <Shield className="w-8 h-8 text-motee-green" />,
    title: "Criminal Record Checks",
    description: "Conduct thorough criminal history screenings in compliance with Nigerian laws and international standards."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-motee-blue" />,
    title: "Credit & Financial Background Checks",
    description: "Assess financial responsibility where the role requires trust with sensitive assets or financial management."
  },
  {
    icon: <Users className="w-8 h-8 text-motee-orange" />,
    title: "Reference Checks",
    description: "Gain insights from former employers and colleagues to understand work ethic, reliability, and character."
  },
  {
    icon: <MapPin className="w-8 h-8 text-motee-green" />,
    title: "Address Verification",
    description: "Confirm residential addresses to support compliance and reduce fraud risk."
  }
];

const whyChooseUs = [
  {
    icon: <Scale className="w-8 h-8 text-motee-green" />,
    title: "Accuracy & Confidentiality",
    description: "We deliver verified results while protecting sensitive data in line with the Nigeria Data Protection Regulation (NDPR)."
  },
  {
    icon: <Zap className="w-8 h-8 text-motee-blue" />,
    title: "Speed & Efficiency",
    description: "Our digital verification tools ensure quick turnaround times without compromising quality."
  },
  {
    icon: <Shield className="w-8 h-8 text-motee-orange" />,
    title: "Compliance-Driven",
    description: "All checks are conducted lawfully, transparently, and with candidate consent."
  },
  {
    icon: <Target className="w-8 h-8 text-motee-green" />,
    title: "Tailored Solutions",
    description: "Whether you're hiring one employee or scaling up a full workforce, we customize our services to your needs."
  }
];

const whoWeServe = [
  {
    icon: <Building2 className="w-8 h-8 text-motee-green" />,
    title: "Small Businesses",
    description: "Small businesses with big dreams looking to build trustworthy teams."
  },
  {
    icon: <Users className="w-8 h-8 text-motee-blue" />,
    title: "Multinationals",
    description: "Multinationals with complex teams requiring comprehensive verification."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-motee-orange" />,
    title: "Financial Institutions",
    description: "Financial institutions needing enhanced security and compliance checks."
  },
  {
    icon: <Heart className="w-8 h-8 text-motee-green" />,
    title: "NGOs",
    description: "Non-governmental organizations requiring trustworthy team members."
  }
];

const Verification = () => (
  <div className="relative min-h-screen bg-gray-50 flex flex-col">
    <Header />
    
    {/* Hero Section */}
    <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 to-blue-500/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            Verification & Background Checks
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">
            "Every Hire Is a Risk. We Turn It Into Trust."
          </h2>
          <p className="text-l text-gray-700 mb-8 leading-relaxed">
            Behind every CV, every handshake, and every interview smile lies a story. Some stories inspire trust. Others hide risks. At Motee Solutions Ltd., we help you uncover the truth so you can welcome only the right people into your business, your team, and your vision.
          </p>
        </div>
      </div>
    </section>

    {/* Why It Matters Section */}
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
            Why It Matters
          </h2>
          <p className="text-l text-gray-700 mb-8 leading-relaxed">
            The wrong hire can cost more than money, it can cost your reputation, your security, and your peace of mind.
          </p>
        </div>
        
        <div className="bg-motee-green/10 p-8 rounded-xl">
          <h3 className="text-l font-semibold mb-4 text-motee-green">The Motee Promise</h3>
          <p className="text-gray-600 mb-4">
            A rushed decision today could lead to regret tomorrow. That's why our Verification and Background Check services exist: to give you clarity, confidence, and the freedom to build your workforce without fear.
          </p>
          <p className="text-gray-600">
            When you choose Motee Solutions, you're not just getting a service — you're gaining a partner who protects your tomorrow. We treat every background check as if we were hiring for our own family. With confidentiality, speed, and accuracy, we bring you closer to the kind of workforce you can truly trust.
          </p>
        </div>
      </div>
    </section>

    {/* Our Services Section */}
    <section className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
            Our Services Include
          </h2>
          <p className="text-l text-gray-600">
            Comprehensive verification solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-6">
                {service.icon}
                <h4 className="text-xl font-semibold ml-3 text-gray-900">{service.title}</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Who We Serve Section */}
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
            Who We Serve
          </h2>
          <p className="text-l text-gray-600 mb-8">
            From small businesses with big dreams to multinationals with complex teams, from financial institutions to NGOs, we stand beside you, ensuring that every person who joins your journey is truly worthy of the trust you place in them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whoWeServe.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                {client.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{client.title}</h3>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Motee Solutions */}
    <section className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
            Why Choose Motee Solutions?
          </h2>
          <p className="text-l text-gray-600">
            Trusted verification services built for Nigerian businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whyChooseUs.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                {reason.icon}
                <h4 className="text-xl font-semibold ml-3 text-gray-900">{reason.title}</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Building Section */}
    <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-motee-green/5 to-blue-500/5 rounded-3xl">
      <div className="max-w-4xl mx-auto text-center">
        <Award className="w-16 h-16 text-motee-green mx-auto mb-6" />
        <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
          Hire with Confidence
        </h2>
        <p className="text-l text-gray-700 mb-8 leading-relaxed">
          Let us help you build more than a workforce. Let us help you build a circle of trust.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-xl font-semibold text-motee-green">
            Every person who joins your journey is truly worthy of the trust you place in them.
          </p>
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
        <h3 className="text-1xl md:text-2xl font-bold mb-6 text-white">Ready to Build Trust?</h3>
        <p className="text-l text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Contact us today to learn how our Verification & Background Check solutions can give you peace of mind and help you build a workforce you can truly trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/book-demo" className="inline-flex items-center gap-2 bg-white text-motee-green font-semibold px-8 py-3 rounded-lg shadow hover:bg-motee-green hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5" /> Book a Demo
          </a>
          <a href="tel:+234" className="inline-flex items-center gap-2 bg-motee-orange text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-600 transition-colors">
            <Phone className="w-5 h-5" /> Contact Us Today
          </a>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
);

export default Verification;

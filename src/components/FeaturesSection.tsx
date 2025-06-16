import React from 'react';
import { CheckCircle, Fingerprint, Calculator, Zap } from 'lucide-react';

const features = [
  {
    icon: <Fingerprint className="w-8 h-8 text-blue-700" />,
    title: "Biometric Fraud Protection",
    description: "Advanced fingerprint and facial recognition technology ensures only verified employees can access payroll systems.",
    points: [
      "Real-time identity verification",
      "Multi-factor biometric auth",
      "Anti-spoofing algorithms",
      "Audit trail tracking"
    ],
    color: "blue",
    learnMore: true,
    image: "https://images.unsplash.com/photo-1581093588401-22b8d1a3e6c7?auto=format&fit=crop&w=600&q=80",
    status: "System Active"
  },
  {
    icon: <Calculator className="w-8 h-8 text-green-700" />,
    title: "Simple Tax Tools",
    description: "Automated tax calculations, deductions, and compliance reporting that eliminates errors and ensures regulatory adherence.",
    points: [
      "Auto tax calculations",
      "Regulatory updates",
      "Real-time compliance checks",
      "Penalty prevention"
    ],
    color: "green",
    learnMore: false,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-600" />,
    title: "Scalable Enterprise Systems",
    description: "Cloud-based infrastructure that grows with your business, handling everything from startups to enterprise corporations.",
    points: [
      "Cloud-native architecture",
      "Enterprise-grade security",
      "Auto-scaling capability",
      "24/7 monitoring"
    ],
    color: "orange",
    learnMore: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    status: "System Active"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-4">
          <span className="text-motee-green">MOTEE</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Revolutionary payroll technology that combines cutting-edge biometric security, intelligent automation, and human-centered design to eliminate fraud and empower your business.
        </p>
        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left: Biometric Card */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">{features[0].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{features[0].title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{features[0].description}</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {features[0].points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <button className="mt-auto bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-800 transition">
                Learn More <span>&rarr;</span>
              </button>
            </div>
          </div>
          {/* Right: Biometric Image */}
          <div className="flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px] flex items-center">
              <img src="/assets/images/laptop-2595394_1280.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2 shadow">
                <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
                <span className="font-medium text-gray-800">System Active</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Tax Image */}
          <div className="flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px] flex items-center">
              <img src={features[1].image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: Tax Card */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">{features[1].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{features[1].title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{features[1].description}</p>
              <div className="grid grid-cols-2 gap-2">
                {features[1].points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Third Row: Scalable Enterprise */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left: Scalable Card */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">{features[2].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{features[2].title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{features[2].description}</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {features[2].points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <button className="mt-auto bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-700 transition">
                Learn More <span>&rarr;</span>
              </button>
            </div>
          </div>
          {/* Right: Scalable Image */}
          <div className="flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px] flex items-center">
              <img src={features[2].image} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2 shadow">
                <span className="w-3 h-3 rounded-full bg-orange-600 inline-block"></span>
                <span className="font-medium text-gray-800">System Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

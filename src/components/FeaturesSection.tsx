import React from 'react';
import { CheckCircle, Fingerprint, Calculator, Zap } from 'lucide-react';

const features = [
  {
    icon: <Fingerprint className="w-8 h-8 text-blue-700 bg-gradient-to-br from-orange-50 via-white to-orange-100" />,
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
    image: "/assets/images/A45CEEF7-94D0-4708-9ABA-E885903479D8.PNG",
    status: "System Active"
  },
  {
    icon: <Calculator className="w-8 h-8 text-green-700 bg-gradient-to-br from-orange-50 via-white to-orange-100" />,
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
    icon: <Zap className="w-8 h-8 text-orange-600 bg-gradient-to-br from-orange-50 via-white to-orange-100" />,
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
    image: "/assets/images/25774A78-DD7C-48C3-8323-20824EAC1715.PNG",
    status: "System Active"
  }
];

export default function FeaturesSection() {
  const FeatureCard = ({ feature, image, reverse = false }) => (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:grid-flow-row-dense' : ''}`}>
      <div className={`flex flex-col h-full ${reverse ? 'md:col-start-2' : ''}`}>
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-2xl shadow-lg p-8 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className={`bg-${feature.color}-100 p-2 rounded-lg`}>{feature.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{feature.description}</p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {feature.points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className={`w-4 h-4 text-${feature.color}-600`} />
                <span className="text-md font-semibold">{point}</span>
              </div>
            ))}
          </div>
          {feature.learnMore && (
            <button className={`mt-auto bg-${feature.color}-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-${feature.color}-700 transition`}>
              Learn More <span>&rarr;</span>
            </button>
          )}
        </div>
      </div>
      <div className={`flex flex-col h-full ${reverse ? 'md:col-start-1' : ''}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px] flex items-center">
          <img 
            src={image} 
            alt={feature.title} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              console.error(`Failed to load image: ${image}`);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
            onLoad={() => console.log(`Successfully loaded image: ${image}`)}
          />
          {feature.status && (
            <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2 shadow">
              <span className={`w-3 h-3 rounded-full bg-${feature.color}-600 inline-block`}></span>
              <span className="font-medium text-gray-800">{feature.status}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <FeatureCard feature={features[0]} image={features[0].image} />
        <FeatureCard feature={features[1]} image={features[1].image} reverse={true} />
        <FeatureCard feature={features[2]} image={features[2].image} />
      </div>
    </section>
  );
}

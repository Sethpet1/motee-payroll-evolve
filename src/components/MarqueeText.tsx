
import React from 'react';

const MarqueeText = () => {
  const marqueeItems = [
    "🛡️ Biometric Security",
    "⚡ Lightning Fast",
    "🎯 Zero Fraud Tolerance",
    "🏆 Enterprise Grade",
    "🔒 Military Encryption",
    "📊 Real-time Analytics",
    "🌟 99.9% Uptime",
    "🚀 Cloud Native",
    "💎 Premium Support",
    "🔄 Continuous Updates",
    "🌐 Global Availability"
  ];

  const reverseMarqueeItems = [
    "🔍 Advanced Monitoring",
    "🛠️ Custom Integrations",
    "📱 Mobile Friendly",
    "🔔 Real-time Notifications",
    "🔐 Multi-factor Auth",
    "📇 Data Visualization",
    "🔄 Automatic Backups",
    "⚙️ Customizable Workflows",
    "🌍 24/7 Support",
    "💼 Enterprise Solutions",
    "🏅 Award Winning Design"
  ];

  return (
    <div className="relative z-10 overflow-hidden">
      {/* First marquee layer */}
      <div className="py-4 bg-gradient-to-r from-black via-motee-green to-black overflow-hidden">
        <div className="marquee">
          <div className="marquee-content text-white text-lg font-semibold">
            {marqueeItems.map((item, index) => (
              <span key={index} className="mx-8 whitespace-nowrap animate-pulse-slow" style={{ animationDelay: `${index * 0.3}s` }}>
                {item}
              </span>
            ))}
            {marqueeItems.map((item, index) => (
              <span key={`repeat-${index}`} className="mx-8 whitespace-nowrap animate-pulse-slow" style={{ animationDelay: `${index * 0.3}s` }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Second marquee layer, moving in reverse */}
      <div className="py-4 bg-gradient-to-r from-black via-orange-500 to-black overflow-hidden">
        <div className="marquee marquee-reverse">
          <div className="marquee-content text-white text-lg font-semibold">
            {reverseMarqueeItems.map((item, index) => (
              <span key={index} className="mx-8 whitespace-nowrap animate-pulse-slow" style={{ animationDelay: `${index * 0.3}s` }}>
                {item}
              </span>
            ))}
            {reverseMarqueeItems.map((item, index) => (
              <span key={`repeat-${index}`} className="mx-8 whitespace-nowrap animate-pulse-slow" style={{ animationDelay: `${index * 0.3}s` }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none"></div>
    </div>
  );
};

export default MarqueeText;

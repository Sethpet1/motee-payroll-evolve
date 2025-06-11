
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
    "🚀 Cloud Native"
  ];

  return (
    <div className="py-4 bg-gradient-to-r from-gray-900 via-motee-green to-gray-900 overflow-hidden">
      <div className="marquee">
        <div className="marquee-content text-white text-lg font-semibold">
          {marqueeItems.map((item, index) => (
            <span key={index} className="mx-8 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;

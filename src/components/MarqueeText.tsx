const MarqueeText = () => {
  const marqueeItems = [
    "Biometric Security",
    "Lightning Fast Processing",
    "Zero Fraud Tolerance",
    "Enterprise Grade Solution",
    "Military Encryption",
    "Real-time Analytics",
    "99.9% Uptime",
    "Cloud Native Architecture",
    "Premium Support",
    "Continuous Updates",
    "Global Availability"
  ];

  const reverseMarqueeItems = [
    "Advanced Monitoring",
    "Custom Integrations",
    "Mobile Friendly",
    "Real-time Notifications",
    "Multi-factor Authentication",
    "Data Visualization",
    "Automatic Backups",
    "Customizable Workflows",
    "24/7 Support",
    "Enterprise Solutions",
    "Award Winning Design"
  ];

  return (
    <div className="relative z-10 overflow-hidden">
      {/* First marquee layer */}
      <div className="py-3 bg-black overflow-hidden">
        <div className="marquee">
          <div className="marquee-content text-white text-base font-medium tracking-wide">
            {marqueeItems.map((item, index) => (
              <span key={index} className="mx-6 whitespace-nowrap" style={{ animationDelay: `${index * 0.2}s` }}>
                {item}
              </span>
            ))}
            {marqueeItems.map((item, index) => (
              <span key={`repeat-${index}`} className="mx-6 whitespace-nowrap" style={{ animationDelay: `${index * 0.2}s` }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Second marquee layer, moving in reverse */}
      <div className="py-3 bg-black/90 overflow-hidden">
        <div className="marquee marquee-reverse">
          <div className="marquee-content text-white/90 text-base font-medium tracking-wide">
            {reverseMarqueeItems.map((item, index) => (
              <span key={index} className="mx-6 whitespace-nowrap" style={{ animationDelay: `${index * 0.2}s` }}>
                {item}
              </span>
            ))}
            {reverseMarqueeItems.map((item, index) => (
              <span key={`repeat-${index}`} className="mx-6 whitespace-nowrap" style={{ animationDelay: `${index * 0.2}s` }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;

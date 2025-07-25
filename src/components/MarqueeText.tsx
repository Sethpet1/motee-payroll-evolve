import React from 'react';

const MarqueeText = () => {
  const marqueeItems = [
    { 
      name: "Real-Time Analytics",
      logo: ""
    },
    { 
      name: "99.9% Upadte", 
      logo: "" 
    },
    { 
      name: "Cloud Native Architecture", 
      logo: "" 
    },
    { 
      name: "Premium Support", 
      logo: "" 
    },
    { 
      name: "Advanced Monitoring", 
      logo: "" 
    },
    { 
      name: "Custom Integration", 
      logo: "" 
    },
    { 
      name: "Mobile Friendly", 
      logo: "" 
    },
    { 
      name: "Real-Time Notifications", 
      logo: "" 
    }
  ];

  const reverseMarqueeItems = [
    { 
      name: "Mobile Friendly", 
      logo: "" 
    },
    { 
      name: "Multi-Factor Authentication", 
      logo: "" 
    },
    { 
      name: "Data Validation", 
      logo: "" 
    },
    { 
      name: "Automatic Backups", 
      logo: "" 
    },
    { 
      name: "Customizable Reports", 
      logo: "" 
    },
    { 
      name: "Multi-Currency Support", 
      logo: "" 
    },
    { 
      name: "Customizable Workflows", 
      logo: "" 
    }
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="relative z-3 overflow-hidden bg-white">
        {/* Header Section */}
        <div className="py-2 bg-gradient-to-r from-gray-700 to-black text-center">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-lg md:text-xl font-semibold text-white">
            Our Difference Defines Us. Our Pride Drives Us.
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Join thousands of businesses across Nigeria that rely on our innovative solutions
            </p>
          </div>
        </div>
        
        {/* First Marquee Row */}
        <div className="py-4 bg-white border-y border-gray-100 overflow-hidden">
          <div className="flex animate-marquee">
            <div className="flex items-center space-x-12 min-w-max">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div 
                  key={`marquee-1-${index}`} 
                  className="flex items-center space-x-3 px-3 py-1 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 bg-white rounded-lg p-1 flex items-center justify-center shadow-sm">
                    <img 
                      src={item.logo} 
                      alt={`${item.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=f3f4f6&color=374151&size=32`;
                      }}
                    />
                  </div>
                  <span className="text-gray-800 font-medium whitespace-nowrap text-sm">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Second Marquee Row (Reverse) */}
        <div className="py-4 bg-gray-50 overflow-hidden">
          <div className="flex animate-marquee-reverse">
            <div className="flex items-center space-x-12 min-w-max">
              {[...reverseMarqueeItems, ...reverseMarqueeItems].map((item, index) => (
                <div 
                  key={`marquee-2-${index}`} 
                  className="flex items-center space-x-3 px-3 py-1 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 bg-white rounded-lg p-1 flex items-center justify-center shadow-sm">
                    <img 
                      src={item.logo} 
                      alt={`${item.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=f3f4f6&color=374151&size=32`;
                      }}
                    />
                  </div>
                  <span className="text-gray-800 font-medium whitespace-nowrap text-sm">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeText;

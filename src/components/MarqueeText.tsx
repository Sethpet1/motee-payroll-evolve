import React from 'react';

const MarqueeText = () => {
  const marqueeItems = [
    { 
      name: "GTBank", 
      logo: "/logos/guaranty-trust-bank.svg" 
    },
    { 
      name: "Sterling Bank", 
      logo: "/logos/sterling-bank-plc.svg" 
    },
    { 
      name: "Polaris Bank", 
      logo: "/logos/polaris-bank.svg" 
    },
    { 
      name: "Mainstreet Bank", 
      logo: "/logos/mainstreet-bank.svg" 
    },
    { 
      name: "Paystack", 
      logo: "/logos/paystack.svg" 
    },
    { 
      name: "Bolt", 
      logo: "/logos/bolt.svg" 
    },
    { 
      name: "Barter", 
      logo: "/logos/barter.svg" 
    },
    { 
      name: "Cool FM", 
      logo: "/logos/cool-fm.svg" 
    }
  ];

  const reverseMarqueeItems = [
    { 
      name: "Total Nigeria", 
      logo: "/logos/total-nigeria.svg" 
    },
    { 
      name: "Oando PLC", 
      logo: "/logos/oando-plc.svg" 
    },
    { 
      name: "UPS", 
      logo: "/logos/ups.svg" 
    },
    { 
      name: "Ibom Air", 
      logo: "/logos/ibom-air.svg" 
    },
    { 
      name: "Milo", 
      logo: "/logos/milo.svg" 
    },
    { 
      name: "Aso Savings", 
      logo: "/logos/aso-savings.svg" 
    },
    { 
      name: "NIMC", 
      logo: "/logos/national-identity-management-commission.svg" 
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
      
      <div className="relative z-10 overflow-hidden bg-white">
        {/* Header Section */}
        <div className="py-4 bg-gradient-to-r from-gray-700 to-black text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of businesses across Nigeria that rely on our innovative solutions
          </p>
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

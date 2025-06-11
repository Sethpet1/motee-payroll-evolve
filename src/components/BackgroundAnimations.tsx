
import React from 'react';

const BackgroundAnimations = () => {
  return (
    <>
      {/* Enhanced Moving Gradient Background */}
      <div className="fixed inset-0 mesh-background -z-50"></div>
      
      {/* Enhanced Particle System */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Enhanced Floating Geometric Shapes with new colors */}
      <div className="floating-shapes">
        {/* Circles with green and orange gradients */}
        <div className="floating-shape w-4 h-4 bg-gradient-to-r from-motee-green to-orange-500 rounded-full"></div>
        <div className="floating-shape w-6 h-6 bg-gradient-to-r from-orange-500 to-motee-green rounded-full"></div>
        <div className="floating-shape w-3 h-3 bg-motee-green rounded-full"></div>
        <div className="floating-shape w-5 h-5 bg-orange-500 rounded-full"></div>
        <div className="floating-shape w-4 h-4 bg-gradient-to-r from-motee-green-dark to-orange-600 rounded-full"></div>
        <div className="floating-shape w-7 h-7 bg-gradient-to-r from-orange-600 to-motee-green-dark rounded-full"></div>
        <div className="floating-shape w-5 h-5 bg-motee-green-light rounded-full"></div>
        
        {/* Squares with modern styling */}
        <div className="floating-shape w-4 h-4 bg-gradient-to-br from-motee-green to-orange-500 transform rotate-45"></div>
        <div className="floating-shape w-6 h-6 bg-gradient-to-br from-orange-500 to-motee-green transform rotate-45"></div>
        <div className="floating-shape w-3 h-3 bg-motee-green transform rotate-45"></div>
        <div className="floating-shape w-5 h-5 bg-orange-500 transform rotate-45"></div>
        <div className="floating-shape w-4 h-4 bg-gradient-to-br from-motee-green-dark to-orange-600 transform rotate-45"></div>
        
        {/* Triangles */}
        <div className="floating-shape w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-motee-green"></div>
        <div className="floating-shape w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-orange-500"></div>
        <div className="floating-shape w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-motee-green-light"></div>
        <div className="floating-shape w-0 h-0 border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent border-b-orange-600"></div>
      </div>

      {/* Enhanced Corner Decorative Elements */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-gradient-to-br from-motee-green/20 to-orange-500/10 rounded-full animate-bounce-gentle -z-40"></div>
      <div className="fixed top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-motee-green/10 rounded-full animate-float-side -z-40"></div>
      <div className="fixed bottom-20 left-40 w-28 h-28 bg-gradient-to-br from-motee-green/15 to-orange-600/10 rounded-full animate-rotate-float -z-40"></div>
      <div className="fixed bottom-40 right-60 w-20 h-20 bg-gradient-to-br from-orange-500/15 to-motee-green/10 rounded-full animate-bounce-gentle -z-40" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-1/4 right-40 w-36 h-36 bg-gradient-to-br from-motee-green/10 to-orange-500/5 rounded-full animate-pulse-slow -z-40" style={{ animationDelay: '1s' }}></div>
      <div className="fixed bottom-1/4 left-60 w-16 h-16 bg-gradient-to-br from-orange-600/10 to-motee-green/5 rounded-full animate-rotate-float -z-40" style={{ animationDelay: '3s' }}></div>
      
      {/* New Pulsing Orbs */}
      <div className="fixed top-1/3 left-10 w-16 h-16 bg-gradient-to-r from-motee-green/30 to-transparent rounded-full animate-pulse-slow -z-40"></div>
      <div className="fixed bottom-1/3 right-10 w-12 h-12 bg-gradient-to-r from-orange-500/25 to-transparent rounded-full animate-pulse-slow -z-40" style={{ animationDelay: '1.5s' }}></div>
      <div className="fixed top-2/3 left-1/3 w-20 h-20 bg-gradient-to-r from-motee-green/20 to-transparent rounded-full animate-pulse-slow -z-40" style={{ animationDelay: '2.5s' }}></div>
      <div className="fixed bottom-2/3 right-1/3 w-24 h-24 bg-gradient-to-r from-orange-500/15 to-transparent rounded-full animate-pulse-slow -z-40" style={{ animationDelay: '3.5s' }}></div>
      
      {/* Animated Lines */}
      <div className="fixed top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-motee-green/30 to-transparent animate-pulse-slow -z-45"></div>
      <div className="fixed top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500/25 to-transparent animate-pulse-slow -z-45" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-motee-green/20 to-transparent animate-pulse-slow -z-45" style={{ animationDelay: '4s' }}></div>
      <div className="fixed top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-orange-600/15 to-transparent animate-pulse-slow -z-45" style={{ animationDelay: '6s' }}></div>
      
      {/* New Diagonal Lines */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-44">
        <div className="absolute top-0 left-1/4 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-motee-green/10 to-transparent transform -rotate-45 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-orange-500/10 to-transparent transform rotate-45 animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* New Animated Dots Grid */}
      <div className="fixed inset-0 grid grid-cols-5 grid-rows-5 -z-43">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="relative">
            <div 
              className="absolute w-1 h-1 rounded-full" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? '#059669' : '#EA580C',
                opacity: 0.2,
                animation: `pulse ${2 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 5}s`
              }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BackgroundAnimations;

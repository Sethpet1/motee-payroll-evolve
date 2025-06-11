
import React from 'react';

const BackgroundAnimations = () => {
  return (
    <>
      {/* Moving Gradient Background */}
      <div className="fixed inset-0 moving-gradient -z-50"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="floating-shapes">
        {/* Circles */}
        <div className="floating-shape w-4 h-4 bg-motee-blue rounded-full"></div>
        <div className="floating-shape w-6 h-6 bg-motee-green rounded-full"></div>
        <div className="floating-shape w-3 h-3 bg-motee-orange rounded-full"></div>
        <div className="floating-shape w-5 h-5 bg-motee-blue rounded-full"></div>
        
        {/* Squares */}
        <div className="floating-shape w-4 h-4 bg-motee-green transform rotate-45"></div>
        <div className="floating-shape w-6 h-6 bg-motee-orange transform rotate-45"></div>
        
        {/* Triangles */}
        <div className="floating-shape w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-motee-blue"></div>
        <div className="floating-shape w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-motee-green"></div>
      </div>

      {/* Corner Decorative Elements */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-motee-blue/5 rounded-full animate-bounce-gentle -z-40"></div>
      <div className="fixed top-40 right-20 w-24 h-24 bg-motee-green/5 rounded-full animate-float-side -z-40"></div>
      <div className="fixed bottom-20 left-40 w-28 h-28 bg-motee-orange/5 rounded-full animate-rotate-float -z-40"></div>
      <div className="fixed bottom-40 right-60 w-20 h-20 bg-motee-blue/5 rounded-full animate-bounce-gentle -z-40" style={{ animationDelay: '2s' }}></div>
    </>
  );
};

export default BackgroundAnimations;

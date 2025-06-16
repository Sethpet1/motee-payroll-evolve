import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';
import MSLBackground from '@/components/MSLBackground';

const CalculatorPage = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <MSLBackground />
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-motee-blue to-motee-green bg-clip-text text-transparent mb-4">
                Payroll Calculator
              </h1>
              <p className="text-lg text-motee-gray max-w-2xl mx-auto">
                Calculate your take-home pay, tax deductions, and net salary with our easy-to-use calculator. 
                Get instant estimates based on current tax rates.
              </p>
            </div>
            
            <Calculator />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatorPage; 
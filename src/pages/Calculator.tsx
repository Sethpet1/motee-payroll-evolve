import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';
import MSLBackground from '@/components/MSLBackground';
import { Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CalculatorPage = () => {
  const [showDemoAlert, setShowDemoAlert] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative bg-white">
      <MSLBackground />
      <Header />
      
      {/* Alert under header, right-aligned */}
      {showDemoAlert && (
        <div className="container mx-auto px-4 flex justify-end mt-2">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white p-5 border border-blue-200 bg-blue-50 rounded-lg flex items-start shadow-lg relative">
            <Info className="text-blue-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-1">Tired of manual payroll calculations?</div>
              <div className="text-gray-700 text-sm mb-3">Our software transforms complex payroll math into a breeze, eliminating errors. Request a quick demo now and simplify your payroll management.</div>
              <button
                className="border border-blue-400 text-blue-700 px-4 py-2 rounded hover:bg-blue-100 font-medium transition"
                onClick={() => navigate('/book-demo')}
              >
                Book a Demo
              </button>
            </div>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold focus:outline-none"
              onClick={() => setShowDemoAlert(false)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      
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
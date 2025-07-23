import React from "react";
import { motion } from "framer-motion";

const AboutMSL = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative text-center mb-24 overflow-hidden rounded-3xl py-16">
         
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-gradient-to-r from-motee-green/5 to-motee-orange/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-pulse">
              <span className="bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent animate-pulse">
                About MSL
              </span>
            </h1>
            <div className="flex flex-col items-center gap-6">
              <div className="w-32 h-1 bg-gradient-to-r from-motee-green to-motee-orange mx-auto rounded-full"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                Transforming payroll management with innovative solutions that put people first
              </p>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-l text-gray-700 leading-relaxed">
                The true measure of a company is not just in the profits it generates, but in the value it places on the people who make those profits possible. When employees are happy, business thrives. And at the heart of that happiness is a reliable payroll system.
              </p>
              <p className="text-l text-gray-600 leading-relaxed">
                When payroll works effortlessly, your people feel safe. They can focus on what they do best, and you can focus on what you do best.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-motee-green rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-motee-orange rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-500">Trusted by 500+ companies</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-motee-green/20 to-motee-orange/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full max-w-lg h-96 bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
              <img
                src="/Images/3.jpg"
                alt="Happy employees"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-1xl font-bold text-gray-900">The Problem</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-l text-gray-700 leading-relaxed">
                  Nigeria businesses have reported losing as much as ₦220 billion per year as a result of payroll errors. And it's linked to the continuing use of traditional payroll methods.
                  </p>
                  <p className="text-l text-gray-700 leading-relaxed">
                  Thankfully, there is a payroll solution that can help you avoid finance-related headaches—payroll software. Our online payroll offers benefits such as streamlining the payment process,improving accuracy, and saving costs.
                  </p>
                  <div className="bg-gradient-to-r from-motee-green/10 to-motee-orange/10 rounded-xl p-4">
                    <p className="text-l text-gray-700">
                      <span className="font-semibold text-motee-green">No more spending hours on payroll calculations or dealing with costly mistakes.</span>We streamline the process, so you can invest your resources where they matter most
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-full max-w-lg h-96 bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src="/Images/ChatGPT Image Jun 21, 2025, 11_58_41 AM.png"
                    alt="Office scene 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-motee-green/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-1xl font-bold text-gray-900">Interested in MSL Payroll? See it in action.</h3>
            </div>
            <div className="space-y-4">
              <p className="text-l text-gray-700 leading-relaxed">
                We've seen the damage broken payroll systems can cause—missed payments, lost trust, and businesses held back by chaos.
              </p>
              <p className="text-l text-gray-700 leading-relaxed">
                If payroll errors, inefficiencies, or outdated systems are causing constant headaches, switching to a better payroll provider might be the smartest move your business makes.
              </p>
              <div className="bg-gradient-to-r from-motee-green/5 to-motee-orange/5 rounded-xl p-6 border border-motee-green/20">
                <h4 className="font-semibold text-motee-green mb-2">The Good News?</h4>
                <p className="text-l text-gray-700">
                  Switching payroll providers doesn't have to be difficult. With the right approach (and the right provider), it can be a smooth, stress-free transition.
                </p>
              </div>
              <p className="text-l text-gray-700 leading-relaxed">
                Switching payroll providers shouldn't be a hassle—it should be an opportunity to improve accuracy, service and your solution.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-motee-green/20 to-motee-orange/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full max-w-lg h-96 bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
              <img
                src="/assets/images/ChatGPT Image Jun 22, 2025, 04_20_15 PM copy.png"
                alt="Switching payroll provider"
                className="w-full h-full object-fill object-[100%_100%] mb-20"
              />
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-motee-green/10 to-motee-orange/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-motee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Payroll?</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Running a business is demanding, especially when it comes to managing payroll and HR tasks. Whether you're juggling payroll on your own or overseeing an HR team, our managed payroll services and integrated payroll and HR software solutions make it easy to keep on top of compliance with an accurate and stress-free solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-motee-green to-motee-orange text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
              <button className="px-8 py-3 border-2 border-motee-green text-motee-green font-semibold rounded-xl hover:bg-motee-green hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMSL; 
import React from 'react';
import { Smartphone, Download, Star, Shield, Zap, CreditCard } from 'lucide-react';

const EmployeeExperience = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Salary on Demand",
      description: "Access your earned salary instantly, anytime you need it"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security for all your financial activities"
    },
    {
      icon: Zap,
      title: "Instant Loans",
      description: "Quick loan approvals with flexible repayment options"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-motee-gray-dark leading-tight">
                Give your employees an{' '}
                <span className="text-motee-orange">unforgettable Experience</span>
              </h2>
              <p className="text-xl text-motee-gray leading-relaxed">
                Empower, engage, and elevate every moment of their journey.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-motee-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-motee-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-motee-gray-dark mb-2">{feature.title}</h3>
                    <p className="text-motee-gray">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* Apple App Store Button */}
              <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors min-w-[160px]">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs leading-tight">Download on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </button>
              
              {/* Google Play Store Button */}
              <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors min-w-[160px]">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs leading-tight">Get it on</div>
                  <div className="text-lg font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Mobile Mockups */}
          <div className="relative">
            {/* Main Phone */}
            <div className="relative z-20 mx-auto w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-white">
                  <span className="text-sm font-medium">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                    <div className="w-6 h-3 bg-black rounded-sm"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Hi, Benjamin</h3>
                      <p className="text-sm text-gray-500">What do you want to do today?</p>
                    </div>
                    <div className="w-10 h-10 bg-motee-orange/10 rounded-full flex items-center justify-center">
                      <span className="text-motee-orange font-semibold">B</span>
                    </div>
                  </div>
                </div>

                {/* Salary on Demand Card */}
                <div className="px-6 py-4">
                  <div className="bg-gradient-to-r from-motee-orange to-motee-orange/90 rounded-2xl p-6 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-orange-100 text-sm">Salary to date</p>
                        <p className="text-2xl font-bold">₦200,000.00</p>
                      </div>
                      <div className="bg-white/20 rounded-lg px-3 py-1">
                        <span className="text-xs font-medium">Available to withdraw</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5" />
                        <span className="text-sm">Salary on Demand</span>
                      </div>
                      <button className="bg-white text-motee-orange px-4 py-2 rounded-lg text-sm font-semibold">
                        Withdraw
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="px-6 py-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="w-8 h-8 bg-motee-green/10 rounded-lg flex items-center justify-center mb-2">
                        <Shield className="h-4 w-4 text-motee-green" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">Utilities</p>
                      <p className="text-xs text-gray-500">Pay bills</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="w-8 h-8 bg-motee-blue/10 rounded-lg flex items-center justify-center mb-2">
                        <Zap className="h-4 w-4 text-motee-blue" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">Advance</p>
                      <p className="text-xs text-gray-500">Get loan</p>
                    </div>
                  </div>
                </div>

                {/* Balance Info */}
                <div className="px-6 py-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Available Balance</span>
                      <span className="text-lg font-bold text-motee-green">₦80,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Withdrawn</span>
                      <span className="text-sm text-gray-900">₦20,000.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Phone (Loan Balance) */}
            <div className="absolute -left-16 top-20 z-10 w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-xl opacity-80">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-4 py-2 bg-white">
                  <span className="text-xs font-medium">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Loan Balance</h3>
                </div>

                {/* Loan Info */}
                <div className="px-4 py-4">
                  <div className="text-center mb-4">
                    <p className="text-xs text-gray-500 mb-1">Total Loan Amount</p>
                    <p className="text-2xl font-bold text-motee-blue">₦17,000,000</p>
                    <div className="flex justify-center items-center space-x-4 mt-2">
                      <span className="text-xs text-gray-500">Tenor(Months)</span>
                      <span className="text-sm font-semibold">12</span>
                    </div>
                  </div>

                  {/* Payment Status */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-motee-orange rounded-full"></div>
                        <span className="text-xs text-gray-700">Monthly repayment</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-900">₦4,165,166</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-motee-green rounded-full"></div>
                        <span className="text-xs text-gray-700">Monthly repayment</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-900">₦4,165,166</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Phone (Shopping) */}
            <div className="absolute -right-12 top-32 z-10 w-56 h-[450px] bg-black rounded-[2rem] p-1.5 shadow-xl opacity-70">
              <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                <div className="p-3">
                  <div className="bg-gradient-to-r from-motee-green to-motee-blue rounded-xl p-4 text-white text-center">
                    <h4 className="text-sm font-bold mb-1">Purchase highly</h4>
                    <h4 className="text-sm font-bold mb-2">discounted Items</h4>
                    <button className="bg-motee-orange text-white px-3 py-1 rounded-lg text-xs font-semibold">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-motee-orange/20 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-motee-green/30 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeExperience; 
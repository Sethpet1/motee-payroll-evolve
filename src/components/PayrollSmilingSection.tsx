import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PayrollSmilingSection = () => {
  return (
    <section className="w-full bg-[#f5f9f3] py-8 md:py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left: Text Content */}
        <div className="max-w-xl w-full text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          Stress-Free Global Payroll <br className="hidden lg:block" />
          That Leaves You Smiling
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-md mb-6 md:mb-8 justify-center">
          We understand the complexities of managing people and staying compliant while trying to grow. That's why we built MSL Payroll — a smart, intuitive solution that goes beyond simply paying employees. <br /> <br />
          MSL Payroll simplifies administrative tasks, integrates seamlessly with your HR tools, and supports your team every step of the way. Whether you're onboarding your first hire or managing a distributed workforce, MSL Payroll scales with you.
          </p>
          <Link to="/book-demo">
            <Button className="bg-motee-green hover:bg-motee-green text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-lg shadow">
            See It in Action
            </Button>
          </Link>
        </div>
        {/* Right: Dashboard Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end w-full relative min-h-[300px] md:min-h-[420px]">
          {/* Yellow abstract shape */}
          <div className="absolute -right-5 md:-right-10 top-0 z-0">
            <svg width="120" height="120" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[180px] md:h-[180px]">
              <path d="M160 0C180 40 120 60 160 100C200 140 80 180 60 120C40 60 0 80 20 40C40 0 140 -40 160 0Z" fill="#F9B233"/>
            </svg>
          </div>
          {/* Dashboard Card */}
          <div className="relative z-10 w-[280px] sm:w-[350px] md:w-[420px] max-w-full bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-3 md:gap-4">
            <div className="flex gap-3 md:gap-4">
              <div className="w-24 md:w-32 min-w-[80px] md:min-w-[120px]">
                <span className="text-sm md:text-lg font-bold text-motee-green">MSL Software</span>
                <ul className="mt-4 md:mt-6 space-y-1 md:space-y-2 text-gray-500 text-xs md:text-sm">
                  <li className="font-medium text-gray-700">Dashboard</li>
                  <li>Payroll</li>
                  <li>Timesheets</li>
                  <li>Reports</li>
                  <li>Salary advance</li>
                  <li>Loans</li>
                  <li>Expenses</li>
                  <li className="mt-3 md:mt-4 font-medium text-gray-700">People</li>
                  <li>Job Profile</li>
                </ul>
                <div className="mt-4 md:mt-6 text-xs text-gray-400">Kelvin N'Gage</div>
              </div>
              <div className="flex-1 pl-3 md:pl-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg md:text-2xl font-semibold text-gray-800">Dashboard</span>
                  <span className="inline-block w-16 md:w-24 h-3 md:h-4 bg-green-100 rounded-full"></span>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <div className="bg-green-50 rounded-lg p-2 md:p-3 flex flex-col items-center">
                    <span className="text-xs font-semibold text-green-800">LEAVES</span>
                    <span className="block text-xs text-gray-700 mt-1 text-center">Request for leave and get approved quickly</span>
                    <button className="mt-2 bg-green-600 text-white text-xs px-2 md:px-3 py-1 rounded">Apply for</button>
                  </div>
                  <div className="bg-white border rounded-lg p-2 md:p-3 flex flex-col items-center">
                    <span className="text-xs font-semibold text-gray-800">Salary Advance</span>
                    <svg width="30" height="30" fill="none" className="my-1 md:my-2 md:hidden">
                      <circle cx="15" cy="15" r="15" fill="#F9B233"/>
                      <path d="M15 7.5l4.5 9h-9l4.5-9z" fill="#fff"/>
                    </svg>
                    <svg width="40" height="40" fill="none" className="my-2 hidden md:block">
                      <circle cx="20" cy="20" r="20" fill="#F9B233"/>
                      <path d="M20 10l6 12h-12l6-12z" fill="#fff"/>
                    </svg>
                    <span className="block text-xs text-gray-700 text-center">Your salary advance has been approved</span>
                    <button className="mt-2 bg-green-600 text-white text-xs px-2 md:px-3 py-1 rounded">Approve</button>
                  </div>
                </div>
                {/* Profile Card */}
                <div className="absolute right-0 top-12 md:top-16 bg-white rounded-xl shadow-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 w-48 md:w-64 border z-20" style={{transform: 'translateX(20%)', maxWidth: 'calc(100vw - 2rem)'}}>
                  <img src="/assets/images/IMG_6214.PNG" alt="Ann Omare" className="w-8 h-8 md:w-12 md:h-12 rounded-full object-fill object-[100%_100%]" />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-800 text-sm md:text-base truncate">Henry Nathan</div>
                    <div className="text-xs text-gray-500">Employee ID: 8123457</div>
                    <div className="text-xs text-green-700 font-medium">Operations</div>
                    <div className="text-xs text-gray-400 truncate">Chief Accountant</div>
                  </div>
                </div>
                {/* Info Card */}
                <div className="absolute right-0 top-28 md:top-40 bg-white rounded-xl shadow-lg p-3 md:p-4 w-56 md:w-72 border z-20" style={{transform: 'translateX(15%)', maxWidth: 'calc(100vw - 2rem)'}}>
                  <div className="text-xs text-gray-500 mb-1">Work Email <span className="text-green-700 ml-1 md:ml-2 text-xs">enquiry@moteesolution.com</span></div>
                  <div className="text-xs text-gray-500 mb-1">Phone <span className="text-green-700 ml-1 md:ml-2 text-xs">+234 812 345 678</span></div>
                  <div className="text-xs text-gray-500 mb-1">Date of Birth <span className="ml-1 md:ml-2 text-xs">23rd October, 1980</span></div>
                  <div className="text-xs text-gray-500 mb-1">Address <span className="ml-1 md:ml-2 text-xs">75,Aminu crescent, Abuja, Nigeria</span></div>
                  <div className="text-xs text-gray-500">Reports to <span className="ml-1 md:ml-2 font-semibold text-green-700 text-xs">Kunle Ajayi</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayrollSmilingSection; 
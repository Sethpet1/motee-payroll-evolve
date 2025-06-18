import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PayrollSmilingSection = () => {
  return (
    <section className="w-full bg-[#f5f9f3] py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="max-w-xl w-full text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            The Global Payroll Solution That <br className="hidden lg:block" />
            Keeps You Smiling
          </h2>
          <p className="text-gray-700 text-base lg:text-lg mb-8">
            You're diverse, unique and exciting, and your HR tasks don't have to be monotonous. Workpay streamlines your to-do list so you can focus on the rules that matter most. Whether it's onboarding new employees or scheduling a leave, the system works!
          </p>
          <Link to="/book-demo">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow">
              See it in action
            </Button>
          </Link>
        </div>
        {/* Right: Dashboard Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end w-full relative min-h-[420px]">
          {/* Yellow abstract shape */}
          <div className="absolute -right-10 top-0 z-0">
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M160 0C180 40 120 60 160 100C200 140 80 180 60 120C40 60 0 80 20 40C40 0 140 -40 160 0Z" fill="#F9B233"/>
            </svg>
          </div>
          {/* Dashboard Card */}
          <div className="relative z-10 w-[420px] max-w-full bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-32 min-w-[120px]">
                <span className="text-lg font-bold text-green-700">MSL Software</span>
                <ul className="mt-6 space-y-2 text-gray-500 text-sm">
                  <li className="font-medium text-gray-700">Dashboard</li>
                  <li>Payroll</li>
                  <li>Timesheets</li>
                  <li>Reports</li>
                  <li>Salary advance</li>
                  <li>Loans</li>
                  <li>Expenses</li>
                  <li className="mt-4 font-medium text-gray-700">People</li>
                  <li>Job Profile</li>
                </ul>
                <div className="mt-6 text-xs text-gray-400">Kelvin N'Gage</div>
              </div>
              <div className="flex-1 pl-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-semibold text-gray-800">Dashboard</span>
                  <span className="inline-block w-24 h-4 bg-green-100 rounded-full"></span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-lg p-3 flex flex-col items-center">
                    <span className="text-xs font-semibold text-green-800">LEAVES</span>
                    <span className="block text-xs text-gray-700 mt-1">Request for leave and get approved quickly</span>
                    <button className="mt-2 bg-green-600 text-white text-xs px-3 py-1 rounded">Apply for</button>
                  </div>
                  <div className="bg-white border rounded-lg p-3 flex flex-col items-center">
                    <span className="text-xs font-semibold text-gray-800">Salary Advance</span>
                    <svg width="40" height="40" fill="none" className="my-2"><circle cx="20" cy="20" r="20" fill="#F9B233"/><path d="M20 10l6 12h-12l6-12z" fill="#fff"/></svg>
                    <span className="block text-xs text-gray-700">Your salary advance has been approved</span>
                    <button className="mt-2 bg-green-600 text-white text-xs px-3 py-1 rounded">Approve</button>
                  </div>
                </div>
                {/* Profile Card */}
                <div className="absolute right-0 top-16 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 w-64 border z-20" style={{transform: 'translateX(40%)'}}>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ann Omare" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-800">Ann Omare</div>
                    <div className="text-xs text-gray-500">Employee ID: 8123457</div>
                    <div className="text-xs text-green-700 font-medium">Operations</div>
                    <div className="text-xs text-gray-400">Chief Accountant</div>
                  </div>
                </div>
                {/* Info Card */}
                <div className="absolute right-0 top-40 bg-white rounded-xl shadow-lg p-4 w-72 border z-20" style={{transform: 'translateX(30%)'}}>
                  <div className="text-xs text-gray-500 mb-1">Work Email <span className="text-green-700 ml-2">knjoroge@zoea.com</span></div>
                  <div className="text-xs text-gray-500 mb-1">Phone <span className="text-green-700 ml-2">+254 712 345 678</span></div>
                  <div className="text-xs text-gray-500 mb-1">Date of Birth <span className="ml-2">23rd October</span></div>
                  <div className="text-xs text-gray-500 mb-1">Address <span className="ml-2">13 Riverside Drive, Nairobi, Kenya</span></div>
                  <div className="text-xs text-gray-500">Reports to <span className="ml-2 font-semibold text-green-700">Geoffrey Mugo</span></div>
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
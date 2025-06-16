import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PayrollCalculation {
  netSalary: number;
  employerCosts: number;
  totalCost: number;
}

const Calculator = () => {
  const [formData, setFormData] = useState({
    country: 'Nigeria',
    basicSalary: 0,
    housingAllowance: 0,
    transportAllowance: 0,
    deductPension: false,
    deductNHF: false,
    deductNHIS: false,
    deductPAYE: false
  });

  const [result, setResult] = useState<PayrollCalculation>({
    netSalary: 0,
    employerCosts: 0,
    totalCost: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : Number(value)
    }));
  };

  const calculatePayroll = () => {
    const { basicSalary, housingAllowance, transportAllowance, deductNHF, deductPension, deductNHIS, deductPAYE } = formData;
    
    // Calculate gross salary
    const grossSalary = basicSalary + housingAllowance + transportAllowance;
    
    let deductions = 0;
    
    // Calculate NHF (2.5% of basic salary)
    if (deductNHF) {
      deductions += basicSalary * 0.025;
    }
    
    // Calculate Pension (8% of basic salary + housing + transport)
    if (deductPension) {
      deductions += grossSalary * 0.08;
    }
    
    // Calculate NHIS (if selected)
    if (deductNHIS) {
      deductions += grossSalary * 0.05;
    }
    
    // Calculate PAYE (simplified for demo)
    if (deductPAYE) {
      // Progressive tax rate implementation would go here
      deductions += grossSalary * 0.1; // Simplified 10% tax rate
    }
    
    const netSalary = grossSalary - deductions;
    
    // Employer costs (example: employer pension contribution 10%)
    const employerCosts = deductPension ? grossSalary * 0.1 : 0;
    
    setResult({
      netSalary,
      employerCosts,
      totalCost: grossSalary + employerCosts
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white/95 rounded-xl shadow-lg backdrop-blur-sm">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-motee-blue to-motee-green bg-clip-text text-transparent">
            Payroll Cost Calculator
          </h2>
          <p className="mt-2 text-motee-gray">
            Select the country you want to hire in, to explore and benchmark salaries for international roles.
          </p>
        </div>

        <div className="space-y-6">
          {/* Country Selection */}
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-motee-gray">Choose desired country</label>
            <select
              value={formData.country}
              onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
            >
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>

          {/* Salary Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-motee-gray">Salary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-motee-gray mb-1">Basic Salary Rate</label>
                <input
                  type="number"
                  name="basicSalary"
                  value={formData.basicSalary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-motee-gray mb-1">Housing Allowance Rate</label>
                <input
                  type="number"
                  name="housingAllowance"
                  value={formData.housingAllowance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-motee-gray mb-1">Transport Allowance Rate</label>
              <input
                type="number"
                name="transportAllowance"
                value={formData.transportAllowance}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
                placeholder="0"
              />
            </div>
          </div>

          {/* Deductions Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="deductPension"
                checked={formData.deductPension}
                onChange={handleInputChange}
                className="w-4 h-4 text-motee-green border-gray-300 rounded focus:ring-motee-green"
              />
              <label className="text-sm text-gray-700">Deduct Pension</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="deductNHF"
                checked={formData.deductNHF}
                onChange={handleInputChange}
                className="w-4 h-4 text-motee-green border-gray-300 rounded focus:ring-motee-green"
              />
              <label className="text-sm text-gray-700">Deduct NHF</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="deductNHIS"
                checked={formData.deductNHIS}
                onChange={handleInputChange}
                className="w-4 h-4 text-motee-green border-gray-300 rounded focus:ring-motee-green"
              />
              <label className="text-sm text-gray-700">Deduct NHIS</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="deductPAYE"
                checked={formData.deductPAYE}
                onChange={handleInputChange}
                className="w-4 h-4 text-motee-green border-gray-300 rounded focus:ring-motee-green"
              />
              <label className="text-sm text-gray-700">Deduct PAYE</label>
            </div>
          </div>

          <button
            onClick={calculatePayroll}
            className="w-full py-3 bg-motee-green text-white font-semibold rounded-lg hover:bg-motee-green/90 transition-colors"
          >
            Calculate
          </button>

          {/* Results Section */}
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-semibold text-motee-gray">Total calculations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-motee-gray">Employee Costs</h4>
                <div className="text-2xl font-bold text-motee-green">
                  ₦{result.netSalary.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-motee-gray">Employer Costs</h4>
                <div className="text-2xl font-bold text-motee-green">
                  ₦{result.employerCosts.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="bg-motee-blue p-6 rounded-xl text-white">
                <h4 className="text-lg font-medium">Net Pay</h4>
                <div className="text-3xl font-bold">
                  ₦{result.totalCost.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator; 
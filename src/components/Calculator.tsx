import React, { useState, useEffect } from "react";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface PayrollCalculation {
  netSalary: number;
  employeePension: number;
  employerPension: number;
  nhf: number;
  nhis: number;
  employerNhis: number;
  totalDeductions: number;
  totalCost: number;
}

const Calculator = () => {
  const [formData, setFormData] = useState({
    country: "Nigeria",
    salary: 0,
    basicSalary: 0,
    housingAllowance: 0,
    transportAllowance: 0,
    deductPension: false,
    deductNHF: false,
    deductNHIS: false,
    deductPAYE: false,
  });

  const [result, setResult] = useState<PayrollCalculation>({
    netSalary: 0,
    employeePension: 0,
    employerPension: 0,
    nhf: 0,
    nhis: 0,
    employerNhis: 0,
    totalDeductions: 0,
    totalCost: 0,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : Number(value),
    }));
  };

  const calculatePayroll = () => {
    const {
      basicSalary,
      housingAllowance,
      transportAllowance,
      deductNHF,
      deductPension,
      deductNHIS,
      deductPAYE,
    } = formData;

    // Calculate gross salary
    const grossSalary = formData.salary > 0 ? formData.salary : basicSalary + housingAllowance + transportAllowance;

    let totalDeductions = 0;

    // Calculate NHF (2.5% of basic salary)
    if (deductNHF) {
      const nhf = basicSalary * 0.025;
    }

    // Calculate Employee Pension costs (8% of basic salary + housing + transport)
    let employeePension = 0;
    if (deductPension && grossSalary > 0) {
      employeePension = grossSalary * 0.08;
      totalDeductions += employeePension;
    }

    // Calculate NHIS (5% of gross salary) /* Employee pays 5% */
    if (deductNHIS) {
      totalDeductions += grossSalary * 0.05;

      // Calculate Employer NHIS (10% of gross salary)
      const employerNhis = grossSalary * 0.1;
      totalDeductions += employerNhis;
    }

    // Calculate PAYE (simplified progressive tax rate)
    let payeTax = 0;
    if (deductPAYE) {
      if (grossSalary <= 300000) {
        payeTax = grossSalary * 0.07; // 7% for first 300k
      } else if (grossSalary <= 600000) {
        payeTax = 300000 * 0.07 + (grossSalary - 300000) * 0.11; // 11% for next 300k
      } else if (grossSalary <= 1100000) {
        payeTax = 300000 * 0.07 + 300000 * 0.11 + (grossSalary - 600000) * 0.15; // 15% for next 500k
      } else if (grossSalary <= 1600000) {
        payeTax =
          300000 * 0.07 +
          300000 * 0.11 +
          500000 * 0.15 +
          (grossSalary - 1100000) * 0.19; // 19% for next 500k
      } else {
        payeTax =
          300000 * 0.07 +
          300000 * 0.11 +
          500000 * 0.15 +
          500000 * 0.19 +
          (grossSalary - 1600000) * 0.21; // 21% for remaining
      }
      totalDeductions += payeTax;
    }

    // Calculate Employer Pension costs (10% of gross salary)
    const employerPension = deductPension ? grossSalary * 0.1 : 0;

    // Calculate net salary (gross salary - deductions)
    const netSalary = grossSalary - totalDeductions;

    // Calculate total cost to employer (gross salary + employer pension)
    const totalCost = grossSalary + employerPension;

    // Calculate NHF (2.5% of basic salary)
    const nhf = deductNHF ? basicSalary * 0.025 : basicSalary * 0.025;

    // Calculate NHIS (5% of gross salary)
    const nhis = deductNHIS ? grossSalary * 0.05 : grossSalary * 0.05;

    // Calculate NHIS (10% of gross salary)
    const employerNhis = deductNHIS ? grossSalary * 0.1 : grossSalary * 0.1;

    setResult({
      netSalary,
      employeePension,
      employerPension,
      nhf: deductNHF ? nhf : 0,
      nhis: deductNHIS ? nhis : 0,
      employerNhis: deductNHIS ? employerNhis : 0,
      totalDeductions: employeePension + (deductNHIS ? nhis : 0) + (deductPAYE ? payeTax : 0),
      totalCost,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white/95 rounded-xl shadow-lg backdrop-blur-sm">
      <div className="space-y-8">
        <div className="text-center">
          <p className="mt-2 text-motee-gray">
            Select the country you want to hire in, to explore and benchmark
            salaries for international roles.
          </p>
        </div>

        <div className="space-y-6">
          {/* Country Selection */}
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-motee-gray">
              Choose desired country
            </label>
            <select
              value={formData.country}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, country: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
            >
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>

          {/* Salary Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-motee-gray">Salary</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-motee-gray mb-1">
                Salary (Gross)
              </label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
                placeholder="0"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-motee-gray mb-1">
                  Basic Salary Rate
                </label>
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
                <label className="block text-sm font-medium text-motee-gray mb-1">
                  Housing Allowance Rate
                </label>
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
              <label className="block text-sm font-medium text-motee-gray mb-1">
                Transport Allowance Rate
              </label>
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
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Total Calculations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Net Pay */}
              <div className="bg-white border border-green-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mr-3">
                    <span className="text-green-600 font-bold text-lg">₦</span>
                  </span>
                  <span className="text-lg font-semibold text-green-700">Net Pay</span>
                </div>
                <div className="text-3xl font-bold text-green-700 mb-1">
                  {result.netSalary.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-sm text-gray-500">Take-home after all deductions</span>
              </div>
              {/* Total Deductions */}
              <div className="bg-white border border-red-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 mr-3">
                    <span className="text-red-600 font-bold text-lg">-</span>
                  </span>
                  <span className="text-lg font-semibold text-red-700">Total Deductions</span>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {result.totalDeductions.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-sm text-gray-500">Sum of all employee deductions</span>
              </div>
              {/* Employee Pension */}
              <div className="bg-white border border-blue-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3">
                    <span className="text-blue-600 font-bold text-lg">%</span>
                  </span>
                  <span className="text-lg font-semibold text-blue-700">Employee Pension</span>
                </div>
                <div className="text-2xl font-bold text-blue-700 mb-1">
                  {result.employeePension.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-sm text-gray-500">8% of gross salary</span>
              </div>
              {/* Employer Pension */}
              <div className="bg-white border border-blue-50 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 mr-3">
                    <span className="text-blue-400 font-bold text-lg">%</span>
                  </span>
                  <span className="text-lg font-semibold text-blue-400">Employer Pension</span>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {result.employerPension.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-sm text-gray-500">10% of gross salary</span>
              </div>
              {/* NHF */}
              <div className="bg-white border border-yellow-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 mr-3">
                    <span className="text-yellow-600 font-bold text-lg">NHF</span>
                  </span>
                  <span className="text-lg font-semibold text-yellow-700">NHF</span>
                </div>
                <div className="text-2xl font-bold text-yellow-700 mb-1">
                  {result.nhf.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-sm text-gray-500">2.5% of basic salary</span>
              </div>
              {/* Employee NHIS */}
              <div className="bg-white border border-purple-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 mr-3">
                    <span className="text-purple-600 font-bold text-lg">NHIS</span>
                  </span>
                  <span className="text-lg font-semibold text-purple-700">Employee NHIS</span>
                </div>
                <div className="text-2xl font-bold text-purple-700 mb-1">
                  {result.nhis.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-sm text-gray-500">5% of gross salary</span>
              </div>
              {/* Employer NHIS */}
              <div className="bg-white border border-purple-50 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 mr-3">
                    <span className="text-purple-400 font-bold text-lg">NHIS</span>
                  </span>
                  <span className="text-lg font-semibold text-purple-400">Employer NHIS</span>
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {result.employerNhis.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-sm text-gray-500">10% of gross salary</span>
              </div>
              {/* Total Cost to Employer */}
              <div className="bg-motee-green/90 border border-green-200 rounded-xl p-6 shadow flex flex-col items-start col-span-1 md:col-span-2">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white mr-3">
                    <span className="text-motee-green font-bold text-lg">₦</span>
                  </span>
                  <span className="text-lg font-semibold text-white">Total Cost to Employer</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {result.totalCost.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-sm text-white/80">Gross salary + employer contributions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

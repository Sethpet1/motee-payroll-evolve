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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface PayrollCalculation {
  netSalary: number;
  employeePension: number;
  employerPension: number;
  nhf: number;
  nhis: number;
  employerNhis: number;
  payeTax: number;
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
    payeTax: 0,
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
    const grossSalary =
      formData.salary > 0
        ? formData.salary
        : basicSalary + housingAllowance + transportAllowance;

    let totalDeductions = 0;

    // Calculate NHF (2.5% of basic salary)
    if (deductNHF) {
      const nhf = basicSalary * 0.025;
      totalDeductions += nhf;
    }

    // Calculate Employee Pension costs (8% of basic salary + housing + transport)
    let employeePension = 0;
    if (
      deductPension &&
      basicSalary + housingAllowance + transportAllowance > 0
    ) {
      employeePension =
        (basicSalary + housingAllowance + transportAllowance) * 0.08;
      totalDeductions += employeePension;
    }

    // Calculate Employer Pension costs (10% of basic salary + housing + transport)
    let employerPension = 0;
    if (
      deductPension &&
      basicSalary + housingAllowance + transportAllowance > 0
    ) {
      employerPension =
        (basicSalary + housingAllowance + transportAllowance) * 0.1;
    }

    // Calculate NHIS costs
    let nhis = 0;
    let employerNhis = 0;
    if (deductNHIS) {
      nhis = grossSalary * 0.05; // Employee's contribution
      employerNhis = grossSalary * 0.1; // Employer's contribution
      totalDeductions += nhis;
    }

    // Calculate PAYE (Proper Nigerian PAYE calculation)
    let payeTax = 0;
    if (deductPAYE) {
      // Step 1: Calculate annual figures
      const annualGrossSalary = grossSalary * 12;
      const annualBasicSalary = basicSalary * 12;
      const annualHousingAllowance = housingAllowance * 12;
      const annualTransportAllowance = transportAllowance * 12;
      
      // Step 2: Calculate BHT (Basic + Housing + Transport) for pension
      const annualBHT = annualBasicSalary + annualHousingAllowance + annualTransportAllowance;
      
      // Step 3: Calculate statutory deductions
      const annualPension = deductPension ? annualBHT * 0.08 : 0;
      const annualNHF = deductNHF ? annualBasicSalary * 0.025 : 0;
      
      // Step 4: Calculate Consolidated Relief Allowance (CRA)
      const onePercentOfGross = annualGrossSalary * 0.01;
      const twentyPercentOfGross = annualGrossSalary * 0.20;
      const cra = Math.max(200000, onePercentOfGross) + twentyPercentOfGross;
      
      // Step 5: Calculate total reliefs
      const totalReliefs = cra + annualPension + annualNHF;
      
      // Step 6: Calculate taxable income
      const taxableIncome = annualGrossSalary - totalReliefs;
      
      // Step 7: Apply progressive tax bands
      if (taxableIncome > 0) {
        if (taxableIncome <= 300000) {
          payeTax = taxableIncome * 0.07;
        } else if (taxableIncome <= 600000) {
          payeTax = 300000 * 0.07 + (taxableIncome - 300000) * 0.11;
        } else if (taxableIncome <= 1100000) {
          payeTax = 300000 * 0.07 + 300000 * 0.11 + (taxableIncome - 600000) * 0.15;
        } else if (taxableIncome <= 1600000) {
          payeTax = 300000 * 0.07 + 300000 * 0.11 + 500000 * 0.15 + (taxableIncome - 1100000) * 0.19;
        } else if (taxableIncome <= 3200000) {
          payeTax = 300000 * 0.07 + 300000 * 0.11 + 500000 * 0.15 + 500000 * 0.19 + (taxableIncome - 1600000) * 0.21;
        } else {
          payeTax = 300000 * 0.07 + 300000 * 0.11 + 500000 * 0.15 + 500000 * 0.19 + 1600000 * 0.21 + (taxableIncome - 3200000) * 0.24;
        }
      }
      
      // Convert annual tax to monthly
      payeTax = payeTax / 12;
      totalDeductions += payeTax;
    }

    // Calculate net salary (gross salary - total deductions)
    const netSalary = grossSalary - totalDeductions;

    // Calculate total cost to employer (gross salary + employer pension + employer NHIS)
    const totalCost = grossSalary + employerPension + employerNhis;

    // Calculate NHF for display if needed
    const nhf = deductNHF ? basicSalary * 0.025 : 0;

    setResult({
      netSalary,
      employeePension,
      employerPension,
      nhf,
      nhis,
      employerNhis,
      payeTax,
      totalDeductions,
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Total Calculations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Net Pay */}
              <div className="bg-white border border-green-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mr-3">
                    <span className="text-green-600 font-bold text-lg">₦</span>
                  </span>
                  <span className="text-lg font-semibold text-green-700">
                    Net Pay
                  </span>
                </div>
                <div className="text-3xl font-bold text-green-700 mb-1">
                  {result.netSalary.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  Take-home after all deductions
                </span>
              </div>
              {/* Total Deductions */}
              <div className="bg-white border border-red-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 mr-3">
                    <span className="text-red-600 font-bold text-lg">-</span>
                  </span>
                  <span className="text-lg font-semibold text-red-700">
                    Total Deductions
                  </span>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {result.totalDeductions.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  Sum of all employee deductions
                </span>
              </div>
              {/* Employee Pension */}
              <div className="bg-white border border-blue-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3">
                    <span className="text-blue-600 font-bold text-lg">%</span>
                  </span>
                  <span className="text-lg font-semibold text-blue-700">
                    Employee Pension
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-700 mb-1">
                  {result.employeePension.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  8% of BHT (Basic + Housing + Transport)
                </span>
              </div>
              {/* Employer Pension */}
              <div className="bg-white border border-blue-50 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 mr-3">
                    <span className="text-blue-400 font-bold text-lg">%</span>
                  </span>
                  <span className="text-lg font-semibold text-blue-400">
                    Employer Pension
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {result.employerPension.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  10% of BHT (Basic + Housing + Transport)
                </span>
              </div>
              {/* NHF */}
              <div className="bg-white border border-yellow-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 mr-3">
                    <span className="text-yellow-600 font-bold text-lg">
                      NHF
                    </span>
                  </span>
                  <span className="text-lg font-semibold text-yellow-700">
                    NHF
                  </span>
                </div>
                <div className="text-2xl font-bold text-yellow-700 mb-1">
                  {result.nhf.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  2.5% of basic salary
                </span>
              </div>
              {/* Employee NHIS */}
              <div className="bg-white border border-purple-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 mr-3">
                    <span className="text-purple-600 font-bold text-lg">
                      NHIS
                    </span>
                  </span>
                  <span className="text-lg font-semibold text-purple-700">
                    Employee NHIS
                  </span>
                </div>
                <div className="text-2xl font-bold text-purple-700 mb-1">
                  {result.nhis.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  5% of gross salary
                </span>
              </div>
              {/* Employer NHIS */}
              <div className="bg-white border border-purple-50 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 mr-3">
                    <span className="text-purple-400 font-bold text-lg">
                      NHIS
                    </span>
                  </span>
                  <span className="text-lg font-semibold text-purple-400">
                    Employer NHIS
                  </span>
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {result.employerNhis.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  10% of gross salary
                </span>
              </div>
              {/* PAYE Tax */}
              <div className="bg-white border border-orange-200 rounded-xl p-6 shadow flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 mr-3">
                    <span className="text-orange-600 font-bold text-lg">
                      PAYE
                    </span>
                  </span>
                  <span className="text-lg font-semibold text-orange-700">
                    PAYE Tax
                  </span>
                </div>
                <div className="text-2xl font-bold text-orange-700 mb-1">
                  {result.payeTax.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  Progressive tax with CRA & reliefs
                </span>
              </div>
              {/* Total Cost to Employer */}
              <div className="bg-motee-green/90 border border-green-200 rounded-xl p-6 shadow flex flex-col items-start col-span-1 md:col-span-2">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white mr-3">
                    <span className="text-motee-green font-bold text-lg">
                      ₦
                    </span>
                  </span>
                  <span className="text-lg font-semibold text-white">
                    Total Cost to Employer
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {result.totalCost.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <span className="text-sm text-white/80">
                  Gross salary + employer contributions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

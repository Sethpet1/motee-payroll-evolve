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

interface CalculationResult {
  grossAmount: number;
  taxAmount: number;
  netAmount: number;
  taxRate: number;
}

const Calculator = () => {
  const [amount, setAmount] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(20);
  const [currency, setCurrency] = useState<string>("GBP");
  const [result, setResult] = useState<CalculationResult>({
    grossAmount: 0,
    taxAmount: 0,
    netAmount: 0,
    taxRate: 20,
  });

  const calculateTax = () => {
    const numericAmount = parseFloat(amount.toString());
    if (isNaN(numericAmount)) {
      setResult(null);
      return;
    }

    const numericTaxRate = parseFloat(taxRate.toString()) / 100;
    const taxAmount = numericAmount * numericTaxRate;
    const netAmount = numericAmount - taxAmount;

    setResult({
      grossAmount: numericAmount,
      taxAmount,
      netAmount,
      taxRate: parseFloat(taxRate.toString()),
    });
  };

  useEffect(() => {
    if (amount) {
      calculateTax();
    }
  }, [amount, taxRate]);

  const formatCurrency = (value: number) => {
    const formatter = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // Custom formatting for NGN to show ₦ symbol
    if (currency === 'NGN') {
      return `₦${value.toLocaleString('en-NG', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }

    return formatter.format(value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white/95 rounded-xl shadow-lg backdrop-blur-sm">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-motee-blue to-motee-green bg-clip-text text-transparent">
            Payroll Calculator
          </h2>
          <p className="mt-2 text-motee-gray">
            Calculate your take-home pay with our easy-to-use calculator
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gross Amount Input */}
            <div className="space-y-2">
              <label htmlFor="amount" className="block text-lg font-semibold text-motee-blue">
                Gross Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full px-4 py-3 text-motee-gray bg-white border-2 border-motee-blue/20 rounded-lg focus:border-motee-blue focus:ring-2 focus:ring-motee-blue/20 focus:outline-none transition-colors"
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-motee-gray/60">
                  {currency}
                </span>
              </div>
            </div>

            {/* Tax Rate Input */}
            <div className="space-y-2">
              <label htmlFor="taxRate" className="block text-lg font-semibold text-motee-blue">
                Tax Rate (%)
              </label>
              <input
                type="number"
                id="taxRate"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full px-4 py-3 text-motee-gray bg-white border-2 border-motee-blue/20 rounded-lg focus:border-motee-blue focus:ring-2 focus:ring-motee-blue/20 focus:outline-none transition-colors"
                placeholder="Enter tax rate"
                min="0"
                max="100"
                step="0.1"
              />
            </div>

            {/* Currency Selection */}
            <div className="space-y-2">
              <label htmlFor="currency" className="block text-lg font-semibold text-motee-blue">
                Currency
              </label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-3 text-motee-gray bg-white border-2 border-motee-blue/20 rounded-lg focus:border-motee-blue focus:ring-2 focus:ring-motee-blue/20 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="GBP">British Pound (GBP)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="NGN">Naira (NGN)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-motee-blue/5 p-6 rounded-lg border-2 border-motee-blue/20">
            <h3 className="text-lg font-semibold text-motee-blue mb-2">Gross Amount</h3>
            <p className="text-2xl font-bold text-motee-gray">
              {formatCurrency(result.grossAmount)}
            </p>
          </div>
          <div className="bg-motee-blue/5 p-6 rounded-lg border-2 border-motee-blue/20">
            <h3 className="text-lg font-semibold text-motee-blue mb-2">Tax Amount</h3>
            <p className="text-2xl font-bold text-motee-gray">
              {formatCurrency(result.taxAmount)}
            </p>
          </div>
          <div className="bg-motee-blue/5 p-6 rounded-lg border-2 border-motee-blue/20">
            <h3 className="text-lg font-semibold text-motee-blue mb-2">Net Amount</h3>
            <p className="text-2xl font-bold text-motee-gray">
              {formatCurrency(result.netAmount)}
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-motee-gray mt-4">
          <p>This calculator provides an estimate based on standard tax rates.</p>
          <p>For accurate calculations, please consult with a tax professional.</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator; 
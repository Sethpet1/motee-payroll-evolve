import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PayrollSmilingSection from '@/components/PayrollSmilingSection';
import { useNavigate } from 'react-router-dom';
import {
  Fingerprint,
  UserCog,
  BarChart3,
  ShieldCheck,
  Scale,
  Calculator,
  ReceiptText,
  Banknote
} from 'lucide-react';

const WhyMSL = () => {
  const navigate = useNavigate();
  
  const handleBookDemo = () => {
    navigate('/book-demo');
  };
const description = [
  "Ensure only legitimate employees are paid with biometric verification.",
  "Empower employees to manage their payroll information anytime.",
  "Make data-driven decisions with instant, clear payroll reports.",
  "Stay effortlessly compliant with local tax laws and regulations, avoiding penalties and ensuring peace of mind.",
  "Eliminate errors and save time with automatic, accurate payroll calculations for all your employees.",
  "Ensure timely and accurate tax deductions and filings, reducing the risk of compliance issues.",
  "Eliminate manual errors and save time with automatic, accurate payroll calculations for all your employees.",
  "Streamline payroll payments directly to employees' bank accounts, ensuring quick and secure disbursements."
]
  const features = [
    { title: "Biometric Validation Payroll", icon: <Fingerprint className="w-6 h-6 text-motee-green" /> },
    { title: "Employee Self-Service Access", icon: <UserCog className="w-6 h-6 text-motee-green" /> },
    { title: "Real-Time Reporting & Insights", icon: <BarChart3 className="w-6 h-6 text-motee-green" /> },
    { title: "Improved Data Security", icon: <ShieldCheck className="w-6 h-6 text-motee-green" /> },
    { title: "Regulatory Compliance Made Simple", icon: <Scale className="w-6 h-6 text-motee-green" /> },
    { title: "Automated Payroll Calculation", icon: <Calculator className="w-6 h-6 text-motee-green" /> },
    { title: "Automated Payroll Taxes", icon: <ReceiptText className="w-6 h-6 text-motee-green" /> },
    { title: "Bank-Integrated Disbursement", icon: <Banknote className="w-6 h-6 text-motee-green" /> }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 relative">
        {/* Top Right Question Marks */}
        <div className="hidden md:flex absolute top-4 right-4 flex-row items-center justify-center">
          <span className="text-[8rem] font-extrabold bg-gradient-to-br from-motee-green to-motee-orange bg-clip-text text-transparent drop-shadow-2xl mr-2 animate-pulse">?</span>
          <span className="text-[6rem] font-extrabold bg-gradient-to-tr from-motee-orange to-motee-green bg-clip-text text-transparent drop-shadow-xl animate-pulse">?</span>
        </div>

        {/* Hero Section with Story */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Story Content */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-motee-gray-dark">
                Why Choose <span className="text-motee-green">MOTEE</span> Solutions?
              </h1>
              <div className="prose prose-lg max-w-none text-motee-gray-dark">
                <p className="text-md leading-relaxed mb-6">
                  Nathan, an administrative officer at a mid-sized logistics company in Lagos, worked tirelessly every day. He was the backbone of the office—always staying late to ensure things ran smoothly. But behind his quiet competence, there was a recurring burden: uncertain salary payments, unexplained deductions, and inconsistent payroll practices.
                </p>
                <p className="text-md leading-relaxed mb-6">
                  Every month felt like a guessing game—would his salary come on time? Would it be complete? Then, in December—just before the holidays—the worst happened: his salary never came at all.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8 shadow-inner">
                  <p className="text-md leading-relaxed mb-4">
                    He waited. He emailed. He called HR. They apologized, blaming "technical issues" and "banking delays." Weeks passed. His rent was overdue. His mother's medication ran out. His electricity was disconnected. His younger brother dropped out of school because he couldn't pay his fees.
                  </p>
                  <p className="text-md leading-relaxed">
                    Meanwhile, his colleague, Femi, confessed that he had been paid twice. Their former supervisor, who had resigned months ago, was still receiving a salary. The payroll system was broken. There were ghost workers, manual errors, and no accountability.
                  </p>
                </div>
                <p className="text-l font-semibold mb-6 text-motee-orange">
                  Nathan felt invisible. Disposable. Cheated.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  He wasn't alone. In offices across Nigeria, similar stories played out every month. Employees who worked hard, but were let down by unreliable payroll systems, opaque deductions, and systems prone to fraud.
                </p>
                <div className="bg-gradient-to-r from-motee-green/10 to-motee-orange/10 p-8 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-motee-green">MOTEE Solutions: Empowering Employees, Protecting Businesses</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    With MOTEE Solutions, Nathan's story would have been different. Our transparent payroll system ensures on-time, accurate payments, with clear deductions and full accountability.
                  </p>
                  <p className="text-xl font-semibold text-motee-gray-dark italic mb-8">
                    Empower your employees, eliminate fraud, and take control of your payroll today.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section - Right Side */}
            <div className="w-full md:w-1/2 md:sticky md:top-8">
              <div className="relative w-full h-[700px] flex items-center justify-center">
                {/* First Image */}
                <div className="absolute left-5 top-6 w-3/4 h-[600px] rounded-2xl overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-all duration-300 z-10">
                  <img 
                    src="/assets/images/ChatGPT Image Jun 21, 2025, 11_05_53 AM.png" 
                    alt="MOTEE Solutions Innovation" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Second Image */}
                <div className="absolute right-5 bottom-6 w-3/4 h-[600px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-300 z-20">
                  <img 
                    src="/assets/images/de1aa0e5-e778-4c59-8524-f2c840e3b0ff.jpg" 
                    alt="Why MOTEE Solutions Ltd?" 
                    className="w-full h-full object-fill object-[100%_100%] rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-motee-green/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-motee-gray-dark flex-1">{feature.title}</h3>
                <p className="text-motee-gray-dark">{description[index]}</p>
              </div>
            ))}
          </div>

          {/* Success Story */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-motee-green/5 to-motee-orange/5 p-8 rounded-2xl mb-16">
            <h2 className="text-2xl font-bold mb-6 text-motee-gray-dark">The Impact Today</h2>
            <p className="text-lg leading-relaxed mb-6">
            Today, Nathan works for a tech company that uses MOTEE. His salary arrives on time thanks to automated payroll calculations and bank-integrated disbursements. He checks his payslip from his phone with 24/7 access and complete transparency. His brother is back in school, and Nathan pays his rent with confidence, secure in the knowledge that his payroll is compliant, accurate, and protected.
            </p>
            <p className="text-xl font-bold text-motee-green">
            MOTEE isn't just fixing payroll. It's restoring trust, giving businesses and employees peace of mind.
            </p>
           
          </div>
        </div>
      </main>
    
      <Footer />
    </div>
  );
};

export default WhyMSL; 
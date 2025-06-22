import React from 'react';
import { Check, Clock, Shield, Users, BarChart3, Zap, FileText, Calculator } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Payroll = () => {
  const features = [
    "Bridge the gap between your HR and payroll process",
    "Single source of truth with everything in one place",
    "Enjoy a faster payroll process with more accurate data",
    "Keep an accurate digital audit trail for your financial record",
    "Automatically calculate and process payroll-Saving you time",
    "Get reliable advice from Federal Inland Revenue Services (FIRS) and State Internal Revenue Services (SIRS)",
    "Enjoy easy, accurate, and risk-free payroll management",
    "Reduce your risk of penalties or falling behind on FIRS and SIR payments",
    "Avoid late fines and pay your employees on time",
    "Manage pay run exceptions and allow late changes to payroll, any time",
    "Stay Compliant with software that accounts for statutory rule on pay"
  ];

  const managedServices = [
    "The MSL Managed Payroll Team manage everything from gross to net payroll calculation to dealing directly with the vendor; NHF, NSTIF, FIRS, PENCOM, etc.",
    "Get quick resolutions to payroll problems at any point in the process from specialist",
    "Enjoy full reconciliation on time, every time."
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-motee-green" />,
      title: "Efficiency and Time Savings",
      description: "From the accurate processing of payments to the calculation of tax, you can automate a range of processes with a payroll management system. This can significantly reduce the risk of errors and save great chunks of time for other areas of your business.",
      features: [
        "Accurate logging of employee work hours",
        "Employee benefit deductions",
        "Generation and distribution of pay slips for each payment period",
        "Processing of direct deposits to employee bank accounts",
        "Recording of leave request responses and tracking",
        "Notification of legal updates and requirements"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-green" />,
      title: "Accuracy and Compliance",
      description: "Many businesses have reported encountering payroll errors, requiring 12 hours or more each month to fix. However, there's no need to worry about the incorrect processing of payments or deductions when you can count on a digital payroll solution.",
      features: [
        "Automatic updates according to employment and tax regulations",
        "Automated filing of tax forms",
        "Tracking of employee hours",
        "Processing of payments according to minimum wage laws",
        "Safeguards for the protection of sensitive employee data"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-motee-green" />,
      title: "Employee Self-Service",
      description: "MSL payroll solution stands out when it comes to ease of navigation—great for those with little to no payroll experience. Following a simple yet secure login, your staff can gain quick access to their pay slips, tax forms and personal data.",
      features: [
        "Quick access to pay slips and tax forms",
        "Personal data management",
        "Personalised notifications",
        "Confidence in prompt and accurate payments",
        "Accessible via any device with internet connection"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-motee-green" />,
      title: "Reporting and Analytics",
      description: "Besides enabling fast and efficient employee payment, the best payroll software also allows for real-time reporting and analytics. You can generate customised reports, with valuable insights into labour costs, budgeting, forecasting, and much else besides.",
      features: [
        "Real-time reporting and analytics",
        "Customised reports generation",
        "Insights into labour costs and budgeting",
        "Data-driven payroll decision-making",
        "Reports on work scheduling and payroll exceptions"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-motee-green" />,
      title: "Integration with HR and Accounting Systems",
      description: "Rounding off the benefits of HR payroll software, we have the potential for seamless integration with HR and payroll systems. The best payroll platforms can be connected with your systems for onboarding, rostering, leave requests and time tracking.",
      features: [
        "Seamless integration with HR systems",
        "Connection with onboarding and rostering systems",
        "Leave requests and time tracking integration",
        "Minimised repetitive data entry",
        "Unified platform for vital business operations"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 bg-gradient-to-br from-motee-green/10 to-orange-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                MSL Payroll Software
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-motee-green">
                Handle pay the smart way
              </h2>
              <p className="text-l md:text-l text-gray-700 mb-8 leading-relaxed">
                Want a faster way to pay employees on time and accurately all from one place? 
                Introducing MSL Payroll. Managing payroll is simple with our easy-to-use payroll 
                software—handle payroll tasks with confidence and efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-motee-green/20 to-orange-500/20 rounded-xl overflow-hidden mb-6">
                    <img 
                      src="/Images/pay.jpg" 
                      alt="MSL Payroll Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Real-time Processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Tax Compliance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Employee Self-Service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Automated Reports</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Managed Payroll Service */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div>
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-1xl md:text-2xl font-bold mb-6 text-gray-900">
                    Complete managed payroll service
                  </h2>
                  <p className="text-l text-gray-700">
                    There's no need to be a finance expert yourself, MSL can manage the entire payroll 
                    process for you, saving you time, stress, and the cost of a full-time expert!
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {managedServices.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-motee-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-motee-green/10 p-6 rounded-xl">
                    <h3 className="text-l font-semibold mb-4 text-motee-green">Rapid Set-up</h3>
                    <p className="text-gray-700">
                      Plus, did we mention our rapid set-up? Just a few minutes stand between you 
                      and a fully managed payroll solution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex justify-center lg:justify-end">
                <div className="aspect-square bg-gradient-to-br from-motee-green/20 to-orange-500/20 rounded-xl overflow-hidden w-full max-w-md shadow-xl">
                  <img 
                    src="/assets/images/F72D3C75-C61D-475D-8A4D-05CC1DBC1EEC.PNG" 
                    alt="MSL Payroll Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <h3 className="text-1xl font-bold mb-4 text-gray-900">
                Interested in MSL payroll? See it in action
              </h3>
              <p className="text-l text-gray-700 mb-8">
                Explore our payroll software and support services—see for yourself the effortless, 
                precise, and secure payroll solution you've been searching for!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-end Payroll Software */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900">
                End-to-end payroll software and support
              </h2>
              <p className="text-lg text-gray-700">
                Discover software that syncs HR and employee data with payroll for a more 
                efficient and simplified payroll process
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Benefits of Payroll Software
                </h3>
                <p className="text-lg text-gray-700">
                  So, let's explore these benefits, highlighting the potential for easy, 
                  accurate, and risk-free payroll management.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img 
                  src="/Images/group.jpg" 
                  alt="Your payroll is complete"
                  className="rounded-lg shadow-xl w-full max-w-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6">
                    {benefit.icon}
                    <h4 className="text-xl font-semibold ml-3 text-gray-900">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{benefit.description}</p>
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-motee-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 bg-motee-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Embrace the benefits of payroll software with MSL Payroll
            </h2>
            <p className="text-l text-white/90 mb-8 leading-relaxed">
              From accurate payment processing to the generation of detailed financial reports, 
              the benefits of using payroll software are clear. Hopefully, you'll be ready to 
              make the smart choice, moving away from the use of outdated and inefficient 
              payroll methods to the use of a complete digital solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-motee-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
             {/* book a demo button */}
             <button className="px-8 py-4 bg-motee-orange text-white font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Payroll; 
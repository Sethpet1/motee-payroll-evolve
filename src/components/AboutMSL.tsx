import React from "react";
import AboutMSLPage from '../pages/AboutMSL';

const AboutMSL = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-motee-green">About MSL</h2>
            <p className="text-lg text-motee-gray-dark mb-4">
              The true measure of a company isn't just the profits it generates, but in the values it places on the people who create them: <span className="font-semibold text-motee-green">Happy employees = happy business.</span> A reliable payroll system is the foundation of that happiness.
            </p>
            <p className="text-lg text-motee-gray-dark">
              {/* You can add more intro text here if needed */}
            </p>
          </div>
          <div className="flex justify-center">
            {/* Insert picture of happy employees here */}
            <div className="w-full max-w-lg h-80 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
              <img
                src="/Images/3.jpg"
                alt="Happy employees"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <p className="text-lg text-motee-gray-dark mb-4">
                In offices across Nigeria, hard-working employees wait for salaries that become delayed, inaccurate or never come at all. Fictitious workers drain public funds. Small businesses struggle with tax confusion. Enterprises lose sleep over compliance risks. As a result, payroll has been perceived as 'boring' for a long time, but to us, boring means brilliant—the kind of boring that means every payslip is accurate, every deadline is met, and every compliance box is ticked. No surprises. No headaches. Just smooth, seamless payroll.
              </p>
              <p className="text-lg text-motee-gray-dark mb-4">
                Boring payroll software means there are no surprises. It means your employees are paid accurately and on time, every time. It means <span className="font-semibold text-motee-green">compliance</span>, <span className="font-semibold text-motee-green">reliability</span>, and <span className="font-semibold text-motee-green">peace of mind</span>.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Insert image here */}
              <div className="w-full max-w-lg h-80 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
                <img
                  src="/Images/dd.jpg"
                  alt="Office scene 1"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-motee-green mb-4">At MSL we do the boring tasks</h3>
            <p className="text-lg text-motee-gray-dark mb-4">
              We've seen the damage broken payroll systems can cause—missed payments, lost trust, and businesses held back by chaos.
            </p>
            <p className="text-lg text-motee-gray-dark mb-4">
              If payroll errors, inefficiencies, or outdated systems are causing constant headaches, switching to a better payroll provider might be the smartest move your business makes. But many companies avoid making the switch out of fear of disruption, data loss, or a complicated transition process.
            </p>
            <p className="text-lg text-motee-gray-dark mb-4">
              The good news? Switching payroll providers doesn't have to be difficult. With the right approach (and the right provider), it can be a smooth, stress-free transition.
            </p>
            <p className="text-lg text-motee-gray-dark">
              Switching payroll providers shouldn't be a hassle—it should be an opportunity to improve accuracy, service and your solution. If your payroll provider isn't making life easier, maybe it's time to explore your options.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Insert picture for switching payroll here */}
            <div className="w-full max-w-lg h-80 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
              <img
                src="/Images/pay.jpg"
                alt="Switching payroll provider"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-motee-gray-dark mb-4">
            Running a business is demanding, especially when it comes to managing payroll and HR tasks. Whether you're juggling payroll on your own or overseeing an HR team, our managed payroll services and integrated payroll and HR software solutions make it easy to keep on top of compliance with an accurate and stress-free solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMSL; 
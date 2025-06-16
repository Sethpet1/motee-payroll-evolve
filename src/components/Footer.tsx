import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-motee-blue to-motee-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold">MOTEE</span>
            </div>
            
            <p className="text-orange-100 leading-7 text-justify max-w-4xl mx-auto px-4 mb-3" 
               style={{ textAlign: 'justify', textJustify: 'inter-word', lineHeight: '1.8', marginTop: '1.5rem' }}>
              The true measure of a company is not just in the profits it generates, but in the value it places on the people who make those profits possible. When employees are happy, business thrives. And at the heart of that happiness is a reliable payroll system.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-orange-100">
              <li><a href="#" className="hover:text-white transition-colors">Biometric Payroll Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Compliance Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fraud Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HR Integration</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-orange-100">
              <li><a href="#mission" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 ">Contact</h4>
            <div className="space-y-4 text-orange-100">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-white flex-shrink-0" />
                <div>
                  <p>123 Business District</p>
                  <p>Victoria Island, Lagos</p>
                  <p>Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <span>+234 (0) 123 456 7890</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <span>hello@moteesolutions.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-orange-300/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-orange-200 text-sm">
              © {currentYear} MOTEE Solutions Ltd. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-orange-200">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-orange-300">
            Secured by military-grade encryption • Trusted by 500+ Nigerian businesses
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import {  } from '../pages/AboutMSL';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center sm:text-left">
          {/* Company Info */}
          <div className="space-y-6 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <img src="/logos/9C510464-D0E0-4D60-8E01-C70F1D98AB41.PNG" alt="MOTEE Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold">MOTEE</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-sm mx-auto sm:mx-0">
              The true measure of a company is not just in the profits it generates, but in the value it places on the people who make those profits possible.
            </p>
            
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Biometric Payroll</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fraud Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HR Integration</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/about-msl" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="h-5 w-5 mt-1 text-white flex-shrink-0" />
                <span>
                  123 Business District<br/>
                  Victoria Island, Lagos
                </span>
              </div>
              
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <span>+2341234567890</span>
              </div>
              
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <span>hello@motee.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#" className="flex items-center justify-center space-x-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-colors w-full sm:w-auto">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs leading-tight">Download on the</div>
              <div className="text-lg font-semibold leading-tight">App Store</div>
            </div>
          </a>
          
          <a href="#" className="flex items-center justify-center space-x-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-colors w-full sm:w-auto">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs leading-tight">GET IT ON</div>
              <div className="text-lg font-semibold leading-tight">Google Play</div>
            </div>
          </a>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center space-y-4 space-y-reverse sm:space-y-0">
            <div className="text-gray-400 text-sm pt-4 sm:pt-0">
              &copy; {currentYear} MOTEE Solutions Ltd. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

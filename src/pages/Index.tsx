import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import MissionVision from '@/components/MissionVision';
import ProblemStatement from '@/components/ProblemStatement';
import Solutions from '@/components/Solutions';
import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarqueeText from '@/components/MarqueeText';
import MSLBackground from '@/components/MSLBackground';
import AboutMSL from '@/components/AboutMSL';
import EmployeeExperience from '@/components/EmployeeExperience';
import Team from '@/components/Team';
import { Link } from 'react-router-dom';
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Add animation to sections when they come into view
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-on-scroll', 'visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-white">
      <MSLBackground />
      <Header />
      
      <main className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <HeroSection />
        <MarqueeText />
        <MissionVision />
        <Team />
        {/* <ProblemStatement /> */}
        {/* <Solutions /> */}
        <EmployeeExperience />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
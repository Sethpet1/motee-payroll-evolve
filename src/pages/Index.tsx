
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

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <HeroSection />
        <MissionVision />
        <ProblemStatement />
        <Solutions />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

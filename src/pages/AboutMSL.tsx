import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MSLBackground from '@/components/MSLBackground';
import AboutMSL from '@/components/AboutMSL';
import MissionVision from '@/components/MissionVision';
import Testimonials from '@/components/ui/Testimonials';
import WavyBackground from '@/components/ui/WavyBackground';

const AboutMSLPage = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <MSLBackground />
      <Header />
        <AboutMSL />
        <WavyBackground />
        <MissionVision />
        <Testimonials />
      <Footer />
    </div>
  );
};
export default AboutMSLPage; 
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MSLBackground from '@/components/MSLBackground';
import AboutMSL from '@/components/AboutMSL';

const AboutMSLPage = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <MSLBackground />
      <Header />
      <main className="pt-24 pb-12">
        <AboutMSL />
      </main>
      <Footer />
    </div>
  );
};

export default AboutMSLPage; 
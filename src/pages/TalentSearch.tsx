import React from 'react';
import { Users, Target, Shield, Globe, Heart, CheckCircle, ArrowRight, Award, Zap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TalentSearch = () => {
  const howWeHelp = [
    {
      icon: <Users className="w-8 h-8 text-motee-green" />,
      title: 'Personalized Search',
      description: 'We don\'t just look for candidates, we look for individuals who will thrive with you.',
      color: 'text-motee-green'
    },
    {
      icon: <Target className="w-8 h-8 text-motee-blue" />,
      title: 'Executive & Leadership Hiring',
      description: 'Quietly and carefully securing leaders who will inspire change.',
      color: 'text-motee-blue'
    },
    {
      icon: <Building2 className="w-8 h-8 text-motee-orange" />,
      title: 'Industry Expertise',
      description: 'From Finance to Tech, Oil & Gas to Services, we know where to find the right talent.',
      color: 'text-motee-orange'
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-green" />,
      title: 'Integrity at Every Step',
      description: 'Every candidate is thoroughly vetted, so you can hire with confidence.',
      color: 'text-motee-green'
    }
  ];

  const whyChooseMotee = [
    {
      icon: <Globe className="w-8 h-8 text-motee-green" />,
      title: 'Rooted Locally, Connected Globally',
      description: 'We understand the pulse of Nigeria and West Africa — the ambitions, the challenges, the opportunities. And we bring this local knowledge together with global HR expertise to find people who don\'t just fit a role but fit your story.',
      color: 'text-motee-green'
    },
    {
      icon: <Heart className="w-8 h-8 text-motee-blue" />,
      title: 'People, Not Just Positions',
      description: 'Behind every CV is a dream, a passion, a future waiting to unfold. We go beyond skills and qualifications to connect you with individuals who will thrive in your company and grow alongside your vision.',
      color: 'text-motee-blue'
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-orange" />,
      title: 'Trust Built on Integrity',
      description: 'Choosing the right person takes trust. That\'s why every candidate is carefully vetted, every background checked, and every credential verified. We ensure you meet not just a professional, but someone you can believe in.',
      color: 'text-motee-orange'
    },
    {
      icon: <Zap className="w-8 h-8 text-motee-green" />,
      title: 'Growing With Your Journey',
      description: 'Whether you need that one game-changing hire or an entire team to bring a project to life, our solutions evolve with your needs — giving you the right people, right when you need them most.',
      color: 'text-motee-green'
    }
  ];

  const whyCompaniesTrustUs = [
    {
      icon: <Heart className="w-8 h-8 text-motee-green" />,
      title: 'Heart + Expertise',
      description: 'With global HR experience and local market insight, we balance professionalism with genuine care.',
      color: 'text-motee-green'
    },
    {
      icon: <Award className="w-8 h-8 text-motee-blue" />,
      title: 'Long-Term Partnerships',
      description: 'We aim for hires that stay, grow, and contribute, not quick fixes.',
      color: 'text-motee-blue'
    },
    {
      icon: <Users className="w-8 h-8 text-motee-orange" />,
      title: 'People-First Approach',
      description: 'Because we know that when people flourish, businesses flourish too.',
      color: 'text-motee-orange'
    }
  ];

  const beyondRecruitment = [
    {
      title: 'Background Checks & Pre-Assessment',
      description: 'For peace of mind.'
    },
    {
      title: 'Payroll & HR Services',
      description: 'To make onboarding seamless.'
    },
    {
      title: 'Learning & Growth Programs',
      description: 'Helping your people become their best selves.'
    }
  ];

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Talent Search at MOTEE Solutions
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-motee-orange">
              Because People Make the Difference
            </h2>
            <p className="text-l opacity-90 leading-relaxed mb-4">
              At MOTEE Solutions, we believe that talent is more than just a set of skills; it's the heartbeat of every thriving business. The right people bring ideas to life, inspire teams, and turn challenges into opportunities.
            </p>
            <p className="text-l opacity-90 leading-relaxed mb-4">
              That's why our Talent Search service is built around one simple truth: people matter.
            </p>
            <p className="text-l opacity-90 font-semibold">
              Finding the right people isn't just about filling positions; it's about building futures, creating stronger teams, and unlocking the true potential of your business.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-8">
              Our Promise
            </h2>
            <p className="text-l text-gray-600">
              When you partner with us, you gain more than a recruitment service — you gain a trusted ally committed to connecting you with people who not only have the right qualifications but also share your vision and values. We take the time to understand your story, your culture, and your aspirations, so every placement feels like the perfect fit.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help You Find the Right People Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              How We Help You Find the Right People
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeHelp.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-${item.color.split('-')[1]}/10 rounded-full flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MOTEE Talent Search Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              Why Choose MOTEE Talent Search?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseMotee.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-${item.color.split('-')[1]}/10 rounded-full flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Companies Trust Us Section */}
      <section className="py-20 bg-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold mb-6">
              Why Companies Trust Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyCompaniesTrustUs.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="opacity-90 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Recruitment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
                Beyond Recruitment
              </h2>
              <p className="text-l text-gray-600 mb-8">
                With MOTEE Solutions, Talent Search is only the beginning. We support your workforce journey with:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {beyondRecruitment.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Let's Build Something Great Together Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-l text-gray-600 mb-8">
              At MOTEE Solutions, we believe the right person can change everything. Let us help you find not just employees, but future leaders, innovators, and partners in your success story.
            </p>
            <p className="text-l font-semibold text-motee-green mb-8">
              Start your journey with MOTEE Talent Search today — because the right people make all the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-motee-green text-white hover:bg-motee-green/90">
                Start Your Talent Search
              </Button>
              <Button size="lg" variant="outline" className="border-motee-green text-motee-green hover:bg-motee-green hover:text-white">
                Learn More About Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TalentSearch;

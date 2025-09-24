import React from 'react';
import { Brain, Target, Users, CheckCircle, Clock, Shield, ArrowRight, Award, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PreAssessmentTesting = () => {
  const whatWeOffer = [
    {
      icon: <Brain className="w-8 h-8 text-motee-green" />,
      title: 'Cognitive & Aptitude Tests',
      description: 'Assess logical reasoning, numerical skills, and critical thinking; Spot problem-solvers who think ahead.',
      color: 'text-motee-green'
    },
    {
      icon: <Target className="w-8 h-8 text-motee-blue" />,
      title: 'Technical & Role-Specific Tests',
      description: 'Evaluate practical knowledge for roles in finance, technology, sales, and more; ensure skills match the demands of the job.',
      color: 'text-motee-blue'
    },
    {
      icon: <Users className="w-8 h-8 text-motee-orange" />,
      title: 'Behavioural & Personality Assessments',
      description: 'Understand how candidates think, communicate, and collaborate.',
      color: 'text-motee-orange'
    },
    {
      icon: <Heart className="w-8 h-8 text-motee-green" />,
      title: 'Soft Skills Evaluation',
      description: 'Measure adaptability, leadership, and teamwork potential; identify the empathy, resilience, and creativity that drive success.',
      color: 'text-motee-green'
    },
    {
      icon: <Award className="w-8 h-8 text-motee-blue" />,
      title: 'Customised Assessments',
      description: 'Tailored to match your organisation\'s unique needs.',
      color: 'text-motee-blue'
    }
  ];

  const whyChooseMotee = [
    {
      icon: <CheckCircle className="w-8 h-8 text-motee-green" />,
      title: 'Better Hiring Decisions',
      description: 'Move beyond CVs and interviews to get a fuller picture of each candidate, clarity, not guesswork.',
      color: 'text-motee-green'
    },
    {
      icon: <Clock className="w-8 h-8 text-motee-blue" />,
      title: 'Save Time & Costs',
      description: 'Quickly identify top performers and reduce the risk of mis-hires; build stronger teams that last.',
      color: 'text-motee-blue'
    },
    {
      icon: <Shield className="w-8 h-8 text-motee-orange" />,
      title: 'Fair & Objective',
      description: 'Provide equal opportunity by testing everyone against the same clear criteria; every candidate is assessed equally, giving everyone a fair chance to shine.',
      color: 'text-motee-orange'
    },
    {
      icon: <Users className="w-8 h-8 text-motee-green" />,
      title: 'Employee Retention',
      description: 'Select people who not only can do the job but will love doing it in your environment; the right people don\'t just perform; they stay and grow.',
      color: 'text-motee-green'
    },
    {
      icon: <Zap className="w-8 h-8 text-motee-blue" />,
      title: 'Seamless Integration',
      description: 'Combine pre-assessment testing with our Talent Search and Background Check services for a complete, seamless, and human hiring solution.',
      color: 'text-motee-blue'
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
              Pre-Assessment Testing at MOTEE Solutions
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-motee-orange">
              Helping You Hire with Confidence
            </h2>
            <p className="text-l opacity-90 leading-relaxed mb-4">
              At MOTEE Solutions, we believe every new hire is more than a role to be filled, they are a future colleague, a culture-shaper, a potential game-changer for your business.
            </p>
            <p className="text-l opacity-90 leading-relaxed mb-4">
              That's why we created Pre-Assessment Testing: to help you look beyond the CV and truly see the person behind it.
            </p>
            <p className="text-l opacity-90 font-semibold">
              We give you the clarity to choose with confidence, so every hire strengthens your team, your culture, and your vision.
            </p>
          </div>
        </div>
      </section>

      {/* What Pre-Assessment Testing Means Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-8">
              What Pre-Assessment Testing Means for You
            </h2>
            <p className="text-l text-gray-600 mb-8">
              Hiring decisions shouldn't be left to chance. With MOTEE's pre-assessments, you see more than credentials, you see capability, potential, and fit.
            </p>
            <p className="text-l text-gray-600">
              Our Pre-Assessment Testing service is designed to give you deeper insights into your candidates by measuring the skills and traits that matter most to your business. From technical ability to problem-solving, communication, and personality fit, we help you identify the people who will thrive in your workplace.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeOffer.map((item, index) => (
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

      {/* Why Choose MOTEE Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              Why Choose MOTEE Pre-Assessment Testing?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* The Power of the Right Fit Section */}
      <section className="py-20 bg-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold mb-6">
              The Power of the Right Fit
            </h2>
            <p className="text-l opacity-90 mb-6">
              A wrong hire can drain time, money, and energy. But the right hire? They can transform a team, spark innovation, and carry your business forward.
            </p>
            <p className="text-l opacity-90 mb-8">
              With MOTEE's Pre-Assessment Testing, you don't just hire skills, you hire potential, passion, and promise.
            </p>
            <div className="text-xl font-bold text-motee-orange">
              Choose smarter. Hire stronger. Build futures with MOTEE Solutions.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-l text-gray-600 mb-8">
              Start making better hiring decisions today with MOTEE's comprehensive Pre-Assessment Testing solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-motee-green text-white hover:bg-motee-green/90">
                Get Started with Pre-Assessment Testing
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

export default PreAssessmentTesting;

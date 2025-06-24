import React from 'react';
import { BookOpen, Users, DollarSign, Target, BarChart, Tv, MessageCircle, CheckSquare, Layers, Award, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ELearning = () => {
  const whyMatters = [
    {
      icon: <BookOpen className="w-8 h-8 text-motee-green" />,
      title: 'Learn Anytime, Anywhere',
      description: 'Employees can access learning materials on their schedule, from any device, empowering them to balance work, learning, and life.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-motee-orange" />,
      title: 'Train Smarter, Spend Less',
      description: 'E-learning reduces costs associated with venues, travel, and printing. Train 10 or 10,000 people at a fraction of the cost.',
    },
    {
      icon: <Target className="w-8 h-8 text-motee-blue" />,
      title: 'Tailored Learning Paths',
      description: 'Personalize content based on user pace, preferences, and progress — boosting engagement and retention.',
    },
    {
      icon: <Layers className="w-8 h-8 text-motee-green" />,
      title: 'Access to a Universe of Content',
      description: 'From interactive simulations to live webinars, your team can explore industry best practices, compliance essentials, and more.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-motee-orange" />,
      title: 'Real-Time Impact, Measurable Progress',
      description: 'Built-in analytics and dashboards allow you to track completion rates, performance, and knowledge gaps to measure ROI.',
    },
  ];

  const keyComponents = [
    {
      icon: <Tv className="w-6 h-6 text-white" />,
      title: 'Modern Learning Management System (LMS)',
      description: 'Clean, intuitive, and mobile-ready for a seamless user experience.',
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-white" />,
      title: 'Interactive, Multimedia Content',
      description: 'Engaging videos, quizzes, animations, and gamification to keep learners motivated.',
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'Blended Learning Support',
      description: 'Combine online modules with face-to-face workshops for a holistic approach.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: 'Mentor & Peer Learning Channels',
      description: 'Encourage collaboration, knowledge sharing, and shared growth.',
    },
  ];
  
  const implementationStrategy = [
      {
          icon: <Award className="w-8 h-8 text-motee-blue" />,
          title: "Leadership Buy-In",
          description: "We help align e-learning with your strategic goals."
      },
      {
          icon: <Lightbulb className="w-8 h-8 text-motee-green" />,
          title: "Skill Gap Analysis",
          description: "Custom content that meets your real needs."
      },
      {
          icon: <TrendingUp className="w-8 h-8 text-motee-orange" />,
          title: "Pilot & Scale",
          description: "Start small, test feedback, and expand with confidence."
      },
      {
          icon: <Users className="w-8 h-8 text-motee-blue" />,
          title: "Engagement Culture",
          description: "Celebrate learners, share success stories, reward growth."
      }
  ];

  return (
    <div className="bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                E-Learning Platform
              </h1>
              <p className="text-l text-gray-600 leading-relaxed">
                Empower your workforce with comprehensive e-learning solutions designed to enhance skills, 
                drive performance, and foster continuous professional development.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="rounded-xl shadow-2xl overflow-hidden aspect-video bg-gray-200">
                <img src="/assets/images/11A4C99B-D8D8-4B80-B176-0A745362A13F.PNG" alt="E-Learning in action" className="w-full h-96 object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why E-learning Matters Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900">Why E-Learning Matters</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyMatters.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-motee-green/10 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="py-20 bg-motee-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold">Key Components of MOTEE's E-Learning Solution</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {keyComponents.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Implementation Strategy Section */}
      <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-1xl md:text-2xl font-bold text-gray-900">Our Strategy for Implementation</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {implementationStrategy.map((item, index) => (
                      <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center">
                          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-motee-blue/10 mx-auto mb-6">
                              {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-l text-gray-600 mb-8">
              Join organizations that have revolutionized their training programs with our comprehensive 
              e-learning platform.
            </p>
            <Button size="lg" className="bg-motee-green hover:bg-motee-green-dark">
              Invest in Your Team Today
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ELearning; 
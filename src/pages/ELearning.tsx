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
      description: 'From immersive simulations to expert-led webinars, your team gains access to targeted learning on compliance, leadership, and digital transformation.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-motee-orange" />,
      title: 'Measure Impact in Real Time',
      description: 'Use built-in analytics to track learner progress, close knowledge gaps, and prove ROI with real-time dashboards.',
    },
  ];

  const keyComponents = [
    {
      icon: <Tv className="w-6 h-6 text-white" />,
      title: 'Modern Learning Management System (LMS)',
      description: 'A user-friendly, mobile-optimized platform designed for effortless navigation and seamless learning—anytime, anywhere.',
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-white" />,
      title: 'Interactive, Multimedia Content',
      description: 'Engaging videos, scenario-based quizzes, and gamified challenges that keep learners involved and retention high.',
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'Blended Learning Support',
      description: 'Integrates self-paced digital modules with live workshops to provide a well-rounded, flexible learning experience.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: 'Mentor & Peer Learning Channels',
      description: 'Built-in spaces for learners to connect, share knowledge, and collaborate through guided mentoring and peer discussions.',
    },
  ];
  
  const implementationStrategy = [
      {
          icon: <Award className="w-8 h-8 text-motee-blue" />,
          title: "Leadership Buy-In",
          description: "Align e-learning initiatives with your organization’s strategic goals to ensure leadership support."
      },
      {
          icon: <Lightbulb className="w-8 h-8 text-motee-green" />,
          title: "Skill Gap Analysis",
          description: "Develop tailored content that addresses your team’s specific skill gaps."
      },
      {
          icon: <TrendingUp className="w-8 h-8 text-motee-orange" />,
          title: "Pilot & Scale",
          description: "Start small, gather feedback, and confidently expand your e-learning program."
      },
      {
          icon: <Users className="w-8 h-8 text-motee-blue" />,
          title: "Engagement Culture",
          description: "Celebrate learners’ achievements, share success stories, and reward growth to sustain momentum."
      }
  ];

  return (
    <div className="bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
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
                <img src="/assets/images/image.png" alt="E-Learning in action" className="w-full h-96 object-cover object-fill" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built This Platform Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-8">Why We Built This Platform</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At MSL, we believe that every employee deserves the opportunity to grow—not just in their job, 
                but in their confidence, their skills, and their future. Too many talented people are held back 
                by lack of access to quality training or the fear of being left behind in a changing world.
              </p>
              <p>
                That's why we created our e-learning platform—to unlock potential, build brighter careers, 
                and give businesses the power to thrive through empowered people. Whether you're learning to 
                run payroll, lead a team, or master digital tools, this platform is your stepping stone to a 
                more confident, capable, and connected workforce.
              </p>
              <p className="text-motee-green font-semibold">
                Because when people grow, businesses grow. And together, we build a better tomorrow.
              </p>
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
      <section className="py-20 bg-motee-green text-white">
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
            Ready to Transform How Your Team Learns?
            </h2>
            <p className="text-l text-gray-600 mb-8">
            Join leading organizations that boost productivity and engagement with our results-driven e-learning platform.
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
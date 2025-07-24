import React from 'react';
import { Target, CheckCircle, Clock, Users, BarChart, TrendingUp, MessageSquare, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PerformanceManagement = () => {
  const mslFeatures = [
    'Set SMART goals that align with business objectives',
    'Add reminders for upcoming goal deadlines',
    'Get notified when employees complete their goals',
    'Monitor progress at a glance — all from one screen',
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-motee-green" />,
      title: 'Set Clear, Trackable Goals',
      description: 'Create objectives that align with team and company priorities, ensuring everyone is working towards the same vision.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-motee-blue" />,
      title: 'Effective One-on-One Meetings',
      description: 'Make your check-ins more effective and engaging with structured agendas and shared notes.',
    },
    {
      icon: <Award className="w-8 h-8 text-motee-orange" />,
      title: 'Insightful Appraisal Discussions',
      description: 'Hold efficient and insightful appraisal discussions with all performance data in one place.',
    },
  ];

  const stats = [
    {
      value: '2x',
      label: 'Better Performance',
      description: 'Engaged employees perform 2x better than their disengaged peers.',
    },
    {
      value: '94%',
      label: 'Stay Longer',
      description: 'of employees would stay longer at a company that invests in their development.',
    },
    {
      value: '#3',
      label: 'Reason Employees Quit',
      description: 'Poor performance management is a top 3 reason employees leave their jobs.',
    },
  ];

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Performance Management That Inspires Growth
              </h1>
              <p className="text-l text-gray-600 leading-relaxed">
                Performance management is more than setting goals and conducting annual reviews — it's about creating a culture where people feel seen, valued, and motivated to grow. It's about building a workplace where feedback is continuous, conversations are meaningful, and every contribution drives collective success.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="rounded-xl shadow-2xl overflow-hidden aspect-video bg-gray-200">
                <img 
                  src="/assets/images/74EE20A7-5A2A-42E9-84AE-49B4A797BCF9.PNG" 
                  alt="Performance Management" 
                  className="w-full h-50 sm:h-59 md:h-98 lg:h-98 object-cover rounded-lg shadow" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-4">The Cost of Unclear Expectations</h2>
              <p className="text-l text-gray-600 mb-6">
                When employees aren't sure what's expected of them, performance suffers. Frustration builds, motivation wanes, and potential goes untapped.
              </p>
              <h3 className="text-2xl font-semibold text-motee-green mb-4">With MSL, you can turn this around:</h3>
              <ul className="space-y-3">
                {mslFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-motee-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl flex items-start space-x-4 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-motee-blue/10 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sarah's Story Section */}
      <section className="py-20 bg-motee-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-1xl md:text-2xl font-bold mb-4">Every Performance Deserves to Be Heard.</h2>
            <p className="text-l opacity-90 mb-6 italic">
              "Imagine Sarah — a bright, driven employee who joined full of ideas and ambition. She took initiative and delivered results. But without regular feedback or meaningful check-ins, her efforts went unnoticed. The only recognition? An annual review that felt rushed and impersonal. Her passion faded — and eventually, she left. Not for more money — but for more meaning."
            </p>
            <p className="font-semibold">Sadly, Sarah's story is all too common.</p>
          </div>
        </div>
      </section>

      {/* MSL Philosophy Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
                      Reimagine Performance Management
                  </h2>
                  <p className="text-l text-gray-700 leading-relaxed">
                      At MOTEE Solutions, we believe it's time to move beyond outdated appraisals. Our platform supports real-time feedback and ongoing conversations, transforming performance reviews into opportunities for growth. When personal goals align with company vision, real magic happens.
                  </p>
              </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900">Why It Matters</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-5xl font-extrabold text-motee-green mb-3">{stat.value}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-motee-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-1xl md:text-2xl font-bold mb-6">Unlock a Culture of Feedback, Fairness, and Forward Momentum</h2>
            <p className="text-l opacity-90 mb-8">
              MOTEE Solutions empowers your organization to move beyond outdated appraisals and toward a culture where every voice is heard and every performance counts.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-motee-green hover:bg-gray-100">
              Transform Your Performance Culture
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PerformanceManagement;

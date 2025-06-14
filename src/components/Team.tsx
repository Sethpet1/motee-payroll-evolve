import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      description: "Leading MOTEE with 15+ years in fintech and payroll innovation across Africa.",
      image: "/Images/profile.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@moteesolutions.com"
      }
    },
    {
      name: "Michael Adebayo",
      role: "Chief Technology Officer",
      description: "Building secure, scalable payroll solutions with expertise in biometric security.",
      image: "/Images/profile.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@moteesolutions.com"
      }
    },
    {
      name: "Fatima Ibrahim",
      role: "Head of Operations",
      description: "Ensuring seamless payroll operations and compliance across Nigerian businesses.",
      image: "/Images/profile.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "fatima@moteesolutions.com"
      }
    },
    {
      name: "David Okafor",
      role: "Lead Developer",
      description: "Crafting innovative payroll features and maintaining system reliability.",
      image: "/Images/profile.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@moteesolutions.com"
      }
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-motee-gray-dark mb-4">
            Meet Our <span className="text-motee-orange">Team</span>
          </h2>
          <p className="text-base text-motee-gray max-w-2xl mx-auto">
            The brilliant minds behind Nigeria's most trusted payroll solution.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-motee-orange/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Profile Image */}
              <div className="relative h-40 bg-gradient-to-br from-motee-orange/5 to-motee-green/5 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-3 right-3 w-5 h-5 bg-motee-orange/10 rounded-full"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 bg-motee-green/10 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Member Info */}
                <div className="text-center mb-5">
                  <h3 className="text-base font-bold text-motee-gray-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-motee-orange font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-motee-gray/70 leading-relaxed line-clamp-2">
                    {member.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center hover:bg-motee-blue hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="h-4 w-4 text-gray-600 hover:text-white" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center hover:bg-motee-green hover:text-white transition-all duration-200"
                  >
                    <Twitter className="h-4 w-4 text-gray-600 hover:text-white" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center hover:bg-motee-orange hover:text-white transition-all duration-200"
                  >
                    <Mail className="h-4 w-4 text-gray-600 hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-motee-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-6 max-w-xl mx-auto border border-gray-100">
            <h3 className="text-lg font-bold text-motee-gray-dark mb-3">
              Want to Join Our Team?
            </h3>
            <p className="text-sm text-motee-gray mb-4">
              We're always looking for talented individuals who share our passion for 
              revolutionizing payroll in Nigeria.
            </p>
            <button className="bg-motee-orange hover:bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 shadow-sm hover:shadow-md">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 
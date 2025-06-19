import { useState } from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  author: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    author: "Sarah Johnson",
    role: "HR Director",
    company: "Tech Solutions Inc.",
    content: "MOTEE has revolutionized our payroll process. What used to take days now takes hours, and the accuracy is impeccable. The customer support team is always there when we need them.",
    image: "/public/Images/profile.jpg"
  },
  {
    author: "Michael Chen",
    role: "Finance Manager",
    company: "Global Enterprises",
    content: "The automation and compliance features have saved us countless hours and helped us avoid costly mistakes. It's the best investment we've made for our HR department.",
    image: "/public/Images/one.jpg"
  },
  {
    author: "Lisa Rodriguez",
    role: "Operations Head",
    company: "Innovate Corp",
    content: "The interface is intuitive, and the reporting features are comprehensive. MOTEE has streamlined our entire payroll operation and improved employee satisfaction.",
    image: "/public/Images/two.jpg"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-motee-green to-motee-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why leading companies trust MOTEE for their payroll solutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background Decorations */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-gradient-to-r from-motee-green/5 to-motee-orange/5 rounded-full blur-3xl"></div>
          </div>

          {/* Testimonial Cards */}
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-motee-green/20">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-motee-green/20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-lg mb-6 italic">
                    {testimonials[activeIndex].content}
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-motee-green">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-motee-green scale-125"
                      : "bg-gray-300 hover:bg-motee-green/50"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
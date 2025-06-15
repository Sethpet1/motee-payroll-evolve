import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MSLBackground from '@/components/MSLBackground';
import BookDemoButton from '@/components/ui/BookDemoButton';

const BookDemo = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Demo');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen relative">
      <MSLBackground />
      <Header />
      <main className="relative z-10 flex flex-col items-center justify-center py-24 px-4">
        <section className="w-full max-w-6xl bg-white/90 rounded-2xl shadow-xl p-0 md:p-0 border border-gray-200 backdrop-blur-md flex flex-col md:flex-row overflow-hidden relative">
          {/* Close Button */}
          <button
            onClick={() => window.history.length > 1 ? window.history.back() : window.location.assign('/')} // fallback to home if no history
            className="absolute top-4 right-4 z-20 text-gray-400 hover:text-motee-orange text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-motee-orange bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow"
            aria-label="Close Book a Demo"
          >
            &times;
          </button>
          <div className="flex-1 flex flex-col justify-center px-8 py-12 md:py-16 text-justify">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-motee-green">
              Our experts are on hand to discuss your business needs and answer any questions.
            </h2>
            <div className="my-6 text-lg font-medium text-gray-700 text-center md:text-justify">
              How can we help today?
            </div>
            <div className="flex justify-center md:justify-start gap-8 mb-8">
              {['Quote', 'Demo', 'Sales question'].map(option => (
                <label key={option} className="flex items-center gap-2 text-lg cursor-pointer">
                  <input
                    type="radio"
                    name="helpType"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    className="accent-motee-orange w-5 h-5"
                  />
                  {option}
                </label>
              ))}
            </div>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🎉</div>
                <div className="text-xl font-semibold mb-2 text-motee-green">Thank you!</div>
                <div className="text-motee-gray">Your request has been received. We'll contact you soon.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-motee-gray mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-motee-gray mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-motee-gray mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-motee-gray mb-1">Phone <span className="text-xs text-gray-400">(optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-motee-gray mb-1">Message <span className="text-xs text-gray-400">(optional)</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-motee-green focus:ring-2 focus:ring-motee-green/30 outline-none bg-white text-gray-900 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <div className="mt-8 text-xs text-center text-gray-500">
                  By submitting this form you are informed that MSL may contact you about its products, services, and offers, according to our <span className="text-red-600 font-semibold">Privacy statement for Business contacts.</span>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-motee-green to-motee-orange hover:from-motee-orange hover:to-motee-green transition-all text-lg shadow-md mt-2"
                >
                  Book Demo
                </button>
              </form>
            )}
          </div>
          <div className="flex-1 min-h-[400px] relative">
            <img
              src="/assets/images/94395D6B-6ABA-4168-9B23-0D9F5968D19B 2.PNG"
              alt="Demo illustration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo; 
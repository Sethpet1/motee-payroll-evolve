import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MSLBackground from '@/components/MSLBackground';

const BookDemo = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
        <section className="w-full max-w-xl bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 backdrop-blur-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-motee-green to-motee-orange bg-clip-text text-transparent text-center">
            Book a Demo
          </h1>
          <p className="text-motee-gray text-center mb-8">
            Fill out the form below and our team will get in touch to schedule your personalized demo.
          </p>
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
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-motee-green to-motee-orange hover:from-motee-orange hover:to-motee-green transition-all text-lg shadow-md mt-2"
              >
                Book Demo
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo; 
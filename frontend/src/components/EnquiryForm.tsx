'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Send, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  query: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    query: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes with proper typing
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Example submit handler (you can implement actual submission logic)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate async submission and reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        query: ''
      });
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center p-4 relative">
      {/* Floating Elements */}
      {/* <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-400/10 rounded-full blur-xl animate-bounce delay-500"></div> */}

      <div className="relative w-full max-w-md">
        {/* Glass Card */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 bg rounded-full mb-4 shadow-lg">
              <MessageSquare className="w-8 h-8 text-white" />
            </div> */}
            <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
            {/* <p className="text-white/70">We'd love to hear from you</p> */}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Phone className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>

            {/* Location Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>

            {/* Query Field */}
            <div className="relative">
              <div className="absolute top-4 left-4 pointer-events-none">
                <MessageSquare className="w-5 h-5 text-white/50" />
              </div>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Your Query"
                rows={4}
                required
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-blue-500 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitted!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </>
              )}
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl backdrop-blur-sm">
              <p className="text-green-300 text-center font-medium">
                Thank you! Your enquiry has been submitted successfully.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Glow */}
        {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div> */}
      </div>
    </div>
  );
}

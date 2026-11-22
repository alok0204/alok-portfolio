import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2, MapPin, Copy, Check } from 'lucide-react';
import { sendContactMessage } from '../services/api';
import { personalInfo } from '../config/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Client-side validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be under 100 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Message cannot exceed 2000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setStatusMessage('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      setSubmitStatus('success');
      setStatusMessage(response.message || 'Thank you! Your message has been received.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err) {
      setSubmitStatus('error');
      setStatusMessage(err.message || 'An error occurred while transmitting your message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950">
      
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Have a question, collaboration idea, or student inquiry? Send a message through the form or reach out directly.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/80 space-y-5">
              <h3 className="text-lg font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Feel free to connect directly via email, GitHub, or LinkedIn. I am always open to discussing technology, programming, and software projects.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono uppercase text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-cyan-400 shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">GitHub Profile</div>
                  <div className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                    github.com/{personalInfo.githubUsername}
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400 group-hover:text-cyan-400 shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                    linkedin.com/in/alok-kumar-vishwas
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Location</div>
                  <div className="text-sm font-medium text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the form below. Messages are validated and securely saved to PostgreSQL via the Express REST API.
              </p>

              {/* Status Alert Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Message Sent Successfully!</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Delivery Notice</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all duration-200 text-sm ${
                      errors.name
                        ? 'border-rose-500/80 focus:ring-rose-500/50'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all duration-200 text-sm ${
                      errors.email
                        ? 'border-rose-500/80 focus:ring-rose-500/50'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all duration-200 text-sm resize-y ${
                      errors.message
                        ? 'border-rose-500/80 focus:ring-rose-500/50'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/30'
                    }`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-xs text-rose-400">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-[11px] font-mono text-slate-400">
                      {formData.message.length} / 2000
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
                  Protected with rate limiting & server-side validation.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

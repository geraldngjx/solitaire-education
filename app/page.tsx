'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import Image from 'next/image';

// Custom hook for scroll-triggered animations
const useScrollReveal = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-fade-up, .scroll-fade-down, .scroll-fade-left, .scroll-fade-right, .scroll-scale, .scroll-rotate');
    
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// TypeScript Interfaces
interface NavigationItem {
  label: string;
  href: string;
}

interface SubjectCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  features: string[];
  gradient: string;
}

interface EdgeFeature {
  icon: string;
  title: string;
  description: string;
}

interface SuccessStory {
  name: string;
  subject: string;
  achievement: string;
  quote: string;
}

interface FormData {
  studentName: string;
  subjectInterest: string;
  parentEmail: string;
  mobile: string;
}

interface FormStatus {
  type: 'idle' | 'success' | 'error';
  message: string;
}

// Utility function for smooth scroll with offset
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Height of navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavigationItem[] = [
    { label: 'Home', href: 'home' },
    { label: 'Subjects', href: 'subjects' },
    { label: 'About Tutor', href: 'credentials' },
    { label: 'Mentorship', href: 'mentorship' },
    { label: 'Success Stories', href: 'success' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-2xl z-50 border-b border-gray-200/50 shadow-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo - Improved Diamond Design */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            {/* Enhanced Diamond SVG Logo matching uploaded design */}
            <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-6">
              <svg width="45" height="50" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                {/* Top pyramid facets */}
                <path d="M50 5 L30 35 L50 35 Z" fill="#1e3a8a" opacity="0.3"/>
                <path d="M50 5 L70 35 L50 35 Z" fill="#1e3a8a" opacity="0.4"/>
                <path d="M50 5 L85 35 L70 35 Z" fill="#2563eb" opacity="0.25"/>
                <path d="M50 5 L15 35 L30 35 Z" fill="#2563eb" opacity="0.25"/>
                
                {/* Middle section facets */}
                <path d="M15 35 L30 35 L25 65 Z" fill="#3b82f6" opacity="0.2"/>
                <path d="M30 35 L50 35 L35 65 Z" fill="#1e3a8a" opacity="0.35"/>
                <path d="M50 35 L70 35 L65 65 Z" fill="#1e3a8a" opacity="0.35"/>
                <path d="M70 35 L85 35 L75 65 Z" fill="#3b82f6" opacity="0.2"/>
                
                {/* Bottom pyramid facets */}
                <path d="M25 65 L35 65 L50 100 Z" fill="#4f46e5" opacity="0.3"/>
                <path d="M35 65 L50 65 L50 100 Z" fill="#1e3a8a" opacity="0.45"/>
                <path d="M50 65 L65 65 L50 100 Z" fill="#1e3a8a" opacity="0.45"/>
                <path d="M65 65 L75 65 L50 100 Z" fill="#4f46e5" opacity="0.3"/>
                
                {/* Outline paths */}
                <path d="M50 5 L85 35 L75 65 L50 100 L25 65 L15 35 Z" stroke="#1e3a8a" strokeWidth="2.5" fill="none" strokeLinejoin="miter"/>
                
                {/* Internal structure lines */}
                <line x1="50" y1="5" x2="50" y2="35" stroke="#1e3a8a" strokeWidth="2"/>
                <line x1="15" y1="35" x2="85" y2="35" stroke="#1e3a8a" strokeWidth="2"/>
                <line x1="50" y1="35" x2="50" y2="100" stroke="#1e3a8a" strokeWidth="2"/>
                <line x1="15" y1="35" x2="50" y2="100" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.6"/>
                <line x1="85" y1="35" x2="50" y2="100" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.6"/>
                <line x1="30" y1="35" x2="50" y2="5" stroke="#1e3a8a" strokeWidth="1.5"/>
                <line x1="70" y1="35" x2="50" y2="5" stroke="#1e3a8a" strokeWidth="1.5"/>
                <line x1="25" y1="65" x2="75" y2="65" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.7"/>
                <line x1="30" y1="35" x2="35" y2="65" stroke="#2563eb" strokeWidth="1.5" opacity="0.5"/>
                <line x1="70" y1="35" x2="65" y2="65" stroke="#2563eb" strokeWidth="1.5" opacity="0.5"/>
                
                {/* Star sparkle accent */}
                <g transform="translate(50, 52)">
                  <path d="M0,-8 L2,-2 L8,-2 L3,2 L5,8 L0,4 L-5,8 L-3,2 L-8,-2 L-2,-2 Z" fill="#60a5fa" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="white" opacity="0.8"/>
                </g>
              </svg>
            </div>
            {/* Text Logo */}
            <div className="transform transition-all duration-300">
              <div className="font-bold text-xl md:text-2xl tracking-wide leading-none">
                <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  SOLITAIRE
                </span>
              </div>
              <div className="text-xs md:text-sm text-gray-600 tracking-widest font-light mt-0.5">
                EDUCATION
              </div>
            </div>
          </div>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-5 py-2.5 text-gray-700 hover:text-blue-700 font-semibold transition-all duration-300 group rounded-xl"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></span>
                <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            
            {/* Premium CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-700 focus:outline-none hover:bg-blue-50 rounded-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Premium Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-2 animate-fadeInDown">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block py-3 px-5 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 font-semibold rounded-xl transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
                className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden flex items-center">
      {/* Ultra Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
      
      {/* Sticky Background Diamond Watermark - More Visible */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.06] pointer-events-none z-0">
        <svg width="900" height="900" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top pyramid facets */}
          <path d="M50 5 L30 35 L50 35 Z" fill="#1e3a8a" opacity="0.3"/>
          <path d="M50 5 L70 35 L50 35 Z" fill="#1e3a8a" opacity="0.4"/>
          <path d="M50 5 L85 35 L70 35 Z" fill="#2563eb" opacity="0.25"/>
          <path d="M50 5 L15 35 L30 35 Z" fill="#2563eb" opacity="0.25"/>
          
          {/* Middle section facets */}
          <path d="M15 35 L30 35 L25 65 Z" fill="#3b82f6" opacity="0.2"/>
          <path d="M30 35 L50 35 L35 65 Z" fill="#1e3a8a" opacity="0.35"/>
          <path d="M50 35 L70 35 L65 65 Z" fill="#1e3a8a" opacity="0.35"/>
          <path d="M70 35 L85 35 L75 65 Z" fill="#3b82f6" opacity="0.2"/>
          
          {/* Bottom pyramid facets */}
          <path d="M25 65 L35 65 L50 100 Z" fill="#4f46e5" opacity="0.3"/>
          <path d="M35 65 L50 65 L50 100 Z" fill="#1e3a8a" opacity="0.45"/>
          <path d="M50 65 L65 65 L50 100 Z" fill="#1e3a8a" opacity="0.45"/>
          <path d="M65 65 L75 65 L50 100 Z" fill="#4f46e5" opacity="0.3"/>
          
          {/* Outline paths */}
          <path d="M50 5 L85 35 L75 65 L50 100 L25 65 L15 35 Z" stroke="#1e3a8a" strokeWidth="2.5" fill="none" strokeLinejoin="miter"/>
          
          {/* Internal structure lines */}
          <line x1="50" y1="5" x2="50" y2="35" stroke="#1e3a8a" strokeWidth="2"/>
          <line x1="15" y1="35" x2="85" y2="35" stroke="#1e3a8a" strokeWidth="2"/>
          <line x1="50" y1="35" x2="50" y2="100" stroke="#1e3a8a" strokeWidth="2"/>
          <line x1="15" y1="35" x2="50" y2="100" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.6"/>
          <line x1="85" y1="35" x2="50" y2="100" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.6"/>
          <line x1="30" y1="35" x2="50" y2="5" stroke="#1e3a8a" strokeWidth="1.5"/>
          <line x1="70" y1="35" x2="50" y2="5" stroke="#1e3a8a" strokeWidth="1.5"/>
          <line x1="25" y1="65" x2="75" y2="65" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.7"/>
          <line x1="30" y1="35" x2="35" y2="65" stroke="#2563eb" strokeWidth="1.5" opacity="0.5"/>
          <line x1="70" y1="35" x2="65" y2="65" stroke="#2563eb" strokeWidth="1.5" opacity="0.5"/>
          
          {/* Star sparkle accent */}
          <g transform="translate(50, 52)">
            <path d="M0,-8 L2,-2 L8,-2 L3,2 L5,8 L0,4 L-5,8 L-3,2 L-8,-2 L-2,-2 Z" fill="#60a5fa" opacity="0.9"/>
            <circle cx="0" cy="0" r="2" fill="white" opacity="0.8"/>
          </g>
        </svg>
      </div>

      {/* Subtle Animated Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Fine Grid Pattern (removed complex inline data-URL to avoid JSX parsing issues) */}
      <div className="absolute inset-0 opacity-[0.015]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-blue-100 shadow-premium scroll-fade-down">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                Singapore&apos;s Premier JC Tuition Service
              </span>
            </div>

            {/* Ultra Premium Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight scroll-fade-up stagger-delay-100">
              <span className="block text-gray-900">
                Unlock Your
              </span>
              <span className="block mt-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
                True Potential
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full opacity-20"></div>
              </span>
            </h1>

            {/* Premium Description */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl font-light scroll-fade-up stagger-delay-200">
              Elite <span className="font-bold text-blue-700">H2 Physics</span> and{' '}
              <span className="font-bold text-indigo-700">H2 Computing</span> tuition backed by our{' '}
              <span className="font-bold text-purple-700">Lifetime Mentorship</span> guarantee
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 scroll-fade-up stagger-delay-300">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-premium-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get Free Consultation
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('subjects')}
                className="px-10 py-5 bg-white/90 backdrop-blur-sm text-gray-800 font-bold text-lg rounded-2xl border-2 border-gray-300 hover:border-blue-400 shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Subjects
                  <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Premium Social Proof - removed for boutique rebrand (preserved here as commented code)
            <div className="flex items-center gap-10 pt-6 scroll-fade-up stagger-delay-400">
              <div className="flex -space-x-4">
                {[
                  'from-blue-500 to-blue-600',
                  'from-indigo-500 to-indigo-600',
                  'from-purple-500 to-purple-600',
                  'from-pink-500 to-pink-600'
                ].map((gradient, i) => (
                  <div key={i} className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} border-4 border-white shadow-lg ring-2 ring-blue-100`}></div>
                ))}
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-900">100+</div>
                <div className="text-sm text-gray-600 font-medium">Students with A-Grades</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-0.5">5.0 Excellence Rating</div>
              </div>
            </div>
            */}
          </div>

          {/* Right Content - Premium Glass Cards (Boutique messaging) */}
          <div className="relative lg:h-[650px] scroll-fade-left stagger-delay-200 hidden lg:block">
            {/* Card 1: Capped Class Size */}
            <div className="absolute top-0 right-0 w-96 bg-white/85 backdrop-blur-2xl rounded-3xl p-8 shadow-premium-lg border border-white/60 transform hover:scale-105 transition-all duration-500 hover:rotate-1 hover:shadow-2xl group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">Capped Class Size</div>
                  <div className="text-sm text-gray-500">Maximum 6 students per class</div>
                </div>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed mt-3">
                Personalised attention with a strict 6:1 ratio for deep understanding.
              </div>
            </div>

            {/* Card 2: 24/7 Lifetime Mentorship */}
            <div className="absolute top-56 left-0 w-96 bg-white/85 backdrop-blur-2xl rounded-3xl p-8 shadow-premium-lg border border-white/60 transform hover:scale-105 transition-all duration-500 hover:-rotate-1 hover:shadow-2xl group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.418-4.03 8-9 8-1.4 0-2.732-.257-3.96-.73L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">24/7 Lifetime Mentorship</div>
                  <div className="text-sm text-gray-500">Support beyond the classroom</div>
                </div>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed mt-3">
                Direct WhatsApp access and guidance that continues well beyond exams.
              </div>
            </div>

            {/* Card 3: Educator Pedigree */}
            <div 
              onClick={() => scrollToSection('credentials')}
              className="absolute bottom-0 right-8 w-96 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 shadow-2xl border border-white/20 text-white transform hover:scale-105 transition-all duration-500 overflow-hidden group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.538M12 14L5.84 10.578A12.083 12.083 0 006 20.538" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg text-white">Educator Pedigree</div>
                  <div className="text-sm text-blue-100">Raffles Institution • NUS</div>
                </div>
                <svg className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-sm text-blue-100 leading-relaxed mt-3">
                Top-tier education background with proven teaching excellence.
              </div>
              <div className="mt-4 text-xs text-blue-200 font-semibold flex items-center gap-1">
                <span>Learn more about your tutor</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Glass Cards - Visible only on mobile */}
          <div className="lg:hidden space-y-4 mt-8">
            {/* Card 1: Capped Class Size - Mobile */}
            <div className="bg-white/85 backdrop-blur-2xl rounded-2xl p-6 shadow-premium-lg border border-white/60 scroll-fade-up">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-base text-gray-900">Capped Class Size</div>
                  <div className="text-xs text-gray-500">Maximum 6 students per class</div>
                </div>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed">
                Personalised attention with a strict 6:1 ratio for deep understanding.
              </div>
            </div>

            {/* Card 2: 24/7 Lifetime Mentorship - Mobile */}
            <div className="bg-white/85 backdrop-blur-2xl rounded-2xl p-6 shadow-premium-lg border border-white/60 scroll-fade-up stagger-delay-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.418-4.03 8-9 8-1.4 0-2.732-.257-3.96-.73L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-base text-gray-900">24/7 Lifetime Mentorship</div>
                  <div className="text-xs text-gray-500">Support beyond the classroom</div>
                </div>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed">
                Direct WhatsApp access and guidance that continues well beyond exams.
              </div>
            </div>

            {/* Card 3: Educator Pedigree - Mobile */}
            <div 
              onClick={() => scrollToSection('credentials')}
              className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-6 shadow-2xl border border-white/20 text-white cursor-pointer active:scale-95 transition-transform duration-200 scroll-fade-up stagger-delay-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.538M12 14L5.84 10.578A12.083 12.083 0 006 20.538" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-base text-white">Educator Pedigree</div>
                  <div className="text-xs text-blue-100">Raffles Institution • NUS</div>
                </div>
                <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-sm text-blue-100 leading-relaxed mb-2">
                Top-tier education background with proven teaching excellence.
              </div>
              <div className="text-xs text-blue-200 font-semibold flex items-center gap-1">
                <span>Learn more about your tutor</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Differentiating Factor Section
const EdgeSection = () => {
  const features: EdgeFeature[] = [
    {
      icon: '🌟',
      title: 'Lifetime Mentorship',
      description: 'Our commitment doesn&apos;t end with exams. We provide guidance throughout your academic journey and beyond, helping you navigate university applications, career choices, and personal growth.',
    },
    {
      icon: '🤝',
      title: 'Supportive Community',
      description: 'Join a network of passionate, high-performing learners. Collaborate, share insights, and build lasting friendships with peers who share your drive for excellence.',
    },
    {
      icon: '🚀',
      title: 'Future-Ready Skills',
      description: 'We don&apos;t just teach for exams. We equip you with critical thinking, problem-solving, and analytical skills that will serve you throughout your career in STEM fields.',
    },
  ];

  return (
    <section id="mentorship" className="py-32 relative overflow-hidden">
      {/* Ultra Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
      
      {/* Diamond Logo Watermark - Right Side */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] opacity-[0.025] pointer-events-none">
        <Image
          src="/solitaire-education-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100/80 backdrop-blur-sm text-blue-700 font-semibold mb-6 shadow-premium scroll-fade-down">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Why Choose Solitaire
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight scroll-fade-up stagger-delay-100">
            <span className="block text-gray-900">
              The Solitaire
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Advantage
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed scroll-fade-up stagger-delay-200">
            Beyond tuition—we&apos;re your lifelong partners in academic excellence and personal growth
          </p>
        </div>

        {/* Ultra Premium Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Large Premium Feature Card - Lifetime Mentorship */}
          <div className="lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 overflow-hidden shadow-premium-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] scroll-scale">
            {/* Premium Decorative Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full -ml-48 -mb-48 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <span className="text-5xl">✨</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Lifetime<br/>Mentorship
              </h3>
              <p className="text-blue-50 text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-light">
                Our commitment transcends exams. Receive continuous, personalized guidance throughout your academic journey and professional life—from university applications to career milestones.
              </p>
              
              {/* Premium Feature List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {['Post-exam guidance', 'University applications', 'Career mentorship', 'Alumni network'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white group/item">
                    <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Community Card */}
          <div className="group relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-gray-100 overflow-hidden hover:scale-[1.02] scroll-fade-right stagger-delay-200">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Vibrant Community
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Connect with a network of ambitious, high-achieving peers who inspire excellence.
              </p>
            </div>
          </div>

          {/* Premium Future-Ready Card */}
          <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-500 overflow-hidden hover:scale-[1.02] scroll-fade-right stagger-delay-300">
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Future-Ready<br/>Skills
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Master critical thinking and problem-solving for your STEM career journey.
              </p>
            </div>
          </div>

          {/* Premium Stats Card - removed for boutique rebrand (preserved here as commented code)
          <div className="lg:col-span-2 grid grid-cols-3 gap-6 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-xl rounded-3xl p-10 border border-blue-100 shadow-premium">
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Students</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">A-Grades</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">5.0</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Rating</div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

// Subjects Section Component
const SubjectsSection = () => {
  const subjects: SubjectCard[] = [
    {
      id: 'physics',
      title: 'H2 Physics',
      subtitle: 'Master the Universe',
      icon: '⚛️',
      features: [
        'Deep Conceptual Understanding',
        'Real-World Applications',
        'Advanced Problem-Solving Techniques',
        'Exam Strategy & Time Management',
        'Interactive Simulations & Experiments',
      ],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'computing',
      title: 'H2 Computing',
      subtitle: 'Code the Future',
      icon: '💻',
      features: [
        'Algorithmic Thinking & Design',
        'Practical Coding Skills (Python)',
        'Data Structures & Optimization',
        'Project-Based Learning',
        'Computational Problem Solving',
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="subjects" className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Diamond Logo Watermark - Left Side */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[700px] h-[700px] opacity-[0.02] pointer-events-none">
        <Image
          src="/solitaire-education-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute bottom-40 left-20 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-100/80 backdrop-blur-sm text-indigo-700 font-semibold mb-6 shadow-premium scroll-fade-down">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Our Premium Programs
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight scroll-fade-up stagger-delay-100">
            <span className="block text-gray-900">
              Specialized
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Subject Mastery
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed scroll-fade-up stagger-delay-200">
            Expert-led programs meticulously designed to transform your understanding and achieve A-Level excellence
          </p>
        </div>

        {/* Ultra Premium Subject Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* H2 Physics - Ultra Premium */}
          <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-4xl overflow-hidden shadow-premium-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/60 scroll-rotate">
            {/* Premium Gradient Header */}
            <div className="relative h-48 sm:h-60 lg:h-72 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 sm:p-8 lg:p-10 overflow-hidden">
              {/* Animated decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full -mr-40 -mt-40 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-400 rounded-full -ml-30 -mb-30 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full group-hover:scale-200 transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/25 backdrop-blur-md text-white text-sm font-semibold mb-6 shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                  </div>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <span className="text-6xl">⚛️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-5xl font-black text-white mb-3 leading-tight">H2 Physics</h3>
                  <p className="text-blue-50 text-xl font-light">Master the Universe</p>
                </div>
              </div>
            </div>

            {/* Premium Content */}
            <div className="p-10">
              <div className="space-y-5 mb-10">
                {subjects[0].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div className="mt-0.5 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-lg leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="group/btn relative w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-premium-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enroll in H2 Physics
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 animate-shimmer"></div>
              </button>
            </div>
          </div>

          {/* H2 Computing - Ultra Premium */}
          <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-4xl overflow-hidden shadow-premium-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/60 scroll-rotate stagger-delay-200">
            {/* Premium Gradient Header */}
            <div className="relative h-48 sm:h-60 lg:h-72 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-700 p-6 sm:p-8 lg:p-10 overflow-hidden">
              {/* Animated decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full -ml-40 -mt-40 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-400 rounded-full -mr-30 -mb-30 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full group-hover:scale-200 transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/25 backdrop-blur-md text-white text-sm font-semibold mb-6 shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    High Demand
                  </div>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                    <span className="text-6xl">💻</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-5xl font-black text-white mb-3 leading-tight">H2 Computing</h3>
                  <p className="text-purple-50 text-xl font-light">Code the Future</p>
                </div>
              </div>
            </div>

            {/* Premium Content */}
            <div className="p-10">
              <div className="space-y-5 mb-10">
                {subjects[1].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div className="mt-0.5 w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:-rotate-6 transition-all shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-lg leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="group/btn relative w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-premium-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enroll in H2 Computing
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 animate-shimmer"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Tutor Credentials Section
const TutorCredentialsSection = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const certificateImages = [
    '/cert-olevels.png',
    '/cert-alevels.png',
  ];

  const nextCert = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certificateImages.length);
  };

  const prevCert = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certificateImages.length) % certificateImages.length);
  };

  return (
    <section id="credentials" className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-100/80 backdrop-blur-sm text-indigo-700 font-semibold mb-6 shadow-premium scroll-fade-down">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            About Your Tutor
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight scroll-fade-up stagger-delay-100">
            <span className="block text-gray-900">
              I&apos;ve Been Through
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
              The Same Journey
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed scroll-fade-up stagger-delay-200">
            Having experienced the challenges of JC Physics firsthand, I understand what it takes to succeed
          </p>
        </div>

        {/* Credentials Content */}
        <div className="space-y-16">
          {/* Profile and Logos Section */}
          <div className="flex flex-col items-center scroll-fade-up">
            {/* Profile Photo */}
            <div className="relative mb-6 sm:mb-8">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-blue-100">
                <Image
                  src="/gerald-profile-photo.png"
                  alt="Your Tutor - Gerald Ng"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Verified badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-3 lg:border-4 border-white">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Institution Logos */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
              {/* Raffles Institution Logo */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 group">
                <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative w-full h-full p-2">
                  <Image
                    src="/raffles-institution-logo.svg"
                    alt="Raffles Institution"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* NUS Logo */}
              <div className="relative w-40 h-28 sm:w-56 sm:h-36 lg:w-72 lg:h-48 group">
                <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative w-full h-full p-2">
                  <Image
                    src="/nus-computing-logo.png"
                    alt="National University of Singapore"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Gerald Ng</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">Physics & Computing Tutor</p>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-sm font-semibold text-blue-700">Raffles Institution</span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-sm font-semibold text-indigo-700">NUS Computer Science</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-sm font-semibold text-purple-700">Merit Scholar</span>
            </div>
          </div>

          {/* Certificates Carousel */}
          <div className="scroll-fade-up stagger-delay-200">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Academic Credentials</h3>
            <div className="relative max-w-4xl mx-auto">
              {/* Carousel container */}
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Certificate Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={certificateImages[currentCertIndex]}
                    alt={`Certificate ${currentCertIndex + 1}`}
                    fill
                    className="object-contain p-4"
                    priority={currentCertIndex === 0}
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevCert}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 group"
                  aria-label="Previous certificate"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextCert}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 group"
                  aria-label="Next certificate"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Verified badge */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verified</span>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {certificateImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCertIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentCertIndex 
                        ? 'w-8 bg-gradient-to-r from-blue-500 to-indigo-600' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Credentials Details Grid - Enhanced Aesthetic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 scroll-fade-up stagger-delay-300">
            {/* Education */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:border-blue-200 hover:-translate-y-2">
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.538M12 14L5.84 10.578A12.083 12.083 0 006 20.538" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Educational Background</h3>
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <span className="font-bold text-blue-700">Raffles Institution</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <span className="font-bold text-indigo-700">NUS Computer Science</span>
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-blue-100">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Merit Scholar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Results */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-2xl transition-all duration-500 border border-purple-100/50 hover:border-purple-200 hover:-translate-y-2">
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-xl mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Shared Experience</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">I navigated the same journey:</p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-200/50">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">O Levels</span>
                    <span className="font-black text-base sm:text-lg text-purple-700">3 Points</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-200/50">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">A Levels</span>
                    <span className="font-black text-base sm:text-lg text-purple-700">90 RP</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-200/50">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">H3 Physics</span>
                    <span className="font-black text-base sm:text-lg text-purple-700">Distinction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching Experience */}
            <div className="group relative bg-gradient-to-br from-white to-indigo-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-2xl transition-all duration-500 border border-indigo-100/50 hover:border-indigo-200 hover:-translate-y-2">
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-xl mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Teaching Experience</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Previously at <span className="font-bold text-indigo-700">MOE-registered</span> centre
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <span className="font-bold text-indigo-700">2+ years</span> helping students achieve their goals
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-indigo-100">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-indigo-700">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-bold">Personalized 1-to-1 & Small Group</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center scroll-fade-up stagger-delay-400">
            <button
              onClick={() => scrollToSection('contact')}
              className="group/btn relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-premium-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Learning Journey
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Success Stories Section
const SuccessStoriesSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const testimonialImages = [
    '/testimonial-img-1.jpg',
    '/testimonial-img-2.jpg',
    '/testimonial-img-3.jpg',
    '/testimonial-img-4.jpg',
    '/testimonial-img-5.jpg',
  ];

  const stories: SuccessStory[] = [
    {
      name: 'Matthew',
      subject: 'JC Physics',
      achievement: 'NUS Computer Science',
      quote: 'I got A in phy! thank you for your patient guidance bro!',
    },
    {
      name: 'Tracy',
      subject: 'JC Physics',
      achievement: 'NTU Environmental Earth Systems Science',
      quote: 'I just wanted to let you know I recently received back my A-level results and I wanna thank you a lot for all the Physics tuition then. I don\'t think I would have been as prepared for Physics in my 2nd year of J1 & J2 if I had not been taught by you. Just wanna say thank you and wishing you all the best for your future endeavours!',
    },
    {
      name: 'Faith',
      subject: 'JC Physics and Mathematics',
      achievement: '',
      quote: 'With that, I really thank you wholeheartedly for all your help. If not because of your hard work and patience I would have never been able to understand Physics and Math and actually start to build the interest in that 2 subjects.',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  return (
    <section id="success" className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Diamond Logo Watermark - Center Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-[600px] h-[600px] opacity-[0.02] pointer-events-none">
        <Image
          src="/solitaire-education-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra Premium Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 font-semibold mb-6 shadow-premium scroll-fade-down">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Success Stories
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight scroll-fade-up stagger-delay-100">
            <span className="block text-gray-900">
              Real Students,
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mt-2">
              Real Results
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed scroll-fade-up stagger-delay-200">
            Hear from students who transformed their academic journey with Solitaire Education
          </p>
        </div>

        {/* WhatsApp Testimonial Carousel */}
        <div className="mb-12 sm:mb-16 lg:mb-20 scroll-fade-up stagger-delay-300">
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={testimonialImages[currentImageIndex]}
                  alt={`Student testimonial ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  priority={currentImageIndex === 0}
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* WhatsApp badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/90 backdrop-blur-sm text-white font-semibold shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonialImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-600' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col scroll-fade-up stagger-delay-${(index + 1) * 100}`}
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              
              {/* Quote icon */}
              <div className="mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-lg sm:text-xl transform group-hover:scale-110 transition-transform duration-500">
                  &ldquo;
                </div>
              </div>

              {/* Quote - takes up available space */}
              <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed italic flex-grow mb-3 sm:mb-4">
                {story.quote}
              </p>

              {/* Student details - flushed to bottom */}
              <div className="pt-3 sm:pt-4 border-t border-gray-100 space-y-2 sm:space-y-2.5">
                {/* Student name and subject */}
                <div>
                  <div className="font-bold text-sm sm:text-base text-gray-900">{story.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{story.subject}</div>
                </div>

                {/* Achievement pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs sm:text-sm font-semibold shadow-md">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>A for A-Levels</span>
                  </div>
                  {story.achievement && <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-medium">
                    {story.achievement}
                  </div>}  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component (Web3Forms Integration)
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    subjectInterest: '',
    parentEmail: '',
    mobile: '',
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.studentName,
          email: formData.parentEmail,
          subject: `New Interest Form: ${formData.subjectInterest}`,
          message: `
            Student Name: ${formData.studentName}
            Subject Interest: ${formData.subjectInterest}
            Parent Email: ${formData.parentEmail}
            Mobile (WhatsApp): ${formData.mobile}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: 'success',
          message: '🎉 Thank you! We&apos;ll contact you within 24 hours to schedule your free consultation.',
        });
        setFormData({
          studentName: '',
          subjectInterest: '',
          parentEmail: '',
          mobile: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: '❌ Something went wrong. Please try again or contact us directly via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Geometric pattern overlay (simplified to avoid complex inline data-URL) */}
      <div className="absolute inset-0 opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium mb-6 scroll-fade-down">
            Ready to Excel?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 scroll-fade-up stagger-delay-100">
            Start Your Journey
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto scroll-fade-up stagger-delay-200">
            Register your interest for a free consultation and mentorship session
          </p>
        </div>

        {/* Form Container */}
        <div className="relative scroll-scale stagger-delay-300">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur opacity-25"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Student Name */}
                <div className="transform transition-all duration-300">
                  <label htmlFor="studentName" className="block text-sm font-semibold text-gray-800 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                    placeholder="Enter student's full name"
                  />
                </div>

                {/* Subject Interest */}
                <div className="transform transition-all duration-300">
                  <label htmlFor="subjectInterest" className="block text-sm font-semibold text-gray-800 mb-2">
                    Subject of Interest *
                  </label>
                  <select
                    id="subjectInterest"
                    name="subjectInterest"
                    value={formData.subjectInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="H2 Physics">H2 Physics</option>
                    <option value="H2 Computing">H2 Computing</option>
                    <option value="Both Subjects">Both Subjects</option>
                  </select>
                </div>

                {/* Parent Email */}
                <div className="transform transition-all duration-300">
                  <label htmlFor="parentEmail" className="block text-sm font-semibold text-gray-800 mb-2">
                    Parent Email *
                  </label>
                  <input
                    type="email"
                    id="parentEmail"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                    placeholder="parent@example.com"
                  />
                </div>

                {/* Mobile */}
                <div className="transform transition-all duration-300">
                  <label htmlFor="mobile" className="block text-sm font-semibold text-gray-800 mb-2">
                    Mobile (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                    placeholder="+65 XXXX XXXX"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full relative overflow-hidden group ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center text-white font-bold text-lg py-5 px-8">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Interest Form
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
              </form>

            {/* Status Messages */}
            {formStatus.type !== 'idle' && (
              <div
                className={`mt-6 p-5 rounded-xl animate-fadeIn font-medium ${
                  formStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border-2 border-green-200'
                    : 'bg-red-50 text-red-800 border-2 border-red-200'
                }`}
              >
                <div className="flex items-center">
                  {formStatus.type === 'success' ? (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  {formStatus.message}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
      {/* Subtle background pattern (simplified) */}
      <div className="absolute inset-0 opacity-5"></div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              SOLITAIRE EDUCATION
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Unlocking true potential through specialized tuition and lifetime mentorship for Singapore&apos;s brightest minds.
            </p>
            {/* Social proof badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-white">Trusted by 100+ Students</span>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Our Edge', id: 'mentorship' },
                { name: 'Subjects', id: 'subjects' },
                { name: 'Success Stories', id: 'success-stories' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:geraldngjx@gmail.com" className="text-white hover:text-blue-300 transition-colors">
                    geraldngjx@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a href="https://wa.me/6593227547" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                    +65 93227547
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Singapore</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Solitaire Education. All rights reserved.
            </p>
            <p className="text-sm text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text font-medium">
              Empowering Singapore&apos;s Next Generation of STEM Leaders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  // Initialize scroll reveal animations
  useScrollReveal();
  
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <EdgeSection />
      <SubjectsSection />
      <TutorCredentialsSection />
      <SuccessStoriesSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

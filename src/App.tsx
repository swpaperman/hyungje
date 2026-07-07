import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Equipment from './components/Equipment';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [language, setLanguage] = useState<'kr' | 'en'>(() => {
    const saved = localStorage.getItem('hj_language');
    return (saved === 'kr' || saved === 'en') ? saved : 'kr';
  });

  // Keep language in sync with localStorage
  useEffect(() => {
    localStorage.setItem('hj_language', language);
  }, [language]);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // height of our sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setActiveSection('hero');
  };

  // Monitor scrolling to update active menu item in header
  useEffect(() => {
    const sections = ['hero', 'about', 'capabilities', 'equipment', 'inquiry'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset to trigger early

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col relative pb-[calc(88px+env(safe-area-inset-bottom))] sm:pb-0" id="app-root">
      {/* Sticky Header Navigation */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} language={language} setLanguage={setLanguage} />

      {/* Main Sections Stack */}
      <main className="flex-grow">
        {/* Home / Hero Banner */}
        <Hero onNavigate={handleNavigate} language={language} />

        {/* Company Profile & Heritage */}
        <About language={language} />

        {/* Interactive Capabilities & Technology */}
        <Capabilities language={language} />

        {/* Machinery & Quality Instruments */}
        <Equipment language={language} />

        {/* Interactive Inquiry Request & FAQs */}
        <InquiryForm language={language} />
      </main>

      {/* Footer details & copyrights */}
      <Footer onScrollToTop={handleScrollToTop} language={language} />

      {/* Persistent Bottom Quick Actions (Only on Mobile) */}
      <div 
        id="mobile-bottom-actions"
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden flex min-h-[72px] bg-slate-900 border-t border-slate-800 shadow-xl pb-[env(safe-area-inset-bottom)]"
      >
        <a
          href="tel:01036037503"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-sm active:bg-blue-700 transition-colors whitespace-nowrap py-3"
        >
          <Phone size={18} />
          <span>{language === 'kr' ? '전화 견적' : 'Call Support'}</span>
        </a>
        <a
          href="sms:01036037503"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-sm active:bg-emerald-700 transition-colors border-l border-emerald-500/20 whitespace-nowrap py-3"
        >
          <MessageSquare size={18} />
          <span>{language === 'kr' ? '문자 상담' : 'Text Inquiry'}</span>
        </a>
      </div>

      {/* B2B Desktop-only Floating Quick Actions */}
      <div 
        id="floating-actions"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3 sm:bottom-8 sm:right-8"
      >
        {/* Direct Phone Dial */}
        <a
          href="tel:01036037503"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-emerald-600/25 transition-all flex items-center justify-center cursor-pointer active:scale-95 group relative hover:pr-14"
          title={language === 'kr' ? '대표전화 바로 연결' : 'Direct Call Support'}
        >
          <Phone size={20} className="shrink-0" />
          <span className="absolute right-4 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:inline">
            {language === 'kr' ? '전화 다이렉트 상담' : 'Direct Phone Call'}
          </span>
        </a>

        {/* Fast Online Quote Trigger */}
        <button
          onClick={() => handleNavigate('inquiry')}
          className="bg-blue-600 hover:bg-blue-500 text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-blue-600/25 transition-all flex items-center justify-center cursor-pointer active:scale-95 group relative hover:pr-14"
          title={language === 'kr' ? '온라인 간편 견적 접수' : 'Request Quote Online'}
        >
          <MessageSquare size={20} className="shrink-0" />
          <span className="absolute right-4 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:inline">
            {language === 'kr' ? '온라인 견적 문의' : 'Online Quote RFQ'}
          </span>
        </button>
      </div>
    </div>
  );
}

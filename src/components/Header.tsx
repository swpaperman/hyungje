import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  language: 'kr' | 'en';
  setLanguage: (lang: 'kr' | 'en') => void;
}

export default function Header({ onNavigate, activeSection, language, setLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multi-language navigation items matching Concept C board
  const navItems = [
    { id: 'about', targetId: 'about', nameKR: '회사소개', nameEN: 'About' },
    { id: 'capabilities', targetId: 'capabilities', nameKR: '사업영역', nameEN: 'Business' },
    { id: 'technology', targetId: 'capabilities', nameKR: '기술력', nameEN: 'Technology' },
    { id: 'equipment', targetId: 'equipment', nameKR: '설비현황', nameEN: 'Equipment' },
    { id: 'quality', targetId: 'capabilities', nameKR: '품질관리', nameEN: 'Quality' },
    { id: 'news', targetId: 'about', nameKR: '뉴스', nameEN: 'News' },
    { id: 'inquiry', targetId: 'inquiry', nameKR: '고객지원', nameEN: 'Support' },
  ];

  const handleItemClick = (targetId: string) => {
    onNavigate(targetId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[80px] px-4 bg-white border-b border-[#E5E7EB] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-0 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between gap-3">
          
          {/* Header Logo */}
          <div 
            onClick={() => handleItemClick('hero')} 
            className="flex min-w-0 items-center cursor-pointer group shrink animate-fade-in"
            id="header-logo"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1p-fKl_g2Z1t3eJcvTsUU02Yy3vKWLyLF" 
              alt="형제산업기공 로고" 
              className="h-[40px] sm:h-[46px] lg:h-[50px] w-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== '/images/logo/hyungje-logo-header.png') {
                  target.src = '/images/logo/hyungje-logo-header.png';
                }
              }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 shrink-0 font-sans" id="desktop-nav">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                // Determine active state based on current scroll position
                const isActive = activeSection === item.targetId && (
                  (item.id === 'about' && activeSection === 'about') ||
                  (item.id === 'capabilities' && activeSection === 'capabilities') ||
                  (item.id === 'equipment' && activeSection === 'equipment') ||
                  (item.id === 'inquiry' && activeSection === 'inquiry')
                );
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleItemClick(item.targetId)}
                      className={`text-sm lg:text-[15px] font-bold transition-all relative py-1.5 cursor-pointer text-[#071A2B] group ${
                        isActive ? 'font-black text-[#071A2B]' : 'hover:text-[#071A2B]'
                      }`}
                    >
                      {language === 'kr' ? item.nameKR : item.nameEN}
                      <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#071A2B] rounded-full transition-transform duration-200 origin-center ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Quick Inquiry and Language Selection (Concept C Alignment) */}
            <div className="flex items-center gap-5 pl-5 border-l border-gray-200">
              {/* Inquiry Button (Premium Dark Navy) */}
              <button
                onClick={() => handleItemClick('inquiry')}
                className="bg-[#071A2B] text-white hover:bg-[#123B5D] text-xs font-black px-5 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer hover:shadow-md active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{language === 'kr' ? '문의하기' : 'Inquiry'}</span>
                <ArrowRight size={13} />
              </button>

              {/* Language Switcher Text-based Toggle (Concept C board) */}
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#071A2B] whitespace-nowrap">
                <button
                  onClick={() => setLanguage('kr')}
                  className={`transition-colors py-1 px-1 cursor-pointer ${
                    language === 'kr' ? 'text-[#071A2B] font-black border-b-2 border-[#071A2B]' : 'text-slate-400 hover:text-[#071A2B]'
                  }`}
                >
                  KR
                </button>
                <span className="text-slate-300 select-none font-normal">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`transition-colors py-1 px-1 cursor-pointer ${
                    language === 'en' ? 'text-[#071A2B] font-black border-b-2 border-[#071A2B]' : 'text-slate-400 hover:text-[#071A2B]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>

          {/* Fallback Nav for medium desktops (lg screen) that are not xl yet */}
          <nav className="hidden md:flex xl:hidden items-center gap-5 shrink-0 font-sans">
            <ul className="flex items-center gap-4.5">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.targetId)}
                    className="text-xs sm:text-sm font-bold text-[#071A2B] hover:text-[#123B5D] cursor-pointer"
                  >
                    {language === 'kr' ? item.nameKR : item.nameEN}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
              <button
                onClick={() => handleItemClick('inquiry')}
                className="bg-[#071A2B] text-white hover:bg-[#123B5D] text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1 cursor-pointer whitespace-nowrap"
              >
                <span>{language === 'kr' ? '문의하기' : 'Inquiry'}</span>
              </button>
              
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#071A2B] whitespace-nowrap">
                <button
                  onClick={() => setLanguage('kr')}
                  className={`py-0.5 px-1 ${language === 'kr' ? 'text-[#071A2B] font-black' : 'text-slate-400'}`}
                >
                  KR
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`py-0.5 px-1 ${language === 'en' ? 'text-[#071A2B] font-black' : 'text-slate-400'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button with Toggle inside */}
          <div className="flex md:hidden items-center gap-3 shrink-0">
            {/* KR/EN switcher on mobile header */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#071A2B] whitespace-nowrap">
              <button
                onClick={() => setLanguage('kr')}
                className={`py-1 px-1.5 ${language === 'kr' ? 'text-[#071A2B] font-black underline' : 'text-slate-400'}`}
              >
                KR
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`py-1 px-1.5 ${language === 'en' ? 'text-[#071A2B] font-black underline' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[#071A2B] bg-white rounded-xl border border-gray-200 shrink-0 cursor-pointer shadow-sm"
              id="mobile-menu-toggle"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-5 px-5 shadow-xl flex flex-col gap-5 animate-fade-in"
        >
          <ul className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.targetId)}
                    className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-slate-50 text-[#071A2B] border-l-4 border-[#071A2B]'
                        : 'text-[#071A2B] hover:bg-slate-50'
                    }`}
                  >
                    {language === 'kr' ? item.nameKR : item.nameEN}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
            <button
              onClick={() => handleItemClick('inquiry')}
              className="w-full bg-[#071A2B] text-white hover:bg-[#123B5D] font-black py-3.5 rounded-xl text-sm transition-all text-center shadow-md whitespace-nowrap"
            >
              {language === 'kr' ? '간편 온라인 견적 문의' : 'Online Inquiry Request'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

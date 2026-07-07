import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Target, Settings2, ShieldCheck, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  language: 'kr' | 'en';
}

export default function Hero({ onNavigate, language }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  const slides = [
    {
      url: 'https://lh3.googleusercontent.com/d/1sHVXnlqQZGOrTbYbStYv0FSCWoK7nt9n',
      label: 'PRESS STAMPING DIES',
    },
    {
      url: 'https://lh3.googleusercontent.com/d/1ZLwo4PrFVvQd5pDuFFNcI8W5Wt1PcYJG',
      label: 'PRECISION MOLD RACKS',
    },
    {
      url: 'https://lh3.googleusercontent.com/d/1xwma1A37Uts_KlCOPtyehV_FA8wjuiGq',
      label: 'HIGH-SPEED PRESS FEEDERS',
    },
    {
      url: 'https://lh3.googleusercontent.com/d/1WnX6podJauMABXFYlTcsSo8TgzF-vf7o',
      label: 'FABRICATION MACHINERY',
    }
  ];

  const titles = [
    {
      kr: { line1: "정밀한 기술로", line2: "더 높은 가치를 만듭니다." },
      en: { line1: "Creating Greater Value", line2: "with Precision Technology." }
    },
    {
      kr: { line1: "정밀 금형부터 프레스 가공까지,", line2: "현장에서 직접 완성합니다." },
      en: { line1: "From Precision Molds to Pressing,", line2: "Completed Directly on Site." }
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds interval for background images
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % 2);
    }, 4500); // 4.5 seconds interval for rotating copy
    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-[#071A2B] overflow-hidden mt-[80px]"
    >
      {/* 1. Background Slider Container (100% Width & Cover) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].url}
              alt={slides[currentSlide].label}
              className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Premium Left Overlay Gradients */}
      {/* Desktop Left-to-Right Fade */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[60%] pointer-events-none z-10 hidden md:block" 
        style={{
          background: 'linear-gradient(90deg, rgba(7,26,43,0.97) 0%, rgba(7,26,43,0.92) 35%, rgba(7,26,43,0.60) 65%, rgba(7,26,43,0) 100%)'
        }}
      />
      {/* Mobile Dark Ambient Tint over busy images */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 block md:hidden" 
        style={{
          background: 'linear-gradient(180deg, rgba(7,26,43,0.96) 0%, rgba(7,26,43,0.88) 60%, rgba(7,26,43,0.80) 100%)'
        }}
      />

      {/* 3. Content Frame */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-20 flex items-center min-h-[580px] sm:min-h-[620px] lg:min-h-[540px] xl:min-h-[560px] py-12 md:py-0">
        <div className="max-w-2xl text-left space-y-5 sm:space-y-6">
          
          {/* Label Tag */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-white/50 tracking-widest text-[10px] sm:text-xs font-black uppercase font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
            <span>PRESS MOLD &amp; METAL STAMPING</span>
          </motion.div>

          {/* Main Title Copy Container with absolute height stability */}
          <div className="min-h-[95px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[115px] xl:min-h-[130px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`${language}-${titleIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="text-2xl sm:text-4xl md:text-[38px] lg:text-[42px] xl:text-[46px] font-black text-white tracking-tight leading-[1.2] sm:leading-[1.18] font-sans text-left w-full"
                style={{ wordBreak: 'keep-all', overflowWrap: 'break-word', whiteSpace: 'normal' }}
              >
                {language === 'kr' ? (
                  <span className="flex flex-col gap-1 sm:gap-2">
                    <span className="block whitespace-nowrap sm:whitespace-normal">{titles[titleIndex].kr.line1}</span>
                    <span className="block text-white whitespace-nowrap sm:whitespace-normal">{titles[titleIndex].kr.line2}</span>
                  </span>
                ) : (
                  <span className="flex flex-col gap-1 sm:gap-2">
                    <span className="block">{titles[titleIndex].en.line1}</span>
                    <span className="block text-white">{titles[titleIndex].en.line2}</span>
                  </span>
                )}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Tagline & Subtitles */}
          <motion.div
            key={`sub-${language}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 text-white/80 font-bold text-xs sm:text-sm">
              <span className="w-4 h-[1px] bg-white/40" />
              <span>We build value with precision and trust.</span>
            </div>

            {/* Main Paragraph Description */}
            <p 
              className="text-white/70 text-xs sm:text-[14px] leading-relaxed font-normal max-w-xl"
              style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
            >
              {language === 'kr' 
                ? '형제산업기공은 프레스 금형 설계·제작, 금속 프레스 가공, 기존 금형 수정 및 유지보수, 열처리·도금 후처리까지 제품 생산에 필요한 공정을 책임 있게 협의합니다.'
                : 'Hyungje Industrial Engineering supports press mold design and fabrication, metal stamping, mold modification and maintenance, and post-processing coordination including heat treatment and plating.'
              }
            </p>
          </motion.div>

          {/* Manufacturer Style Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {/* Primary - Inquiry */}
            <button
              onClick={() => onNavigate('inquiry')}
              className="bg-white hover:bg-white/90 text-[#071A2B] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[6px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-98 whitespace-nowrap"
            >
              <span>{language === 'kr' ? '문의하기' : 'Inquiry'}</span>
              <ArrowRight size={14} />
            </button>

            {/* Secondary - Business */}
            <button
              onClick={() => onNavigate('capabilities')}
              className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[6px] transition-all border border-white/30 flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 whitespace-nowrap"
            >
              <Eye size={14} />
              <span>{language === 'kr' ? '사업영역 보기' : 'View Business'}</span>
            </button>

            {/* Secondary - Call support */}
            <a
              href="tel:01036037503"
              className="bg-white/5 hover:bg-white/10 text-white/95 font-medium text-xs sm:text-sm px-5 py-3.5 rounded-[6px] transition-all border border-white/20 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Phone size={13} />
              <span>{language === 'kr' ? '전화 상담' : 'Call'}</span>
            </a>
          </motion.div>

          {/* Subtle Key Points Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-white/10 w-full text-white/50 text-[11px] sm:text-xs font-bold"
          >
            <div className="flex items-center gap-1.5">
              <Target size={13} className="text-white/40 shrink-0" />
              <span>{language === 'kr' ? '품질 타당성 사전 협의' : 'Quality Evaluation'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Settings2 size={13} className="text-white/40 shrink-0" />
              <span>{language === 'kr' ? '신속 금형 수정·유지보수' : 'Rapid Mold Repair'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-white/40 shrink-0" />
              <span>{language === 'kr' ? '후공정 일괄 대응' : 'One-stop Processing'}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

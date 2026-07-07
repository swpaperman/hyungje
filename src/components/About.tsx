import React from 'react';
import { Shield, Hammer, RefreshCw, Check, Award, Layers, Cpu, Target } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

// Import CI images to ensure Vite bundles and hashes them correctly in production builds
// 이 이미지들은 public/images/logo 폴더에도 배포되어 fallback으로 쓰입니다.

interface AboutProps {
  language?: 'kr' | 'en';
}

export default function About({ language = 'kr' }: AboutProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = React.useState(0);

  const ciTabs = [
    {
      id: 0,
      labelKr: '심볼 구조',
      labelEn: 'Symbol Structure',
      imgUrl: 'https://lh3.googleusercontent.com/d/1hD9xp5XkmV18ahpVwzUNL-NJqxUV6B2v',
      fallbackUrl: '/images/logo/hyungje-ci-concept-c-2.png',
      altKr: '형제산업기공 컨셉 C 브랜드 심볼 분석 및 그리드',
      altEn: 'Hyungje Industrial Engineering Concept C Symbol Analysis and Grid',
    },
    {
      id: 1,
      labelKr: '적용 예시(세로)',
      labelEn: 'App (Vert.)',
      imgUrl: 'https://lh3.googleusercontent.com/d/1ql9gc0TP1xaU7HWGaDeNz2L3-tzYU9-q',
      fallbackUrl: '/images/logo/hyungje-ci-concept-c-3.png',
      altKr: '형제산업기공 컨셉 C 브랜드 적용 예시 (세로 명함/서식류)',
      altEn: 'Hyungje Industrial Engineering Concept C Applications (Vertical)',
    },
    {
      id: 2,
      labelKr: '적용 예시(가로)',
      labelEn: 'App (Horiz.)',
      imgUrl: 'https://lh3.googleusercontent.com/d/1bzrveGnK3qENvFLHRV9f0RHBjADJOORf',
      fallbackUrl: '/images/logo/hyungje-ci-concept-c-4.png',
      altKr: '형제산업기공 컨셉 C 브랜드 적용 예시 (가로 명함/서식류)',
      altEn: 'Hyungje Industrial Engineering Concept C Applications (Horizontal)',
    }
  ];

  const highlights = [
    {
      icon: Hammer,
      titleKR: '프레스 금형 설계 및 제작',
      titleEN: 'Press Die Engineering & Tooling',
      descKR: '고객이 제공한 제품 도면과 품질 조건을 바탕으로 최적의 프레스 금형을 직접 설계하고 현장에서 가공·제작합니다.',
      descEN: 'We design and build optimal press dies in-house based on client drawing specifications and strict quality requirements.',
      gradient: 'from-[#0F5A9E] to-[#1E40AF]',
      iconColor: 'text-[#0F5A9E]',
      tagKR: '정밀 설계',
      tagEN: 'Precision Tooling',
      tagBg: 'bg-blue-50/70 text-blue-700 border-blue-100/50',
      detailsKR: ['고속 머시닝센터 정밀가공', '3D CAD/CAM 최적화 설계', '현장 원스톱 시험사출 매칭'],
      detailsEN: ['High-Speed Machining Precision', '3D CAD/CAM Optimum Design', 'One-Stop In-House Press Tryout']
    },
    {
      icon: Shield,
      titleKR: '금속 프레스 제품 가공 및 양산',
      titleEN: 'Precision Metal Stamping',
      descKR: '단발 가공부터 연속 가공까지 체계적인 프레스 라인 설비를 활용하여 안정적인 규격과 합리적인 공수로 양산에 대응합니다.',
      descEN: 'From single-stage to continuous progressive stamping, our robust facilities deliver stable, cost-effective high-volume production.',
      gradient: 'from-emerald-600 to-teal-700',
      iconColor: 'text-emerald-600',
      tagKR: '안정 양산',
      tagEN: 'Mass Stamping',
      tagBg: 'bg-emerald-50/70 text-emerald-700 border-emerald-100/50',
      detailsKR: ['체계적 라인프레스 설비운용', '철저한 초·중·종물 한도 견본 검사', '가공 원자재 스크랩 최적 레이아웃'],
      detailsEN: ['Organized Line Press Fleet', 'First-Middle-Last Piece Inspections', 'Raw Material Scrap Reduction Design']
    },
    {
      icon: RefreshCw,
      titleKR: '기존 금형 신속 수정 및 유지보수',
      titleEN: 'Mold Repair & Maintenance',
      descKR: '생산 도중 발생하는 금형 마모, 파손에 대응하여 자체 가공 장비를 활용해 신속히 수정 타당성을 협의하고 보수 작업을 수행합니다.',
      descEN: 'We provide immediate diagnostic review and swift mold refurbishment using our in-house machining inventory to minimize downtime.',
      gradient: 'from-amber-500 to-orange-600',
      iconColor: 'text-amber-600',
      tagKR: '신속 정비',
      tagEN: 'Tool Refurb',
      tagBg: 'bg-amber-50/70 text-amber-700 border-amber-100/50',
      detailsKR: ['금형 마모부 즉각적 보수 가공', '가공 형상 수정 및 유연한 설계변경', '생산 다운타임 단축 및 금형수명 개선'],
      detailsEN: ['Immediate Weld & Remachine Repairs', 'Flexible Profile Revision Support', 'Downtime Minimization & Lifespan Upgrade']
    }
  ];

  const brandIdentityContent = {
    kr: {
      sectionTitle: '브랜드 아이덴티티',
      sectionSub: 'BRAND IDENTITY',
      mainTitle: '정밀한 구조와 신뢰를 담은 형제산업기공의 상징',
      descParagraphs: [
        '형제산업기공의 CI는 금형의 정밀한 구조, 프레스 장비의 견고한 프레임, 그리고 중심을 맞추는 정밀 정렬의 이미지를 하나의 심볼로 표현했습니다.',
        '진한 네이비 컬러는 제조업의 신뢰와 책임감을 나타내며, 중앙의 메탈릭 실버 구조는 금속 소재와 정밀 가공 기술을 상징합니다.',
        '형제산업기공은 이 상징처럼 고객의 도면과 요구조건을 정확하게 검토하고, 금형 제작부터 프레스 가공, 후처리 공정 협의까지 책임 있는 제조 파트너가 되는 것을 지향합니다.'
      ],
      cards: [
        {
          icon: <Layers className="w-5 h-5 text-[#071A2B]" />,
          title: '금형의 정밀 구조',
          desc: '상하로 맞물리는 금형의 구조를 모티브로 하여 제품 형상과 생산조건을 정확하게 구현하는 기술력을 표현합니다.'
        },
        {
          icon: <Cpu className="w-5 h-5 text-[#071A2B]" />,
          title: '프레스의 견고한 프레임',
          desc: '강한 압력과 반복 생산을 견디는 프레스 설비의 안정성을 시각화하여 제조 현장의 신뢰감을 담았습니다.'
        },
        {
          icon: <Target className="w-5 h-5 text-[#071A2B]" />,
          title: '중심 정렬과 가공 정확성',
          desc: '중앙의 정렬 축은 금형 제작과 프레스 가공에서 중요한 기준점, 균형, 정밀도를 상징합니다.'
        }
      ]
    },
    en: {
      sectionTitle: 'Brand Identity',
      sectionSub: 'BRAND IDENTITY',
      mainTitle: 'A Symbol of Precision, Structure, and Trust',
      descParagraphs: [
        'The CI of Hyungje Industrial Engineering represents the precise structure of press molds, the robust frame of press equipment, and the alignment required for accurate manufacturing.',
        'The deep navy color expresses trust and responsibility in manufacturing, while the metallic silver core symbolizes metal materials and precision processing.',
        'Like this symbol, Hyungje Industrial Engineering aims to be a reliable manufacturing partner, supporting customers from drawing review and mold fabrication to metal stamping and post-processing coordination.'
      ],
      cards: [
        {
          icon: <Layers className="w-5 h-5 text-[#071A2B]" />,
          title: 'Precise Mold Structure',
          desc: 'Inspired by the structure of upper and lower dies, the symbol reflects the ability to translate product requirements into practical manufacturing conditions.'
        },
        {
          icon: <Cpu className="w-5 h-5 text-[#071A2B]" />,
          title: 'Robust Press Frame',
          desc: 'The strong outer form represents the stability of press equipment and the reliability required in repeated production.'
        },
        {
          icon: <Target className="w-5 h-5 text-[#071A2B]" />,
          title: 'Precision Alignment',
          desc: 'The central axis symbolizes balance, reference points, and accuracy in mold making and metal stamping.'
        }
      ]
    }
  };

  const bi = brandIdentityContent[language];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* Concept C Watermark/Symbol Background (Low Opacity 0.02) */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] pointer-events-none opacity-[0.02] select-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
          <path d="M123,55 C123,55 123,115 123,125 C123,135 115,145 100,145 C85,145 77,135 77,125 L77,105 L99,105 L99,123 C99,127 101,129 104,129 C107,129 110,127 110,123 L110,55 Z" fill="#071A2B" />
          <rect x="55" y="55" width="22" height="90" rx="4" fill="#071A2B" />
          <rect x="77" y="80" width="46" height="15" fill="#071A2B" />
          <circle cx="100" cy="100" r="32" fill="none" stroke="#071A2B" strokeWidth="4" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* 1. 회사소개 본문 */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-5 md:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-8 bg-blue-600" />
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest font-mono">
                  {language === 'kr' ? '회사소개' : 'About Us'}
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight break-keep" style={{ wordBreak: 'keep-all' }}>
                {language === 'kr' ? (
                  <>
                    도면 검토부터 현장 가공까지 <br className="hidden md:block" />
                    실질적인 솔루션을 약속합니다
                  </>
                ) : (
                  <>
                    From Engineering Drawings to Machine Shop <br className="hidden md:block" />
                    We Deliver Real, Practical Manufacturing Solutions
                  </>
                )}
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light break-keep" style={{ wordBreak: 'keep-all' }}>
                <p className="font-normal text-slate-900">
                  {language === 'kr' 
                    ? '형제산업기공은 경기도 화성시 양감면에서 활동중인 금형 및 금속가공 전문 제조기업입니다.'
                    : 'Hyungje Industrial Engineering is a specialized tool & die and metal manufacturing company based in Yanggam-myeon, Hwaseong-si, Gyeonggi-do.'
                  }
                </p>
                <p>
                  {language === 'kr'
                    ? '프레스 금형의 설계와 제작, 시험가공, 금속 프레스 가공, 기존 금형의 수정과 유지보수까지 생산 현장에서 요구되는 실질적인 업무에 대응하고 있습니다.'
                    : 'We support practical shop-floor operations, spanning progressive/transfer press mold design, high-precision stamping production, and rapid mechanical repairs.'
                  }
                </p>
                <p>
                  {language === 'kr'
                    ? '고객이 제공한 도면과 제품 조건을 검토하고, 실제 생산 과정에서 필요한 수정사항과 가공조건을 함께 협의하여 안정적인 제품 생산으로 연결하는 것을 중요하게 생각합니다.'
                    : 'We meticulously review engineering layouts and production parameters together with clients to secure flawless, reproducible outcomes.'
                  }
                </p>
              </div>

              {/* Bullets */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-left">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">
                    {language === 'kr' ? '프레스 금형 설계·제작' : 'Press Die Tooling'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">
                    {language === 'kr' ? '정밀 금속 프레스 가공' : 'Precision Stamping'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">
                    {language === 'kr' ? '금형 신속 수정 및 유지보수' : 'Mold Repair'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">
                    {language === 'kr' ? '열처리·표면처리 후가공 협업' : 'Post-processing Service'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-video lg:aspect-auto lg:h-[350px] group">
                <img
                  src="https://lh3.googleusercontent.com/d/1kKaSBAZ-31jOXr0_nNWKDt6sfkf4384n"
                  alt="형제산업기공 프레스 금형 제작 및 보관 영역"
                  className="w-full h-full object-cover filter contrast-[1.03] saturate-[1.05] brightness-[0.98] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-[1.02] group-hover:contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-xs bg-slate-900/80 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-slate-700/50">
                  <Award size={14} className="text-blue-400" />
                  <span>{language === 'kr' ? '체계적인 금형 보관 및 정비 인프라' : 'Calibrated Tool Storage Infrastructure'}</span>
                </div>
              </div>

              {/* Quick Summary Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                  {language === 'kr' ? '핵심 파트너십 가치' : 'Our Core Partnership Value'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light break-keep" style={{ wordBreak: 'keep-all' }}>
                  {language === 'kr'
                    ? '우리는 도면 그대로만 기계적으로 깎아내는 납품에 그치지 않습니다. 프레스 성형성 향상, 원자재 스크랩 최소화, 치수 안정성을 위해 양산 가공 전에 선제적으로 가공조건을 긴밀히 상담하고 설계 타당성을 제공합니다.'
                    : 'We go beyond mechanical processing. We actively collaborate with client engineers to suggest cost-saving improvements, scrap-metal minimization, and superior dimensional tolerances.'
                  }
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. 브랜드 아이덴티티 섹션 (Brand Identity Section) */}
      <div className="bg-[#F8FAFC] border-y border-slate-200/60 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 lg:px-10 relative z-10">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-12"
          >
            {/* Header portion */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-8 bg-[#071A2B]" />
                <span className="text-[#071A2B] font-bold text-xs uppercase tracking-widest font-mono">
                  {bi.sectionSub}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {bi.sectionTitle}
              </h2>
            </div>

            {/* Layout layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column (Content & Cards) */}
              <div className="lg:col-span-7 flex flex-col space-y-8">
                
                {/* 1. Title & description (Always first on both Mobile and PC) */}
                <div className="space-y-6 order-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#071A2B] tracking-tight break-keep" style={{ wordBreak: 'keep-all' }}>
                    {bi.mainTitle}
                  </h3>
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed break-keep" style={{ wordBreak: 'keep-all' }}>
                    {bi.descParagraphs.map((p, idx) => (
                      <p key={idx} className={idx === 0 ? "font-medium text-slate-800" : "font-light"}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 2. CI Image (Visible ONLY on mobile here, placed in sequential order-2) */}
                <div className="order-2 block lg:hidden my-6 space-y-4">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-center aspect-[4/3] max-w-lg mx-auto">
                    <img 
                      src={ciTabs[activeTab].imgUrl}
                      alt={language === 'kr' ? ciTabs[activeTab].altKr : ciTabs[activeTab].altEn}
                      className="w-full h-full object-contain filter brightness-[1.01]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const fallback = ciTabs[activeTab].fallbackUrl;
                        if (fallback && target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                    />
                  </div>
                  {/* Tabs Selector on Mobile */}
                  <div className="grid grid-cols-3 gap-1.5 max-w-lg mx-auto">
                    {ciTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-1.5 px-1 rounded-lg border text-[10px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'bg-[#071A2B] text-white border-[#071A2B] shadow-sm'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {language === 'kr' ? tab.labelKr : tab.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Cards (Order-3 on mobile, fits naturally below descriptions/image) */}
                <div className="order-3 space-y-4 pt-4 border-t border-slate-200/40">
                  <div className="grid sm:grid-cols-3 gap-4">
                    {bi.cards.map((card, idx) => (
                      <div 
                        key={idx}
                        className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-slate-300 hover:border-t-4 hover:border-t-[#071A2B] transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.01)] group text-left"
                      >
                        <div className="w-9 h-9 bg-slate-50 rounded-lg flex items-center justify-center mb-4 border border-slate-100 group-hover:bg-[#071A2B]/5 transition-colors">
                          {card.icon}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-[#071A2B] transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-light break-keep" style={{ wordBreak: 'keep-all' }}>
                          {card.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (CI Image Slider - Visible ONLY on PC/Large Screen) */}
              <div className="lg:col-span-5 hidden lg:flex flex-col space-y-4 self-center w-full">
                <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center justify-center aspect-[4/3] w-full">
                  <img 
                    src={ciTabs[activeTab].imgUrl}
                    alt={language === 'kr' ? ciTabs[activeTab].altKr : ciTabs[activeTab].altEn}
                    className="w-full h-full object-contain filter brightness-[1.01]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const fallback = ciTabs[activeTab].fallbackUrl;
                      if (fallback && target.src !== fallback) {
                        target.src = fallback;
                      }
                    }}
                  />
                </div>
                {/* Tabs Selector on Desktop */}
                <div className="grid grid-cols-3 gap-2 w-full">
                  {ciTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 rounded-xl border text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-[#071A2B] text-white border-[#071A2B] shadow-md scale-[1.02]'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      {language === 'kr' ? tab.labelKr : tab.labelEn}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. 핵심 가치 또는 사업영역 (기존 Highlights) */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-5 md:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-blue-600" />
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest font-mono">
                {language === 'kr' ? '핵심 가치' : 'Core Values'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {language === 'kr' ? '형제산업기공이 추구하는 세 가지 가치' : 'Three Core Values We Pursue'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {highlights.map((highlight, idx) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-slate-100/80 hover:border-transparent hover:bg-white hover:shadow-[0_20px_50px_rgba(7,26,43,0.06)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Subtle top color bar accent */}
                  <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${highlight.gradient} opacity-80 group-hover:h-[4px] transition-all`} />

                  {/* Large decorative background number */}
                  <div className="absolute top-6 right-8 text-4xl font-extrabold font-mono text-slate-100/60 group-hover:text-slate-200/30 transition-colors pointer-events-none select-none">
                    0{idx + 1}
                  </div>

                  {/* Icon Container with glowing aura */}
                  <div className="relative mb-6 inline-block">
                    {/* Glowing aura under icon */}
                    <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-15 blur-md transition-all duration-500 group-hover:scale-110`} />
                    
                    {/* Icon base box */}
                    <div className="relative w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#071a2b] group-hover:to-[#1e293b] shadow-sm">
                      <IconComponent className={`w-6 h-6 ${highlight.iconColor} group-hover:text-white transition-colors duration-500`} />
                    </div>
                  </div>

                  {/* Badge */}
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-3 border ${highlight.tagBg}`}>
                      {language === 'kr' ? highlight.tagKR : highlight.tagEN}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-black text-slate-900 mb-2.5 group-hover:text-blue-900 transition-colors">
                    {language === 'kr' ? highlight.titleKR : highlight.titleEN}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-light mb-6 min-h-[64px] break-keep" style={{ wordBreak: 'keep-all' }}>
                    {language === 'kr' ? highlight.descKR : highlight.descEN}
                  </p>

                  {/* Checklist (Core tasks) */}
                  <div className="pt-5 border-t border-slate-100/80 space-y-2.5">
                    {(language === 'kr' ? highlight.detailsKR : highlight.detailsEN).map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${highlight.gradient}`} />
                        <span className="text-slate-500 group-hover:text-slate-700 transition-colors text-xs font-semibold">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

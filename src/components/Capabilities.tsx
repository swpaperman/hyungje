import React, { useState } from 'react';
import { CAPABILITIES } from '../data/capabilities';
import { CheckCircle2, Cpu, Wrench, Layers, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CapabilitiesProps {
  language?: 'kr' | 'en';
}

export default function Capabilities({ language = 'kr' }: CapabilitiesProps) {
  const [activeTab, setActiveTab] = useState('die');

  const selectedCap = CAPABILITIES.find((c) => c.id === activeTab) || CAPABILITIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'die':
        return <Wrench size={18} />;
      case 'press':
        return <Cpu size={18} />;
      case 'heat':
        return <Layers size={18} />;
      case 'finish':
        return <Settings size={18} />;
      default:
        return <Settings size={18} />;
    }
  };

  // English descriptions mapping for capabilities data
  const enTranslations: Record<string, {
    title: string;
    description: string;
    details: string[];
    specs: { label: string; value: string; }[];
  }> = {
    die: {
      title: 'Press Die Engineering & Tooling',
      description: 'From CAD/CAM precision layout engineering to in-house testing (T1) and sampling, we establish an integrated mold fabrication chain optimized for reliable production.',
      details: [
        '2D/3D engineering analysis and modeling using modern CAD systems',
        'Single-stage and continuous progressive die layout optimization',
        'In-house high-precision milling, CNC machining, and EDM wire-cutting',
        'High-alloy tool steel sourcing and premium surface lapping for long tool life',
        'Pre-validation of dimensional accuracy via robust T1 sampling trials'
      ],
      specs: [
        { label: 'Engineering Support', value: '3D/2D CAD Review & Custom Modeling' },
        { label: 'Tooling Category', value: 'Progressive, Single-Stage, Transfer' },
        { label: 'Maintenance Service', value: 'Rapid Tooling Overhaul & Refurbishing' },
        { label: 'Quality Consulting', value: 'Manufacturing Feasibility Counseling' }
      ]
    },
    press: {
      title: 'Precision Metal Stamping',
      description: 'Leveraging our robust line of mechanical stamping presses, we support continuous high-speed mass production for electronic components, home appliances, and custom structural hardware.',
      details: [
        'Versatile sheet metal punching, blanking, and multi-axis forming',
        'Stamping SPCC/SPHC carbon steels, stainless steel (SUS), brass, and aluminum',
        'Automated strip-feeders and uncoilers synchronized for progressive runs',
        'Real-time press monitoring and misalignment sensor safety systems',
        'Rigid physical inspection against blueprints and master golden-samples'
      ],
      specs: [
        { label: 'Press Production Line', value: 'Mechanical & Progressive Stamping' },
        { label: 'Stamping Capabilities', value: 'Custom Piercing, Blanking, and Bending' },
        { label: 'Key Manufactured Parts', value: 'Automotive Brackets, Electronic Terminals, etc.' },
        { label: 'Scheduling Adaptability', value: 'Highly Flexible Batch Size Adjustments' }
      ]
    },
    heat: {
      title: 'Technical Heat Treatment Integration',
      description: 'To optimize tensile strength, fatigue life, and surface wear resistance, we coordinate localized induction hardening (high-frequency heat treatment) and carburizing processes with accredited partner operations for complete product integrity.',
      details: [
        'Carburizing and quenching to maximize surface hardness while retaining core toughness',
        'Induction hardening for selective, localized wear-resistance',
        'Gas nitriding to improve chemical corrosion and sliding-wear resistance',
        'Annealing to relieve residual forming stresses and secure geometry stability',
        'Hardness testing reports (Rockwell & Vickers scale) and depth verification'
      ],
      specs: [
        { label: 'Hardening Categories', value: 'Carburizing, Induction, Nitriding, Annealing' },
        { label: 'Compatible Materials', value: 'S45C, S50C Carbon Steels, Alloy Steels, Spring Steels' },
        { label: 'Quality Assurance', value: 'Vickers/Rockwell Microhardness Auditing' },
        { label: 'Documentation Support', value: 'Full Processing Logs & Certification' }
      ]
    },
    finish: {
      title: 'Plating & Surface Finishing',
      description: 'We execute post-processing steps including electro-zinc plating, deburring, and high-efficiency chemical cleaning to deliver clean, ready-to-assemble final products.',
      details: [
        'Electro-zinc plating (white trivalent chromate, etc.) for high corrosion resistance',
        'Tin plating and copper flashing to enhance electrical conductivity and solderability',
        'Decorative and functional nickel/chrome coating services',
        'Efficient barrel tumbling and ultrasonic washing to deburr sharp edges',
        'Compliance with environmental standards and global RoHS regulations'
      ],
      specs: [
        { label: 'Finishing Techniques', value: 'Zinc Plating, Nickel, Tin, Chemical Film' },
        { label: 'Regulatory Alignment', value: '100% RoHS Directive Compliant' },
        { label: 'Rust Protection Audit', value: 'Salt Spray Resistance consultation' },
        { label: 'Pre-treatment Stage', value: 'Vibratory Deburring & Alkaline Degreasing' }
      ]
    }
  };

  const getTitle = () => {
    if (language === 'kr') {
      return selectedCap.title;
    }
    return enTranslations[activeTab]?.title || selectedCap.engTitle;
  };

  const getDescription = () => {
    if (language === 'kr') {
      return selectedCap.description;
    }
    return enTranslations[activeTab]?.description || selectedCap.description;
  };

  const getDetails = () => {
    if (language === 'kr') {
      return selectedCap.details;
    }
    return enTranslations[activeTab]?.details || selectedCap.details;
  };

  const getSpecs = () => {
    if (language === 'kr') {
      return selectedCap.specs;
    }
    return enTranslations[activeTab]?.specs || selectedCap.specs;
  };

  return (
    <section id="capabilities" className="py-16 md:py-24 lg:py-32 bg-[#F5F7FA] text-slate-900 relative overflow-hidden">
      {/* Background elegant blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 lg:px-10 relative z-10"
      >
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-blue-600" />
            <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest font-tech">Engineering &amp; Production</span>
            <span className="h-0.5 w-6 bg-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 break-keep">
            {language === 'kr' ? '금형 설계부터 출하까지 일괄 생산 체인' : 'One-Stop Manufacturing: From Design to Shipment'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium break-keep" style={{ wordBreak: 'keep-all' }}>
            {language === 'kr' 
              ? '외주 다단계 처리로 인한 일정 연장, 품질 분쟁, 물류 비용 상승 문제를 일원화하여 해결합니다. 설계 오차 검증 후 완벽히 세팅된 최상의 조건에서 양산이 진행됩니다.'
              : 'We mitigate scheduling bottlenecks, quality disputes, and logistics overheads by unifying tool engineering and production. Mass production starts only after perfect layout verification.'
            }
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-col lg:flex-row gap-12 items-start" id="capabilities-tabs text-left">
          
          {/* Tab buttons column */}
          <div className="w-full lg:w-1/3 grid grid-cols-2 lg:flex lg:flex-col gap-2.5 shrink-0 text-left">
            {CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`relative flex items-center gap-2 sm:gap-3.5 w-full text-left py-3 px-3 sm:py-4 sm:px-5 rounded-xl transition-all duration-300 cursor-pointer whitespace-normal group overflow-hidden border-t-2 min-w-0 ${
                  activeTab === cap.id
                    ? 'border-t-blue-600 bg-white text-[#071A2B] font-extrabold shadow-sm border-x border-b border-gray-200'
                    : 'border-t-transparent bg-white/60 hover:bg-white text-slate-500 hover:text-slate-800 border-x border-b border-gray-150'
                }`}
              >
                <span className={`p-1.5 sm:p-2 rounded-lg transition-colors duration-300 shrink-0 ${activeTab === cap.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {getIcon(cap.id)}
                </span>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[11px] sm:text-xs md:text-sm font-bold leading-tight break-keep" style={{ wordBreak: 'keep-all' }}>
                    {language === 'kr' ? cap.title : enTranslations[cap.id]?.title}
                  </span>
                  <span className={`text-[10px] uppercase font-tech tracking-wider hidden sm:block truncate ${activeTab === cap.id ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
                    {cap.engTitle}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Detailed Display Screen */}
          <div className="w-full lg:w-2/3 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  
                  {/* Process details */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs text-blue-600 font-mono font-extrabold tracking-widest uppercase">
                        {selectedCap.engTitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 break-keep">
                        {getTitle()}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium break-keep" style={{ wordBreak: 'keep-all' }}>
                        {getDescription()}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {language === 'kr' ? '핵심 공정 관리 역량' : 'Key Engineering Strengths'}
                      </h4>
                      <ul className="space-y-2">
                        {getDetails().map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Photo Column */}
                  <div className="md:col-span-5 relative group rounded-2xl overflow-hidden shadow-md aspect-video md:aspect-square">
                    <img
                      src={selectedCap.imageUrl}
                      alt={selectedCap.title}
                      className="w-full h-full object-cover filter contrast-[1.03] saturate-[1.05] brightness-[0.98] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[1.02] group-hover:contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-700/30">
                      FACTORY WORKPLACE
                    </span>
                  </div>
                </div>

                {/* Specs / Standards Table */}
                {getSpecs() && (
                  <div className="border-t border-gray-150 pt-6 space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {language === 'kr' ? '품질 표준 및 가공 한도 사양 (Technical Specifications)' : 'Technical Specifications & Quality Standards'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      {getSpecs().map((spec, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-start sm:items-center p-5 sm:px-6 sm:py-5 bg-slate-50/80 border border-slate-200/60 rounded-2xl min-w-0 box-border max-w-full"
                        >
                          <span className="text-xs sm:text-[13px] text-slate-500 font-bold tracking-tight shrink-0">{spec.label}</span>
                          <span className="text-[13px] sm:text-sm text-slate-900 font-extrabold text-left sm:text-right min-w-0 break-keep leading-relaxed">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </motion.div>
    </section>
  );
}

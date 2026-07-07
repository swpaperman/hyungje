import React, { useState } from 'react';
import { EQUIPMENT_LIST } from '../data/equipment';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface EquipmentProps {
  language?: 'kr' | 'en';
}

export default function Equipment({ language = 'kr' }: EquipmentProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'press' | 'die' | 'measurement'>('all');

  const categories = [
    { id: 'all', nameKR: '전체 보기', nameEN: 'All Equipment' },
    { id: 'press', nameKR: '프레스 생산 설비', nameEN: 'Stamping Presses' },
    { id: 'die', nameKR: '금형 설계·제작 설비', nameEN: 'Tooling & Die Machining' },
    { id: 'measurement', nameKR: '정밀 측정·품질 장비', nameEN: 'Quality Instruments' },
  ];

  const filteredEquipment = EQUIPMENT_LIST.filter((eq) => {
    if (selectedCategory === 'all') return true;
    return eq.category === selectedCategory;
  });

  // Translation mapping for equipment item titles & specifications & features dynamically
  const equipmentTranslations: Record<string, {
    name: string;
    manufacturer: string;
    features: string[];
    categoryLabel: string;
  }> = {
    'p-large': {
      name: 'C-Frame Precision Crank Press (NC Feeder Integrated)',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Press Stamping',
      features: [
        'NC automatic uncoiler & high-speed feeder synchronization',
        'Specialized high-capacity progressive stamping production line',
        'Overload protector system ensuring safe tool and die operation'
      ]
    },
    'p-single': {
      name: 'C-Frame Precision Single Crank Press',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Press Stamping',
      features: [
        'High-precision sheet metal forming and structural blanking',
        'Automatic integration with coil leveler and air feeder',
        'Adaptive deep-draw forming capacity'
      ]
    },
    'p-double': {
      name: 'Mechanical Double Crank Press',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Press Stamping',
      features: [
        'Generous slide bed for progressive tooling layouts',
        'Photoelectric safety curtains and digital stroke counters',
        'High-speed precision bracket stamping'
      ]
    },
    'p-medium': {
      name: 'Precision Power Press',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Press Stamping',
      features: [
        'General-purpose precision bending and blanking operations',
        'Digital controller and high-speed mechanical clutch',
        'Quick die change support design'
      ]
    },
    'p-compact': {
      name: 'High-Speed Stamping Press',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Press Stamping',
      features: [
        'High-speed stamping for tiny electronic terminals',
        'Lubricated precision spindle bearings',
        'Smart safety sensors for mold collision prevention'
      ]
    },
    'd-cnc': {
      name: 'CNC Machining Center (MCT)',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Die Tooling',
      features: [
        'Direct high-speed pocket milling on die shoe plates',
        'Superior dimensional tolerances during roughing and finishing',
        'Heavy-duty cast bed ensuring maximum thermal stability'
      ]
    },
    'd-wire': {
      name: 'Precision Wire Cut EDM Machine',
      manufacturer: 'Precision Partner',
      categoryLabel: 'Die Tooling',
      features: [
        'Accurate wire cutting on ultra-hard carbides and tool steels',
        'Perfect slit and tiny punch-hole EDM capabilities',
        'Precision die-to-punch clearance control (micron level)'
      ]
    },
    'd-grind': {
      name: 'High-Precision Surface Grinder',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Die Tooling',
      features: [
        'Tight thickness control and parallel surface lapping',
        'Ultra-fine horizontal grind spindle layout',
        'Electro-magnetic chuck holding force adjustment'
      ]
    },
    'd-radial': {
      name: 'Radial Drilling Machine',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Die Tooling',
      features: [
        'Heavy-duty drilling on plate bases and structural bolsters',
        'High-torque feed gear configuration',
        'Safe multi-axis adjustable column head lock'
      ]
    },
    'd-lathe': {
      name: 'Precision Engine Lathe',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Die Tooling',
      features: [
        'Turning custom guide pins, bushings, and aligned dowel rods',
        'Excellent threading and taper cylindrical turning',
        'Rapid physical handwheel tuning'
      ]
    },
    'd-saw': {
      name: 'High-Speed Band Saw Machine',
      manufacturer: 'Domestic Manufacturer',
      categoryLabel: 'Die Tooling',
      features: [
        'Rough parting of raw tool steels and steel bars',
        'Semi-automatic mechanical hydraulic feed control',
        'Coolant recycling and chip-cleaning system'
      ]
    },
    'm-micro': {
      name: 'Digital Vernier Calipers & Micrometers',
      manufacturer: 'Mitutoyo / Premium Brand',
      categoryLabel: 'Metrology',
      features: [
        'Accurate verification of plate dimensions and punch offsets',
        'Regular certified metrology calibration for B2B audits',
        'Data-link logging for strict QA statistical charts'
      ]
    },
    'm-projector': {
      name: 'Optical Profile Projector',
      manufacturer: 'Precision Brand',
      categoryLabel: 'Metrology',
      features: [
        'Visual enlargement profiling of complex stamp parameters',
        'Non-contact magnification measurement for thin strips',
        'Angle and radius micro-inspection software'
      ]
    },
    'm-hardness': {
      name: 'Rockwell Hardness Tester',
      manufacturer: 'Precision Brand',
      categoryLabel: 'Metrology',
      features: [
        'Post-heat-treatment surface hardness confirmation',
        'Strict validation of punch and active die insert steels',
        'Accurate Rockwell HRC scaling values'
      ]
    }
  };

  return (
    <section id="equipment" className="py-16 md:py-24 lg:py-32 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Concept C Watermark/Symbol Background (Low Opacity 0.02) */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] pointer-events-none opacity-[0.015] select-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
          <path d="M123,55 C123,55 123,115 123,125 C123,135 115,145 100,145 C85,145 77,135 77,125 L77,105 L99,105 L99,123 C99,127 101,129 104,129 C107,129 110,127 110,123 L110,55 Z" fill="#071A2B" />
          <rect x="55" y="55" width="22" height="90" rx="4" fill="#071A2B" />
          <rect x="77" y="80" width="46" height="15" fill="#071A2B" />
          <circle cx="100" cy="100" r="32" fill="none" stroke="#071A2B" strokeWidth="4" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 lg:px-10 relative z-10"
      >
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 md:mb-12 text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-blue-600" />
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest font-tech">Industrial Equipment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none break-keep">
              {language === 'kr' ? '체계적인 금형 제작 및 프레스 가공 설비' : 'Robust Tooling & High-Precision Press Stamping Facilities'}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light break-keep" style={{ wordBreak: 'keep-all' }}>
              {language === 'kr' 
                ? '형제산업기공은 안정된 설계와 정교한 조율을 실현하는 금형 제작 기계들과 대량 연속 가공이 가능한 프레스 라인, 규격 검증용 정밀 품질 장비를 가동하고 있습니다.'
                : 'Hyungje Industrial Engineering operates vertical machining centers, EDM wire-cutting, high-tonnage progressive feed press lines, and professional metrology instruments.'
              }
            </p>
          </div>

          {/* Quick trust seal */}
          <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="text-emerald-600" size={22} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">{language === 'kr' ? '현장 보유 설비' : 'Active Shop Inventory'}</h4>
              <p className="text-[11px] text-slate-500">{language === 'kr' ? '화성시 양감면 현장 가동 설비' : 'Fully Operational, Hwaseong'}</p>
            </div>
          </div>
        </div>

        {/* 설비 가동 현장 사진 갤러리 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-video">
            <img 
              src="https://lh3.googleusercontent.com/d/1sHVXnlqQZGOrTbYbStYv0FSCWoK7nt9n" 
              alt="설비 현황 메인" 
              className="w-full h-full object-cover filter contrast-[1.03] saturate-[1.05] brightness-[0.98] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[1.02] group-hover:contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/85 via-[#071A2B]/35 to-transparent transition-opacity duration-300 group-hover:from-[#071A2B]/95" />
            <span className="absolute bottom-3 left-3 text-xs text-white font-medium bg-slate-900/85 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-slate-700/30">
              {language === 'kr' ? '설비 현황 메인' : 'Main Processing Area'}
            </span>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-video">
            <img 
              src="https://lh3.googleusercontent.com/d/1MYCPp8cmC7K1MtcP1Y9HMsHBMrcWnDk6" 
              alt="설비 갤러리" 
              className="w-full h-full object-cover filter contrast-[1.03] saturate-[1.05] brightness-[0.98] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[1.02] group-hover:contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/85 via-[#071A2B]/35 to-transparent transition-opacity duration-300 group-hover:from-[#071A2B]/95" />
            <span className="absolute bottom-3 left-3 text-xs text-white font-medium bg-slate-900/85 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-slate-700/30">
              {language === 'kr' ? '설비 가공 라인 전경' : 'Shop Floor Alignment'}
            </span>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-video">
            <img 
              src="https://lh3.googleusercontent.com/d/1ZLwo4PrFVvQd5pDuFFNcI8W5Wt1PcYJG" 
              alt="생산설비 갤러리" 
              className="w-full h-full object-cover filter contrast-[1.03] saturate-[1.05] brightness-[0.98] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[1.02] group-hover:contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/85 via-[#071A2B]/35 to-transparent transition-opacity duration-300 group-hover:from-[#071A2B]/95" />
            <span className="absolute bottom-3 left-3 text-xs text-white font-medium bg-slate-900/85 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-slate-700/30">
              {language === 'kr' ? '생산설비 가공 전경' : 'Machining Area Overview'}
            </span>
          </div>
        </div>

        {/* Categories Tab bar - Grid on mobile for no scrolling, Flex on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:items-center gap-2 md:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3 py-3 md:px-5 md:py-2.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-bold cursor-pointer transition-all flex items-center justify-center text-center break-keep min-h-[44px] whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
              style={{ wordBreak: 'keep-all' }}
            >
              {language === 'kr' ? cat.nameKR : cat.nameEN}
            </button>
          ))}
        </div>

        {/* Equipment grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredEquipment.map((eq) => {
            const translation = equipmentTranslations[eq.id];
            const name = language === 'kr' || !translation ? eq.name : translation.name;
            const categoryLabel = language === 'kr' || !translation ? (eq.category === 'press' ? '프레스 가공' : eq.category === 'die' ? '금형 제작' : '품질 검사') : translation.categoryLabel;
            const features = language === 'kr' || !translation ? eq.features : translation.features;
            const manufacturer = language === 'kr' || !translation ? eq.manufacturer : translation.manufacturer;

            return (
              <div
                key={eq.id}
                className="bg-white border border-slate-200/85 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Header label and quantity */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider font-tech ${
                      eq.category === 'press' 
                        ? 'bg-blue-50 text-blue-700' 
                        : eq.category === 'die' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {categoryLabel}
                    </span>
                    
                    <span className="text-xs font-bold text-slate-500 font-tech">
                      {language === 'kr' ? '수량: ' : 'Qty: '}<span className="text-blue-600 text-sm font-extrabold">{eq.quantity}{language === 'kr' ? '대' : ' Unit(s)'}</span>
                    </span>
                  </div>

                  {/* Name & manufacturer */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors break-keep">
                      {name}
                    </h3>
                    {manufacturer && (
                      <p className="text-xs text-slate-400 font-medium">
                        {language === 'kr' ? '구분: ' : 'Origin: '}{manufacturer}
                      </p>
                    )}
                  </div>

                  {/* Sub-specification */}
                  <p className="text-xs text-slate-500 font-mono bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    {eq.specification}
                  </p>

                  {/* Bullet details */}
                  <ul className="space-y-2 pt-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-tight break-keep" style={{ wordBreak: 'keep-all' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}

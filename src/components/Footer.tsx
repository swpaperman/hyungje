import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  language?: 'kr' | 'en';
}

export default function Footer({ onScrollToTop, language = 'kr' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-left" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-slate-900 items-start">
          
          {/* Brand block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
            {!logoError ? (
              <div className="bg-white px-4 py-2 rounded-lg inline-flex items-center justify-center shadow-sm">
                <img 
                  src="/images/logo/hyungje-logo-header.png" 
                  alt="형제산업기공" 
                  className="h-[32px] w-auto object-contain"
                  onError={() => setLogoError(true)}
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F5A9E] to-[#1E293B] flex items-center justify-center shadow-md shrink-0">
                  <span className="text-white font-extrabold text-xs tracking-tight font-sans">HJ</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-base font-black tracking-tight text-white leading-none">
                    형제산업기공
                  </span>
                  <span className="text-[8px] font-bold tracking-widest text-slate-400 uppercase mt-0.5 leading-none font-mono">
                    HYUNGJE CO.
                  </span>
                </div>
              </div>
            )}
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light max-w-sm">
              {language === 'kr'
                ? '경기도 화성시에 위치한 프레스 금형 설계·제작 및 금속 프레스 가공 전문 제조기업입니다. 현장에서 직접 검토하고 책임 생산하여 안정적인 가공 품질을 유지합니다.'
                : 'A specialized tool & die design engineering and high-precision metal press stamping manufacturing company based in Hwaseong-si, Gyeonggi-do, Republic of Korea.'
              }
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              {language === 'kr' ? '주요 사업 영역' : 'Core Business Segments'}
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>{language === 'kr' ? '프레스 금형 설계 및 제작' : 'Press Die Tooling & Engineering'}</li>
              <li>{language === 'kr' ? '금속 프레스 제품 가공' : 'Precision Metal Stamping'}</li>
              <li>{language === 'kr' ? '기존 금형 수정 및 유지보수' : 'Die Repair & Maintenance'}</li>
              <li>{language === 'kr' ? '금속 열처리 공정 솔루션 대응' : 'Heat Treatment Solutions'}</li>
              <li>{language === 'kr' ? '도금 및 표면처리 후처리 대응' : 'Plating & Finishing Operations'}</li>
              <li>{language === 'kr' ? '시제품 및 양산 가공 협의' : 'Prototyping & Volumetric Production'}</li>
            </ul>
          </div>

          {/* Quick info specs */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              {language === 'kr' ? '고객사 방문 및 미팅 창구' : 'B2B Client Consultation'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {language === 'kr'
                ? '경기도 화성시 양감면에 위치하고 있으며, 도로교통망 연계가 원활하여 방문 상담 및 생산 현물 검토가 용이합니다. 사전에 전화를 주시면 상세한 현장 안내와 도면 검토를 논의할 수 있습니다.'
                : 'Located in Hwaseong, Gyeonggi-do, our factory is conveniently connected to major expressways for efficient freight logistics and on-site tool reviews. Call us to schedule a plant tour.'
              }
            </p>
            <div className="text-xs text-slate-400 font-light font-tech">
              {language === 'kr' ? '상담 연락망: ' : 'Technical Support: '}<span className="text-white">010-3603-7503</span>
            </div>
          </div>

        </div>

        {/* Corporate specifications details */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] text-slate-500 leading-relaxed">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400">
              <span><strong>{language === 'kr' ? '상호명' : 'Company'}:</strong> {language === 'kr' ? '형제산업기공' : 'Hyungje Industrial Engineering'}</span>
              <span><strong>{language === 'kr' ? '대표자' : 'President'}:</strong> {language === 'kr' ? '김황휘' : 'Hwang-Hui Kim'}</span>
              <span><strong>{language === 'kr' ? '설립일' : 'Established'}:</strong> {language === 'kr' ? '2023년 7월 1일' : 'July 1, 2023'}</span>
              <span><strong>{language === 'kr' ? '사업자등록번호' : 'Business Registration ID'}:</strong> 364-68-00471</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500">
              <span><strong>{language === 'kr' ? '본사/공장' : 'Headquarters & Plant'}:</strong> {language === 'kr' ? '경기도 화성시 양감면 암소고개로 238' : '238, Amsogogae-ro, Yanggam-myeon, Hwaseong-si, Gyeonggi-do'}</span>
              <span><strong>{language === 'kr' ? '대표번호' : 'Direct Line'}:</strong> 010-3603-7503</span>
            </div>
            <p className="pt-2 text-[10px] text-slate-600">
              {language === 'kr'
                ? '※ 본 사이트상의 모든 가공 사양 및 현물 이미지는 권리를 보유하고 있으며 무단 복제 및 도용을 엄격히 금지합니다.'
                : '※ All drawings, specifications, photos, and assets on this site are legally protected against unauthorized replication or reuse.'
              }
            </p>
          </div>

          {/* Copyright and Top buttons */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <button
              onClick={onScrollToTop}
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer whitespace-nowrap"
              title={language === 'kr' ? '맨 위로 이동' : 'Back to Top'}
            >
              <span>{language === 'kr' ? '맨 위로' : 'Top'}</span>
              <ArrowUp size={12} />
            </button>
            <p className="font-tech text-slate-600 text-right text-[10px]">
              &copy; {currentYear} {language === 'kr' ? '형제산업기공' : 'Hyungje Industrial Engineering'}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

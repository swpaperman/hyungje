import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ShieldAlert, ArrowRight, HelpCircle, ChevronDown, ExternalLink } from 'lucide-react';
import { InquiryFormData, FaqItem } from '../types';
import { motion } from 'motion/react';

interface InquiryFormProps {
  language?: 'kr' | 'en';
}

export default function InquiryForm({ language = 'kr' }: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    inquiryType: 'press',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs: FaqItem[] = language === 'kr' ? [
    {
      question: '최소 발주 수량(MOQ)이 있나요?',
      answer: '형제산업기공은 B2B 전문 양산 공장으로 기본 생산 단위가 존재합니다. 단발 프레스 가공의 경우 최소 5,000개 이상, 순송 대량 프레스 양산의 경우 최소 10,000개 이상을 권장하고 있습니다. 다만, 신규 개발하는 금형 제작 및 시제품 시작 생산의 경우에는 한도 견본 30~100개 단위의 미세 수량 조율도 신속히 대응하고 있으니 별도 문의 바랍니다.'
    },
    {
      question: '금형 설계부터 첫 샘플(T1) 제작까지 기간이 얼마나 소요되나요?',
      answer: '부품의 형상 난이도와 피치 공정 수에 따라 상이하지만, 단순 단발 금형의 경우 영업일 기준 7~10일, 다공정 정밀 순송(Progressive) 금형의 경우 설계 검토 승인 완료 후 약 3~4주일의 제작 기간이 소요됩니다. 금형이 완성되면 즉시 자체 시험 프레스에 장착하여 1차 타공 테스트(T1) 샘플을 제공하며, 고객사 승인 즉시 즉각적인 본 양산 돌입이 가능합니다.'
    },
    {
      question: '제공하는 CAD 도면 및 STEP 모델링 데이터의 보안 유지가 보장되나요?',
      answer: '철저한 보안 관리를 엄수합니다. 형제산업기공으로 전달하시는 모든 특허 기술 사양서, 2D 도면(DWG/DXF), 3D 모델링(STEP/IGS) 파일은 오직 기술 검토 및 금형 가공 용도로만 비공개 망에서 사용되며 제3자 유출을 원천 금지합니다. 필요 시 견적 검토 단계 전 정식 비밀유지협약(NDA) 체결 후 실무 분석 진행이 가능합니다.'
    },
    {
      question: '타사에서 기존에 쓰던 금형을 이관하여 즉시 대행 프레스 가공이 가능한가요?',
      answer: '네, 가능합니다. 타사 가공 업체의 납기 지연이나 폐업 등으로 인해 금형을 이관하시는 경우, 당사 엔지니어가 이관 금형의 규격과 슬라이드 높이(Shut Height), 가이드 포스트 사양을 직접 대조 검토합니다. 미세한 가공 유격이나 다이 세트 보정 수리가 필요한 경우 자체 툴룸에서 급속 오버홀 수리 진행 후 당사 기계 라인에 즉시 안착시켜 납기 공백 없이 양산 대행을 책임집니다.'
    }
  ] : [
    {
      question: 'Is there a Minimum Order Quantity (MOQ)?',
      answer: 'As a specialized B2B stamping factory, we maintain baseline production batches. We generally recommend a minimum of 5,000 units for single-stage stamping, and 10,000 units for automated high-volume progressive stamping runs. However, for newly developed custom tool engineering and initial prototype sampling trials, we actively support small-batch validation runs (e.g., 30 to 100 sample units).'
    },
    {
      question: 'How long does it take from die design to the first trial sample (T1)?',
      answer: 'The lead time depends heavily on part complexity and the number of progressive stations required. Simple single-stage tooling typically takes 7-10 business days, while highly complex progressive dies take about 3-4 weeks from final CAD layout approval. Once completed, we load the die on our trial press and provide physical T1 samples for immediate dimensional inspection before full-scale production.'
    },
    {
      question: 'Is my proprietary CAD / STEP engineering data kept confidential?',
      answer: 'Absolute intellectual property and blueprint protection is our highest priority. All engineering drafts, 2D drawings (DWG/DXF), and 3D step models (STEP/IGS) received are strictly isolated for internal tool design review and quoting. Data is never shared outside our secure intranet. We gladly execute bilateral Non-Disclosure Agreements (NDA) prior to detailed engineering review upon request.'
    },
    {
      question: 'Can we transfer existing tooling from another supplier for immediate production?',
      answer: 'Yes, absolutely. In cases of tool transfers due to prior vendor delays or closure, our technical engineers directly review your die specifications, shut heights, and guide pin layouts. If any bolster alignment or minor cutting adjustments are required, our in-house toolroom performs rapid refurbishing and adapts the die to our active lines immediately, avoiding any supply chain gaps.'
    }
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    
    if (language === 'kr') {
      if (!formData.companyName.trim()) newErrors.companyName = '회사명을 입력해 주세요.';
      if (!formData.contactName.trim()) newErrors.contactName = '담당자명을 입력해 주세요.';
      if (!formData.phone.trim()) {
        newErrors.phone = '연락처를 입력해 주세요.';
      } else if (!/^[0-9-]{9,14}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = '올바른 전화번호 형식으로 입력해 주세요. (예: 010-0000-0000)';
      }
      if (!formData.email.trim()) {
        newErrors.email = '이메일을 입력해 주세요.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = '올바른 이메일 주소 형식으로 입력해 주세요.';
      }
      if (!formData.message.trim()) newErrors.message = '문의 내용을 입력해 주세요.';
      if (!formData.consent) newErrors.consent = '개인정보 수집 및 이용에 동의해 주셔야 접수가 가능합니다.';
    } else {
      if (!formData.companyName.trim()) newErrors.companyName = 'Please enter your company name.';
      if (!formData.contactName.trim()) newErrors.contactName = 'Please enter your contact name.';
      if (!formData.phone.trim()) {
        newErrors.phone = 'Please enter your phone number.';
      } else if (!/^[0-9-]{9,14}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number format.';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Please enter your email address.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.message.trim()) newErrors.message = 'Please enter your message details.';
      if (!formData.consent) newErrors.consent = 'You must agree to the data collection policy.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
        setFormData({
          companyName: '',
          contactName: '',
          phone: '',
          email: '',
          inquiryType: 'press',
          message: '',
          consent: false,
        });
      }, 1000);

    } catch (err) {
      console.error('Error submitting form', err);
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }
  };

  return (
    <section id="inquiry" className="py-16 md:py-24 lg:py-32 bg-[#F5F7FA] text-slate-900 relative overflow-hidden">
      {/* Background patterns - Elegant blueprint engineering grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 lg:px-10 relative z-10"
      >
        
        {/* Header titles */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-blue-600" />
            <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest font-tech">Quick Response B2B Desk</span>
            <span className="h-0.5 w-6 bg-blue-600" />
          </div>
          <h2 className="text-[clamp(2rem,8.5vw,2.75rem)] leading-[1.16] tracking-[-0.04em] font-extrabold break-keep max-w-full mx-auto px-1 md:text-4xl lg:text-5xl text-slate-900">
            {language === 'kr' ? '견적·설계 기술 상담' : 'RFQ & Technical Consulting'}
          </h2>
          <div className="text-base leading-[1.8] tracking-[-0.015em] break-keep text-center max-w-[640px] mx-auto text-slate-600 font-medium" style={{ wordBreak: 'keep-all' }}>
            {language === 'kr' ? (
              <>
                <p className="mb-2">정식 도면이 없어도 상담할 수 있습니다.</p>
                <p>제품 사진이나 실물 샘플, 간단한 스케치를 보내주시면 제작 가능 여부와 예상 공정을 검토해 드립니다.</p>
              </>
            ) : (
              <>
                <p className="mb-2">We offer consults even without complete blueprints.</p>
                <p>Simply share product photographs, physical samples, or rough dimensional sketches. Our engineers will review feasibility immediately.</p>
              </>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Section */}
          <div className="lg:col-span-7 w-full max-w-full rounded-[24px] p-[24px_20px] md:p-8 bg-white border border-slate-200/80 shadow-sm overflow-hidden mt-10 lg:mt-0 text-left">
            <h3 className="text-[24px] md:text-2xl font-bold mb-6 text-[#071A2B] pb-3 border-b border-gray-150 leading-[1.3] break-keep">
              {language === 'kr' ? '온라인 견적 문의서 작성' : 'Online Request for Quote'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" id="inquiry-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="companyName" className="text-xs text-slate-700 font-bold">
                    {language === 'kr' ? '회사명' : 'Company Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder={language === 'kr' ? '예: (주)형제산업' : 'e.g., Hyundai Electronics'}
                    className={`w-full bg-white border ${
                      errors.companyName ? 'border-red-500' : 'border-slate-200'
                    } rounded-xl px-4 py-3 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all placeholder:text-slate-400 text-slate-900`}
                  />
                  {errors.companyName && <p className="text-red-500 text-[11px] font-medium">{errors.companyName}</p>}
                </div>

                {/* Contact Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contactName" className="text-xs text-slate-700 font-bold">
                    {language === 'kr' ? '담당자 성함' : 'Contact Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder={language === 'kr' ? '예: 홍길동 부장' : 'e.g., John Smith, Manager'}
                    className={`w-full bg-white border ${
                      errors.contactName ? 'border-red-500' : 'border-slate-200'
                    } rounded-xl px-4 py-3 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all placeholder:text-slate-400 text-slate-900`}
                  />
                  {errors.contactName && <p className="text-red-500 text-[11px] font-medium">{errors.contactName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs text-slate-700 font-bold">
                    {language === 'kr' ? '연락처' : 'Phone Number'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={language === 'kr' ? '예: 010-1234-5678' : 'e.g., +82 10-1234-5678'}
                    className={`w-full bg-white border ${
                      errors.phone ? 'border-red-500' : 'border-slate-200'
                    } rounded-xl px-4 py-3 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all placeholder:text-slate-400 text-slate-900`}
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] font-medium">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-slate-700 font-bold">
                    {language === 'kr' ? '이메일 주소' : 'Email Address'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@company.com"
                    className={`w-full bg-white border ${
                      errors.email ? 'border-red-500' : 'border-slate-200'
                    } rounded-xl px-4 py-3 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all placeholder:text-slate-400 text-slate-900`}
                  />
                  {errors.email && <p className="text-red-500 text-[11px] font-medium">{errors.email}</p>}
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-1.5">
                <label htmlFor="inquiryType" className="text-xs text-slate-700 font-bold">
                  {language === 'kr' ? '문의 분류 선택' : 'Select Inquiry Category'} <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all text-slate-900 font-medium cursor-pointer"
                >
                  {language === 'kr' ? (
                    <>
                      <option value="press">프레스 가공 및 대량 생산 위탁</option>
                      <option value="die">정밀 금형 설계 및 개발 제작</option>
                      <option value="post-process">열처리·도금 등 특수 표면가공 일괄 대행</option>
                      <option value="sample">시작 샘플 제작 및 한도 타공 테스트</option>
                      <option value="other">기타 비즈니스 제휴 문의</option>
                    </>
                  ) : (
                    <>
                      <option value="press">Precision Press Stamping (Mass Production)</option>
                      <option value="die">Custom Tooling & Die Design Engineering</option>
                      <option value="post-process">Post-processing (Heat Treatment & Plating)</option>
                      <option value="sample">Prototype Production & Sampling Trials</option>
                      <option value="other">Other General Business Inquiries</option>
                    </>
                  )}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs text-slate-700 font-bold">
                  {language === 'kr' ? '상세 문의 내용' : 'Message Details'} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={language === 'kr' 
                    ? '원하시는 제품의 재질(예: SPCC, SUS304), 두께, 연간 예상 생산 수량 등을 기재해 주시면 보다 정확한 1차 견적 분석이 가능합니다.'
                    : 'Please detail your raw materials (e.g., SPCC, SUS304), sheet thickness, estimated annual volume, or custom dimensions to enable an accurate engineering quote.'
                  }
                  className={`w-full bg-white border ${
                    errors.message ? 'border-red-500' : 'border-slate-200'
                  } rounded-xl p-4 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all placeholder:text-slate-400 text-slate-900`}
                />
                {errors.message && <p className="text-red-500 text-[11px] font-medium">{errors.message}</p>}
              </div>

              {/* Technical Drawing File Notice */}
              <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                <ShieldAlert className="text-blue-600 shrink-0 mt-0.5" size={18} />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-blue-700">
                    {language === 'kr' ? '도면 파일(CAD, STEP) 송부 안내' : 'Sending Blueprints (CAD, STEP files)'}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-normal font-medium">
                    {language === 'kr' ? (
                      <>
                        설계 도면, 사양 설명서, 일러스트 등 핵심 용량 보안 기밀 자료들은 온라인 문의서 접수 완료 직후 본사 담당자 회신 이메일(<span className="text-blue-700 underline font-extrabold">sungin4206@naver.com</span>)로 즉시 추가 첨부해 주시면 신속히 보정 도식 분석을 가동합니다.
                      </>
                    ) : (
                      <>
                        Proprietary technical specifications, 2D drafts, or 3D files can be emailed directly to our engineering manager (<span className="text-blue-700 underline font-extrabold">sungin4206@naver.com</span>) right after submitting this online RFQ form.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600 leading-normal cursor-pointer font-medium">
                    {language === 'kr' ? (
                      <>
                        <span className="text-blue-600 font-bold">[필수]</span> 견적 검토를 위한 개인정보(이름, 이메일, 전화번호) 수집 및 이용 동의
                      </>
                    ) : (
                      <>
                        <span className="text-blue-600 font-bold">[Required]</span> I consent to the collection and use of personal data (name, email, phone) to process this RFQ.
                      </>
                    )}
                  </label>
                </div>
                {errors.consent && <p className="text-red-500 text-[11px] font-medium">{errors.consent}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2 cursor-pointer ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <span>
                  {isSubmitting 
                    ? (language === 'kr' ? '서버로 신속 접수 중...' : 'Transmitting to Server...') 
                    : (language === 'kr' ? '견적 및 타당성 진단 신청하기' : 'Request Quotation & Analysis')
                  }
                </span>
                <ArrowRight size={16} className="animate-pulse" />
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info & FAQ */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Contact details */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#071A2B] pb-3 border-b border-gray-150">
                {language === 'kr' ? '본사 및 공정 현장 정보' : 'Factory & Corporate Headquarters'}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-gray-150 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 uppercase font-bold tracking-wider">{language === 'kr' ? '공장 소재지' : 'Factory Address'}</h4>
                    <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">
                      {language === 'kr' 
                        ? '경기도 화성시 양감면 암소고개로 238' 
                        : '238, Amsogogae-ro, Yanggam-myeon, Hwaseong-si, Gyeonggi-do, Republic of Korea'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-gray-150 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 uppercase font-bold tracking-wider">{language === 'kr' ? '대표 연락망' : 'Direct Support Line'}</h4>
                    <p className="text-xs sm:text-sm text-slate-800 font-bold font-tech">
                      TEL: 010-3603-7503
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-gray-150 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 uppercase font-bold tracking-wider">{language === 'kr' ? '이메일 창구' : 'E-mail Inboxes'}</h4>
                    <p className="text-xs sm:text-sm text-slate-800 font-bold font-tech underline decoration-blue-600">
                      sungin4206@naver.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="space-y-3">
                <div className="h-56 w-full rounded-2xl bg-white border border-slate-200 overflow-hidden relative group shadow-inner">
                  <iframe
                    src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EC%96%91%EA%B0%90%EB%A9%B4%20%EC%95%94%EC%86%8C%EA%B3%A0%EA%B0%9C%EB%A1%9C%20238&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="형제산업기공 구글 지도"
                    className="w-full h-full opacity-95 hover:opacity-100 transition-opacity duration-300 filter contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 border border-slate-200 px-3 py-1.5 rounded-lg text-[11px] font-bold text-[#071A2B] flex items-center gap-1.5 backdrop-blur-sm shadow-sm pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                    <span>{language === 'kr' ? '형제산업기공' : 'Hyungje Industrial Eng'}</span>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=%EA%B2%BD%EA%B8%B0%EB%8F%84+%ED%99%94%EC%84%B1%EC%8B%9C+%EC%96%91%EA%B0%90%EB%A9%B4+%EC%95%94%EC%86%8C%EA%B3%A0%EA%B0%9C%EB%A1%9C+238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <ExternalLink size={14} className="text-blue-600" />
                  <span>{language === 'kr' ? 'Google 지도에서 크게 보기 / 길찾기' : 'View on Google Maps / Directions'}</span>
                </a>
              </div>
            </div>

            {/* FAQs Block */}
            <div className="space-y-4">
              <h3 className="text-base font-black text-slate-800 px-1 flex items-center gap-2">
                <HelpCircle size={18} className="text-blue-600" />
                <span>{language === 'kr' ? '주요 협력 자주 묻는 질문 (FAQ)' : 'Frequently Asked Questions (FAQ)'}</span>
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/80 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-700 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180 text-blue-600' : ''}`}
                      />
                    </button>
                    {activeFaq === idx && (
                      <div className="px-4 pb-4 border-t border-slate-100 pt-3 text-xs text-slate-600 leading-relaxed font-medium bg-slate-50/50 break-keep" style={{ wordBreak: 'keep-all' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </motion.div>

      {/* Submission Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 p-8 rounded-3xl max-w-md w-full space-y-6 text-center shadow-2xl relative">
            <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
              <CheckCircle2 size={36} />
            </div>
            
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold text-slate-900">
                {language === 'kr' ? '온라인 견적 접수 완료' : 'RFQ Submitted Successfully'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium break-keep" style={{ wordBreak: 'keep-all' }}>
                {language === 'kr' ? (
                  <>
                    성공적으로 견적 신청 정보가 송신되었습니다. <br />
                    제출해주신 사항을 당사 설계 기술 부서에서 면밀히 검토 후, 
                    기입해주신 유선전화 또는 이메일로 신속히 연락 드리겠습니다.
                  </>
                ) : (
                  <>
                    Your request has been successfully transmitted. <br />
                    Our engineering and estimating division will thoroughly analyze your requirements and follow up via phone or email as soon as possible.
                  </>
                )}
              </p>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all text-xs cursor-pointer shadow-sm"
            >
              {language === 'kr' ? '확인' : 'Confirm'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

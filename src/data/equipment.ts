import { Equipment } from '../types';

export const EQUIPMENT_LIST: Equipment[] = [
  // 1. 프레스 가공 설비
  {
    id: 'p-large',
    name: 'C형 크랭크 순송 프레스',
    category: 'press',
    specification: 'C-Frame Precision Crank Press, NC 피더 일체형',
    quantity: 1,
    manufacturer: '국내 제조사',
    features: ['NC 자동 코일 언코일러 및 고속 피더 라인업', '순송(Progressive) 대량 생산 대응 전용선', '오버로드 프로텍터 장착으로 안정적인 금형 운전']
  },
  {
    id: 'p-single',
    name: 'C형 싱글 크랭크 프레스',
    category: 'press',
    specification: 'C-Frame Precision Single Crank Press',
    quantity: 1,
    manufacturer: '국내 제조사',
    features: ['정밀 판금 성형 및 블랭킹 가공', '코일 레벨러 및 에어 피더 자동화 연동', '다양한 굴곡 깊이 대응 가공']
  },
  {
    id: 'p-double',
    name: '기계식 더블 크랭크 프레스',
    category: 'press',
    specification: 'Double Crank Mechanical Press',
    quantity: 2,
    manufacturer: '국내 제조사',
    features: ['슬라이드 면적이 넓어 복합 순송 금형 및 다단 레이아웃 가공 가능', '안전 광전센서 및 모니터링 시스템 구축', '정밀 체결용 브라켓 가공']
  },
  {
    id: 'p-medium',
    name: '정밀 기계식 프레스',
    category: 'press',
    specification: 'High-Precision Power Press',
    quantity: 2,
    manufacturer: '국내 제조사',
    features: ['범용 정밀 절곡 및 단발 블랭킹 고속 운전', '디지털 스트로크 카운터 제어', '신속한 금형 교체 구조 지원']
  },
  {
    id: 'p-compact',
    name: '소형 고속 기계식 프레스',
    category: 'press',
    specification: 'High Speed Stamping Press',
    quantity: 1,
    manufacturer: '국내 제조사',
    features: ['전자 접점 및 미세 판금 단자 고속 양산', '자동 급유 방식의 정밀 베어링 스핀들', '스마트 안전 센서 적용']
  },

  // 2. 금형 제작 설비
  {
    id: 'd-cnc',
    name: 'CNC 고속 머시닝 센터 (MCT)',
    category: 'die',
    specification: 'High-Speed Vertical Machining Center',
    quantity: 1,
    manufacturer: '국내 제조사',
    features: ['3D 설계 데이터 기준 직접 금형 베이스 정밀 포켓 밀링', '고속 스핀들 정밀 황·정삭 가공', '높은 기계적 강성 및 정밀도 구현']
  },
  {
    id: 'd-wire',
    name: '정밀 와이어 컷 방전가공기 (EDM)',
    category: 'die',
    specification: 'Precision Wire Cut EDM',
    quantity: 2,
    manufacturer: '정밀 가공사',
    features: ['초경합금 및 담금질강 소재 정밀 슬릿 및 펀치 홀 와이어 컷팅', '미세 정밀 컷팅 가공 사양 충족', '정밀 다이 및 펀치 유격 정밀 제어']
  },
  {
    id: 'd-grind',
    name: '고정밀 평면 연삭기 (Grinding Machine)',
    category: 'die',
    specification: 'Precision Surface Grinder',
    quantity: 1,
    manufacturer: '국내 제조사',
    features: ['금형 플레이트 및 슬라이드 코어의 평행도·정밀 거칠기 제어', '스핀들 수평 회전 구조의 정밀 가공', '마그네틱 척 연동 정밀 평탄화']
  },
  {
    id: 'd-radial',
    name: '레이디얼 드릴링 머신 (Radial Drill)',
    category: 'die',
    specification: 'Radial Drilling Machine',
    quantity: 1,
    manufacturer: '국내 제조사',
    features: ['중대형 금형 베이스 포스트 가이드 홀 굴착 및 다단 카운터보링', '회전 반경 광대역 홀 드릴링', '고강도 주철 베이스 진동 흡수']
  },

  // 3. 정밀 측정 및 검사 장비
  {
    id: 'm-projector',
    name: '디지털 정밀 투영기 (Profile Projector)',
    category: 'measurement',
    specification: 'Optical Profile Projector with Dro',
    quantity: 1,
    manufacturer: '정밀 측정사',
    features: ['배율 광학 렌즈 스크린 투영 측정', '프레스 가공 제품의 외관 치수 오차 및 각도 비접촉 실시간 정밀 스캔', 'X-Y축 디지털 엔코더 장착 미세 측정 대응']
  },
  {
    id: 'm-microscope',
    name: '공구용 정밀 현미경 (Toolmaker’s Microscope)',
    category: 'measurement',
    specification: 'Measuring Microscope',
    quantity: 1,
    manufacturer: '정밀 측정사',
    features: ['미세 피치 홀, 미세 버(Burr) 높이 및 슬릿 홈 확대 정밀 측정', '마이크로헤드 디지털 카운터 인터페이스', '고해상도 안구 렌즈 및 실물 크로스 헤어']
  },
  {
    id: 'm-hardness',
    name: '록웰 경도계 (Rockwell Hardness Tester)',
    category: 'measurement',
    specification: 'Rockwell Hardness Tester',
    quantity: 1,
    manufacturer: '국내 제조사',
    features: ['금형 부품 및 열처리 완료 프레스품의 경도(HRC) 물리 강도 검증', '다이아몬드 압입자 시험 하중 정밀 제어', '정밀 경도 한도 검증 시스템 적용']
  }
];

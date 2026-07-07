import { Capability } from '../types';

export const CAPABILITIES: Capability[] = [
  {
    id: 'die',
    title: '프레스 금형 설계 및 제작',
    engTitle: 'Press Die Engineering & Tooling',
    description: 'CAD/CAM 정밀 설계부터 제작 및 시험가공(T1)까지 자체 일괄 대응체계를 구축하여 제품 생산에 최적화된 금형을 개발합니다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1kKaSBAZ-31jOXr0_nNWKDt6sfkf4384n',
    details: [
      '2D/3D 설계 검토 (CAD 활용)',
      '단발(Single) 및 순송(Progressive) 레이아웃 설계',
      '머시닝 센터 및 와이어 컷(EDM) 방전 가공 장비 활용',
      '금형 수명 관리를 위한 고합금강 소재 가공 적용 및 정밀 랩핑 작업',
      '시험 가공(T1) 테스트를 통한 치수 정밀도 사전 검증'
    ],
    specs: [
      { label: '설계 지원', value: '2D/3D CAD 도면 검토 · 제품 모델링 지원' },
      { label: '금형 유형', value: '순송 금형 · 단발 금형 · 레이아웃 최적 설계' },
      { label: '금형 정비', value: '마모·노후 금형 수정 · 정밀 신속 보수' },
      { label: '협의 가이드', value: '제품 형상 최적화 · 설계 제작 타당성 협의' }
    ]
  },
  {
    id: 'press',
    title: '금속 프레스 제품 가공',
    engTitle: 'Precision Press Stamping',
    description: '설계·제작된 금형을 테스트하는 시험 프레스 및 생산 설비를 활용하여, 소형 전자 부품부터 다양한 가전 및 가공 부품까지 양산 대응하고 있습니다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1WnX6podJauMABXFYlTcsSo8TgzF-vf7o',
    details: [
      '다양한 두께의 판금 프레스 타공 및 절곡 가공 대응',
      '탄소강판(SPCC, SPHC), 스테인리스(SUS), 황동(Brass), 알루미늄 가공',
      '자동 피더기 및 언코일러 연동 라인을 통한 연속 가공 생산',
      '공정 모니터링 및 센서 검출을 통한 안정적인 설비 운전',
      '도면 및 제품 한도 견본 기준에 따른 엄격한 치수 관리'
    ],
    specs: [
      { label: '생산 방식', value: '기계식 프레스 가공 · 순송 연속 자동 가공' },
      { label: '가공 사양', value: '다품종 절곡 · 정밀 타공 · 판금 프레스' },
      { label: '생산 품목', value: '자동차 체결용 브라켓 · 가전 사양 부품 · 단자' },
      { label: '일정 협의', value: '고객사 납기 최우선 · 긴급 일정 대응 협의' }
    ]
  },
  {
    id: 'heat',
    title: '금속 열처리 공정 연동',
    engTitle: 'Technical Heat Treatment',
    description: '프레스 제품의 우수한 내마모성과 극대화된 사용 수명을 확보하기 위해 고주파 열처리 및 침탄 담금질 공정을 전문 협력업체와 긴밀히 연계하여 책임 관리합니다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1GAXEwpyXNn5vA7oW7ovBq7LQhxoFq2n0',
    details: [
      '표면 경도를 향상시키는 침탄 담금질 가공',
      '균일한 경화층을 얻기 위한 고주파 열처리 공정',
      '내마모성과 내식성 향상을 위한 가스 연질화 가공',
      '성형 응력을 완화하고 정밀도를 유지하기 위한 풀림(어닐링)',
      '성적서 검토 및 경도계를 활용한 경화 깊이 및 한도 수치 확인'
    ],
    specs: [
      { label: '가공 연동', value: '침탄 경화 · 고주파 열처리 · 질화 처리 · 풀림 처리' },
      { label: '적용 재질', value: '탄소강(S45C · S50C) · 합금강 · 스프링강재' },
      { label: '품질 검증', value: '록웰·비커스 경도 측정 협의' },
      { label: '후처리 서류', value: '열처리 공정 협의 · 작업 성적서 연동' }
    ]
  },
  {
    id: 'finish',
    title: '도금 및 표면처리 대응',
    engTitle: 'Plating & Surface Finishing',
    description: '부식 방지 및 기능성 표면 부여를 위해 아연도금, 디버링, 배럴 세척 공정을 연동하여 안정적인 상태의 최종 제품을 출하합니다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1xwma1A37Uts_KlCOPtyehV_FA8wjuiGq', // Using press-him-feeder.png for processing/finishing area
    details: [
      '방청 성능을 향상시키는 전기 아연도금(백색 삼가 크로메이트, 천연색 등)',
      '전도성 및 접합성 강화를 위한 주석 도금 및 구리 도금 공정',
      '외관 품질 및 고내식성 만족을 위한 니켈 및 크롬 표면 처리',
      '타공 단면의 날카로운 버(Burr) 제거를 위한 배럴 연마 및 세척 작업',
      '글로벌 규격인 친환경 유해물질 기준 충족 표면처리 협업'
    ],
    specs: [
      { label: '표면 처리', value: '전기 아연도금 · 니켈 도금 · 주석 도금 · 화학 피막' },
      { label: '환경 규제', value: '친환경 RoHS 기준 부합 · 유해물질 불검출' },
      { label: '방청 연동', value: '원자재 조건 맞춤 염수분무 성능 기준 협의' },
      { label: '전처리', value: '원심 배럴 연마 디버링 · 알칼리 침적 세척' }
    ]
  }
];

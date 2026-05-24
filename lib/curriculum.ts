// 경영자의 AI 밋업 — 강의 계획안 데이터 (승인된 강의계획안 시트 기준)
// 폴더 자료 + 김길호 GitHub 약력만 사용. 폴더 밖 자료 미포함.

export const EVENT = {
  head: "경영자의 AI meetup",
  subtitle: "백문이 불여 일견",
  subtitleHanja: "百聞不如一見",
  dateISO: "2026-05-30T09:00:00+09:00",
  dateLabel: "2026. 05. 30 (토)",
  timeLabel: "09:00 — 하루 종일",
  networking: "네트워킹 08:30~",
  audience: "경영자 · 경영자급 리더",
  nature: "비공개 밋업",
  venue: "세이플랜트",
  venueDesc: "8호선 문정역 연결 · 테라타워 A동 1321호",
  address: "서울 송파구 송파대로 167 테라타워 A동 1321호",
  // 좌표(37.4846615, 127.12093364) 기준 — 도로명+건물명으로 네이버 지도 검색
  mapUrl:
    "https://map.naver.com/p/search/" +
    encodeURIComponent("서울특별시 송파구 송파대로 167 테라타워"),
  applyUrl: "https://classmap-tan.vercel.app/apply",
};

export type Module = {
  time?: string;
  title: string;
  detail?: string;
  gain?: string;
  prep?: string;
  pending?: boolean;
};

export type Instructor = {
  id: "kimgilho" | "yuni" | "huhsame";
  name: string;
  role: string;
  cell: string;
  cellTag: string;
  photo: string;
  illustration?: boolean;
  oneLiner: string;
  bio: string;
  quote?: string;
  keywords: string[];
  link?: { label: string; url: string };
  modules: Module[];
};

// 공통 세션 (전체)
export const COMMON: Module[] = [
  {
    time: "08:30 — 09:00",
    title: "네트워킹",
    detail: "자유 주제 및 인사로 여는 시간",
    prep: "명함",
  },
  {
    time: "09:00 — 10:00",
    title: "경영자의 도구 AI — 학습설계자로서의 경영자",
    detail: "“AI는 IT가 아니라 HR이다”",
    gain: "경영자 관점에서 AI로 조직과 비즈니스를 재설계하는 안목",
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "kimgilho",
    name: "김길호",
    role: "총괄 퍼실리테이터 · 에스유디자인㈜ 대표",
    cell: "Cell 3 — 경영자의 관점",
    cellTag: "경영 · 에이전트",
    photo: "/instructors/kimgilho.jpg",
    oneLiner: "현업과 경영의 문제를 AI 관점에서 연결하는 강사",
    bio: "현장에서 실제 비즈니스 문제를 다루는 경영자입니다. AI 기술을 소개하는 것이 아니라, 조직이 AI를 어떻게 이해하고 도입해야 하는지를 경영자의 언어로 풀어드립니다.",
    quote: "AI를 모르는 경영자가 도입을 결정하면, 조직은 방향 없이 흔들립니다.",
    keywords: ["경영자의 판단력", "AI 조직 설계", "경영자 AI 리터러시"],
    link: { label: "litt.ly/kghcoach", url: "https://litt.ly/kghcoach" },
    modules: [
      {
        time: "10:00–12:00 · 14:00–18:00",
        title: "나만의 에이전트, 신입사원으로 채용하기",
        detail: "사내 역할을 설정하고, 에이전트에게 역할을 부여합니다.",
        gain: "AI 에이전트를 신입사원으로 채용할 수 있습니다.",
        prep: "Claude Code · VS Code · 메타 스킬 제공",
      },
      {
        time: "13:00 — 14:00",
        title: "나만의 도구, 카카오톡 대시보드",
        detail: "수십 개의 카카오톡을 하나의 대시보드로 통합 관리합니다.",
        gain: "카카오톡으로 다중 메시지 · 예약 메시지 · 인맥까지 관리",
        prep: "카카오톡 데스크탑 로그인되는 본인 노트북 (타인 노트북 사용 금지)",
      },
    ],
  },
  {
    id: "huhsame",
    name: "허세임",
    role: "데바대이 대표 · AI Agent 개발 / 기업 AX 컨설팅",
    cell: "Cell 2 — 실전 활용",
    cellTag: "실전 · 나만의 무기",
    photo: "/instructors/huhsame.jpg",
    illustration: true,
    oneLiner: "대기업 회장님도 직접 배운, 손에 잡히는 AI 실무",
    bio: "LG인화원 AX Camp for CEOs(회장·사장단)·임원진, 지피터스 자동화 파트너, 구글 AI 강사 트레이너. SKT·SK에코플랜트·NH농협·LG전자 강의. 前 KIST 인공지능연구단. 고려대 컴퓨터학 석사 · 이화여대 컴퓨터공학 학사.",
    keywords: ["업무 실전", "맞춤 CRM", "AX 구축"],
    link: { label: "huhsame.com", url: "https://huhsame.com" },
    modules: [
      {
        time: "10:00 — 12:00",
        title: "대기업 회장님도 직접 배운 AI 실무",
        detail: "Claude로 엑셀 · PPT · 대시보드 등 실제 업무 작업",
        gain: "직원이 없어도 폼나는 제안서 · 전략문서를 직접 기획해 만들 수 있어요.",
        prep: "Claude 유료 계정 + Claude Desktop 설치 + Python 설치(PATH 설정까지)",
      },
      {
        time: "13:00 — 14:00",
        title: "맞춤형 CRM으로 경험하는 AI 자동화",
        detail: "구매자 분석, 명함 인사 등 다양한 자동화",
        gain: "내 폰 속 모든 연락처가 실제적인 인맥이 될 수 있어요.",
        prep: "Claude 유료 계정(Max) + Claude Desktop 설치 + Node 설치",
      },
      {
        time: "14:00 — 16:00",
        title: "휴대폰 사진 1장이 구매로 이어지는 바이브코딩",
        detail: "회사 홈페이지 제작, 쇼핑몰 개발",
        gain: "우리 회사 홈페이지 · 쇼핑몰 랜딩페이지를 이제 직접 만들 수 있어요.",
        prep: "ChatGPT 유료 계정 + Claude 유료 계정(Max) + Claude Desktop 설치 + Node 설치",
      },
      {
        time: "16:00 — 18:00",
        title: "ChatGPT 결제해주면 끝? AX의 진정한 의미",
        detail: "사내 지식관리 시스템 · LLM-WIKI · 데이터베이스 연결 등",
        gain: "직원이 퇴사해도, 사내 지식이 전수자 없이 바로 쓰이게.",
        prep: "Claude 유료 계정 + Claude Desktop 설치 + Python 설치(PATH 설정까지)",
      },
    ],
  },
  {
    id: "yuni",
    name: "유니 (Yuni)",
    role: "AI 실무 교육 · Copilot 기반 업무 혁신 전문가",
    cell: "Cell 1 — 입문",
    cellTag: "입문 · 지형 읽기",
    photo: "/instructors/yuni.png",
    oneLiner: "공공기관·대기업·산학을 아우르는 AI 실무 교육 전문가",
    bio: "경기도 인재개발원·농업기술원·의회 AI 강의, SK·SKT AI 캠프, KT·현대모비스·현대ITC·현대자동차 Copilot 강의, 중앙그룹·한국예탁결제원·한독 AI 교육. 現 GPTers 스터디 리더·운영진, 맥비기획 운영진, Office Tutor Copilot 강사, Microsoft CSP.",
    keywords: ["프롬프트", "ChatGPT 200%", "멀티모달"],
    link: { label: "litt.ly/youni", url: "https://litt.ly/youni" },
    modules: [
      {
        time: "10:00 — 12:00",
        title: "프롬프트 엔지니어링 기초",
        detail: "프롬프트 5요소, 좋은/나쁜 예 비교 실습",
        gain: "AI에게 제대로 질문하는 감각",
        prep: "ChatGPT 계정",
      },
      {
        time: "13:00 — 14:00",
        title: "챗GPT 200% 활용기",
        detail: "GPTs · 음성 · 이미지 · 파일 분석 실습",
        gain: "한 도구로 일상 업무를 굴리는 법",
        prep: "ChatGPT 계정",
      },
      {
        time: "14:00 — 16:00",
        title: "Gemini & NotebookLM 둘러보기",
        detail: "멀티모달 시연, 내 PDF로 답하는 AI 만들기",
        gain: "내 자료 기반 AI 활용 시야",
        prep: "구글 계정",
      },
      {
        time: "16:00 — 18:00",
        title: "Claude Cowork와 일하기",
        detail: "문서 · 메일 · 파일을 한 흐름으로 처리",
        gain: "옆자리에 비서를 둔 감각",
        prep: "Claude 계정",
      },
    ],
  },
];

// ── 통합 시간표 (강의안 통합보기 / PDF용) — 확정안 그리드 ──
export type ScheduleRow = {
  instructor: string;
  title: string;
  detail: string;
  gain: string;
  prep: string;
};
export type ScheduleBlock = {
  time: string;
  lunch?: boolean;
  rows?: ScheduleRow[];
};

export const SCHEDULE: ScheduleBlock[] = [
  {
    time: "08:30 – 09:00",
    rows: [
      {
        instructor: "김길호",
        title: "네트워킹",
        detail: "자유 주제 및 인사로 여는 시간",
        gain: "—",
        prep: "명함",
      },
    ],
  },
  {
    time: "09:00 – 10:00",
    rows: [
      {
        instructor: "김길호",
        title: "경영자의 도구 AI — 학습설계자로서의 경영자",
        detail: "“AI는 IT가 아니라 HR이다”",
        gain: "경영자 관점에서 AI로 조직과 비즈니스를 재설계하는 안목",
        prep: "—",
      },
    ],
  },
  {
    time: "10:00 – 12:00",
    rows: [
      {
        instructor: "김길호",
        title: "나만의 에이전트, 신입사원으로 채용하기",
        detail: "사내 역할을 설정하고 에이전트에게 역할 부여",
        gain: "AI 에이전트를 신입사원으로 채용할 수 있습니다",
        prep: "Claude Code · VS Code · 메타 스킬 제공",
      },
      {
        instructor: "허세임",
        title: "대기업 회장님도 직접 배운 AI 실무",
        detail: "Claude로 엑셀 · PPT · 대시보드 등 업무 작업",
        gain: "직원 없이도 폼나는 제안서 · 전략문서를 직접 제작",
        prep: "Claude 유료 + Desktop + Python(PATH)",
      },
      {
        instructor: "유니",
        title: "프롬프트 엔지니어링 기초",
        detail: "프롬프트 5요소, 좋은/나쁜 예 비교 실습",
        gain: "AI에게 제대로 질문하는 감각",
        prep: "ChatGPT 계정",
      },
    ],
  },
  { time: "12:00 – 13:00", lunch: true },
  {
    time: "13:00 – 14:00",
    rows: [
      {
        instructor: "김길호",
        title: "나만의 도구, 카카오톡 대시보드",
        detail: "수십 개의 카카오톡을 하나의 대시보드로 통합 관리",
        gain: "다중 메시지 · 예약 메시지 · 인맥 관리",
        prep: "카카오톡 데스크탑 로그인 본인 노트북(타인 노트북 금지)",
      },
      {
        instructor: "허세임",
        title: "맞춤형 CRM으로 경험하는 AI 자동화",
        detail: "구매자 분석, 명함 인사 등 다양한 자동화",
        gain: "내 폰 속 모든 연락처가 실제적인 인맥으로",
        prep: "Claude 유료(Max) + Desktop + Node",
      },
      {
        instructor: "유니",
        title: "챗GPT 200% 활용기",
        detail: "GPTs · 음성 · 이미지 · 파일 분석 실습",
        gain: "한 도구로 일상 업무를 굴리는 법",
        prep: "ChatGPT 계정",
      },
    ],
  },
  {
    time: "14:00 – 16:00",
    rows: [
      {
        instructor: "김길호",
        title: "나만의 에이전트, 신입사원으로 채용하기",
        detail: "사내 역할을 설정하고 에이전트에게 역할 부여",
        gain: "AI 에이전트를 신입사원으로 채용할 수 있습니다",
        prep: "Claude Code · VS Code · 메타 스킬 제공",
      },
      {
        instructor: "허세임",
        title: "휴대폰 사진 1장이 구매로 이어지는 바이브코딩",
        detail: "회사 홈페이지 제작, 쇼핑몰 개발",
        gain: "우리 회사 홈페이지 · 쇼핑몰 랜딩페이지를 직접 제작",
        prep: "ChatGPT 유료 + Claude 유료(Max) + Desktop + Node",
      },
      {
        instructor: "유니",
        title: "Gemini & NotebookLM 둘러보기",
        detail: "멀티모달 시연, 내 PDF로 답하는 AI 만들기",
        gain: "내 자료 기반 AI 활용 시야",
        prep: "구글 계정",
      },
    ],
  },
  {
    time: "16:00 – 18:00",
    rows: [
      {
        instructor: "김길호",
        title: "나만의 에이전트, 신입사원으로 채용하기",
        detail: "사내 역할을 설정하고 에이전트에게 역할 부여",
        gain: "AI 에이전트를 신입사원으로 채용할 수 있습니다",
        prep: "Claude Code · VS Code · 메타 스킬 제공",
      },
      {
        instructor: "허세임",
        title: "ChatGPT 결제해주면 끝? AX의 진정한 의미",
        detail: "사내 지식관리 시스템 · LLM-WIKI · 데이터베이스 연결",
        gain: "직원이 퇴사해도 사내 지식이 전수자 없이 유지",
        prep: "Claude 유료 + Desktop + Python(PATH)",
      },
      {
        instructor: "유니",
        title: "Claude Cowork와 일하기",
        detail: "문서 · 메일 · 파일을 한 흐름으로 처리",
        gain: "옆자리에 비서를 둔 감각",
        prep: "Claude 계정",
      },
    ],
  },
];

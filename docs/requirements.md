# 제품 요구사항 및 기능 목록

## 핵심 사용자 기능
- SNS 로그인/회원가입(OAuth)
- 상품 검색 및 카테고리별 탐색
- 상품 리스트
  - 최신/오래된/판매량 순 정렬
  - 필터(가격대, 브랜드, 옵션 여부 등)는 후속 확장
- 상품 상세페이지
  - 메인 이미지, 썸네일 갤러리
  - 기본 정보(이름, 가격, 할인, 배송비, 적립금 등)
  - 옵션 선택(사이즈/색상 등 다중 옵션 지원)
  - 수량 선택, 장바구니 추가, 바로 구매
- 장바구니
  - 옵션/수량 수정, 항목 삭제, 전체 선택/선택삭제
  - 쿠폰/포인트 적용(결제 단계와 연동)
- 주문 정보 페이지
  - 배송지 입력/선택, 배송 메모
  - 결제 수단 선택(카드, 간편결제, 가상계좌/무통장입금 등)
  - 할인 수단(쿠폰, 적립금), 다음 단계 이동
- PG 연동 및 결제 흐름
  - 결제 완료/실패/진행중(가상계좌·무통장) 페이지
  - 결제 검증 웹훅/콜백 처리 및 중복 결제 방지
- 주문/배송 확인
  - 주문 내역 조회, 배송 상태 표시(주문접수→결제완료→배송준비→배송중→배송완료)
- 주문/결제 취소
  - 부분/전체 취소, 결제사 취소 API 연동, 환불 계좌 입력(무통장)
- 교환 및 환불 신청
  - 신청 사유, 사진 첨부, 수거지 정보 입력, 진행 상태 트래킹

## 관리자(ADMIN) 핵심 기능
- 대시보드: 오늘 주문/매출, 취소/교환/환불 현황, 인기 상품
- 상품 관리: 등록/수정/숨김, 옵션·이미지·재고 관리, 카테고리 트리 관리
- 주문 관리: 주문 조회/필터, 송장번호 등록, 배송사 연동, 부분취소/교환 처리
- 프로모션: 쿠폰/포인트 정책, 배너/메인 진열 관리
- 회원 관리: 가입 채널, 최근 구매, 블랙리스트/차단
- 설정: PG 키 관리, 배송비/반품비 정책, 정산용 데이터 추출
- UI 가이드: 부트스트랩 기반 레이아웃(좌측 네비 + 상단 바 + 콘텐츠 카드), 리스트/폼 컴포넌트 일관성 유지

## 비기능 요구사항
- 보안: OAuth/세션 토큰 관리, CSRF 보호, 입력 검증, 결제 검증 및 서명 확인
- 성능: 이미지 최적화(LQIP, WebP), 리스트 페이지네이션·캐싱, 장애 시 재시도 로직
- 접근성: 주요 입력/버튼에 키보드 포커스 가능, 색 대비 확보, 스크린리더 레이블 제공
- 로깅/모니터링: 오류 트래킹, 결제 콜백 로그, 주문 상태 변경 감사 로그
- 다국어/다통화(옵션): i18n, 통화 포맷

## 데이터 모델 초안
- User: id, sns_provider, sns_id, email, name, role, address_book, points
- Product: id, title, description, price, discount, images, options, stock, status, category_ids
- Category: id, name, parent_id, depth, display_order
- Cart: user_id, items(option_id, quantity, price_snapshot)
- Order: id, user_id, items, totals, address, payment_method, status, invoice_no, history
- Payment: order_id, pg, method, amount, transaction_id, status, error_code
- Coupon/Promotion: id, type, value, constraints, period
- Claim(교환/환불): id, order_item_id, type, reason, photos, pickup_address, status

## 페이지/흐름 우선순위
1. 상품 리스트 → 상세 → 장바구니 → 주문 정보 → 결제 → 완료/실패 페이지
2. 마이페이지 주문 내역/취소/배송 추적
3. 교환/환불 신청 흐름
4. 관리자: 상품/주문 관리, 송장 처리, 배너/카테고리 관리

## 초기 기술 스택 제안
- 프론트: React + TypeScript + Next.js(App Router), Zustand/Redux, TanStack Query, Bootstrap/Chakra/Ant Design
- 백엔드: NestJS(Express/Fastify), PostgreSQL, Prisma/TypeORM, Redis 캐시, Swagger/OpenAPI 문서화
- 인프라: Docker 기반, CI/CD(GitHub Actions), CloudFront+S3 이미지 배포, CDN
- 결제/인증: 카카오/네이버/구글 OAuth, 아임포트 등 PG 연동

## 마일스톤 예시
- M1: 기본 상품/카트/주문 흐름 + PG 결제 성공/실패 처리
- M2: 주문 취소/교환/환불, 배송 추적, 프로모션
- M3: 관리자 콘솔(상품/주문/배너), 모니터링·로그 강화

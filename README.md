# ShopByAI 커머스 서비스 개요

ShopByAI는 SNS 로그인부터 결제, 주문 관리, 교환/환불까지 지원하는 쇼핑몰 서비스입니다. 전체 요구사항과 화면 흐름, 관리자 콘솔 컨벤션을 `docs/` 디렉터리에 정리했으며, 이제 이를 바탕으로 Next.js 기반 프론트엔드 프로토타입을 제공합니다.

## 문서
- [제품 요구사항](docs/requirements.md)
- [정보 구조 및 화면 흐름](docs/ia-and-flows.md)

## 실행 방법
1. 의존성 설치: `npm install`
   - 만약 기본 npm 레지스트리 접근이 차단되어 `403 Forbidden`이 발생하면 다음과 같이 공개 레지스트리로 지정 후 다시 시도하세요.
   ```
   npm config set registry https://registry.npmjs.org
   npm install
   ```
2. 개발 서버: `npm run dev` 후 http://localhost:3000 접속
3. 코드 품질: `npm run lint`

## 포함된 화면/플로우
- 홈: 추천 상품, 카테고리 단축 링크
- 상품 목록: 검색, 카테고리 필터, 최신/오래된/판매량 정렬
- 상품 상세: 옵션 선택, 수량 입력, 장바구니/바로구매 CTA
- 장바구니: 수량 변경, 삭제, 합계 및 결제 이동
- 결제/주문: 주소 입력, 결제 수단 선택, 할인 코드, 결제 결과(성공/실패/진행중) 페이지
- 주문/배송 확인: 더미 주문 데이터로 상태/상품 확인
- SNS 로그인: 카카오/애플/구글/네이버 버튼 모형
- Admin 콘솔: 상품/주문/프로모션/회원 관리 진입점 카드 레이아웃

## 버전 관리 메모
- Next.js/Node 기반 프로젝트용 `.gitignore`를 포함하여 `node_modules`, 빌드 결과물, 로컬 환경 파일을 GitHub에 올리지 않도록 기본 설정했습니다.
- 작업 내용은 커밋한 뒤 `work` 브랜치(또는 별도 피처 브랜치)로 푸시해 원격 저장소와 싱크하세요.

## 개발 메모
- 프론트엔드: React + TypeScript + Next.js
- 백엔드: Node.js 기반(Express/Fastify) 또는 NestJS, REST/GraphQL 선택 가능
- 인증: OAuth(SNS) + 자체 세션/토큰 관리
- 배포: CI/CD 파이프라인 구성 후 클라우드 환경 배포 권장

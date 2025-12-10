import Link from 'next/link';

const adminShortcuts = [
  { title: '상품 관리', description: '상품 등록, 옵션/재고/가격 변경, 판매 상태 제어', href: '/admin/products' },
  { title: '주문 관리', description: '주문 상세 조회, 배송 상태 변경, 취소/환불 승인', href: '/admin/orders' },
  { title: '프로모션', description: '쿠폰 발행, 프로모션 배너 관리, 추천 상품 설정', href: '/admin/promotions' },
  { title: '회원 관리', description: '회원 검색, 인증 기록 확인, 정책 동의 현황 확인', href: '/admin/users' }
];

export default function AdminPage() {
  return (
    <div className="section">
      <h2 style={{ marginTop: 0 }}>Admin 콘솔</h2>
      <p className="muted">아임웹/부트스트랩 스타일의 관리자 페이지 구성을 위한 네비게이션 샘플입니다.</p>
      <div className="card-grid">
        {adminShortcuts.map((item) => (
          <div key={item.title} className="card">
            <h3 style={{ margin: '4px 0' }}>{item.title}</h3>
            <p className="muted">{item.description}</p>
            <Link className="button" href={item.href}>
              바로가기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

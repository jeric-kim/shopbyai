import Link from 'next/link';
import ProductCard from './components/product-card';
import { products } from '../data/mock-products';

export default function HomePage() {
  const featured = products.slice(0, 3);
  return (
    <div>
      <div className="hero">
        <h1 style={{ margin: 0 }}>ShopByAI 커머스</h1>
        <p className="muted" style={{ maxWidth: 600 }}>
          SNS 간편 로그인부터 장바구니, 주문/배송 확인, 교환·환불까지 주요 플로우를 빠르게 검증할 수 있는
          프론트엔드 프로토타입입니다.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
          <Link className="button primary" href="/products">
            상품 둘러보기
          </Link>
          <Link className="button" href="/orders">
            주문 내역
          </Link>
          <Link className="button" href="/admin">
            Admin 콘솔
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="flex-between">
          <h2>카테고리</h2>
          <Link className="button" href="/products">
            전체 상품
          </Link>
        </div>
        <div className="tag-row">
          {['가방', '신발', '상의', '아우터'].map((c) => (
            <span key={c} className="badge">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="flex-between">
          <h2>추천 상품</h2>
          <Link className="button" href="/products">
            더 보기
          </Link>
        </div>
        <div className="card-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

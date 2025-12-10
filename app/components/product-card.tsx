import Link from 'next/link';
import { Product } from '../../data/mock-products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card">
      <div style={{ background: '#f1f5f9', borderRadius: 10, padding: 10, minHeight: 160 }}>
        <div
          style={{
            height: 160,
            backgroundImage: `url(${product.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 8
          }}
        />
      </div>
      <div className="badge">{product.category}</div>
      <h3 style={{ margin: '4px 0' }}>{product.name}</h3>
      <p className="muted">{product.description}</p>
      <div className="flex-between">
        <strong>{product.price.toLocaleString()}원</strong>
        <span className="muted">판매 {product.sales.toLocaleString()}건</span>
      </div>
      <Link className="button primary" href={`/products/${product.id}`}>
        상세 보기
      </Link>
    </div>
  );
}

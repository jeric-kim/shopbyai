'use client';

import { useMemo, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { products } from '../../../data/mock-products';
import { useCart } from '../../components/cart-context';

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = useMemo(() => products.find((p) => p.id === params.id), [params.id]);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const { addItem } = useCart();

  if (!product) {
    return notFound();
  }

  const optionSummary = Object.values(selectedOptions).join(' / ');

  return (
    <div className="section" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 24 }}>
      <div>
        <div
          style={{
            height: 320,
            borderRadius: 12,
            backgroundImage: `url(${product.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="badge">{product.category}</div>
        <h1 style={{ margin: 0 }}>{product.name}</h1>
        <p className="muted">{product.description}</p>
        <strong style={{ fontSize: 20 }}>{product.price.toLocaleString()}원</strong>
        <span className="muted">판매 {product.sales.toLocaleString()} · 등록 {product.createdAt}</span>

        {product.options?.map((opt) => (
          <div key={opt.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label className="muted">{opt.label}</label>
            <select
              className="select"
              value={selectedOptions[opt.label] ?? ''}
              onChange={(e) => setSelectedOptions((prev) => ({ ...prev, [opt.label]: e.target.value }))}
            >
              <option value="">선택하세요</option>
              {opt.values.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div>
          <label className="muted">수량</label>
          <input
            className="input"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className="button"
            onClick={() =>
              addItem({ id: product.id, name: product.name, price: product.price, quantity, option: optionSummary })
            }
          >
            장바구니 추가
          </button>
          <button className="button primary">바로 구매</button>
        </div>
        {optionSummary && <div className="muted">선택 옵션: {optionSummary}</div>}
      </div>
    </div>
  );
}

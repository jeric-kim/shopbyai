'use client';

import { useMemo, useState } from 'react';
import ProductCard from '../components/product-card';
import { categories, products } from '../../data/mock-products';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('전체');
  const [sort, setSort] = useState<'newest' | 'oldest' | 'sales'>('newest');

  const filtered = useMemo(() => {
    let next = products.filter((p) =>
      [p.name, p.description, p.category].some((f) => f.toLowerCase().includes(search.toLowerCase()))
    );
    if (category !== '전체') {
      next = next.filter((p) => p.category === category);
    }

    switch (sort) {
      case 'newest':
        next = [...next].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        break;
      case 'oldest':
        next = [...next].sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
        break;
      case 'sales':
        next = [...next].sort((a, b) => b.sales - a.sales);
        break;
    }

    return next;
  }, [category, search, sort]);

  return (
    <div className="section">
      <div className="flex-between">
        <h2 style={{ margin: 0 }}>상품 리스트</h2>
        <span className="muted">정렬: 최신 · 오래된 · 판매량</span>
      </div>

      <div className="grid-2" style={{ marginBottom: 12 }}>
        <input
          className="input"
          placeholder="상품 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value as any)}>
            <option value="newest">최신 순</option>
            <option value="oldest">오래된 순</option>
            <option value="sales">판매량 순</option>
          </select>
        </div>
      </div>

      <div className="card-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../components/cart-context';

export default function CheckoutPage() {
  const router = useRouter();
  const { state, total, clear } = useCart();
  const [payment, setPayment] = useState('card');
  const [address, setAddress] = useState({ name: '', phone: '', address1: '', address2: '' });
  const [discountCode, setDiscountCode] = useState('');

  const handleSubmit = () => {
    clear();
    router.push(`/checkout/status?result=success&method=${payment}`);
  };

  return (
    <div className="section" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 16 }}>
      <div>
        <div className="section" style={{ marginBottom: 12 }}>
          <h2>주소 입력</h2>
          <div className="grid-2">
            <input
              className="input"
              placeholder="수령인"
              value={address.name}
              onChange={(e) => setAddress((prev) => ({ ...prev, name: e.target.value }))}
            />
            <input
              className="input"
              placeholder="연락처"
              value={address.phone}
              onChange={(e) => setAddress((prev) => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <input
            className="input"
            style={{ marginTop: 8 }}
            placeholder="주소"
            value={address.address1}
            onChange={(e) => setAddress((prev) => ({ ...prev, address1: e.target.value }))}
          />
          <input
            className="input"
            style={{ marginTop: 8 }}
            placeholder="상세 주소"
            value={address.address2}
            onChange={(e) => setAddress((prev) => ({ ...prev, address2: e.target.value }))}
          />
        </div>

        <div className="section" style={{ marginBottom: 12 }}>
          <h2>결제 수단</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <label className="button" style={{ flex: 1 }}>
              <input
                type="radio"
                name="pay"
                checked={payment === 'card'}
                onChange={() => setPayment('card')}
              />
              신용카드
            </label>
            <label className="button" style={{ flex: 1 }}>
              <input
                type="radio"
                name="pay"
                checked={payment === 'virtual'}
                onChange={() => setPayment('virtual')}
              />
              가상계좌/무통장
            </label>
          </div>
        </div>

        <div className="section">
          <h2>할인 수단</h2>
          <input
            className="input"
            placeholder="쿠폰 코드 입력"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
        </div>
      </div>

      <div className="section">
        <h2>주문 요약</h2>
        {state.items.length === 0 ? (
          <p className="muted">장바구니가 비어 있습니다.</p>
        ) : (
          <>
            <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
              {state.items.map((item) => (
                <li key={item.id} className="flex-between" style={{ marginBottom: 8 }}>
                  <div>
                    <div>{item.name}</div>
                    <div className="muted">{item.quantity}개 · {item.option || '옵션 미선택'}</div>
                  </div>
                  <strong>{(item.price * item.quantity).toLocaleString()}원</strong>
                </li>
              ))}
            </ul>
            <div className="flex-between" style={{ marginTop: 12 }}>
              <span>총 결제 금액</span>
              <strong>{total.toLocaleString()}원</strong>
            </div>
            {discountCode && <div className="muted">적용 예정 쿠폰: {discountCode}</div>}
            <button className="button primary" style={{ width: '100%', marginTop: 12 }} onClick={handleSubmit}>
              결제 진행
            </button>
          </>
        )}
      </div>
    </div>
  );
}

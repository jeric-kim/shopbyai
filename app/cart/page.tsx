'use client';

import Link from 'next/link';
import { useCart } from '../components/cart-context';

export default function CartPage() {
  const { state, total, updateQuantity, removeItem } = useCart();

  return (
    <div className="section">
      <div className="flex-between">
        <h2 style={{ margin: 0 }}>장바구니</h2>
        <Link className="button" href="/products">
          계속 쇼핑하기
        </Link>
      </div>

      {state.items.length === 0 ? (
        <p className="muted">담긴 상품이 없습니다.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>상품명</th>
                <th>옵션</th>
                <th>수량</th>
                <th>가격</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {state.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className="muted">{item.option || '-'}</td>
                  <td>
                    <input
                      className="input"
                      style={{ maxWidth: 80 }}
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                  </td>
                  <td>{(item.price * item.quantity).toLocaleString()}원</td>
                  <td>
                    <button className="button" onClick={() => removeItem(item.id)}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex-between" style={{ marginTop: 12 }}>
            <strong>합계: {total.toLocaleString()}원</strong>
            <Link className="button primary" href="/checkout">
              결제하기
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

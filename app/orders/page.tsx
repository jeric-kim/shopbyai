import { orders } from '../../data/mock-orders';

export default function OrdersPage() {
  return (
    <div className="section">
      <h2 style={{ marginTop: 0 }}>주문 / 배송 확인</h2>
      <table className="table">
        <thead>
          <tr>
            <th>주문번호</th>
            <th>상태</th>
            <th>결제수단</th>
            <th>상품</th>
            <th>금액</th>
            <th>주문일</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                <span className="badge">{order.status}</span>
              </td>
              <td>{order.paymentMethod}</td>
              <td>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {order.items.map((item) => (
                    <li key={item.name}>
                      {item.name} · {item.quantity}개
                    </li>
                  ))}
                </ul>
              </td>
              <td>{order.total.toLocaleString()}원</td>
              <td>{order.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

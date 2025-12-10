import Link from 'next/link';
import { useCart } from './cart-context';

export default function Nav() {
  let count = 0;
  try {
    count = useCart().state.items.reduce((acc, item) => acc + item.quantity, 0);
  } catch (err) {
    count = 0;
  }

  return (
    <nav>
      <Link className="button" href="/">
        홈
      </Link>
      <Link className="button" href="/products">
        상품 목록
      </Link>
      <Link className="button" href="/cart">
        장바구니 {count > 0 && `(${count})`}
      </Link>
      <Link className="button" href="/orders">
        주문내역
      </Link>
      <Link className="button" href="/auth">
        로그인/회원가입
      </Link>
      <Link className="button" href="/admin">
        Admin
      </Link>
    </nav>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function StatusView() {
  const params = useSearchParams();
  const result = params.get('result') || 'pending';
  const method = params.get('method') || 'card';

  const copy = {
    success: {
      title: '결제가 완료되었습니다',
      tone: '#22c55e',
      description: '주문/배송 조회에서 진행 상황을 확인하세요.'
    },
    failure: {
      title: '결제에 실패했습니다',
      tone: '#ef4444',
      description: '다시 시도하거나 다른 결제 수단을 선택해주세요.'
    },
    pending: {
      title: '결제가 진행 중입니다',
      tone: '#f59e0b',
      description: '가상계좌/무통장 입금은 입금 확인 후 자동 처리됩니다.'
    }
  }[result as 'success' | 'failure' | 'pending'];

  return (
    <div className="section">
      <div className="badge" style={{ background: copy.tone, color: 'white' }}>
        {result.toUpperCase()}
      </div>
      <h1 style={{ marginBottom: 4 }}>{copy.title}</h1>
      <p className="muted">결제 수단: {method === 'virtual' ? '가상계좌/무통장' : '신용카드/간편결제'}</p>
      <p>{copy.description}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Link className="button" href="/orders">
          주문/배송 확인
        </Link>
        <Link className="button primary" href="/products">
          계속 쇼핑하기
        </Link>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import { Suspense } from 'react';
import StatusView from './status-view';

export const metadata: Metadata = {
  title: '결제 상태'
};

export default function StatusPage() {
  return (
    <Suspense fallback={<div className="section">결제 상태 확인 중...</div>}>
      <StatusView />
    </Suspense>
  );
}

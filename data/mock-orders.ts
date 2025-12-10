export type OrderStatus = '배송준비' | '배송중' | '배송완료' | '결제대기' | '결제실패';

export type Order = {
  id: string;
  status: OrderStatus;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  paymentMethod: string;
  createdAt: string;
};

export const orders: Order[] = [
  {
    id: 'ORD-240001',
    status: '배송중',
    items: [
      { name: '미니멀 블랙 백팩', quantity: 1, price: 89000 },
      { name: '컴포트 러닝화', quantity: 1, price: 129000 }
    ],
    total: 218000,
    paymentMethod: '신용카드',
    createdAt: '2024-12-18'
  },
  {
    id: 'ORD-240002',
    status: '결제대기',
    items: [{ name: '울 블렌드 코트', quantity: 1, price: 289000 }],
    total: 289000,
    paymentMethod: '가상계좌',
    createdAt: '2024-12-20'
  }
];

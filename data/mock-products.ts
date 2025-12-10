export type ProductOption = {
  label: string;
  values: string[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sales: number;
  createdAt: string;
  image: string;
  options?: ProductOption[];
};

export const products: Product[] = [
  {
    id: 'p-001',
    name: '미니멀 블랙 백팩',
    description: '노트북 전용 포켓과 생활 방수 기능을 제공하는 데일리 백팩',
    price: 89000,
    category: '가방',
    sales: 2400,
    createdAt: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80',
    options: [
      { label: '색상', values: ['블랙', '네이비'] },
      { label: '사이즈', values: ['M', 'L'] }
    ]
  },
  {
    id: 'p-002',
    name: '컴포트 러닝화',
    description: '쿠셔닝이 우수한 일상/조깅용 러닝화',
    price: 129000,
    category: '신발',
    sales: 5200,
    createdAt: '2024-10-12',
    image: 'https://images.unsplash.com/photo-1528701800489-20be9c1c9460?auto=format&fit=crop&w=800&q=80',
    options: [{ label: '사이즈', values: ['240', '250', '260', '270'] }]
  },
  {
    id: 'p-003',
    name: '에센셜 코튼 셔츠',
    description: '흡습성이 좋은 40수 코튼 원단의 베이직 셔츠',
    price: 69000,
    category: '상의',
    sales: 3100,
    createdAt: '2024-09-01',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    options: [
      { label: '색상', values: ['화이트', '라이트블루'] },
      { label: '사이즈', values: ['S', 'M', 'L', 'XL'] }
    ]
  },
  {
    id: 'p-004',
    name: '울 블렌드 코트',
    description: '보온성과 핏을 모두 잡은 겨울용 코트',
    price: 289000,
    category: '아우터',
    sales: 950,
    createdAt: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    options: [{ label: '색상', values: ['차콜', '카멜'] }]
  },
  {
    id: 'p-005',
    name: '크로스바디 스몰백',
    description: '필수품만 가볍게 담을 수 있는 미니 크로스백',
    price: 54000,
    category: '가방',
    sales: 4100,
    createdAt: '2024-07-07',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
  }
];

export const categories = ['전체', '가방', '신발', '상의', '아우터'];

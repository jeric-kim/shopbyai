import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Nav from './components/nav';

export const metadata: Metadata = {
  title: 'ShopByAI Commerce',
  description: 'AI assisted commerce experience prototype'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="layout">
          <header>
            <Nav />
          </header>
          <Providers>
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}

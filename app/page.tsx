import { TwoColGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="flex h-[70vh] w-full items-center justify-center">Animation placeholder</div>
      <TwoColGrid />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

import { Suspense } from 'react';
import { ProductsView } from '@/views/PageViews';
export const metadata = { title: 'Products' };
export default function Page() {
  return (
    <Suspense fallback={null}>
      <ProductsView />
    </Suspense>
  );
}

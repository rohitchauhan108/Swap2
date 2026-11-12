'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import FloatingContactDock from '@/components/ui/FloatingContactDock';
import ProductDetailModal from '@/components/ui/ProductDetailModal';
import CustomCursor from '@/components/ui/CustomCursor';

const SiteContext = createContext(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used inside <SiteShell>');
  return ctx;
}

/** Maps the old route ids ('home', 'products', ...) to real URLs. */
function buildUrl(route, params = {}) {
  const base = route === 'home' ? '/' : `/${route}`;
  const qs = new URLSearchParams();
  if (params.category) qs.set('category', params.category);
  if (params.system) qs.set('system', params.system);
  const query = qs.toString();
  return query ? `${base}?${query}` : base;
}

export default function SiteShell({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Header expects 'home' | 'about' | 'products' ...
  const currentRoute = pathname === '/' ? 'home' : pathname.split('/')[1] || 'home';

  const navigateTo = useCallback(
    (route, params = {}) => {
      router.push(buildUrl(route, params));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [router]
  );

  const openQuote = useCallback(() => {
    router.push('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [router]);

  const value = {
    navigateTo,
    openQuote,
    selectProduct: setSelectedProduct,
  };

  return (
    <SiteContext.Provider value={value}>
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#1E293B]">
        <CustomCursor />
        <Header
          currentRoute={currentRoute}
          onNavigate={navigateTo}
          onOpenQuote={() => openQuote()}
        />

        <main className="flex-1">{children}</main>

        <Footer currentRoute={currentRoute} onNavigate={navigateTo} onOpenQuote={() => openQuote()} />

        <ProductDetailModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuote={openQuote}
        />

        <FloatingContactDock />
      </div>
    </SiteContext.Provider>
  );
}

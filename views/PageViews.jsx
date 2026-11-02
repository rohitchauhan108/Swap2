'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useSite } from '@/components/SiteShell';
import HomePage from '@/page-components/HomePage';
import AboutPage from '@/page-components/AboutPage';
import ProductsPage from '@/page-components/ProductsPage';
import ProjectsPage from '@/page-components/ProjectsPage';
import BrandsPage from '@/page-components/BrandsPage';
import ContactPage from '@/page-components/ContactPage';

export function HomeView() {
  const { navigateTo, openQuote, selectProduct } = useSite();
  return <HomePage onNavigate={navigateTo} onOpenQuote={openQuote} onSelectProduct={selectProduct} />;
}

export function AboutView() {
  const { navigateTo, openQuote } = useSite();
  return <AboutPage onNavigate={navigateTo} onOpenQuote={openQuote} />;
}

export function ProductsView() {
  const { openQuote, selectProduct } = useSite();
  const params = useSearchParams();
  return (
    <ProductsPage
      initialCategory={params.get('category') || undefined}
      initialSystem={params.get('system') || undefined}
      onOpenQuote={openQuote}
      onSelectProduct={selectProduct}
    />
  );
}

export function ProjectsView() {
  const { navigateTo, openQuote } = useSite();
  return <ProjectsPage onNavigate={navigateTo} onOpenQuote={openQuote} />;
}

export function BrandsView() {
  const { navigateTo, openQuote } = useSite();
  return <BrandsPage onNavigate={navigateTo} onOpenQuote={openQuote} />;
}

export function ContactView() {
  return <ContactPage />;
}

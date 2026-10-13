import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { LEGAL_PAGES } from '../data/legalPages';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LegalContent } from '../components/LegalContent';
import { useLegalSeo } from '../hooks/useLegalSeo';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const pageConfig = LEGAL_PAGES[location.pathname];

  // Dynamic SEO and meta tags
  useLegalSeo(pageConfig);

  // If path is not found in LEGAL_PAGES, redirect to 404
  if (!pageConfig) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#1C1917]">
      <Header currentConfig={pageConfig} />

      <main className="flex-1 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <LegalContent content={pageConfig.content} />
      </main>

      <Footer currentConfig={pageConfig} />
    </div>
  );
};

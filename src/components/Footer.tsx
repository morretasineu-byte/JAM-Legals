import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS_BY_LANG, type Language, type LegalPageConfig } from '../data/legalPages';

interface FooterProps {
  currentConfig?: LegalPageConfig;
}

export const Footer: React.FC<FooterProps> = ({ currentConfig }) => {
  const location = useLocation();
  const currentLang: Language = currentConfig?.lang ?? (location.pathname.startsWith('/es') ? 'es' : 'ca');
  const navItems = NAV_ITEMS_BY_LANG[currentLang];
  const equivalentPath = currentConfig?.equivalentPath ?? (currentLang === 'ca' ? '/es/aviso-legal' : '/ca/avis-legal');

  return (
    <footer className="border-t border-[#E7E2D8] bg-[#F8F7F4] mt-16 sm:mt-24 py-10 sm:py-12">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs sm:text-sm text-[#57534E]">
          {/* Enllaços als tres documents de l'idioma actual */}
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
            aria-label={currentLang === 'ca' ? 'Enllaços legals del peu' : 'Enlaces legales del pie'}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors focus-visible:outline-2 focus-visible:outline-[#8C3A18] rounded-xs ${
                    isActive
                      ? 'text-[#8C3A18] font-semibold'
                      : 'hover:text-[#1C1917]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Copyright i selector d'idioma */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-[#E7E2D8]/80">
            <span className="font-medium text-[#78716C]">
              © SELLATS JAM
            </span>

            <div className="flex items-center gap-2" role="navigation" aria-label="Selector d'idioma peu">
              <Link
                to={currentLang === 'ca' ? location.pathname : equivalentPath}
                className={`px-1.5 py-0.5 text-xs font-semibold rounded-xs transition-colors ${
                  currentLang === 'ca'
                    ? 'text-[#8C3A18] underline underline-offset-4 decoration-[#8C3A18]'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
                aria-current={currentLang === 'ca' ? 'true' : undefined}
              >
                CA
              </Link>
              <span className="text-[#E7E2D8]" aria-hidden="true">/</span>
              <Link
                to={currentLang === 'es' ? location.pathname : equivalentPath}
                className={`px-1.5 py-0.5 text-xs font-semibold rounded-xs transition-colors ${
                  currentLang === 'es'
                    ? 'text-[#8C3A18] underline underline-offset-4 decoration-[#8C3A18]'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
                aria-current={currentLang === 'es' ? 'true' : undefined}
              >
                ES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_SITE_URL } from '../config';
import { NAV_ITEMS_BY_LANG, type Language, type LegalPageConfig } from '../data/legalPages';

interface HeaderProps {
  currentConfig?: LegalPageConfig;
}

export const Header: React.FC<HeaderProps> = ({ currentConfig }) => {
  const location = useLocation();
  const currentLang: Language = currentConfig?.lang ?? (location.pathname.startsWith('/es') ? 'es' : 'ca');
  const navItems = NAV_ITEMS_BY_LANG[currentLang];

  const backText = currentLang === 'ca' ? '← Tornar a la web' : '← Volver a la web';
  const equivalentPath = currentConfig?.equivalentPath ?? (currentLang === 'ca' ? '/es/aviso-legal' : '/ca/avis-legal');

  return (
    <header className="border-b border-[#E7E2D8] bg-[#FBFBF9]/95 backdrop-blur-xs sticky top-0 z-30">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fila superior: Enllaç de tornada i selector d'idioma */}
        <div className="flex items-center justify-between py-3 border-b border-[#E7E2D8]/60 text-xs sm:text-sm text-[#57534E]">
          <a
            href={MAIN_SITE_URL}
            className="inline-flex items-center gap-1.5 text-[#57534E] hover:text-[#8C3A18] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#8C3A18] rounded-xs"
            aria-label={backText}
          >
            <span>{backText}</span>
          </a>

          <div className="flex items-center gap-2" role="navigation" aria-label="Selector d'idioma">
            <span className="sr-only">Idioma / Idioma:</span>
            <Link
              to={currentLang === 'ca' ? location.pathname : equivalentPath}
              className={`px-2 py-0.5 text-xs font-semibold tracking-wider rounded-xs transition-colors ${
                currentLang === 'ca'
                  ? 'bg-[#EFECE6] text-[#8C3A18] border border-[#E7E2D8]'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
              aria-current={currentLang === 'ca' ? 'true' : undefined}
            >
              CA
            </Link>
            <span className="text-[#E7E2D8]" aria-hidden="true">|</span>
            <Link
              to={currentLang === 'es' ? location.pathname : equivalentPath}
              className={`px-2 py-0.5 text-xs font-semibold tracking-wider rounded-xs transition-colors ${
                currentLang === 'es'
                  ? 'bg-[#EFECE6] text-[#8C3A18] border border-[#E7E2D8]'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
              aria-current={currentLang === 'es' ? 'true' : undefined}
            >
              ES
            </Link>
          </div>
        </div>

        {/* Fila principal: Wordmark corporatiu */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <a
              href={MAIN_SITE_URL}
              className="inline-block font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.22em] text-[#1C1917] hover:text-[#8C3A18] transition-colors focus-visible:outline-2 focus-visible:outline-[#8C3A18] rounded-xs uppercase"
            >
              SELLATS JAM
            </a>
            <p className="text-xs tracking-wider uppercase text-[#78716C] mt-1 font-medium">
              {currentLang === 'ca' ? 'Juntes i segellats · Mallorca' : 'Juntas y sellados · Mallorca'}
            </p>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-semibold">
              {currentLang === 'ca' ? 'Documentació legal' : 'Documentación legal'}
            </span>
          </div>
        </div>

        {/* Navegació dels 3 documents de l'idioma actual */}
        <nav
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-px scrollbar-none"
          aria-label={currentLang === 'ca' ? 'Navegació de documents legals' : 'Navegación de documentos legales'}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`whitespace-nowrap px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium border-b-2 transition-all rounded-t-xs ${
                  isActive
                    ? 'border-[#8C3A18] text-[#8C3A18] font-semibold bg-[#F8F7F4]'
                    : 'border-transparent text-[#57534E] hover:text-[#1C1917] hover:border-[#E7E2D8]'
                } focus-visible:outline-2 focus-visible:outline-[#8C3A18]`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

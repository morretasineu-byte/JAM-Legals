import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_SITE_URL } from '../config';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLegalSeo } from '../hooks/useLegalSeo';

export const NotFoundPage: React.FC = () => {
  useLegalSeo(undefined, true);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#1C1917]">
      <Header />

      <main className="flex-1 w-full max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <p className="font-cinzel text-5xl sm:text-6xl font-bold text-[#8C3A18] tracking-widest mb-4">
          404
        </p>

        <h1 className="font-cinzel text-2xl sm:text-3xl font-semibold text-[#1C1917] mb-4">
          Pàgina no trobada / Página no encontrada
        </h1>

        <p className="text-base text-[#57534E] mb-10 max-w-md mx-auto leading-relaxed">
          La pàgina que esteu cercant no existeix. Podeu accedir directament a qualsevol dels documents legals de SELLATS JAM:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
          {/* Català */}
          <div className="p-6 bg-[#F8F7F4] border border-[#E7E2D8] rounded-xs">
            <h2 className="font-cinzel text-sm font-semibold tracking-wider uppercase text-[#1C1917] mb-4 pb-2 border-b border-[#E7E2D8]">
              Català
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/ca/avis-legal"
                  className="text-[#8C3A18] hover:underline font-medium focus-visible:outline-2 focus-visible:outline-[#8C3A18]"
                >
                  Avís legal
                </Link>
              </li>
              <li>
                <Link
                  to="/ca/politica-de-privacitat"
                  className="text-[#8C3A18] hover:underline font-medium focus-visible:outline-2 focus-visible:outline-[#8C3A18]"
                >
                  Política de privacitat
                </Link>
              </li>
              <li>
                <Link
                  to="/ca/politica-de-galetes"
                  className="text-[#8C3A18] hover:underline font-medium focus-visible:outline-2 focus-visible:outline-[#8C3A18]"
                >
                  Política de galetes
                </Link>
              </li>
            </ul>
          </div>

          {/* Castellano */}
          <div className="p-6 bg-[#F8F7F4] border border-[#E7E2D8] rounded-xs">
            <h2 className="font-cinzel text-sm font-semibold tracking-wider uppercase text-[#1C1917] mb-4 pb-2 border-b border-[#E7E2D8]">
              Castellano
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/es/aviso-legal"
                  className="text-[#8C3A18] hover:underline font-medium focus-visible:outline-2 focus-visible:outline-[#8C3A18]"
                >
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link
                  to="/es/politica-de-privacidad"
                  className="text-[#8C3A18] hover:underline font-medium focus-visible:outline-2 focus-visible:outline-[#8C3A18]"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/es/politica-de-cookies"
                  className="text-[#8C3A18] hover:underline font-medium focus-visible:outline-2 focus-visible:outline-[#8C3A18]"
                >
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <a
            href={MAIN_SITE_URL}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#57534E] hover:text-[#8C3A18] border border-[#E7E2D8] bg-[#F8F7F4] px-5 py-2.5 rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#8C3A18]"
          >
            ← Tornar a la web
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

/**
 * ScrollToTop fa que en canviar de document o pàgina,
 * l'usuari torni a l'inici de la lectura automàticament.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Arrel redirigeix automàticament a /ca/avis-legal */}
        <Route path="/" element={<Navigate to="/ca/avis-legal" replace />} />

        {/* Rutes legals en català */}
        <Route path="/ca/avis-legal" element={<LegalPage />} />
        <Route path="/ca/politica-de-privacitat" element={<LegalPage />} />
        <Route path="/ca/politica-de-galetes" element={<LegalPage />} />

        {/* Rutes legals en castellà */}
        <Route path="/es/aviso-legal" element={<LegalPage />} />
        <Route path="/es/politica-de-privacidad" element={<LegalPage />} />
        <Route path="/es/politica-de-cookies" element={<LegalPage />} />

        {/* Pàgina 404 per a qualsevol altra ruta inexistent */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

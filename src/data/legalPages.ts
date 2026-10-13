import caAvisLegal from '../content/ca/avis-legal.md?raw';
import caPoliticaPrivacitat from '../content/ca/politica-de-privacitat.md?raw';
import caPoliticaGaletes from '../content/ca/politica-de-galetes.md?raw';

import esAvisoLegal from '../content/es/aviso-legal.md?raw';
import esPoliticaPrivacidad from '../content/es/politica-de-privacidad.md?raw';
import esPoliticaCookies from '../content/es/politica-de-cookies.md?raw';

export type Language = 'ca' | 'es';

export type LegalDocKey = 'avis-legal' | 'politica-de-privacitat' | 'politica-de-galetes';

export interface LegalPageConfig {
  path: string;
  lang: Language;
  key: LegalDocKey;
  navTitle: string;
  pageTitle: string;
  metaDescription: string;
  equivalentPath: string;
  content: string;
}

export const LEGAL_PAGES: Record<string, LegalPageConfig> = {
  '/ca/avis-legal': {
    path: '/ca/avis-legal',
    lang: 'ca',
    key: 'avis-legal',
    navTitle: 'Avís legal',
    pageTitle: 'Avís legal — SELLATS JAM',
    metaDescription: "Informació legal, titularitat i condicions d'ús de SELLATS JAM a Mallorca.",
    equivalentPath: '/es/aviso-legal',
    content: caAvisLegal,
  },
  '/ca/politica-de-privacitat': {
    path: '/ca/politica-de-privacitat',
    lang: 'ca',
    key: 'politica-de-privacitat',
    navTitle: 'Política de privacitat',
    pageTitle: 'Política de privacitat — SELLATS JAM',
    metaDescription: 'Informació sobre el tractament de dades personals i drets dels usuaris a SELLATS JAM.',
    equivalentPath: '/es/politica-de-privacidad',
    content: caPoliticaPrivacitat,
  },
  '/ca/politica-de-galetes': {
    path: '/ca/politica-de-galetes',
    lang: 'ca',
    key: 'politica-de-galetes',
    navTitle: 'Política de galetes',
    pageTitle: 'Política de galetes — SELLATS JAM',
    metaDescription: "Informació sobre l'ús de galetes tècniques i absència de rastrejadors a SELLATS JAM.",
    equivalentPath: '/es/politica-de-cookies',
    content: caPoliticaGaletes,
  },
  '/es/aviso-legal': {
    path: '/es/aviso-legal',
    lang: 'es',
    key: 'avis-legal',
    navTitle: 'Aviso legal',
    pageTitle: 'Aviso legal — SELLATS JAM',
    metaDescription: 'Información legal, titularidad y condiciones de uso de SELLATS JAM en Mallorca.',
    equivalentPath: '/ca/avis-legal',
    content: esAvisoLegal,
  },
  '/es/politica-de-privacidad': {
    path: '/es/politica-de-privacidad',
    lang: 'es',
    key: 'politica-de-privacitat',
    navTitle: 'Política de privacidad',
    pageTitle: 'Política de privacidad — SELLATS JAM',
    metaDescription: 'Información sobre el tratamiento de datos personales y derechos de los usuarios en SELLATS JAM.',
    equivalentPath: '/ca/politica-de-privacitat',
    content: esPoliticaPrivacidad,
  },
  '/es/politica-de-cookies': {
    path: '/es/politica-de-cookies',
    lang: 'es',
    key: 'politica-de-galetes',
    navTitle: 'Política de cookies',
    pageTitle: 'Política de cookies — SELLATS JAM',
    metaDescription: 'Información sobre el uso de cookies técnicas y ausencia de rastreadores en SELLATS JAM.',
    equivalentPath: '/ca/politica-de-galetes',
    content: esPoliticaCookies,
  },
};

export const NAV_ITEMS_BY_LANG: Record<Language, { path: string; title: string }[]> = {
  ca: [
    { path: '/ca/avis-legal', title: 'Avís legal' },
    { path: '/ca/politica-de-privacitat', title: 'Política de privacitat' },
    { path: '/ca/politica-de-galetes', title: 'Política de galetes' },
  ],
  es: [
    { path: '/es/aviso-legal', title: 'Aviso legal' },
    { path: '/es/politica-de-privacidad', title: 'Política de privacidad' },
    { path: '/es/politica-de-cookies', title: 'Política de cookies' },
  ],
};

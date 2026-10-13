import { useEffect } from 'react';
import { SITE_URL } from '../config';
import type { LegalPageConfig } from '../data/legalPages';

export function useLegalSeo(pageConfig?: LegalPageConfig | null, is404 = false) {
  useEffect(() => {
    if (is404) {
      document.documentElement.lang = 'ca';
      document.title = 'Pàgina no trobada — SELLATS JAM';
      return;
    }

    if (!pageConfig) return;

    // Update <html lang="...">
    document.documentElement.lang = pageConfig.lang;

    // Update document title
    document.title = pageConfig.pageTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageConfig.metaDescription);

    // Update Canonical URL
    const canonicalUrl = `${SITE_URL}${pageConfig.path}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageConfig.pageTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageConfig.metaDescription);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);

    // Update hreflang tags
    const caUrl = pageConfig.lang === 'ca' ? canonicalUrl : `${SITE_URL}${pageConfig.equivalentPath}`;
    const esUrl = pageConfig.lang === 'es' ? canonicalUrl : `${SITE_URL}${pageConfig.equivalentPath}`;

    let linkHreflangCa = document.querySelector('link[rel="alternate"][hreflang="ca"]');
    if (!linkHreflangCa) {
      linkHreflangCa = document.createElement('link');
      linkHreflangCa.setAttribute('rel', 'alternate');
      linkHreflangCa.setAttribute('hreflang', 'ca');
      document.head.appendChild(linkHreflangCa);
    }
    linkHreflangCa.setAttribute('href', caUrl);

    let linkHreflangEs = document.querySelector('link[rel="alternate"][hreflang="es"]');
    if (!linkHreflangEs) {
      linkHreflangEs = document.createElement('link');
      linkHreflangEs.setAttribute('rel', 'alternate');
      linkHreflangEs.setAttribute('hreflang', 'es');
      document.head.appendChild(linkHreflangEs);
    }
    linkHreflangEs.setAttribute('href', esUrl);

    let linkHreflangDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!linkHreflangDefault) {
      linkHreflangDefault = document.createElement('link');
      linkHreflangDefault.setAttribute('rel', 'alternate');
      linkHreflangDefault.setAttribute('hreflang', 'x-default');
      document.head.appendChild(linkHreflangDefault);
    }
    linkHreflangDefault.setAttribute('href', caUrl);
  }, [pageConfig, is404]);
}

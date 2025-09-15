import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  article,
  noindex = false
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const currentLang = i18n.language;
  const baseUrl = 'https://scolink.ink';
  const currentUrl = url || `${baseUrl}${location.pathname}`;

  // Default meta content based on language
  const defaultMeta = {
    en: {
      title: 'Scolink - School Management System | Educational Center Platform',
      description: 'Complete school management system for educational centers. Student management, attendance tracking, scheduling, payments, and analytics. Multi-language support: English, French, Arabic.',
      keywords: 'school management system, educational center management, student management software, school administration, attendance management, educational platform, scolink'
    },
    fr: {
      title: 'Scolink - Système de Gestion Scolaire | Plateforme de Centre Éducatif',
      description: 'Système complet de gestion scolaire pour les centres éducatifs. Gestion des étudiants, suivi des présences, planification, paiements et analyses. Support multilingue : Anglais, Français, Arabe.',
      keywords: 'système de gestion scolaire, gestion centre éducatif, logiciel gestion étudiants, administration scolaire, gestion présences, plateforme éducative, scolink'
    },
    ar: {
      title: 'سكولينك - نظام إدارة المدارس | منصة إدارة المراكز التعليمية',
      description: 'نظام شامل لإدارة المدارس والمراكز التعليمية. إدارة الطلاب، تتبع الحضور، الجدولة، المدفوعات، والتحليلات. دعم متعدد اللغات: الإنجليزية، الفرنسية، العربية.',
      keywords: 'نظام إدارة المدارس, إدارة المراكز التعليمية, برنامج إدارة الطلاب, إدارة المدرسة, إدارة الحضور, المنصة التعليمية, سكولينك'
    }
  };

  const currentMeta = defaultMeta[currentLang as keyof typeof defaultMeta] || defaultMeta.en;

  const finalTitle = title || currentMeta.title;
  const finalDescription = description || currentMeta.description;
  const finalKeywords = keywords || currentMeta.keywords;
  const finalImage = image || `${baseUrl}/scolink-og-image.jpg`;

  // Language-specific URLs for hreflang
  const languageUrls = {
    en: url || `${baseUrl}${location.pathname}`,
    fr: url ? url.replace('/?lang=en', '/?lang=fr').replace(/\/$/, '/?lang=fr') : `${baseUrl}${location.pathname}?lang=fr`,
    ar: url ? url.replace('/?lang=en', '/?lang=ar').replace(/\/$/, '/?lang=ar') : `${baseUrl}${location.pathname}?lang=ar`
  };

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Multilingual hreflang tags */}
      <link rel="alternate" hreflang="en" href={languageUrls.en} />
      <link rel="alternate" hreflang="fr" href={languageUrls.fr} />
      <link rel="alternate" hreflang="ar" href={languageUrls.ar} />
      <link rel="alternate" hreflang="x-default" href={languageUrls.en} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Scolink" />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : currentLang === 'fr' ? 'fr_FR' : 'ar_MA'} />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="ar_MA" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content="@scolink" />
      <meta name="twitter:creator" content="@scolink" />

      {/* Article specific tags */}
      {article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Additional SEO tags */}
      <meta name="author" content="Scolink" />
      <meta name="publisher" content="Scolink" />
      <meta name="language" content={currentLang === 'en' ? 'English' : currentLang === 'fr' ? 'French' : 'Arabic'} />
      <meta name="geo.region" content="MA" />
      <meta name="geo.country" content="Morocco" />
      <meta name="category" content="Education, Technology, Software" />
      <meta name="audience" content="Educational Institutions, School Administrators, Teachers" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />

      {/* Theme and app colors */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="Scolink" />
    </Helmet>
  );
};

export default SEO;

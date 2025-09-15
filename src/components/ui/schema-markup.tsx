import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'Organization' | 'SoftwareApplication' | 'WebSite' | 'Product' | 'FAQ' | 'HowTo' | 'Article' | 'BreadcrumbList';
  data: Record<string, any>;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData, null, 0)}
      </script>
    </Helmet>
  );
};

// Predefined schema components for common use cases
export const OrganizationSchema: React.FC<{ data?: Partial<any> }> = ({ data = {} }) => (
  <SchemaMarkup
    type="Organization"
    data={{
      name: 'Scolink',
      url: 'https://scolink.ink',
      logo: 'https://scolink.ink/favicon.svg',
      description: 'Complete school management system for educational centers with multi-language support',
      foundingDate: '2024',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Arabic']
      },
      sameAs: [
        'https://twitter.com/scolink'
      ],
      ...data
    }}
  />
);

export const SoftwareApplicationSchema: React.FC<{ data?: Partial<any> }> = ({ data = {} }) => (
  <SchemaMarkup
    type="SoftwareApplication"
    data={{
      name: 'Scolink School Management System',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      description: 'Complete school management system for educational centers. Features student management, attendance tracking, scheduling, payments, and analytics.',
      featureList: [
        'Student Management',
        'Attendance Tracking',
        'Schedule Management',
        'Payment Processing',
        'Analytics Dashboard',
        'Multi-language Support'
      ],
      inLanguage: ['en', 'fr', 'ar'],
      url: 'https://scolink.ink',
      ...data
    }}
  />
);

export const WebSiteSchema: React.FC<{ data?: Partial<any> }> = ({ data = {} }) => (
  <SchemaMarkup
    type="WebSite"
    data={{
      name: 'Scolink',
      url: 'https://scolink.ink',
      description: 'School management system for educational centers',
      inLanguage: ['en', 'fr', 'ar'],
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://scolink.ink/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      },
      ...data
    }}
  />
);

export const BreadcrumbSchema: React.FC<{ items: Array<{ name: string; item: string }> }> = ({ items }) => (
  <SchemaMarkup
    type="BreadcrumbList"
    data={{
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item
      }))
    }}
  />
);

export const FAQSchema: React.FC<{ questions: Array<{ question: string; answer: string }> }> = ({ questions }) => (
  <SchemaMarkup
    type="FAQPage"
    data={{
      mainEntity: questions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer
        }
      }))
    }}
  />
);

export const ProductSchema: React.FC<{ data?: Partial<any> }> = ({ data = {} }) => (
  <SchemaMarkup
    type="Product"
    data={{
      name: 'Scolink School Management System',
      description: 'Complete school management system for educational centers',
      brand: {
        '@type': 'Brand',
        name: 'Scolink'
      },
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150'
      },
      ...data
    }}
  />
);

export default SchemaMarkup;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Resource hints for performance optimization
export const ResourceHints: React.FC = () => (
  <Helmet>
    {/* Preconnect to external domains */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

    {/* DNS prefetch for common domains */}
    <link rel="dns-prefetch" href="//www.google-analytics.com" />
    <link rel="dns-prefetch" href="//www.googletagmanager.com" />

    {/* Preload critical resources */}
    <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
    <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />

    {/* Module preload for critical JS */}
    <link rel="modulepreload" href="/src/main.tsx" />
  </Helmet>
);

// Lazy loading wrapper with intersection observer
export const LazyLoad: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}> = ({ children, fallback = null, rootMargin = '50px', threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded, rootMargin, threshold]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
};

// Image optimization component with lazy loading and WebP support
interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  webp?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  lazy = true,
  webp = true,
  className = '',
  ...props
}) => {
  const [imageSrc, setImageSrc] = React.useState<string>('');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(!lazy);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  useEffect(() => {
    if (isInView) {
      // Check for WebP support
      const supportsWebP = webp && (() => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      })();

      setImageSrc(supportsWebP ? src.replace(/\.(jpg|jpeg|png)$/, '.webp') : src);
    }
  }, [isInView, src, webp]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
      {!isLoaded && isInView && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
    </div>
  );
};

// Critical CSS inliner for above-the-fold content
export const CriticalCSS: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Inline critical CSS for better performance
    const criticalCSS = `
      .hero-section { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
      .hero-title { font-size: clamp(2.5rem, 5vw, 4rem); }
      .hero-description { font-size: clamp(1rem, 2vw, 1.25rem); }
      .cta-button { transition: all 0.3s ease; }
      .cta-button:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');

    // Insert before other stylesheets
    const firstStylesheet = document.querySelector('link[rel="stylesheet"]');
    if (firstStylesheet) {
      firstStylesheet.parentNode?.insertBefore(style, firstStylesheet);
    } else {
      document.head.appendChild(style);
    }

    return () => {
      const criticalStyle = document.querySelector('style[data-critical]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const reportWebVitals = (metric: any) => {
      // Send to analytics service
      console.log('Web Vital:', metric);

      // You can send this to Google Analytics, etc.
      // gtag('event', metric.name, {
      //   event_category: 'Web Vitals',
      //   event_label: metric.id,
      //   value: Math.round(metric.value),
      //   non_interaction: true,
      // });
    };

    // Measure LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        reportWebVitals({
          name: 'LCP',
          value: entry.startTime,
          id: 'v3-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        });
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP observation not supported');
    }

    // Measure FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        reportWebVitals({
          name: 'FID',
          value: (entry as any).processingStart - entry.startTime,
          id: 'v3-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        });
      }
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observation not supported');
    }

    // Measure CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observation not supported');
    }

    // Report CLS on page unload
    const reportCLS = () => {
      reportWebVitals({
        name: 'CLS',
        value: clsValue,
        id: 'v3-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      });
    };

    window.addEventListener('beforeunload', reportCLS);

    return () => {
      observer.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      window.removeEventListener('beforeunload', reportCLS);
    };
  }, []);
};

// Preload critical resources
export const PreloadCriticalResources: React.FC = () => (
  <Helmet>
    {/* Preload critical fonts */}
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      as="style"
      onLoad={(e) => {
        (e.target as any).rel = 'stylesheet';
      }}
    />

    {/* Preload critical images */}
    <link rel="preload" href="/favicon.svg" as="image" />
    <link rel="preload" href="/placeholder.svg" as="image" />
  </Helmet>
);

export default {
  ResourceHints,
  LazyLoad,
  OptimizedImage,
  CriticalCSS,
  usePerformanceMonitoring,
  PreloadCriticalResources
};

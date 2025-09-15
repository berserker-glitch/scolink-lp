import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { LanguageSelector } from './LanguageSelector';

const FloatingHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home', 'Home'), href: '/' },
    { label: t('nav.features', 'Features'), href: '/features' },
    { label: t('nav.pricing', 'Pricing'), href: '/pricing' },
    { label: t('nav.capabilities', 'Capabilities'), href: '#capabilities' },
    { label: t('nav.technology', 'Technology'), href: '#technology' },
    { label: t('nav.contact', 'Contact'), href: '#cta' }
  ];

  const handleNavigation = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    // Close mobile menu
    setIsMobileMenuOpen(false);

    if (href.startsWith('/')) {
      // Navigate to different page
      if (href === '/' && location.pathname === '/') {
        // If we're already on home page, just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(href);
      }
    } else if (href.startsWith('#')) {
      // Scroll to section on current page
      const targetId = href.substring(1);
      if (targetId === 'hero' || targetId === '') {
        // Scroll to top for hero section
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 96;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary rounded-lg p-2">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-black transition-colors duration-300">
              Scolink
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => handleNavigation(item.href, e)}
                className="text-sm font-medium text-black transition-colors duration-300 hover:text-primary cursor-pointer bg-transparent border-none p-0"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Button
              variant="ghost"
              className="text-black transition-colors duration-300 hover:text-primary hover:bg-primary/10"
              onClick={() => {
                window.location.href = t('nav.loginUrl', 'https://app.scolink.ink/login');
              }}
            >
              {t('nav.signin', 'Sign In')}
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-white transition-all duration-300"
              onClick={() => {
                const heroElement = document.getElementById('hero');
                if (heroElement) {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {t('nav.getstarted', 'Get Started')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-300 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => handleNavigation(item.href, e)}
                  className="text-sm font-medium text-black transition-colors duration-300 hover:text-primary cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200/50">
                <div className="px-4 py-2">
                  <LanguageSelector />
                </div>
                <Button
                  variant="ghost"
                  className="justify-start text-black transition-colors duration-300 hover:text-primary hover:bg-primary/10"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = t('nav.loginUrl', 'https://app.scolink.ink/login');
                  }}
                >
                  {t('nav.signin', 'Sign In')}
                </Button>
                <Button
                  className="justify-start bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                >
                  {t('nav.getstarted', 'Get Started')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default FloatingHeader;

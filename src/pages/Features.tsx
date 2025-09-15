import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloatingHeader from "@/components/FloatingHeader";
import { Footer } from "@/components/ui/footer-section";
import { BreadcrumbSchema } from "@/components/ui/schema-markup";
import {
  Users,
  CreditCard,
  BookOpen,
  UserCheck,
  Calendar,
  BarChart3,
  CalendarDays,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  School,
  FileText,
  Sparkles
} from "lucide-react";

const Features = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: t('features.items.studentManagement.title'),
      description: t('features.items.studentManagement.description')
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: t('features.items.paymentTracking.title'),
      description: t('features.items.paymentTracking.description')
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: t('features.items.subjectManagement.title'),
      description: t('features.items.subjectManagement.description')
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: t('features.items.staffManagement.title'),
      description: t('features.items.staffManagement.description')
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: t('features.items.scheduling.title'),
      description: t('features.items.scheduling.description')
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.description')
    }
  ];

  const additionalFeatures = [
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: t('features.additional.eventManagement.title', 'Event Management'),
      description: t('features.additional.eventManagement.description', 'Organize and manage educational events, workshops, and special activities with comprehensive scheduling and registration.')
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t('features.additional.dashboard.title', 'Real-time Dashboard'),
      description: t('features.additional.dashboard.description', 'Comprehensive analytics dashboard with live metrics, performance indicators, and actionable insights for data-driven decisions.')
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', item: 'https://scolink.ink/' },
    { name: 'Features', item: 'https://scolink.ink/features' }
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Floating Header */}
      <FloatingHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-white/20 text-black border-black/30 backdrop-blur-sm px-6 py-2 text-base font-medium">
              {t('features.badge', 'Comprehensive Features')}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight">
              {t('features.hero.title1', 'Choose Your Plan,')}
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-primary-glow bg-clip-text text-transparent">
                {t('features.hero.title2', 'Unlock the Features')}
              </span>
            </h1>

            <p className="text-xl text-black/80 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              {t('features.hero.description', 'From our free Basic plan to the comprehensive Premium and Lifetime packages, discover which features fit your institution\'s needs. Each plan is designed to scale with your educational center\'s growth.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white px-10 py-7 text-xl font-semibold hover-lift shadow-2xl border-2 border-black">
                {t('features.hero.cta', 'Get Started Today')}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('features.core.title', 'Core Features')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('features.core.description', 'Our comprehensive suite of features covers every aspect of educational center management, designed to streamline operations and enhance educational outcomes.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift bg-gradient-card border-0 shadow-educational animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-6">Additional Features</h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Complementing our core features with powerful tools for event management and comprehensive analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift bg-gradient-card border-0 shadow-educational animate-fade-up" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
                <CardHeader>
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Scolink?</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Our platform combines powerful features with intuitive design to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Comprehensive</h4>
                <p className="text-sm opacity-90">All-in-one solution covering every aspect of educational management</p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">{t('features.benefits.userFriendly.title', 'User-Friendly')}</h4>
                <p className="text-sm opacity-90">{t('features.benefits.userFriendly.description', 'Intuitive interface designed for ease of use')}</p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">{t('features.benefits.scalable.title', 'Scalable')}</h4>
                <p className="text-sm opacity-90">{t('features.benefits.scalable.description', 'Grows with your institution\'s needs')}</p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">{t('features.benefits.secure.title', 'Secure')}</h4>
                <p className="text-sm opacity-90">{t('features.benefits.secure.description', 'Bank-level security and data protection')}</p>
              </div>
            </div>
          </div>


          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-6">{t('features.cta.title', 'Ready to Transform Your Educational Center?')}</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              {t('features.cta.description', 'Join thousands of educational institutions worldwide that trust Scolink for their management needs.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg hover-lift">
                {t('features.cta.trial', 'Start Free Trial')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white">
                {t('features.cta.demo', 'Schedule Demo')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Features;

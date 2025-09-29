import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PixelBlast from "@/components/ui/PixelBlast";
import FloatingHeader from "@/components/FloatingHeader";
import { Footer } from "@/components/ui/footer-section";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import { useIsMobile } from "@/hooks/use-mobile";
// Import images
import dashboardImage from "../images/dashboard.png";
import calendarImage from "../images/calendaar and attendace page.png";
import studentImage from "../images/student page.png";
import subjectGroupsImage from "../images/subject groups page.png";

import {
  Users,
  Calendar,
  CreditCard,
  GraduationCap,
  BarChart3,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  School,
  BookOpen,
  UserCheck,
  Monitor,
  Smartphone,
  Globe,
  Database,
  X
} from "lucide-react";

const LandingPage = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  // Scroll to top when component mounts and handle hash cleanup
  useEffect(() => {
    // Remove any hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    // Scroll to top
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

  const appPreviews = [
    {
      id: "dashboard-overview",
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.description'),
      image: dashboardImage,
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      id: "schedule-attendance",
      title: t('features.items.scheduling.title'),
      description: t('features.items.scheduling.description'),
      image: calendarImage,
      icon: <Calendar className="h-5 w-5" />
    },
    {
      id: "student-management",
      title: t('features.items.studentManagement.title'),
      description: t('features.items.studentManagement.description'),
      image: studentImage,
      icon: <Users className="h-5 w-5" />
    },
    {
      id: "payment-monitoring",
      title: t('features.items.paymentTracking.title'),
      description: t('features.items.paymentTracking.description'),
      image: subjectGroupsImage,
      icon: <CreditCard className="h-5 w-5" />
    }
  ];

  const capabilities = [
    {
      stat: t('capabilities.items.students.stat'),
      label: t('capabilities.items.students.label'),
      description: t('capabilities.items.students.description')
    },
    {
      stat: t('capabilities.items.centers.stat'),
      label: t('capabilities.items.centers.label'),
      description: t('capabilities.items.centers.description')
    },
    {
      stat: t('capabilities.items.uptime.stat'),
      label: t('capabilities.items.uptime.label'),
      description: t('capabilities.items.uptime.description')
    },
    {
      stat: t('capabilities.items.support.stat'),
      label: t('capabilities.items.support.label'),
      description: t('capabilities.items.support.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Floating Header */}
      <FloatingHeader />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <PixelBlast 
            variant="circle"
            pixelSize={3}
            color="#8B5CF6"
            patternScale={15}
            patternDensity={0.73}
            enableRipples={true}
            rippleIntensityScale={0.8}
            speed={0.3}
            edgeFade={0.3}
            transparent={true}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fade-up">
            <Badge variant="outline" className="mb-6 bg-white/20 text-black border-black/30 backdrop-blur-sm px-6 py-2 text-base font-medium">
              <School className="h-5 w-5 mr-2" />
              {t('hero.badge')}
            </Badge>

            <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl md:text-8xl'} font-black mb-8 text-black leading-tight tracking-tight`}>
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-primary-glow bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>

            <p className={`${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} text-black/80 mb-10 max-w-4xl mx-auto font-medium leading-relaxed`}>
              {t('hero.description')}
            </p>

            <div className={`flex flex-col ${isMobile ? 'gap-4' : 'sm:flex-row gap-6'} justify-center items-center mb-16`}>
              <Button
                size="lg"
                className={`bg-black hover:bg-black/90 text-white ${isMobile ? 'px-8 py-6 text-lg w-full max-w-xs' : 'px-10 py-7 text-xl'} font-semibold hover-lift shadow-2xl border-2 border-black`}
                onClick={() => window.location.href = t('nav.loginUrl', 'https://app.scolink.ink/login')}
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`hover-scale border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 ${isMobile ? 'px-8 py-6 text-lg w-full max-w-xs' : 'px-10 py-7 text-xl'}`}
                onClick={() => window.location.href = t('nav.loginUrl', 'https://app.scolink.ink/login')}
              >
                {t('hero.cta.secondary')}
              </Button>
            </div>
            
            <div className={`flex flex-wrap justify-center items-center ${isMobile ? 'gap-6' : 'gap-12'} text-base font-medium text-black/70`}>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                {t('hero.features.noSetup')}
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                {t('hero.features.freeTrial')}
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                {t('hero.features.support')}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>
          
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
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
        </div>
      </section>

      {/* Platform Capabilities */}
      <section id="capabilities" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('capabilities.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('capabilities.description')}
            </p>
          </div>
          
          <div className={`grid ${isMobile ? 'grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8`}>
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`bg-gradient-primary rounded-full ${isMobile ? 'w-20 h-20' : 'w-24 h-24'} mx-auto mb-6 flex items-center justify-center shadow-glow`}>
                  <span className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white`}>{capability.stat}</span>
                </div>
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-2`}>{capability.label}</h3>
                <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'} leading-relaxed`}>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('technology.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('technology.description')}
            </p>
          </div>
          
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational text-center animate-fade-up">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t('technology.items.security.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('technology.items.security.description')}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t('technology.items.infrastructure.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('technology.items.infrastructure.description')}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t('technology.items.accessibility.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('technology.items.accessibility.description')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your educational institution. All plans include our core features with different levels of support and customization.
            </p>
          </div>

          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-4 gap-6'} max-w-7xl mx-auto`}>
            {/* Basic Plan */}
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                <div className="text-5xl font-black text-primary mt-4">
                  $0
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Perfect for small educational centers getting started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Up to 100 students</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Student management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Basic payment tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Basic group & scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">No attendance taking</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = t('nav.loginUrl', 'https://app.scolink.ink/login')}
                >
                  {t('pricing.plans.basic.buttonText', 'Start Free')}
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan - Most Popular */}
            <Card className="hover-lift bg-gradient-primary border-0 shadow-educational relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-500 text-black px-4 py-1 text-sm font-semibold">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white">Professional</CardTitle>
                <div className="text-5xl font-black text-white mt-4">
                  $25
                  <span className="text-lg font-normal text-white/80">/month</span>
                </div>
                <CardDescription className="mt-4 text-white/90">
                  Ideal for growing educational institutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white">Up to 1,500 students</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white">Student management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white">Fluid payment tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white">Full group scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white">Staff accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white">Attendance taking</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-white text-primary hover:bg-white/90"
                  onClick={() => window.location.href = t('nav.loginUrl', 'https://app.scolink.ink/login')}
                >
                  {t('pricing.plans.professional.buttonText', 'Start Professional Plan')}
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                <div className="text-5xl font-black text-primary mt-4">
                  $50
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Complete solution for large educational institutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Unlimited subjects & students</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Student management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Everything fluid</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Teacher accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Student accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Staff accounts</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Start Premium Plan
                </Button>
              </CardContent>
            </Card>

            {/* Lifetime Plan */}
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Lifetime</CardTitle>
                <div className="text-5xl font-black text-primary mt-4">
                  $500
                  <span className="text-lg font-normal text-muted-foreground block">one-time</span>
                </div>
                <CardDescription className="mt-4">
                  Same as Premium but pay once, use forever
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Unlimited subjects & students</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Everything fluid</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Teacher & student accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Beta features access</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Get Lifetime Access
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h3 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold mb-8`}>Frequently Asked Questions</h3>
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-2 gap-8'} max-w-4xl mx-auto`}>
              <div className="text-left">
                <h4 className="font-semibold mb-2">Can I change plans anytime?</h4>
                <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold mb-2">Is there a setup fee?</h4>
                <p className="text-muted-foreground text-sm">No setup fees for any of our plans. You only pay the monthly subscription.</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold mb-2">Do you offer refunds?</h4>
                <p className="text-muted-foreground text-sm">All subscription payments are final and non-refundable. Use our free Basic plan to evaluate the service first.</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-muted-foreground text-sm">We accept all major credit cards, PayPal, and bank transfers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className={`flex flex-col ${isMobile ? 'gap-4' : 'sm:flex-row gap-4'} justify-center`}>
              <Button size="lg" variant="secondary" className={`${isMobile ? 'px-6 py-5 text-base w-full max-w-xs mx-auto' : 'px-8 py-6 text-lg'} hover-lift`}>
                {t('cta.buttons.trial')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className={`${isMobile ? 'px-6 py-5 text-base w-full max-w-xs mx-auto bg-purple-600 hover:bg-purple-500' : 'px-8 py-6 text-lg bg-purple-600 hover:bg-purple-500'} text-white border-0 transition-educational`}>
                {t('cta.buttons.sales')}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloatingHeader from "@/components/FloatingHeader";
import { Footer } from "@/components/ui/footer-section";
import { FAQSchema, BreadcrumbSchema } from "@/components/ui/schema-markup";
import {
  CheckCircle,
  X,
  ArrowRight,
  Star,
  Users,
  CreditCard,
  BarChart3,
  Calendar,
  UserCheck,
  GraduationCap,
  School,
  Sparkles
} from "lucide-react";

const Pricing = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: t('pricing.plans.basic.name', 'Basic'),
      price: t('pricing.plans.basic.price', '$0'),
      period: t('pricing.plans.basic.period', '/month'),
      description: t('pricing.plans.basic.description', 'Perfect for small educational centers getting started'),
      features: [
        { name: t('pricing.plans.basic.features.students', 'Up to 100 students'), included: true },
        { name: t('pricing.plans.basic.features.studentManagement', 'Student management'), included: true },
        { name: t('pricing.plans.basic.features.paymentTracking', 'Basic payment tracking'), included: true },
        { name: t('pricing.plans.basic.features.groupScheduling', 'Basic group & scheduling'), included: true },
        { name: t('pricing.plans.basic.features.noAttendance', 'No attendance taking'), included: false },
        { name: t('pricing.plans.basic.features.noStaffAccounts', 'No staff accounts'), included: false },
        { name: t('pricing.plans.basic.features.noTeacherAccounts', 'No teacher accounts'), included: false }
      ],
      buttonText: t('pricing.plans.basic.buttonText', 'Start Free'),
      popular: false
    },
    {
      name: t('pricing.plans.professional.name', 'Professional'),
      price: t('pricing.plans.professional.price', '$25'),
      period: t('pricing.plans.professional.period', '/month'),
      description: t('pricing.plans.professional.description', 'Ideal for growing educational institutions'),
      features: [
        { name: t('pricing.plans.professional.features.students', 'Up to 1500 students'), included: true },
        { name: t('pricing.plans.professional.features.studentManagement', 'Student management'), included: true },
        { name: t('pricing.plans.professional.features.paymentTracking', 'Fluid payment tracking'), included: true },
        { name: t('pricing.plans.professional.features.groupScheduling', 'Full group scheduling'), included: true },
        { name: t('pricing.plans.professional.features.staffAccounts', 'Staff accounts'), included: true },
        { name: t('pricing.plans.professional.features.attendanceTaking', 'Attendance taking'), included: true },
        { name: t('pricing.plans.professional.features.advancedAnalytics', 'Advanced analytics'), included: true },
        { name: t('pricing.plans.professional.features.noTeacherAccounts', 'No teacher accounts'), included: false },
        { name: t('pricing.plans.professional.features.noUnlimitedSubjects', 'No unlimited subjects'), included: false }
      ],
      buttonText: t('pricing.plans.professional.buttonText', 'Start Professional Plan'),
      popular: true
    },
    {
      name: t('pricing.plans.premium.name', 'Premium'),
      price: t('pricing.plans.premium.price', '$50'),
      period: t('pricing.plans.premium.period', '/month'),
      description: t('pricing.plans.premium.description', 'Complete solution for large educational institutions'),
      features: [
        { name: t('pricing.plans.premium.features.students', 'Unlimited subjects & students'), included: true },
        { name: t('pricing.plans.premium.features.studentManagement', 'Student management'), included: true },
        { name: t('pricing.plans.premium.features.everythingFluid', 'Everything fluid'), included: true },
        { name: t('pricing.plans.premium.features.teacherAccounts', 'Teacher accounts'), included: true },
        { name: t('pricing.plans.premium.features.studentAccounts', 'Student accounts'), included: true },
        { name: t('pricing.plans.premium.features.staffAccounts', 'Staff accounts'), included: true },
        { name: t('pricing.plans.premium.features.advancedAnalytics', 'Advanced analytics'), included: true },
        { name: t('pricing.plans.premium.features.dedicatedManager', 'Dedicated account manager'), included: true }
      ],
      buttonText: t('pricing.plans.premium.buttonText', 'Start Premium Plan'),
      popular: false
    },
    {
      name: t('pricing.plans.lifetime.name', 'Lifetime'),
      price: t('pricing.plans.lifetime.price', '$500'),
      period: t('pricing.plans.lifetime.period', ' one-time'),
      description: t('pricing.plans.lifetime.description', 'Same as Premium but pay once, use forever'),
      features: [
        { name: t('pricing.plans.lifetime.features.students', 'Unlimited subjects & students'), included: true },
        { name: t('pricing.plans.lifetime.features.studentManagement', 'Student management'), included: true },
        { name: t('pricing.plans.lifetime.features.everythingFluid', 'Everything fluid'), included: true },
        { name: t('pricing.plans.lifetime.features.teacherAccounts', 'Teacher accounts'), included: true },
        { name: t('pricing.plans.lifetime.features.studentAccounts', 'Student accounts'), included: true },
        { name: t('pricing.plans.lifetime.features.staffAccounts', 'Staff accounts'), included: true },
        { name: t('pricing.plans.lifetime.features.advancedAnalytics', 'Advanced analytics'), included: true },
        { name: t('pricing.plans.lifetime.features.dedicatedManager', 'Dedicated account manager'), included: true },
        { name: t('pricing.plans.lifetime.features.betaAccess', 'Beta features access'), included: true }
      ],
      buttonText: t('pricing.plans.lifetime.buttonText', 'Get Lifetime Access'),
      popular: false
    }
  ];

  const faqs = [
    {
      question: t('pricing.faq.questions.upgrade.question', "Can I upgrade from Basic to Professional or Premium?"),
      answer: t('pricing.faq.questions.upgrade.answer', "Yes, you can upgrade your plan at any time. You'll be charged the prorated amount for the upgrade, and your new features will be available immediately.")
    },
    {
      question: t('pricing.faq.questions.freeForever.question', "Is the Basic plan really free forever?"),
      answer: t('pricing.faq.questions.freeForever.answer', "Yes! The Basic plan is completely free with no hidden fees. You can use it as long as you want with up to 100 students.")
    },
    {
      question: t('pricing.faq.questions.fluidMeaning.question', "What does 'fluid' mean for payment tracking and features?"),
      answer: t('pricing.faq.questions.fluidMeaning.answer', "Fluid means seamless, real-time processing with no delays or limitations. Payments update instantly, and all features work smoothly without restrictions.")
    },
    {
      question: t('pricing.faq.questions.refunds.question', "Do you offer refunds?"),
      answer: t('pricing.faq.questions.refunds.answer', "All subscription payments to Scolink are final and non-refundable. We strongly encourage you to start with our free Basic plan or contact our support team before upgrading to ensure our service meets your needs.")
    },
    {
      question: t('pricing.faq.questions.paymentMethods.question', "What payment methods do you accept?"),
      answer: t('pricing.faq.questions.paymentMethods.answer', "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for the Lifetime plan.")
    },
    {
      question: t('pricing.faq.questions.lifetimeAccess.question', "Is the Lifetime plan really lifetime access?"),
      answer: t('pricing.faq.questions.lifetimeAccess.answer', "Yes! The Lifetime plan gives you permanent access to all Premium features plus exclusive beta features access, all for a one-time payment of $500.")
    },
    {
      question: t('pricing.faq.questions.dataSecurity.question', "Is my data secure?"),
      answer: t('pricing.faq.questions.dataSecurity.answer', "Absolutely. We use bank-level encryption, regular security audits, and comply with GDPR and other privacy regulations.")
    },
    {
      question: t('pricing.faq.questions.training.question', "Do you offer training and onboarding?"),
      answer: t('pricing.faq.questions.training.answer', "Yes! Basic and Professional plans include self-service onboarding guides. Premium plans include live training sessions, and Lifetime plans include personalized training and migration assistance.")
    },
    {
      question: t('pricing.faq.questions.support.question', "What kind of support do you provide?"),
      answer: t('pricing.faq.questions.support.answer', "Basic plans include email support, Professional plans include priority support, Premium and Lifetime plans include dedicated account management with direct access to our development team.")
    }
  ];

  // FAQ Schema for SEO
  const faqQuestions = [
    {
      question: "Can I upgrade from Basic to Professional or Premium?",
      answer: "Yes, you can upgrade your plan at any time. You'll be charged the prorated amount for the upgrade, and your new features will be available immediately."
    },
    {
      question: "Is the Basic plan really free forever?",
      answer: "Yes! The Basic plan is completely free with no hidden fees. You can use it as long as you want with up to 100 students."
    },
    {
      question: "What does 'fluid' mean for payment tracking and features?",
      answer: "Fluid means seamless, real-time processing with no delays or limitations. Payments update instantly, and all features work smoothly without restrictions."
    },
    {
      question: "Do you offer refunds?",
      answer: "All subscription payments to Scolink are final and non-refundable. We strongly encourage you to start with our free Basic plan or contact our support team before upgrading to ensure our service meets your needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for the Lifetime plan."
    },
    {
      question: "Is the Lifetime plan really lifetime access?",
      answer: "Yes! The Lifetime plan gives you permanent access to all Premium features plus exclusive beta features access, all for a one-time payment of $500."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption, regular security audits, and comply with GDPR and other privacy regulations."
    },
    {
      question: "Do you offer training and onboarding?",
      answer: "Yes! Basic and Professional plans include self-service onboarding guides. Premium plans include live training sessions, and Lifetime plans include personalized training and migration assistance."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Basic plans include email support, Professional plans include priority support, Premium and Lifetime plans include dedicated account management with direct access to our development team."
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', item: 'https://scolink.ink/' },
    { name: 'Pricing', item: 'https://scolink.ink/pricing' }
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema questions={faqQuestions} />
      {/* Floating Header */}
      <FloatingHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-white/20 text-black border-black/30 backdrop-blur-sm px-6 py-2 text-base font-medium">
              {t('pricing.badge', 'Transparent Pricing')}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight">
              {t('pricing.hero.title1', 'Choose the Perfect Plan for')}
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-primary-glow bg-clip-text text-transparent">
                {t('pricing.hero.title2', 'Your Institution')}
              </span>
            </h1>

            <p className="text-xl text-black/80 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              {t('pricing.hero.description', 'Start free with our Basic plan for up to 100 students, upgrade to Professional for growing institutions, or choose Premium/Lifetime for unlimited access. Lifetime gives you the same Premium features but you pay once ($500) instead of monthly ($50) - plus exclusive beta features access.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{t('pricing.hero.features.freeBasic', 'Free Basic plan')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{t('pricing.hero.features.noSetupFees', 'No setup fees')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{t('pricing.hero.features.upgradeAnytime', 'Upgrade anytime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`hover-lift border-0 shadow-educational relative ${plan.popular ? 'bg-gradient-primary' : 'bg-gradient-card'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-500 text-black px-4 py-1 text-sm font-semibold">
                      {t('pricing.popular', 'Most Popular')}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-white' : ''}`}>
                    {plan.name}
                  </CardTitle>
                  <div className={`text-5xl font-black mt-4 ${plan.popular ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                    <span className={`text-lg font-normal ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`mt-4 text-sm ${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-600'}`} />
                        ) : (
                          <X className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-white/50' : 'text-gray-400'}`} />
                        )}
                        <span className={`text-sm ${plan.popular ? 'text-white' : feature.included ? '' : 'text-muted-foreground line-through'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-6 ${plan.popular ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary hover:bg-primary/90'}`}
                    onClick={() => window.location.href = t('nav.loginUrl', 'https://app.scolink.ink/login')}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Savings Banner */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Star className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">{t('pricing.bestPlan.title', 'Choose the Best Plan for You')}</h3>
                <Star className="h-8 w-8 text-primary" />
              </div>
              <p className="text-lg opacity-90 mb-6">
                {t('pricing.bestPlan.description', 'Start free with Basic, scale up to Professional for growing institutions, or go Premium for unlimited access. Lifetime plan saves you the most long-term.')}
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold">{t('pricing.bestPlan.basic.name', 'Basic Plan')}</div>
                  <div className="text-muted-foreground">{t('pricing.bestPlan.basic.price', 'Free forever')}</div>
                  <div className="font-medium">{t('pricing.bestPlan.basic.description', 'Perfect for startups')}</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="font-semibold">{t('pricing.bestPlan.professional.name', 'Professional')}</div>
                  <div className="text-muted-foreground">{t('pricing.bestPlan.professional.price', '$25/month')}</div>
                  <div className="font-medium">{t('pricing.bestPlan.professional.description', 'Best for growth')}</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="font-semibold">{t('pricing.bestPlan.premium.name', 'Premium')}</div>
                  <div className="text-muted-foreground">{t('pricing.bestPlan.premium.price', '$50/month')}</div>
                  <div className="font-medium">{t('pricing.bestPlan.premium.description', 'Full features')}</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="font-bold">{t('pricing.bestPlan.lifetime.name', 'Lifetime')}</div>
                  <div className="text-muted-foreground">{t('pricing.bestPlan.lifetime.price', '$500 once')}</div>
                  <div className="font-medium">{t('pricing.bestPlan.lifetime.description', 'Best long-term value')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('pricing.comparison.title', 'Compare All')}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> {t('pricing.comparison.subtitle', 'Features')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.comparison.description', 'See exactly what\'s included in each plan and find the perfect fit for your institution.')}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6 font-semibold">{t('pricing.comparison.table.features', 'Features')}</th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <div className="text-sm font-bold mb-1">{t('pricing.comparison.table.basic', 'Basic')}</div>
                    <div className="text-xs text-muted-foreground">{t('pricing.comparison.table.basicPrice', 'Free')}</div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <div className="text-sm font-bold mb-1">{t('pricing.comparison.table.professional', 'Professional')}</div>
                    <div className="text-xs text-muted-foreground">{t('pricing.comparison.table.professionalPrice', '$25/mo')}</div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <div className="text-sm font-bold mb-1">{t('pricing.comparison.table.premium', 'Premium')}</div>
                    <div className="text-xs text-muted-foreground">{t('pricing.comparison.table.premiumPrice', '$50/mo')}</div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <div className="text-sm font-bold mb-1">{t('pricing.comparison.table.lifetime', 'Lifetime')}</div>
                    <div className="text-xs text-muted-foreground">{t('pricing.comparison.table.lifetimePrice', '$500 once')}</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <Users className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.students', 'Students')}
                  </td>
                  <td className="text-center py-4 px-4">100</td>
                  <td className="text-center py-4 px-4">1,500</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b bg-muted/20">
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <CreditCard className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.paymentTracking', 'Payment Tracking')}
                  </td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.basicTracking', 'Basic')}</td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.fluidTracking', 'Fluid')}</td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.everythingFluid', 'Everything Fluid')}</td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.everythingFluid', 'Everything Fluid')}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <Calendar className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.groupScheduling', 'Group Scheduling')}
                  </td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.basicTracking', 'Basic')}</td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.fullScheduling', 'Full')}</td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.everythingFluid', 'Everything Fluid')}</td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.everythingFluid', 'Everything Fluid')}</td>
                </tr>
                <tr className="border-b bg-muted/20">
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <UserCheck className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.attendanceTaking', 'Attendance Taking')}
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.staffAccounts', 'Staff Accounts')}
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b bg-muted/20">
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <School className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.teacherAccounts', 'Teacher Accounts')}
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <Users className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.studentAccounts', 'Student Accounts')}
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b bg-muted/20">
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.analytics', 'Analytics & Reports')}
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.advanced', 'Advanced')}</td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.advanced', 'Advanced')}</td>
                  <td className="text-center py-4 px-4">{t('pricing.comparison.table.advanced', 'Advanced')}</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 flex items-center gap-3 font-medium">
                    <Sparkles className="h-5 w-5 text-primary" />
                    {t('pricing.comparison.table.futureFeatures', 'Future Features')}
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('pricing.faq.title', 'Frequently Asked')}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> {t('pricing.faq.subtitle', 'Questions')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.faq.description', 'Everything you need to know about our pricing and plans.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-lift bg-gradient-card border-0 shadow-educational">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('pricing.cta.title', 'Ready to Get Started?')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('pricing.cta.description', 'Choose your plan today and transform your educational institution with Scolink\'s comprehensive management platform.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg hover-lift"
                onClick={() => window.location.href = t('pricing.cta.loginUrl', 'https://app.scolink.ink/login')}
              >
                {t('pricing.cta.startTrial', 'Try Basic Plan Free')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90"
                onClick={() => window.location.href = t('pricing.cta.loginUrl', 'https://app.scolink.ink/login')}
              >
                {t('pricing.cta.contactSales', 'Contact Sales Team')}
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

export default Pricing;

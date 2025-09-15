import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PixelBlast from "@/components/ui/PixelBlast";
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
  Database
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student Management",
      description: "Complete student profiles with enrollment tracking, academic history, and progress monitoring in one centralized system."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Staff Administration", 
      description: "Manage teachers, administrators, and support staff with role-based permissions and performance tracking."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Intelligent Scheduling",
      description: "AI-powered timetable generation with automatic conflict resolution and resource optimization."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Financial Management",
      description: "Automated billing, payment processing, fee tracking, and comprehensive financial reporting."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Real-time dashboards with student performance metrics, attendance analytics, and operational insights."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Multi-Location Management",
      description: "Centrally manage multiple educational centers with location-specific settings and unified reporting."
    }
  ];

  const appPreviews = [
    {
      title: "Student Dashboard",
      description: "Intuitive student management interface with enrollment, grades, and communication tools.",
      placeholder: "Dashboard Preview - Student profiles, quick actions, recent activity",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Class Scheduling System", 
      description: "Visual timetable builder with drag-and-drop functionality and conflict detection.",
      placeholder: "Scheduling Interface - Calendar view, class assignments, room management",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard with performance metrics and financial insights.",
      placeholder: "Analytics Dashboard - Charts, KPIs, trend analysis, export options",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      title: "Mobile Application",
      description: "Native mobile apps for iOS and Android with offline capabilities.",
      placeholder: "Mobile App Screens - Student portal, parent dashboard, teacher tools",
      icon: <Smartphone className="h-5 w-5" />
    }
  ];

  const capabilities = [
    {
      stat: "50,000+",
      label: "Students Managed",
      description: "Actively managing student records across our platform"
    },
    {
      stat: "1,200+", 
      label: "Educational Centers",
      description: "Schools and institutions using Scolink worldwide"
    },
    {
      stat: "99.9%",
      label: "System Uptime",
      description: "Reliable platform with enterprise-grade infrastructure"
    },
    {
      stat: "24/7",
      label: "Support Available", 
      description: "Round-the-clock technical support and assistance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <PixelBlast 
            variant="circle"
            pixelSize={4}
            color="#8B5CF6"
            patternScale={2.5}
            patternDensity={0.8}
            enableRipples={true}
            rippleIntensityScale={0.8}
            speed={0.3}
            edgeFade={0.3}
            transparent={true}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <School className="h-4 w-4 mr-2" />
              Complete Educational Management Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-tight">
              Transform Your Educational Center
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive management system for modern educational institutions. Streamline operations, enhance learning experiences, and drive institutional success with our all-in-one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover-lift">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover-scale">
                Schedule Demo
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                30-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                Enterprise support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See Scolink in 
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our intuitive interface designed for educational excellence
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {appPreviews.map((preview, index) => (
              <div key={index} className={`animate-fade-up ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="hover-lift bg-gradient-card border-0 shadow-educational">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <div className="text-primary">
                          {preview.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{preview.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {preview.description}
                    </CardDescription>
                    
                    {/* Image Placeholder */}
                    <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg aspect-video flex items-center justify-center p-8">
                      <div className="text-center text-muted-foreground">
                        <Monitor className="h-12 w-12 mx-auto mb-3 opacity-50" />
                        <p className="text-sm font-medium mb-2">App Screenshot Placeholder</p>
                        <p className="text-xs opacity-70">{preview.placeholder}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Educational 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Management Suite</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a modern educational institution efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted Platform 
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Statistics</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the growing community of educational institutions using Scolink
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-primary rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-glow">
                  <span className="text-2xl font-bold text-white">{capability.stat}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{capability.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built with 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Modern Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade infrastructure ensuring reliability, security, and scalability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational text-center animate-fade-up">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Bank-level encryption, GDPR compliance, and regular security audits to protect your data.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Scalable Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Cloud-based architecture that grows with your institution, handling any number of students.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card border-0 shadow-educational text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Global Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Multi-language support, mobile responsiveness, and 24/7 accessibility from anywhere.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Your Educational Management?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of educational institutions that have transformed their operations with Scolink. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg hover-lift">
                Start 30-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg text-white border-white hover:bg-white hover:text-primary transition-educational">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-primary rounded-lg p-2">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Scolink</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-educational">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-educational">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-educational">Support Center</a>
              <a href="#" className="hover:text-primary transition-educational">API Documentation</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Scolink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
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
  Star,
  ArrowRight,
  School,
  BookOpen,
  UserCheck
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student Management",
      description: "Comprehensive student profiles, enrollment tracking, and academic progress monitoring."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Staff Management",
      description: "Manage teachers, administrators, and support staff with role-based access controls."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Scheduling",
      description: "Automated timetables, class schedules, and resource allocation with conflict detection."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Processing",
      description: "Streamlined fee collection, payment tracking, and automated billing systems."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into performance metrics, attendance, and financial reporting."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Multi-Center Support",
      description: "Manage multiple educational locations from a single, unified platform."
    }
  ];

  const benefits = [
    {
      title: "Streamlined Operations",
      description: "Reduce administrative overhead by up to 70% with automated workflows and centralized management.",
      stat: "70%",
      label: "Time Saved"
    },
    {
      title: "Enhanced Communication",
      description: "Keep parents, students, and staff connected with real-time updates and notifications.",
      stat: "95%",
      label: "Parent Satisfaction"
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics and performance insights.",
      stat: "3x",
      label: "Better Insights"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Principal, Sunrise Academy",
      content: "Scolink transformed our administrative processes. What used to take hours now takes minutes.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "IT Director, Metro Education",
      content: "The multi-center management feature is incredible. We can oversee all 12 locations effortlessly.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Administrator, Elite Learning",
      content: "Parents love the real-time updates, and our staff efficiency has improved dramatically.",
      rating: 5,
      avatar: "ET"
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
            color="#3B82F6"
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
              Educational Management Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              Modernize Your Educational Center
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline operations, enhance learning experiences, and drive success with Scolink's comprehensive management platform designed for modern educational institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover-lift">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover-scale">
                Watch Demo
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
                24/7 support
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-primary/10 rounded-full p-4">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-secondary/10 rounded-full p-4">
            <BookOpen className="h-8 w-8 text-secondary" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to handle every aspect of educational center management
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

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results for 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Educational Excellence</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-primary rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-glow">
                  <span className="text-3xl font-bold text-white">{benefit.stat}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-2 leading-relaxed">{benefit.description}</p>
                <Badge variant="outline" className="text-primary border-primary/20">
                  {benefit.label}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by 
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Education Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of educational institutions already using Scolink
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale bg-gradient-card border-0 shadow-educational animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-warning fill-warning" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Educational Center?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the educational revolution. Start your free trial today and experience the difference Scolink can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg hover-lift">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg text-white border-white hover:bg-white hover:text-primary transition-educational">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
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
              <a href="#" className="hover:text-primary transition-educational">Support</a>
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
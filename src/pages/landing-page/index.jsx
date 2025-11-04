import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DashboardPreview from './components/DashboardPreview';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Solo Leveling - Gamified Habit Tracker | Transform Your Life</title>
        <meta 
          name="description" 
          content="Transform your daily habits into an epic RPG adventure. Complete quests, gain XP, level up attributes, and rise from F to S-Rank Hunter. Join thousands of users building better habits through gamification." 
        />
        <meta name="keywords" content="habit tracker, gamification, RPG, productivity, self-improvement, solo leveling, quest system" />
        <meta property="og:title" content="Solo Leveling - Gamified Habit Tracker" />
        <meta property="og:description" content="Transform your habits into an epic RPG adventure. Level up your life, one quest at a time." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solo Leveling - Gamified Habit Tracker" />
        <meta name="twitter:description" content="Transform your habits into an epic RPG adventure. Level up your life, one quest at a time." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Dashboard Preview */}
        <DashboardPreview />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'Target',
      title: 'Quest System',
      description: 'Transform your habits into engaging quests with difficulty levels, time tracking, and completion rewards.',
      benefits: [
        'Daily, weekly, and custom recurring quests',
        'Difficulty multipliers for bonus XP',
        'Time-based completion tracking',
        'Quest templates and customization'
      ]
    },
    {
      icon: 'TrendingUp',
      title: 'XP & Progression',
      description: 'Earn experience points for every completed habit and watch your character level up with visual progression.',
      benefits: [
        'Dynamic XP calculation system',
        'Streak bonuses and multipliers',
        'Animated reward screens',
        'Visual progress indicators'
      ]
    },
    {
      icon: 'Zap',
      title: 'Attribute Development',
      description: 'Link your habits to RPG attributes like Strength, Intelligence, and Charisma to build a balanced character.',
      benefits: [
        '6 core RPG attributes to develop',
        'Habit-to-attribute linking system',
        'Visual attribute ring displays',
        'Balanced character progression'
      ]
    },
    {
      icon: 'Trophy',
      title: 'Global Leaderboards',
      description: 'Compete with hunters worldwide, climb the rankings, and showcase your dedication on global leaderboards.',
      benefits: [
        'Real-time global rankings',
        'Search and filter capabilities',
        'Rank badge progression (F to S)',
        'Public profile achievements'
      ]
    },
    {
      icon: 'Flame',
      title: 'Streak Tracking',
      description: 'Maintain your momentum with visual streak indicators and receive warnings before losing your progress.',
      benefits: [
        'Fire emoji streak indicators',
        'Streak warning notifications',
        'Multiple daily completions',
        'Streak recovery mechanics'
      ]
    },
    {
      icon: 'Award',
      title: 'Achievement System',
      description: 'Unlock achievements for milestones, special accomplishments, and consistent habit formation.',
      benefits: [
        'Milestone achievement unlocks',
        'Special accomplishment badges',
        'Progress tracking displays',
        'Social sharing capabilities'
      ]
    }
  ];

  return (
    <section id="features-section" className="py-20 md:py-32 bg-gradient-to-b from-background to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Level Up Your Life
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover the powerful features that make Solo Leveling the ultimate gamified habit tracker. 
            Transform mundane routines into epic adventures.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features?.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature?.icon}
              title={feature?.title}
              description={feature?.description}
              benefits={feature?.benefits}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <div className="bg-surface/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Ready to Begin Your Hunter Journey?
            </h3>
            <p className="text-text-secondary mb-8 text-lg">
              Join thousands of hunters who have already transformed their habits into epic adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-glow-primary">
                Start Your Journey
              </button>
              <button className="border border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
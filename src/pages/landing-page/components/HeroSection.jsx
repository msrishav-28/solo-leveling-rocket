import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();

  const rankProgression = [
    { rank: 'F', color: '#666666', label: 'F-Rank' },
    { rank: 'E', color: '#00ff00', label: 'E-Rank' },
    { rank: 'D', color: '#00d9ff', label: 'D-Rank' },
    { rank: 'C', color: '#b700ff', label: 'C-Rank' },
    { rank: 'B', color: '#ffd700', label: 'B-Rank' },
    { rank: 'A', color: '#ff0000', label: 'A-Rank' },
    { rank: 'S', color: 'linear-gradient(45deg, #00d9ff, #b700ff, #ffd700)', label: 'S-Rank' }
  ];

  const handleStartJourney = () => {
    navigate('/dashboard');
  };

  const handleLearnMore = () => {
    document.getElementById('features-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary text-glow mb-6 leading-tight">
            Solo Leveling
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Habit Tracker
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Transform your daily habits into an epic RPG adventure. Complete quests, gain XP, level up your attributes, and rise through the ranks from F to S-Class Hunter.
          </p>
        </div>

        {/* Rank Progression Visualization */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-6">
            Your Journey Awaits
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8">
            {rankProgression?.map((rank, index) => (
              <div key={rank?.rank} className="flex flex-col items-center group">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-heading font-bold border-2 transition-all duration-500 hover:scale-110 hover:shadow-lg"
                  style={{
                    background: rank?.rank === 'S' ? rank?.color : rank?.color,
                    borderColor: rank?.color,
                    boxShadow: `0 0 20px ${rank?.color}40`
                  }}
                >
                  {rank?.rank}
                </div>
                <span className="text-xs md:text-sm text-text-secondary mt-2 group-hover:text-white transition-colors">
                  {rank?.label}
                </span>
                {index < rankProgression?.length - 1 && (
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className="text-text-secondary absolute translate-x-12 md:translate-x-16 hidden md:block" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            variant="default"
            size="lg"
            onClick={handleStartJourney}
            iconName="Zap"
            iconPosition="left"
            className="w-full sm:w-auto text-lg px-8 py-4 shadow-glow-primary hover:scale-105 transition-all duration-300"
          >
            Start Your Journey
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleLearnMore}
            iconName="Info"
            iconPosition="left"
            className="w-full sm:w-auto text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Key Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { icon: 'Target', label: 'Quests Completed', value: '10,000+' },
            { icon: 'Users', label: 'Active Hunters', value: '5,000+' },
            { icon: 'Trophy', label: 'S-Rank Hunters', value: '150+' },
            { icon: 'Flame', label: 'Day Streaks', value: '365+' }
          ]?.map((stat, index) => (
            <div key={index} className="bg-surface/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
              <Icon name={stat?.icon} size={32} className="text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                {stat?.value}
              </div>
              <div className="text-sm md:text-base text-text-secondary">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
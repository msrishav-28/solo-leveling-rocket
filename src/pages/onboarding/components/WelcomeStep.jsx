import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const WelcomeStep = ({ onNext }) => {
  return (
    <div className="p-8 space-y-6">
      {/* Illustration */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-pulse-glow">
            <Icon name="Zap" size={80} className="text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-float">
            <Icon name="Star" size={24} className="text-accent-foreground" />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="text-2xl font-heading font-bold text-primary tracking-wider">
          WELCOME TO THE SYSTEM
        </h1>
        <p className="text-text-secondary leading-relaxed">
          Congratulations, Hunter!
        </p>
      </div>

      {/* Content */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <p className="text-text-primary leading-relaxed">
          You've been selected by <span className="text-primary font-semibold">The System</span>.
        </p>
        
        <div className="space-y-2">
          <p className="text-text-secondary text-sm font-semibold">
            Your mission: Form habits and grow strong.
          </p>
          
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">1.</span>
              <span>Create Quests (habits to track)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">2.</span>
              <span>Complete Quests daily</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">3.</span>
              <span>Earn XP and grow Attributes</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">4.</span>
              <span>Advance through ranks F→S</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">5.</span>
              <span>Compete on the leaderboard</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onNext}
        className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-lg
          shadow-glow-primary hover:scale-105 active:scale-98 
          transition-all duration-200 flex items-center justify-center space-x-2"
      >
        <span>Next</span>
        <Icon name="ArrowRight" size={20} />
      </button>
    </div>
  );
};

export default WelcomeStep;

import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const SuccessStep = ({ onNext, isLastStep }) => {
  return (
    <div className="p-8 space-y-6">
      {/* Success Animation */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-success/20 to-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
            <Icon name="CheckCircle" size={64} className="text-success" />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float">
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-heading font-bold text-success tracking-wider">
          ✓ QUEST COMPLETE!
        </h1>
        <p className="text-text-secondary">
          Congratulations on your first victory!
        </p>
      </div>

      {/* Rewards Display */}
      <div className="bg-input border border-success/30 rounded-lg p-6 space-y-4">
        <h3 className="text-center text-text-primary font-semibold mb-4">
          You earned:
        </h3>
        
        <div className="space-y-3">
          {/* XP Reward */}
          <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-primary" />
              </div>
              <span className="text-text-primary font-semibold">Experience Points</span>
            </div>
            <span className="text-primary font-bold text-lg">+30 XP</span>
          </div>

          {/* Constitution Reward */}
          <div className="flex items-center justify-between p-3 bg-error/10 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-error/20 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-error" />
              </div>
              <span className="text-text-primary font-semibold">Constitution</span>
            </div>
            <span className="text-error font-bold text-lg">+2 pts</span>
          </div>

          {/* Charisma Reward */}
          <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                <Icon name="Users" size={20} className="text-secondary" />
              </div>
              <span className="text-text-primary font-semibold">Charisma</span>
            </div>
            <span className="text-secondary font-bold text-lg">+1 pt</span>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-4 text-center space-y-2">
        <p className="text-text-primary font-semibold">
          Welcome to the Hunter System!
        </p>
        <p className="text-text-secondary text-sm">
          Your journey has begun. Keep completing quests to grow stronger!
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={onNext}
        className="w-full h-14 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg
          shadow-glow-primary hover:scale-105 active:scale-95 
          transition-all duration-200 flex items-center justify-center space-x-2 text-lg"
      >
        <span>{isLastStep ? 'VIEW DASHBOARD' : 'Continue'}</span>
        <Icon name="ArrowRight" size={24} />
      </button>
    </div>
  );
};

export default SuccessStep;

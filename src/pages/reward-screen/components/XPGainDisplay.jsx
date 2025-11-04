import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const XPGainDisplay = ({ baseXP, multiplier, streakBonus, timeBonus, totalXP, difficulty }) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 500);
    const timer2 = setTimeout(() => setAnimationPhase(2), 1000);
    const timer3 = setTimeout(() => setAnimationPhase(3), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Easy': return 'text-success';
      case 'Hard': return 'text-warning';
      default: return 'text-primary';
    }
  };

  const getDifficultyIcon = (diff) => {
    switch (diff) {
      case 'Easy': return 'Zap';
      case 'Hard': return 'Flame';
      default: return 'Star';
    }
  };

  return (
    <div className="text-center space-y-8">
      {/* Main XP Display */}
      <div className="relative">
        <div className={`
          text-8xl md:text-9xl font-mono font-bold text-success
          transition-all duration-1000 transform
          ${animationPhase >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
        `}>
          +{totalXP?.toLocaleString()}
        </div>
        <div className="text-2xl md:text-3xl font-heading text-text-secondary mt-2">
          Experience Points
        </div>
        
        {/* Floating XP particles */}
        {animationPhase >= 1 && (
          <>
            {[...Array(6)]?.map((_, i) => (
              <div
                key={i}
                className={`
                  absolute text-success text-2xl font-bold animate-float
                  ${i === 0 ? '-top-4 -left-8' : ''}
                  ${i === 1 ? '-top-8 right-4' : ''}
                  ${i === 2 ? 'top-8 -left-12' : ''}
                  ${i === 3 ? 'top-4 right-8' : ''}
                  ${i === 4 ? '-top-12 left-1/4' : ''}
                  ${i === 5 ? '-top-6 right-1/4' : ''}
                `}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                +{Math.floor(totalXP / 6)}
              </div>
            ))}
          </>
        )}
      </div>
      {/* Difficulty Badge */}
      <div className={`
        inline-flex items-center space-x-2 px-6 py-3 rounded-full
        bg-surface border border-border shadow-glow-primary
        transition-all duration-500 transform
        ${animationPhase >= 2 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
      `}>
        <Icon 
          name={getDifficultyIcon(difficulty)} 
          size={24} 
          className={getDifficultyColor(difficulty)} 
        />
        <span className="text-lg font-medium text-text-primary">
          {difficulty} Quest
        </span>
        <span className={`text-sm font-mono ${getDifficultyColor(difficulty)}`}>
          {multiplier}x Multiplier
        </span>
      </div>
      {/* XP Breakdown */}
      <div className={`
        bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-border
        transition-all duration-700 transform
        ${animationPhase >= 3 ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
      `}>
        <h3 className="text-xl font-heading text-text-primary mb-4 flex items-center justify-center space-x-2">
          <Icon name="Calculator" size={20} className="text-primary" />
          <span>XP Breakdown</span>
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Base XP:</span>
            <span className="font-mono text-text-primary">+{baseXP}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Difficulty Bonus:</span>
            <span className={`font-mono ${getDifficultyColor(difficulty)}`}>
              +{Math.floor(baseXP * (multiplier - 1))}
            </span>
          </div>
          
          {streakBonus > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-text-secondary flex items-center space-x-1">
                <Icon name="Flame" size={16} className="text-warning" />
                <span>Streak Bonus:</span>
              </span>
              <span className="font-mono text-warning">+{streakBonus}</span>
            </div>
          )}
          
          {timeBonus > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-text-secondary flex items-center space-x-1">
                <Icon name="Clock" size={16} className="text-accent" />
                <span>Time Bonus:</span>
              </span>
              <span className="font-mono text-accent">+{timeBonus}</span>
            </div>
          )}
          
          <div className="border-t border-border pt-3">
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-text-primary">Total XP:</span>
              <span className="font-mono text-success">+{totalXP}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPGainDisplay;
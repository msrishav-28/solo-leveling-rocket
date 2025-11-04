import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const FirstQuestStep = ({ onNext, onBack, showBack }) => {
  const sampleQuest = {
    title: 'Morning Meditation',
    attribute: 'Constitution',
    difficulty: 'Easy',
    xp: 30
  };

  return (
    <div className="p-8 space-y-6">
      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-heading font-bold text-primary tracking-wider">
          YOUR FIRST QUEST
        </h1>
        <p className="text-sm text-text-secondary">
          This is what a quest looks like
        </p>
      </div>

      {/* Sample Quest Card */}
      <div className="bg-input border-2 border-primary/30 rounded-lg p-6 space-y-4 hover:border-primary/50 transition-all duration-300 shadow-glow-primary">
        {/* Quest Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <h3 className="text-lg font-heading font-bold text-text-primary">
              {sampleQuest.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center space-x-1 text-error">
                <Icon name="Heart" size={16} />
                <span>{sampleQuest.attribute}</span>
              </span>
              <span className="text-text-secondary">|</span>
              <span className="flex items-center space-x-1 text-success">
                <Icon name="Star" size={16} />
                <span>{sampleQuest.difficulty}</span>
              </span>
              <span className="text-text-secondary">|</span>
              <span className="flex items-center space-x-1 text-primary font-semibold">
                <Icon name="Zap" size={16} />
                <span>{sampleQuest.xp} XP</span>
              </span>
            </div>
          </div>
        </div>

        {/* Quest Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          Practice mindfulness meditation for 15 minutes to increase focus and mental clarity.
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-2">
          <button className="flex-1 h-10 bg-primary text-primary-foreground font-semibold rounded-lg
            hover:scale-105 active:scale-95 transition-all duration-200 text-sm">
            Use Template
          </button>
          <button className="flex-1 h-10 bg-input border border-primary text-primary font-semibold rounded-lg
            hover:bg-primary/10 transition-all duration-200 text-sm">
            Customize
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-surface/50 border border-border rounded-lg p-4">
        <p className="text-text-secondary text-sm text-center leading-relaxed">
          This is a quest. Complete it daily to earn <span className="text-primary font-semibold">XP</span> and 
          level up your <span className="text-error font-semibold">Constitution</span>.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-3">
        {showBack && (
          <button
            onClick={onBack}
            className="h-12 px-6 bg-input border border-border text-text-secondary font-semibold rounded-lg
              hover:border-primary hover:text-primary transition-all duration-200 flex items-center space-x-2"
          >
            <Icon name="ArrowLeft" size={20} />
            <span>Back</span>
          </button>
        )}
        <button
          onClick={onNext}
          className="flex-1 h-12 bg-primary text-primary-foreground font-bold rounded-lg
            shadow-glow-primary hover:scale-105 active:scale-98 
            transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>Next</span>
          <Icon name="ArrowRight" size={20} />
        </button>
      </div>
    </div>
  );
};

export default FirstQuestStep;

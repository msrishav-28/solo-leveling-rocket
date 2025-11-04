import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const CompleteQuestStep = ({ onNext, onBack, showBack }) => {
  return (
    <div className="p-8 space-y-6">
      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-heading font-bold text-primary tracking-wider">
          COMPLETE YOUR FIRST QUEST
        </h1>
        <p className="text-sm text-text-secondary">
          Click to complete and see your rewards!
        </p>
      </div>

      {/* Interactive Quest Card */}
      <div className="bg-input border-2 border-primary/50 rounded-lg p-6 space-y-4 animate-pulse-glow">
        {/* Quest Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div className="w-6 h-6 rounded border-2 border-primary flex items-center justify-center mt-1 bg-input">
              <div className="w-3 h-3 rounded-sm"></div>
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-lg font-heading font-bold text-text-primary">
                Morning Meditation
              </h3>
              <div className="flex items-center space-x-3 text-xs">
                <span className="flex items-center space-x-1 text-error">
                  <Icon name="Heart" size={14} />
                  <span>Constitution</span>
                </span>
                <span className="text-text-secondary">|</span>
                <span className="flex items-center space-x-1 text-success">
                  <Icon name="Star" size={14} />
                  <span>Easy</span>
                </span>
                <span className="text-text-secondary">|</span>
                <span className="flex items-center space-x-1 text-primary font-semibold">
                  <Icon name="Zap" size={14} />
                  <span>30 XP</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Prompt */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
          <p className="text-primary font-semibold text-sm mb-2">
            Ready to earn your first XP?
          </p>
          <p className="text-text-secondary text-xs">
            Tap the button below to complete this quest
          </p>
        </div>
      </div>

      {/* Complete Button (Prominent) */}
      <button
        onClick={onNext}
        className="w-full h-14 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg
          shadow-glow-primary hover:scale-105 active:scale-95 
          transition-all duration-200 flex items-center justify-center space-x-2 text-lg"
      >
        <Icon name="CheckCircle" size={24} />
        <span>COMPLETE QUEST</span>
        <Icon name="ArrowRight" size={24} />
      </button>

      {/* Navigation */}
      {showBack && (
        <button
          onClick={onBack}
          className="w-full h-10 bg-input border border-border text-text-secondary font-semibold rounded-lg
            hover:border-primary hover:text-primary transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Icon name="ArrowLeft" size={18} />
          <span>Back</span>
        </button>
      )}
    </div>
  );
};

export default CompleteQuestStep;

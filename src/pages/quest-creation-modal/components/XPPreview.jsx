import React from 'react';
import Icon from '../../../components/AppIcon';

const XPPreview = ({ questType, difficulty, selectedAttributes, questTitle }) => {
  const calculateBaseXP = () => {
    const baseValues = {
      daily: 50,
      recurring: 75,
      oneTime: 100
    };
    return baseValues?.[questType] || 50;
  };

  const getDifficultyMultiplier = () => {
    const multipliers = {
      easy: 0.7,
      normal: 1.0,
      hard: 1.5
    };
    return multipliers?.[difficulty] || 1.0;
  };

  const getAttributeBonus = () => {
    return selectedAttributes?.length * 10;
  };

  const baseXP = calculateBaseXP();
  const multiplier = getDifficultyMultiplier();
  const attributeBonus = getAttributeBonus();
  const totalXP = Math.round((baseXP + attributeBonus) * multiplier);

  const streakBonus = Math.round(totalXP * 0.1); // 10% streak bonus example
  const perfectTimeBonus = Math.round(totalXP * 0.05); // 5% perfect time bonus

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-heading font-semibold text-text-primary flex items-center">
        <Icon name="Zap" size={20} className="mr-2 text-accent" />
        XP Calculation Preview
      </h3>
      <div className="bg-surface border border-border rounded-lg p-4 space-y-4">
        {/* Quest Summary */}
        <div className="pb-3 border-b border-border">
          <h4 className="font-heading font-medium text-text-primary mb-1">
            {questTitle || 'Untitled Quest'}
          </h4>
          <div className="flex items-center space-x-3 text-sm">
            <span className="text-text-secondary capitalize">{questType} Quest</span>
            <span className="text-text-secondary">•</span>
            <span className={`
              capitalize font-medium
              ${difficulty === 'easy' ? 'text-green-400' :
                difficulty === 'normal'? 'text-primary' : 'text-red-400'
              }
            `}>
              {difficulty} Difficulty
            </span>
            <span className="text-text-secondary">•</span>
            <span className="text-text-secondary">
              {selectedAttributes?.length} Attribute{selectedAttributes?.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* XP Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Base XP ({questType})</span>
            <span className="font-mono text-text-primary">+{baseXP}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">
              Attribute Bonus ({selectedAttributes?.length} × 10)
            </span>
            <span className="font-mono text-text-primary">+{attributeBonus}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">
              Difficulty Multiplier ({multiplier}x)
            </span>
            <span className={`
              font-mono font-medium
              ${difficulty === 'easy' ? 'text-green-400' :
                difficulty === 'normal'? 'text-primary' : 'text-red-400'
              }
            `}>
              ×{multiplier}
            </span>
          </div>

          <div className="border-t border-border pt-3">
            <div className="flex justify-between items-center">
              <span className="font-heading font-semibold text-text-primary">Total Base XP</span>
              <span className="font-mono font-bold text-xl text-accent">{totalXP}</span>
            </div>
          </div>
        </div>

        {/* Potential Bonuses */}
        <div className="bg-muted/30 rounded-lg p-3 space-y-2">
          <h5 className="text-sm font-heading font-medium text-text-primary mb-2">
            Potential Bonuses
          </h5>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary flex items-center">
                <Icon name="Flame" size={14} className="mr-1 text-orange-400" />
                Streak Bonus (10%)
              </span>
              <span className="font-mono text-orange-400">+{streakBonus}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary flex items-center">
                <Icon name="Clock" size={14} className="mr-1 text-blue-400" />
                Perfect Timing (5%)
              </span>
              <span className="font-mono text-blue-400">+{perfectTimeBonus}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary flex items-center">
                <Icon name="Star" size={14} className="mr-1 text-yellow-400" />
                First Completion
              </span>
              <span className="font-mono text-yellow-400">+{Math.round(totalXP * 0.2)}</span>
            </div>
          </div>
        </div>

        {/* Max Potential */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3 border border-primary/30">
          <div className="flex justify-between items-center">
            <span className="font-heading font-medium text-text-primary">
              Maximum Potential XP
            </span>
            <span className="font-mono font-bold text-xl text-primary">
              {totalXP + streakBonus + perfectTimeBonus + Math.round(totalXP * 0.2)}
            </span>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            With all bonuses applied
          </p>
        </div>
      </div>
      {/* Tips */}
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
        <div className="flex items-start space-x-2">
          <Icon name="Lightbulb" size={16} className="text-accent mt-0.5" />
          <div>
            <p className="text-sm font-medium text-accent mb-1">Pro Tips</p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Link multiple attributes for higher base XP</li>
              <li>• Higher difficulty = more XP but harder to maintain streaks</li>
              <li>• Complete quests on time for timing bonuses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPPreview;
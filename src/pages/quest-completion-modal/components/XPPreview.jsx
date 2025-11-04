import React from 'react';
import Icon from '../../../components/AppIcon';

const XPPreview = ({ baseXP, difficulty, timeSpent, currentStreak, totalXP }) => {
  const getDifficultyMultiplier = (diff) => {
    switch (diff) {
      case 'Easy': return 0.7;
      case 'Normal': return 1.0;
      case 'Hard': return 1.5;
      default: return 1.0;
    }
  };

  const getTimeBonus = (timeInSeconds) => {
    const minutes = timeInSeconds / 60;
    if (minutes >= 30) return 1.2;
    if (minutes >= 15) return 1.1;
    if (minutes >= 5) return 1.05;
    return 1.0;
  };

  const getStreakBonus = (streak) => {
    if (streak >= 30) return 1.5;
    if (streak >= 14) return 1.3;
    if (streak >= 7) return 1.2;
    if (streak >= 3) return 1.1;
    return 1.0;
  };

  const difficultyMultiplier = getDifficultyMultiplier(difficulty);
  const timeBonus = getTimeBonus(timeSpent);
  const streakBonus = getStreakBonus(currentStreak);
  
  const difficultyXP = Math.floor(baseXP * difficultyMultiplier);
  const timeBonusXP = Math.floor(difficultyXP * (timeBonus - 1));
  const streakBonusXP = Math.floor(difficultyXP * (streakBonus - 1));

  const calculatedTotal = difficultyXP + timeBonusXP + streakBonusXP;

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    if (minutes < 1) return `${seconds}s`;
    return `${minutes}m ${seconds % 60}s`;
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={16} className="text-accent-foreground" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-text-primary">
          XP Calculation Preview
        </h3>
      </div>

      <div className="space-y-4">
        {/* Base XP */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <Icon name="Star" size={16} className="text-text-secondary" />
            <span className="text-text-secondary">Base XP</span>
          </div>
          <span className="font-mono font-bold text-text-primary">
            +{baseXP}
          </span>
        </div>

        {/* Difficulty Multiplier */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <Icon name="Target" size={16} className="text-warning" />
            <span className="text-text-secondary">
              {difficulty} Difficulty ({difficultyMultiplier}x)
            </span>
          </div>
          <span className="font-mono font-bold text-warning">
            {difficultyXP}
          </span>
        </div>

        {/* Time Bonus */}
        {timeSpent > 0 && (
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span className="text-text-secondary">
                Time Bonus ({formatTime(timeSpent)})
              </span>
            </div>
            <span className="font-mono font-bold text-primary">
              +{timeBonusXP}
            </span>
          </div>
        )}

        {/* Streak Bonus */}
        {currentStreak > 0 && (
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" size={16} className="text-success" />
              <span className="text-text-secondary">
                Streak Bonus ({currentStreak} days)
              </span>
            </div>
            <span className="font-mono font-bold text-success">
              +{streakBonusXP}
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-border my-4"></div>

        {/* Total XP */}
        <div className="flex items-center justify-between py-2 bg-primary/10 rounded-lg px-4">
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="text-lg font-heading font-semibold text-primary">
              Total XP Reward
            </span>
          </div>
          <span className="text-2xl font-mono font-bold text-primary text-glow">
            +{totalXP || calculatedTotal}
          </span>
        </div>
      </div>

      {/* Bonus Information */}
      <div className="mt-4 p-3 bg-muted rounded-lg">
        <div className="text-xs text-text-secondary space-y-1">
          <div className="flex items-center space-x-1">
            <Icon name="Info" size={12} className="text-primary" />
            <span>Time bonuses: 5min (+5%), 15min (+10%), 30min+ (+20%)</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Info" size={12} className="text-primary" />
            <span>Streak bonuses: 3d (+10%), 7d (+20%), 14d (+30%), 30d+ (+50%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPPreview;
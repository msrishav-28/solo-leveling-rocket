import React from 'react';
import Icon from '../../../components/AppIcon';

const StreakInfo = ({ currentStreak, questType, lastCompletedDate }) => {
  const getStreakStatus = () => {
    if (!lastCompletedDate) return 'new';
    
    const today = new Date();
    const lastCompleted = new Date(lastCompletedDate);
    const daysDiff = Math.floor((today - lastCompleted) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 0) return 'completed-today';
    if (daysDiff === 1) return 'continue';
    if (daysDiff > 1) return 'broken';
    
    return 'new';
  };

  const getStreakMessage = () => {
    const status = getStreakStatus();
    
    switch (status) {
      case 'new':
        return {
          icon: 'Sparkles',
          color: 'text-primary',
          bgColor: 'bg-primary/10',
          message: 'Start your streak journey!',
          detail: 'Complete this quest to begin building your streak.'
        };
      case 'completed-today':
        return {
          icon: 'CheckCircle',
          color: 'text-success',
          bgColor: 'bg-success/10',
          message: 'Already completed today!',
          detail: 'You can still complete this quest for additional XP.'
        };
      case 'continue':
        return {
          icon: 'Flame',
          color: 'text-warning',
          bgColor: 'bg-warning/10',
          message: `Continue your ${currentStreak}-day streak!`,
          detail: 'Complete this quest to maintain your momentum.'
        };
      case 'broken':
        return {
          icon: 'AlertTriangle',
          color: 'text-destructive',
          bgColor: 'bg-destructive/10',
          message: 'Streak was broken',
          detail: 'Complete this quest to start a new streak.'
        };
      default:
        return {
          icon: 'Target',
          color: 'text-text-secondary',
          bgColor: 'bg-muted',
          message: 'Quest ready',
          detail: 'Complete this quest to earn XP.'
        };
    }
  };

  const getStreakTier = (streak) => {
    if (streak >= 100) return { name: 'Legendary', color: 'text-accent', emoji: '👑' };
    if (streak >= 50) return { name: 'Master', color: 'text-secondary', emoji: '💎' };
    if (streak >= 30) return { name: 'Expert', color: 'text-warning', emoji: '⭐' };
    if (streak >= 14) return { name: 'Advanced', color: 'text-primary', emoji: '🔥' };
    if (streak >= 7) return { name: 'Intermediate', color: 'text-success', emoji: '✨' };
    if (streak >= 3) return { name: 'Beginner', color: 'text-text-primary', emoji: '🌟' };
    return { name: 'Novice', color: 'text-text-secondary', emoji: '⚡' };
  };

  const streakInfo = getStreakMessage();
  const streakTier = getStreakTier(currentStreak);

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${streakInfo?.bgColor}`}>
          <Icon name={streakInfo?.icon} size={16} className={streakInfo?.color} />
        </div>
        <h3 className="text-lg font-heading font-semibold text-text-primary">
          Streak Information
        </h3>
      </div>
      {/* Current Streak Display */}
      <div className="flex items-center justify-between mb-4 p-4 bg-muted rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{streakTier?.emoji}</div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-mono font-bold text-primary">
                {currentStreak}
              </span>
              <span className="text-text-secondary">days</span>
            </div>
            <div className={`text-sm font-medium ${streakTier?.color}`}>
              {streakTier?.name} Streak
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-text-secondary">Quest Type</div>
          <div className="font-medium text-text-primary capitalize">
            {questType}
          </div>
        </div>
      </div>
      {/* Streak Status Message */}
      <div className={`p-4 rounded-lg ${streakInfo?.bgColor} border border-opacity-30`}>
        <div className="flex items-start space-x-3">
          <Icon name={streakInfo?.icon} size={20} className={streakInfo?.color} />
          <div>
            <div className={`font-medium ${streakInfo?.color} mb-1`}>
              {streakInfo?.message}
            </div>
            <div className="text-sm text-text-secondary">
              {streakInfo?.detail}
            </div>
          </div>
        </div>
      </div>
      {/* Streak Milestones */}
      {currentStreak > 0 && (
        <div className="mt-4">
          <div className="text-sm font-medium text-text-primary mb-2">
            Next Milestone
          </div>
          <div className="space-y-2">
            {[3, 7, 14, 30, 50, 100]?.map((milestone) => {
              if (milestone <= currentStreak) return null;
              
              const progress = (currentStreak / milestone) * 100;
              const daysLeft = milestone - currentStreak;
              
              return (
                <div key={milestone} className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">
                    {milestone} days ({daysLeft} to go)
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-text-secondary font-mono">
                      {Math.floor(progress)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default StreakInfo;
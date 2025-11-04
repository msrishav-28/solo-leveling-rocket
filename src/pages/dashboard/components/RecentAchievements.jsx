import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentAchievements = ({ achievements }) => {
  const getAchievementIcon = (type) => {
    const icons = {
      'streak': 'Flame',
      'level': 'TrendingUp',
      'quest': 'Target',
      'attribute': 'Zap',
      'rank': 'Crown',
      'milestone': 'Award'
    };
    return icons?.[type] || 'Award';
  };

  const getAchievementColor = (rarity) => {
    const colors = {
      'common': '#e0e0e0',
      'rare': '#00d9ff',
      'epic': '#b700ff',
      'legendary': '#ffd700'
    };
    return colors?.[rarity] || '#e0e0e0';
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-heading font-bold text-text-primary">
          Recent Achievements
        </h3>
        <div className="flex items-center space-x-2">
          <Icon name="Award" size={16} className="text-accent" />
          <span className="text-sm text-text-secondary">
            {achievements?.length} unlocked
          </span>
        </div>
      </div>
      {achievements?.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="Award" size={20} className="text-text-secondary" />
          </div>
          <p className="text-text-secondary text-sm">
            Complete quests to unlock achievements!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {achievements?.map((achievement) => (
            <div
              key={achievement?.id}
              className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Achievement Icon */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-glow-primary"
                style={{ 
                  backgroundColor: `${getAchievementColor(achievement?.rarity)}20`,
                  border: `2px solid ${getAchievementColor(achievement?.rarity)}`
                }}
              >
                <Icon 
                  name={getAchievementIcon(achievement?.type)} 
                  size={18} 
                  style={{ color: getAchievementColor(achievement?.rarity) }}
                />
              </div>

              {/* Achievement Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-sm font-medium text-text-primary">
                    {achievement?.title}
                  </h4>
                  <span 
                    className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide"
                    style={{ 
                      backgroundColor: `${getAchievementColor(achievement?.rarity)}20`,
                      color: getAchievementColor(achievement?.rarity)
                    }}
                  >
                    {achievement?.rarity}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">
                  {achievement?.description}
                </p>
              </div>

              {/* Achievement Reward */}
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={14} className="text-accent" />
                <span className="text-sm font-bold text-accent font-mono">
                  +{achievement?.xpReward} XP
                </span>
              </div>

              {/* Time Earned */}
              <div className="text-xs text-text-secondary">
                {achievement?.timeEarned}
              </div>
            </div>
          ))}
        </div>
      )}
      {achievements?.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <button className="w-full text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
            View All Achievements
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentAchievements;
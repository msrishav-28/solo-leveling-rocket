import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const Achievements = ({ achievements }) => {
  const getRarityColor = (rarity) => {
    const colors = {
      'common': 'border-text-secondary text-text-secondary',
      'uncommon': 'border-success text-success',
      'rare': 'border-primary text-primary',
      'epic': 'border-secondary text-secondary',
      'legendary': 'border-accent text-accent'
    };
    return colors[rarity] || colors['common'];
  };

  const getRarityBg = (rarity) => {
    const colors = {
      'common': 'bg-text-secondary/10',
      'uncommon': 'bg-success/10',
      'rare': 'bg-primary/10',
      'epic': 'bg-secondary/10',
      'legendary': 'bg-accent/10'
    };
    return colors[rarity] || colors['common'];
  };

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-primary tracking-wider">
          ACHIEVEMENTS
        </h2>
        <span className="text-sm text-text-secondary">
          {unlockedAchievements.length} / {achievements.length} Unlocked
        </span>
      </div>

      {/* Unlocked Achievements */}
      <div className="space-y-3 mb-6">
        {unlockedAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`
              flex items-center space-x-4 p-4 rounded-lg border
              ${getRarityColor(achievement.rarity)} ${getRarityBg(achievement.rarity)}
              hover:scale-102 transition-all duration-200
            `}
          >
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getRarityColor(achievement.rarity)} ${getRarityBg(achievement.rarity)}`}>
              <Icon name="Trophy" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-heading font-bold text-text-primary">
                  {achievement.title}
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded ${getRarityColor(achievement.rarity)} border uppercase font-semibold`}>
                  {achievement.rarity}
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                {achievement.description}
              </p>
              <p className="text-xs text-text-secondary mt-1">
                <Icon name="Calendar" size={12} className="inline mr-1" />
                {achievement.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Locked Achievements */}
      {lockedAchievements.length > 0 && (
        <>
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wide">
              Locked Achievements
            </h3>
            <div className="space-y-3">
              {lockedAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-input border border-border opacity-60"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-border bg-muted flex items-center justify-center">
                    <Icon name="Lock" size={20} className="text-text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-heading font-bold text-text-secondary">
                        {achievement.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded border border-border text-text-secondary uppercase font-semibold">
                        {achievement.rarity}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Achievements;

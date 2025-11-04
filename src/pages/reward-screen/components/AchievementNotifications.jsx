import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AchievementNotifications = ({ newAchievements }) => {
  const [visibleAchievements, setVisibleAchievements] = useState([]);

  useEffect(() => {
    if (newAchievements && newAchievements?.length > 0) {
      newAchievements?.forEach((achievement, index) => {
        setTimeout(() => {
          setVisibleAchievements(prev => [...prev, achievement]);
        }, (index + 1) * 1000);
      });
    }
  }, [newAchievements]);

  const getAchievementIcon = (type) => {
    switch (type) {
      case 'streak': return 'Flame';
      case 'completion': return 'CheckCircle';
      case 'milestone': return 'Trophy';
      case 'perfect': return 'Star';
      case 'dedication': return 'Heart';
      case 'consistency': return 'Calendar';
      default: return 'Award';
    }
  };

  const getAchievementColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'text-accent';
      case 'epic': return 'text-secondary';
      case 'rare': return 'text-primary';
      case 'uncommon': return 'text-success';
      default: return 'text-text-primary';
    }
  };

  const getAchievementBorder = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'border-accent shadow-glow-accent';
      case 'epic': return 'border-secondary glow-secondary';
      case 'rare': return 'border-primary glow-primary';
      case 'uncommon': return 'border-success glow-success';
      default: return 'border-border';
    }
  };

  if (!visibleAchievements || visibleAchievements?.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-heading text-text-primary mb-2 flex items-center justify-center space-x-2">
          <Icon name="Award" size={24} className="text-accent" />
          <span>New Achievements</span>
        </h3>
        <p className="text-text-secondary">
          Your dedication has unlocked new milestones!
        </p>
      </div>
      <div className="space-y-4">
        {visibleAchievements?.map((achievement, index) => (
          <div
            key={achievement?.id}
            className={`
              bg-surface/80 backdrop-blur-sm rounded-xl p-6 border-2
              ${getAchievementBorder(achievement?.rarity)}
              transform transition-all duration-700 animate-pulse-glow
              ${index === visibleAchievements?.length - 1 ? 'scale-105' : 'scale-100'}
            `}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-start space-x-4">
              {/* Achievement Icon */}
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center
                bg-gradient-to-br from-surface to-muted border-2
                ${getAchievementBorder(achievement?.rarity)}
              `}>
                <Icon 
                  name={getAchievementIcon(achievement?.type)} 
                  size={28} 
                  className={getAchievementColor(achievement?.rarity)} 
                />
              </div>
              
              {/* Achievement Details */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-heading text-text-primary">
                    {achievement?.title}
                  </h4>
                  <div className={`
                    px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                    ${achievement?.rarity === 'legendary' ? 'bg-accent/20 text-accent' : ''}
                    ${achievement?.rarity === 'epic' ? 'bg-secondary/20 text-secondary' : ''}
                    ${achievement?.rarity === 'rare' ? 'bg-primary/20 text-primary' : ''}
                    ${achievement?.rarity === 'uncommon' ? 'bg-success/20 text-success' : ''}
                    ${achievement?.rarity === 'common' ? 'bg-muted text-text-secondary' : ''}
                  `}>
                    {achievement?.rarity}
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm">
                  {achievement?.description}
                </p>
                
                {/* Achievement Rewards */}
                {achievement?.rewards && (
                  <div className="flex items-center space-x-4 text-sm">
                    {achievement?.rewards?.xp && (
                      <div className="flex items-center space-x-1 text-success">
                        <Icon name="Zap" size={16} />
                        <span className="font-mono">+{achievement?.rewards?.xp} XP</span>
                      </div>
                    )}
                    {achievement?.rewards?.title && (
                      <div className="flex items-center space-x-1 text-accent">
                        <Icon name="Crown" size={16} />
                        <span>"{achievement?.rewards?.title}"</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Progress Bar (if applicable) */}
                {achievement?.progress && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-text-secondary">
                      <span>Progress</span>
                      <span>{achievement?.progress?.current}/{achievement?.progress?.target}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          achievement?.rarity === 'legendary' ? 'bg-accent' :
                          achievement?.rarity === 'epic' ? 'bg-secondary' :
                          achievement?.rarity === 'rare'? 'bg-primary' : 'bg-success'
                        }`}
                        style={{ 
                          width: `${(achievement?.progress?.current / achievement?.progress?.target) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Unlock Animation Effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)]?.map((_, i) => (
                <div
                  key={i}
                  className={`
                    absolute text-lg animate-float
                    ${getAchievementColor(achievement?.rarity)}
                    ${i === 0 ? 'top-2 left-2' : ''}
                    ${i === 1 ? 'top-2 right-2' : ''}
                    ${i === 2 ? 'bottom-2 left-2' : ''}
                    ${i === 3 ? 'bottom-2 right-2' : ''}
                    ${i === 4 ? 'top-1/2 left-1' : ''}
                    ${i === 5 ? 'top-1/2 right-1' : ''}
                  `}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  ✨
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementNotifications;
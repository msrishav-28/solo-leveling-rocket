import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const HunterIdentity = ({ player }) => {
  const xpPercentage = ((player.currentXP - player.levelXP) / (player.nextLevelXP - player.levelXP)) * 100;

  const getRankColor = (rank) => {
    const colors = {
      'F': 'text-[#666666] border-[#666666]',
      'E': 'text-success border-success',
      'D': 'text-primary border-primary',
      'C': 'text-secondary border-secondary',
      'B': 'text-accent border-accent',
      'A': 'text-error border-error',
      'S': 'text-primary border-primary' // Will be gradient in Phase 2
    };
    return colors[rank] || colors['F'];
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-elevation-2">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className={`w-24 h-24 rounded-full border-4 ${getRankColor(player.rank)} bg-input flex items-center justify-center shadow-glow-primary text-5xl`}>
            {player.avatar}
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full border-2 border-card flex items-center justify-center">
            <Icon name="Star" size={16} className="text-primary-foreground" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4 w-full">
          <div className="space-y-1">
            <h2 className="text-2xl font-heading font-bold text-primary">
              {player.name}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <span className="flex items-center space-x-1">
                <span className={getRankColor(player.rank)}>{player.rank}-Rank</span>
                <Icon name="Star" size={14} />
              </span>
              <span>|</span>
              <span>Level {player.level}</span>
              <span>|</span>
              <span className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>Joined {player.joinedDate}</span>
              </span>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Experience Points</span>
              <span className="font-mono text-primary font-semibold">
                {player.currentXP} / {player.nextLevelXP} XP ({Math.round(xpPercentage)}%)
              </span>
            </div>
            <div className="h-5 bg-border rounded-lg overflow-hidden border border-border">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 flex items-center justify-center"
                style={{ width: `${xpPercentage}%` }}
              >
                {xpPercentage > 10 && (
                  <span className="text-xs font-bold text-white">{Math.round(xpPercentage)}%</span>
                )}
              </div>
            </div>
          </div>

          {/* Streak Info */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🔥</span>
              </div>
              <div>
                <p className="text-text-secondary text-xs">Current Streak</p>
                <p className="font-bold text-warning">{player.currentStreak} days</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="Trophy" size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-text-secondary text-xs">Best Streak</p>
                <p className="font-bold text-accent">{player.maxStreak} days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HunterIdentity;

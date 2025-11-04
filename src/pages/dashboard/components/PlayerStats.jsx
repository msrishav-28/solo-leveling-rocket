import React from 'react';
import Icon from '../../../components/AppIcon';

const PlayerStats = ({ player }) => {
  const getRankColor = (rank) => {
    const colors = {
      'F': '#666666',
      'E': '#00ff00',
      'D': '#00d9ff',
      'C': '#b700ff',
      'B': '#ffd700',
      'A': '#ff0000',
      'S': 'linear-gradient(45deg, #00d9ff, #b700ff, #ffd700)'
    };
    return colors?.[rank] || '#666666';
  };

  const getXPPercentage = () => {
    return ((player?.currentXP - player?.levelXP) / (player?.nextLevelXP - player?.levelXP)) * 100;
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          {/* Rank Badge */}
          <div className="relative">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-heading font-bold shadow-glow-primary"
              style={{ 
                background: player?.rank === 'S' ? getRankColor(player?.rank) : getRankColor(player?.rank),
                color: player?.rank === 'F' ? '#ffffff' : '#0a0e27'
              }}
            >
              {player?.rank}
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-pulse-glow">
              <Icon name="Crown" size={12} className="text-background" />
            </div>
          </div>

          {/* Player Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              {player?.name}
            </h2>
            <p className="text-text-secondary font-mono">
              Level {player?.level} Hunter
            </p>
          </div>
        </div>

        {/* Streak Counter */}
        <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
          <Icon name="Flame" size={20} className="text-accent" />
          <span className="text-lg font-bold text-accent">
            {player?.streak}
          </span>
          <span className="text-text-secondary">day streak</span>
        </div>
      </div>
      {/* XP Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-text-secondary">Experience Points</span>
          <span className="text-sm font-mono text-text-primary">
            {player?.currentXP?.toLocaleString()} / {player?.nextLevelXP?.toLocaleString()} XP
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 shadow-glow-primary"
            style={{ width: `${getXPPercentage()}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-text-secondary">
            {Math.round(getXPPercentage())}% to next level
          </span>
          <span className="text-xs text-text-secondary">
            {(player?.nextLevelXP - player?.currentXP)?.toLocaleString()} XP needed
          </span>
        </div>
      </div>
      {/* Attribute Summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {player?.attributes?.map((attr) => (
          <div key={attr?.name} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name={attr?.icon} size={16} className="text-background" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-text-secondary uppercase tracking-wide">
                {attr?.name}
              </span>
              <span className="text-lg font-bold font-mono text-text-primary">
                {attr?.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerStats;
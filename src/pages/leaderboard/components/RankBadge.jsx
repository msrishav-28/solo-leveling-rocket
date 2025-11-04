import React from 'react';

const RankBadge = ({ rank, size = 'default' }) => {
  const getRankConfig = (rank) => {
    const configs = {
      'F': { 
        color: '#666666', 
        bgColor: 'rgba(102, 102, 102, 0.1)', 
        label: 'F-Rank',
        glow: '0px 0px 8px rgba(102, 102, 102, 0.3)'
      },
      'E': { 
        color: '#00ff00', 
        bgColor: 'rgba(0, 255, 0, 0.1)', 
        label: 'E-Rank',
        glow: '0px 0px 8px rgba(0, 255, 0, 0.3)'
      },
      'D': { 
        color: '#00d9ff', 
        bgColor: 'rgba(0, 217, 255, 0.1)', 
        label: 'D-Rank',
        glow: '0px 0px 8px rgba(0, 217, 255, 0.3)'
      },
      'C': { 
        color: '#b700ff', 
        bgColor: 'rgba(183, 0, 255, 0.1)', 
        label: 'C-Rank',
        glow: '0px 0px 8px rgba(183, 0, 255, 0.3)'
      },
      'B': { 
        color: '#ffd700', 
        bgColor: 'rgba(255, 215, 0, 0.1)', 
        label: 'B-Rank',
        glow: '0px 0px 8px rgba(255, 215, 0, 0.3)'
      },
      'A': { 
        color: '#ff0000', 
        bgColor: 'rgba(255, 0, 0, 0.1)', 
        label: 'A-Rank',
        glow: '0px 0px 8px rgba(255, 0, 0, 0.3)'
      },
      'S': { 
        color: 'transparent', 
        bgColor: 'linear-gradient(45deg, #00d9ff, #b700ff, #ffd700)', 
        label: 'S-Rank',
        glow: '0px 0px 12px rgba(0, 217, 255, 0.5)',
        isGradient: true
      }
    };
    return configs?.[rank] || configs?.['F'];
  };

  const config = getRankConfig(rank);
  const sizeClasses = {
    small: 'w-6 h-6 text-xs',
    default: 'w-8 h-8 text-sm',
    large: 'w-12 h-12 text-base'
  };

  const badgeStyle = config?.isGradient 
    ? {
        background: config?.bgColor,
        boxShadow: config?.glow,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }
    : {
        backgroundColor: config?.bgColor,
        color: config?.color,
        boxShadow: config?.glow
      };

  return (
    <div 
      className={`
        ${sizeClasses?.[size]} 
        rounded-lg flex items-center justify-center font-heading font-bold
        border border-opacity-20 transition-all duration-300 hover:scale-110
        ${config?.isGradient ? 'animate-pulse-glow' : ''}
      `}
      style={badgeStyle}
      title={config?.label}
    >
      {rank}
    </div>
  );
};

export default RankBadge;
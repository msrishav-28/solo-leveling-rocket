import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const RankProgressIndicator = ({ currentRank, newRank, isRankUp }) => {
  const [showRankUp, setShowRankUp] = useState(false);

  useEffect(() => {
    if (isRankUp) {
      const timer = setTimeout(() => setShowRankUp(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isRankUp]);

  const ranks = [
    { name: 'F', color: '#666666', bgColor: 'bg-gray-600' },
    { name: 'E', color: '#00ff00', bgColor: 'bg-success' },
    { name: 'D', color: '#00d9ff', bgColor: 'bg-primary' },
    { name: 'C', color: '#b700ff', bgColor: 'bg-secondary' },
    { name: 'B', color: '#ffd700', bgColor: 'bg-accent' },
    { name: 'A', color: '#ff0000', bgColor: 'bg-destructive' },
    { name: 'S', color: 'linear-gradient(45deg, #00d9ff, #b700ff, #ffd700)', bgColor: 'bg-gradient-to-r from-primary via-secondary to-accent' }
  ];

  const getRankData = (rankName) => {
    return ranks?.find(rank => rank?.name === rankName) || ranks?.[0];
  };

  const currentRankData = getRankData(currentRank);
  const newRankData = getRankData(newRank);

  if (!isRankUp) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Rank Up Celebration */}
      {showRankUp && (
        <div className="text-center space-y-6">
          <div className="animate-pulse-glow">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent text-glow mb-4">
              RANK UP!
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <Icon name="Trophy" size={32} className="text-accent animate-float" />
              <span className="text-2xl font-heading text-text-primary">
                Congratulations, Hunter!
              </span>
              <Icon name="Trophy" size={32} className="text-accent animate-float" />
            </div>
          </div>
          
          {/* Rank Progression Visual */}
          <div className="flex items-center justify-center space-x-8">
            {/* Previous Rank */}
            <div className="text-center space-y-2">
              <div className={`
                w-20 h-20 rounded-full flex items-center justify-center
                border-4 border-gray-500 ${currentRankData?.bgColor}
                shadow-lg
              `}>
                <span 
                  className="text-3xl font-bold text-white"
                  style={{ color: currentRankData?.name === 'S' ? '#ffffff' : currentRankData?.color }}
                >
                  {currentRank}
                </span>
              </div>
              <div className="text-sm text-text-secondary">Previous</div>
            </div>
            
            {/* Arrow */}
            <div className="flex flex-col items-center space-y-2">
              <Icon name="ArrowRight" size={32} className="text-primary animate-pulse" />
              <div className="text-xs text-text-secondary">Promoted</div>
            </div>
            
            {/* New Rank */}
            <div className="text-center space-y-2">
              <div className={`
                w-24 h-24 rounded-full flex items-center justify-center
                border-4 border-accent ${newRankData?.bgColor}
                shadow-glow-accent animate-pulse-glow
              `}>
                <span 
                  className="text-4xl font-bold text-white"
                  style={{ 
                    color: newRankData?.name === 'S' ? '#ffffff' : newRankData?.color,
                    background: newRankData?.name === 'S' ? newRankData?.color : 'transparent',
                    WebkitBackgroundClip: newRankData?.name === 'S' ? 'text' : 'initial',
                    WebkitTextFillColor: newRankData?.name === 'S' ? 'transparent' : 'initial'
                  }}
                >
                  {newRank}
                </span>
              </div>
              <div className="text-sm font-bold text-accent">Current</div>
            </div>
          </div>
          
          {/* Rank Description */}
          <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-border max-w-md mx-auto">
            <h4 className="text-lg font-heading text-text-primary mb-2">
              {newRank}-Rank Hunter
            </h4>
            <p className="text-text-secondary text-sm">
              {newRank === 'S' && "You've reached the pinnacle of hunter excellence! Only the most dedicated achieve S-Rank status."}
              {newRank === 'A' && "An elite hunter with exceptional skills and unwavering dedication to growth."}
              {newRank === 'B' && "A skilled hunter who has proven their commitment to continuous improvement."}
              {newRank === 'C' && "A competent hunter building momentum and establishing strong habits."}
              {newRank === 'D' && "A developing hunter showing consistent progress and determination."}
              {newRank === 'E' && "An emerging hunter taking their first steps toward greatness."}
              {newRank === 'F' && "A new hunter beginning their journey of self-improvement."}
            </p>
          </div>
          
          {/* Celebration Effects */}
          <div className="relative">
            {[...Array(8)]?.map((_, i) => (
              <div
                key={i}
                className={`
                  absolute text-accent text-2xl animate-float
                  ${i === 0 ? '-top-8 left-1/4' : ''}
                  ${i === 1 ? '-top-12 right-1/4' : ''}
                  ${i === 2 ? 'top-0 left-1/6' : ''}
                  ${i === 3 ? 'top-0 right-1/6' : ''}
                  ${i === 4 ? '-top-6 left-1/3' : ''}
                  ${i === 5 ? '-top-6 right-1/3' : ''}
                  ${i === 6 ? '-top-10 left-1/2' : ''}
                  ${i === 7 ? 'top-2 left-1/2' : ''}
                `}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                ⭐
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RankProgressIndicator;
import React from 'react';
import Icon from '../../../components/AppIcon';

const DifficultyOverride = ({ originalDifficulty, selectedDifficulty, onDifficultyChange }) => {
  const difficulties = [
    { 
      name: 'Easy', 
      multiplier: 0.7, 
      color: 'text-success', 
      bgColor: 'bg-success/10', 
      borderColor: 'border-success/30',
      icon: 'Smile'
    },
    { 
      name: 'Normal', 
      multiplier: 1.0, 
      color: 'text-primary', 
      bgColor: 'bg-primary/10', 
      borderColor: 'border-primary/30',
      icon: 'Minus'
    },
    { 
      name: 'Hard', 
      multiplier: 1.5, 
      color: 'text-warning', 
      bgColor: 'bg-warning/10', 
      borderColor: 'border-warning/30',
      icon: 'Flame'
    }
  ];

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-heading font-semibold text-text-primary">
          Difficulty Override
        </h3>
        <div className="text-sm text-text-secondary">
          Original: <span className="text-primary font-medium">{originalDifficulty}</span>
        </div>
      </div>
      <p className="text-sm text-text-secondary mb-4">
        Adjust the difficulty based on your actual experience completing this quest.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {difficulties?.map((difficulty) => {
          const isSelected = selectedDifficulty === difficulty?.name;
          const isOriginal = originalDifficulty === difficulty?.name;
          
          return (
            <button
              key={difficulty?.name}
              onClick={() => onDifficultyChange(difficulty?.name)}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200
                hover:scale-105 hover:shadow-glow-primary
                ${isSelected 
                  ? `${difficulty?.bgColor} ${difficulty?.borderColor} shadow-glow-primary` 
                  : 'bg-muted border-border hover:border-primary/30'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center
                  ${isSelected ? difficulty?.bgColor : 'bg-surface'}
                `}>
                  <Icon 
                    name={difficulty?.icon} 
                    size={16} 
                    className={isSelected ? difficulty?.color : 'text-text-secondary'} 
                  />
                </div>
                <div className="text-left">
                  <div className={`font-medium ${isSelected ? difficulty?.color : 'text-text-primary'}`}>
                    {difficulty?.name}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {difficulty?.multiplier}x XP
                  </div>
                </div>
              </div>
              {isOriginal && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Star" size={12} className="text-accent-foreground" />
                </div>
              )}
              {isSelected && (
                <div className="absolute inset-0 rounded-lg border-2 border-primary shadow-glow-primary pointer-events-none"></div>
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-4 p-3 bg-muted rounded-lg">
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="Info" size={16} className="text-primary" />
          <span className="text-text-secondary">
            XP will be calculated based on your selected difficulty level
          </span>
        </div>
      </div>
    </div>
  );
};

export default DifficultyOverride;
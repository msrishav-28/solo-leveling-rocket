import React from 'react';
import Icon from '../../../components/AppIcon';

const DifficultySelector = ({ selectedDifficulty, onDifficultyChange }) => {
  const difficulties = [
    {
      id: 'easy',
      label: 'Easy',
      multiplier: '0.7x',
      description: 'Simple tasks, lower XP',
      icon: 'Smile',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      glowColor: 'shadow-green-400/30'
    },
    {
      id: 'normal',
      label: 'Normal',
      multiplier: '1.0x',
      description: 'Standard difficulty, base XP',
      icon: 'Meh',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
      glowColor: 'shadow-primary/30'
    },
    {
      id: 'hard',
      label: 'Hard',
      multiplier: '1.5x',
      description: 'Challenging tasks, bonus XP',
      icon: 'Frown',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400/30',
      glowColor: 'shadow-red-400/30'
    }
  ];

  return (
    <div className="space-y-4">
      <label className="block text-lg font-heading font-semibold text-text-primary mb-3">
        Difficulty Level
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {difficulties?.map((difficulty) => (
          <button
            key={difficulty?.id}
            type="button"
            onClick={() => onDifficultyChange(difficulty?.id)}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-300
              hover:scale-105 hover:shadow-lg
              ${selectedDifficulty === difficulty?.id 
                ? `${difficulty?.bgColor} ${difficulty?.borderColor} shadow-lg ${difficulty?.glowColor}` 
                : 'bg-surface border-border hover:border-primary/50'
              }
            `}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center
                ${selectedDifficulty === difficulty?.id ? difficulty?.bgColor : 'bg-muted'}
              `}>
                <Icon 
                  name={difficulty?.icon} 
                  size={24} 
                  className={selectedDifficulty === difficulty?.id ? difficulty?.color : 'text-text-secondary'} 
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <h3 className={`
                    font-heading font-semibold text-base
                    ${selectedDifficulty === difficulty?.id ? difficulty?.color : 'text-text-primary'}
                  `}>
                    {difficulty?.label}
                  </h3>
                  <span className={`
                    text-xs font-mono font-bold px-2 py-1 rounded-full
                    ${selectedDifficulty === difficulty?.id 
                      ? `${difficulty?.bgColor} ${difficulty?.color}` 
                      : 'bg-muted text-text-secondary'
                    }
                  `}>
                    {difficulty?.multiplier}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  {difficulty?.description}
                </p>
              </div>
            </div>
            {selectedDifficulty === difficulty?.id && (
              <div className="absolute top-2 right-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${difficulty?.bgColor}`}>
                  <Icon name="Check" size={14} className={difficulty?.color} />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;
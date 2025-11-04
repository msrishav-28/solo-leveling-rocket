import React from 'react';
import Icon from '../../../components/AppIcon';

const QuestTypeSelector = ({ selectedType, onTypeChange }) => {
  const questTypes = [
    {
      id: 'daily',
      label: 'Daily Habit',
      description: 'Recurring daily activities',
      icon: 'Calendar',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30'
    },
    {
      id: 'recurring',
      label: 'Recurring Task',
      description: 'Weekly or custom frequency',
      icon: 'RotateCcw',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/30'
    },
    {
      id: 'oneTime',
      label: 'One-Time Quest',
      description: 'Single completion objective',
      icon: 'Target',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30'
    }
  ];

  return (
    <div className="space-y-4">
      <label className="block text-lg font-heading font-semibold text-text-primary mb-3">
        Quest Type
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {questTypes?.map((type) => (
          <button
            key={type?.id}
            type="button"
            onClick={() => onTypeChange(type?.id)}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-300
              hover:scale-105 hover:shadow-glow-primary
              ${selectedType === type?.id 
                ? `${type?.bgColor} ${type?.borderColor} shadow-glow-primary` 
                : 'bg-surface border-border hover:border-primary/50'
              }
            `}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center
                ${selectedType === type?.id ? type?.bgColor : 'bg-muted'}
              `}>
                <Icon 
                  name={type?.icon} 
                  size={24} 
                  className={selectedType === type?.id ? type?.color : 'text-text-secondary'} 
                />
              </div>
              <div className="text-center">
                <h3 className={`
                  font-heading font-semibold text-base
                  ${selectedType === type?.id ? type?.color : 'text-text-primary'}
                `}>
                  {type?.label}
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  {type?.description}
                </p>
              </div>
            </div>
            {selectedType === type?.id && (
              <div className="absolute top-2 right-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} className="text-primary-foreground" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestTypeSelector;
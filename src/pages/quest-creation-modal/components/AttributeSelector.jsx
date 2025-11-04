import React from 'react';
import Icon from '../../../components/AppIcon';

const AttributeSelector = ({ selectedAttributes, onAttributeToggle }) => {
  const attributes = [
    {
      id: 'strength',
      name: 'Strength',
      icon: 'Dumbbell',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400/30',
      description: 'Physical power and endurance'
    },
    {
      id: 'intelligence',
      name: 'Intelligence',
      icon: 'Brain',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      description: 'Mental capacity and learning'
    },
    {
      id: 'constitution',
      name: 'Constitution',
      icon: 'Heart',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      description: 'Health and vitality'
    },
    {
      id: 'dexterity',
      name: 'Dexterity',
      icon: 'Zap',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
      description: 'Agility and precision'
    },
    {
      id: 'charisma',
      name: 'Charisma',
      icon: 'Users',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      description: 'Social influence and leadership'
    },
    {
      id: 'luck',
      name: 'Luck',
      icon: 'Clover',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/30',
      description: 'Fortune and opportunity'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-lg font-heading font-semibold text-text-primary">
          Linked Attributes
        </label>
        <span className="text-sm text-text-secondary">
          Select multiple attributes
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {attributes?.map((attribute) => {
          const isSelected = selectedAttributes?.includes(attribute?.id);
          return (
            <button
              key={attribute?.id}
              type="button"
              onClick={() => onAttributeToggle(attribute?.id)}
              className={`
                relative p-3 rounded-lg border-2 transition-all duration-300
                hover:scale-105 group
                ${isSelected 
                  ? `${attribute?.bgColor} ${attribute?.borderColor} shadow-glow-primary` 
                  : 'bg-surface border-border hover:border-primary/50'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center
                  ${isSelected ? attribute?.bgColor : 'bg-muted group-hover:bg-primary/10'}
                `}>
                  <Icon 
                    name={attribute?.icon} 
                    size={20} 
                    className={isSelected ? attribute?.color : 'text-text-secondary group-hover:text-primary'} 
                  />
                </div>
                <div className="flex-1 text-left">
                  <h4 className={`
                    font-heading font-medium text-sm
                    ${isSelected ? attribute?.color : 'text-text-primary'}
                  `}>
                    {attribute?.name}
                  </h4>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {attribute?.description}
                  </p>
                </div>
              </div>
              {isSelected && (
                <div className="absolute top-1 right-1">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-primary-foreground" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
      {selectedAttributes?.length === 0 && (
        <p className="text-sm text-warning bg-warning/10 border border-warning/30 rounded-lg p-3">
          <Icon name="AlertTriangle" size={16} className="inline mr-2" />
          Select at least one attribute to link with this quest
        </p>
      )}
    </div>
  );
};

export default AttributeSelector;
import React from 'react';
import Icon from '../../../components/AppIcon';

const QuestHeader = ({ quest, onClose }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-success';
      case 'Normal': return 'text-primary';
      case 'Hard': return 'text-warning';
      default: return 'text-text-secondary';
    }
  };

  const getAttributeIcon = (attribute) => {
    const icons = {
      'Strength': 'Dumbbell',
      'Intelligence': 'Brain',
      'Constitution': 'Heart',
      'Dexterity': 'Zap',
      'Charisma': 'Users',
      'Luck': 'Clover'
    };
    return icons?.[attribute] || 'Star';
  };

  return (
    <div className="flex items-start justify-between mb-6">
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow-primary">
            <Icon name="Target" size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              {quest?.title}
            </h2>
            <div className="flex items-center space-x-4 mt-1">
              <span className={`text-sm font-medium ${getDifficultyColor(quest?.difficulty)}`}>
                {quest?.difficulty} Difficulty
              </span>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getAttributeIcon(quest?.attribute)} 
                  size={16} 
                  className="text-accent" 
                />
                <span className="text-sm text-text-secondary">
                  {quest?.attribute}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {quest?.description && (
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {quest?.description}
          </p>
        )}
      </div>
      <button
        onClick={onClose}
        className="ml-4 p-2 rounded-lg bg-surface border border-border hover:bg-muted transition-colors duration-200"
        aria-label="Close modal"
      >
        <Icon name="X" size={20} className="text-text-secondary" />
      </button>
    </div>
  );
};

export default QuestHeader;
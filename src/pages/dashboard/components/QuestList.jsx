import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuestList = ({ quests, onCompleteQuest, onEditQuest }) => {
  const [filter, setFilter] = useState('all');

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Easy': '#00ff00',
      'Normal': '#00d9ff',
      'Hard': '#ff0033'
    };
    return colors?.[difficulty] || '#00d9ff';
  };

  const getDifficultyMultiplier = (difficulty) => {
    const multipliers = {
      'Easy': '0.7x',
      'Normal': '1.0x',
      'Hard': '1.5x'
    };
    return multipliers?.[difficulty] || '1.0x';
  };

  const getQuestTypeIcon = (type) => {
    const icons = {
      'daily': 'Calendar',
      'recurring': 'RotateCcw',
      'one-time': 'Target'
    };
    return icons?.[type] || 'Target';
  };

  const filteredQuests = quests?.filter(quest => {
    if (filter === 'all') return true;
    if (filter === 'completed') return quest?.completed;
    if (filter === 'pending') return !quest?.completed;
    return quest?.type === filter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Quests', icon: 'List' },
    { value: 'daily', label: 'Daily', icon: 'Calendar' },
    { value: 'recurring', label: 'Recurring', icon: 'RotateCcw' },
    { value: 'one-time', label: 'One-time', icon: 'Target' },
    { value: 'completed', label: 'Completed', icon: 'CheckCircle' },
    { value: 'pending', label: 'Pending', icon: 'Clock' }
  ];

  return (
    <div className="bg-surface rounded-lg border border-border shadow-elevation-2">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-heading font-bold text-text-primary">
            Active Quests
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">
              {filteredQuests?.length} quest{filteredQuests?.length !== 1 ? 's' : ''}
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filterOptions?.map((option) => (
            <button
              key={option?.value}
              onClick={() => setFilter(option?.value)}
              className={`
                flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium
                transition-all duration-300 hover:scale-105
                ${filter === option?.value
                  ? 'bg-primary text-primary-foreground shadow-glow-primary'
                  : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
                }
              `}
            >
              <Icon name={option?.icon} size={16} />
              <span>{option?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Quest Items */}
      <div className="p-6">
        {filteredQuests?.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Search" size={24} className="text-text-secondary" />
            </div>
            <h4 className="text-lg font-medium text-text-primary mb-2">
              No quests found
            </h4>
            <p className="text-text-secondary">
              {filter === 'all' 
                ? "Create your first quest to start your journey!"
                : `No ${filter} quests available.`
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuests?.map((quest) => (
              <div
                key={quest?.id}
                className={`
                  p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02]
                  ${quest?.completed
                    ? 'bg-success/10 border-success/20 opacity-75' :'bg-background border-border hover:border-primary/30 hover:shadow-glow-primary'
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Completion Checkbox */}
                    <button
                      onClick={() => onCompleteQuest(quest?.id)}
                      disabled={quest?.completed}
                      className={`
                        w-6 h-6 rounded-full border-2 flex items-center justify-center
                        transition-all duration-300 hover:scale-110
                        ${quest?.completed
                          ? 'bg-success border-success text-background' :'border-primary hover:border-primary hover:bg-primary/10'
                        }
                      `}
                    >
                      {quest?.completed && <Icon name="Check" size={14} />}
                    </button>

                    {/* Quest Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className={`text-lg font-medium ${quest?.completed ? 'text-text-secondary line-through' : 'text-text-primary'}`}>
                          {quest?.title}
                        </h4>
                        
                        {/* Quest Type Badge */}
                        <div className="flex items-center space-x-1 px-2 py-1 bg-muted rounded-full">
                          <Icon name={getQuestTypeIcon(quest?.type)} size={12} className="text-text-secondary" />
                          <span className="text-xs text-text-secondary capitalize">
                            {quest?.type}
                          </span>
                        </div>

                        {/* Difficulty Badge */}
                        <div 
                          className="px-2 py-1 rounded-full text-xs font-bold"
                          style={{ 
                            backgroundColor: `${getDifficultyColor(quest?.difficulty)}20`,
                            color: getDifficultyColor(quest?.difficulty)
                          }}
                        >
                          {quest?.difficulty} ({getDifficultyMultiplier(quest?.difficulty)})
                        </div>
                      </div>

                      {quest?.description && (
                        <p className="text-sm text-text-secondary mb-3">
                          {quest?.description}
                        </p>
                      )}

                      {/* Quest Details */}
                      <div className="flex items-center space-x-6 text-sm">
                        {/* Linked Attributes */}
                        <div className="flex items-center space-x-2">
                          <Icon name="Zap" size={14} className="text-accent" />
                          <span className="text-text-secondary">Attributes:</span>
                          <div className="flex space-x-1">
                            {quest?.linkedAttributes?.map((attr, index) => (
                              <span key={index} className="text-primary font-medium">
                                {attr}{index < quest?.linkedAttributes?.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* XP Potential */}
                        <div className="flex items-center space-x-2">
                          <Icon name="Star" size={14} className="text-accent" />
                          <span className="text-text-secondary">XP:</span>
                          <span className="text-accent font-bold font-mono">
                            +{quest?.xpReward}
                          </span>
                        </div>

                        {/* Time Tracking */}
                        {quest?.timeTracked && (
                          <div className="flex items-center space-x-2">
                            <Icon name="Clock" size={14} className="text-text-secondary" />
                            <span className="text-text-secondary">
                              {quest?.timeTracked}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Quest Schedule */}
                      {quest?.schedule && (
                        <div className="flex items-center space-x-2 mt-2 text-xs text-text-secondary">
                          <Icon name="Calendar" size={12} />
                          <span>{quest?.schedule}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 ml-4">
                    {!quest?.completed && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onEditQuest(quest?.id)}
                          iconName="Edit"
                          className="text-text-secondary hover:text-primary"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onCompleteQuest(quest?.id)}
                          iconName="Play"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          Start
                        </Button>
                      </>
                    )}
                    
                    {quest?.completed && (
                      <div className="flex items-center space-x-2 text-success">
                        <Icon name="CheckCircle" size={16} />
                        <span className="text-sm font-medium">Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestList;
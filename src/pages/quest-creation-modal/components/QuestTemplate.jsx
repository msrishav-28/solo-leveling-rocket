import React from 'react';
import Icon from '../../../components/AppIcon';

const QuestTemplates = ({ onTemplateSelect }) => {
  const templates = [
    {
      id: 'workout',
      title: 'Daily Workout',
      description: 'Complete 30 minutes of exercise',
      type: 'daily',
      difficulty: 'normal',
      attributes: ['strength', 'constitution'],
      icon: 'Dumbbell',
      category: 'Fitness',
      color: 'text-red-400'
    },
    {
      id: 'reading',
      title: 'Read for 20 Minutes',
      description: 'Read books, articles, or educational content',
      type: 'daily',
      difficulty: 'easy',
      attributes: ['intelligence'],
      icon: 'Book',
      category: 'Learning',
      color: 'text-blue-400'
    },
    {
      id: 'meditation',
      title: 'Daily Meditation',
      description: 'Practice mindfulness and meditation',
      type: 'daily',
      difficulty: 'easy',
      attributes: ['constitution', 'charisma'],
      icon: 'Brain',
      category: 'Wellness',
      color: 'text-purple-400'
    },
    {
      id: 'coding',
      title: 'Code Practice',
      description: 'Practice programming for 1 hour',
      type: 'daily',
      difficulty: 'hard',
      attributes: ['intelligence', 'dexterity'],
      icon: 'Code',
      category: 'Skills',
      color: 'text-green-400'
    },
    {
      id: 'water',
      title: 'Drink 8 Glasses of Water',
      description: 'Stay hydrated throughout the day',
      type: 'daily',
      difficulty: 'easy',
      attributes: ['constitution'],
      icon: 'Droplets',
      category: 'Health',
      color: 'text-cyan-400'
    },
    {
      id: 'social',
      title: 'Connect with Friends',
      description: 'Reach out to friends or family',
      type: 'recurring',
      difficulty: 'normal',
      attributes: ['charisma'],
      icon: 'Users',
      category: 'Social',
      color: 'text-pink-400'
    }
  ];

  const categories = [...new Set(templates.map(t => t.category))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-semibold text-text-primary flex items-center">
          <Icon name="Bookmark" size={20} className="mr-2 text-accent" />
          Quest Templates
        </h3>
        <span className="text-sm text-text-secondary">
          Quick start with popular quests
        </span>
      </div>
      {categories?.map((category) => (
        <div key={category} className="space-y-3">
          <h4 className="text-base font-heading font-medium text-text-primary border-b border-border pb-2">
            {category}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {templates?.filter(template => template?.category === category)?.map((template) => (
                <button
                  key={template?.id}
                  type="button"
                  onClick={() => onTemplateSelect(template)}
                  className="p-4 bg-surface border border-border rounded-lg hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 hover:scale-105 text-left group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon 
                        name={template?.icon} 
                        size={20} 
                        className={`${template?.color} group-hover:text-primary transition-colors duration-300`} 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h5 className="font-heading font-medium text-text-primary group-hover:text-primary transition-colors duration-300">
                          {template?.title}
                        </h5>
                        <span className={`
                          text-xs px-2 py-1 rounded-full font-mono
                          ${template?.difficulty === 'easy' ? 'bg-green-400/10 text-green-400' :
                            template?.difficulty === 'normal'? 'bg-primary/10 text-primary' : 'bg-red-400/10 text-red-400'
                          }
                        `}>
                          {template?.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">
                        {template?.description}
                      </p>
                      <div className="flex items-center space-x-1">
                        {template?.attributes?.map((attr) => (
                          <span 
                            key={attr}
                            className="text-xs px-2 py-1 bg-muted rounded-full text-text-secondary capitalize"
                          >
                            {attr}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Icon 
                      name="ChevronRight" 
                      size={16} 
                      className="text-text-secondary group-hover:text-primary transition-colors duration-300" 
                    />
                  </div>
                </button>
              ))}
          </div>
        </div>
      ))}
      <div className="bg-muted/30 rounded-lg p-4 text-center">
        <Icon name="Plus" size={24} className="text-text-secondary mx-auto mb-2" />
        <p className="text-sm text-text-secondary">
          Can't find what you're looking for? Create a custom quest from scratch!
        </p>
      </div>
    </div>
  );
};

export default QuestTemplates;
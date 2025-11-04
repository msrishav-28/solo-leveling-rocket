import React from 'react';
import Icon from '../../../components/AppIcon';

const UpcomingReminders = ({ reminders }) => {
  const getTimeUntil = (scheduledTime) => {
    const now = new Date();
    const scheduled = new Date(scheduledTime);
    const diffMs = scheduled - now;
    
    if (diffMs < 0) return 'Overdue';
    
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (diffHours === 0) {
      return `${diffMinutes}m`;
    } else if (diffHours < 24) {
      return `${diffHours}h ${diffMinutes}m`;
    } else {
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays}d`;
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': '#ff0033',
      'medium': '#ffcc00',
      'low': '#00ff00'
    };
    return colors?.[priority] || '#00d9ff';
  };

  const getQuestTypeIcon = (type) => {
    const icons = {
      'daily': 'Calendar',
      'recurring': 'RotateCcw',
      'one-time': 'Target'
    };
    return icons?.[type] || 'Bell';
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-heading font-bold text-text-primary">
          Upcoming Reminders
        </h3>
        <div className="flex items-center space-x-2">
          <Icon name="Bell" size={16} className="text-accent" />
          <span className="text-sm text-text-secondary">
            {reminders?.length} pending
          </span>
        </div>
      </div>
      {reminders?.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="Bell" size={20} className="text-text-secondary" />
          </div>
          <p className="text-text-secondary text-sm">
            No upcoming reminders
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {reminders?.map((reminder) => (
            <div
              key={reminder?.id}
              className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quest Type Icon */}
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon 
                  name={getQuestTypeIcon(reminder?.questType)} 
                  size={14} 
                  className="text-primary" 
                />
              </div>

              {/* Reminder Info */}
              <div className="flex-1">
                <h4 className="text-sm font-medium text-text-primary mb-1">
                  {reminder?.questTitle}
                </h4>
                <div className="flex items-center space-x-4 text-xs text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{reminder?.scheduledTime}</span>
                  </div>
                  {reminder?.description && (
                    <span className="truncate max-w-32">
                      {reminder?.description}
                    </span>
                  )}
                </div>
              </div>

              {/* Priority Indicator */}
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getPriorityColor(reminder?.priority) }}
                title={`${reminder?.priority} priority`}
              ></div>

              {/* Time Until */}
              <div className="text-right">
                <div className={`text-sm font-bold font-mono ${
                  getTimeUntil(reminder?.scheduledTime) === 'Overdue' ?'text-error' :'text-accent'
                }`}>
                  {getTimeUntil(reminder?.scheduledTime)}
                </div>
                <div className="text-xs text-text-secondary">
                  {getTimeUntil(reminder?.scheduledTime) === 'Overdue' ? 'overdue' : 'remaining'}
                </div>
              </div>

              {/* Action Button */}
              <button 
                className="p-2 text-text-secondary hover:text-primary transition-colors duration-300"
                title="Dismiss reminder"
              >
                <Icon name="X" size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
      {reminders?.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <button className="w-full text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
            Manage All Reminders
          </button>
        </div>
      )}
    </div>
  );
};

export default UpcomingReminders;
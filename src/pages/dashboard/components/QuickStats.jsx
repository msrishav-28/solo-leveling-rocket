import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStats = ({ stats }) => {
  const statItems = [
    {
      id: 'totalQuests',
      label: 'Total Quests',
      value: stats?.totalQuests,
      icon: 'Target',
      color: '#00d9ff',
      change: stats?.questsChange,
      changeType: 'increase'
    },
    {
      id: 'completedToday',
      label: 'Completed Today',
      value: stats?.completedToday,
      icon: 'CheckCircle',
      color: '#00ff00',
      change: stats?.todayChange,
      changeType: 'neutral'
    },
    {
      id: 'weeklyStreak',
      label: 'Weekly Streak',
      value: stats?.weeklyStreak,
      icon: 'Flame',
      color: '#ffd700',
      change: stats?.streakChange,
      changeType: 'increase'
    },
    {
      id: 'totalXP',
      label: 'Total XP Earned',
      value: stats?.totalXP?.toLocaleString(),
      icon: 'Star',
      color: '#b700ff',
      change: stats?.xpChange,
      changeType: 'increase'
    }
  ];

  const getChangeIcon = (changeType) => {
    const icons = {
      'increase': 'TrendingUp',
      'decrease': 'TrendingDown',
      'neutral': 'Minus'
    };
    return icons?.[changeType] || 'Minus';
  };

  const getChangeColor = (changeType) => {
    const colors = {
      'increase': '#00ff00',
      'decrease': '#ff0033',
      'neutral': '#e0e0e0'
    };
    return colors?.[changeType] || '#e0e0e0';
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-heading font-bold text-text-primary">
          Quick Statistics
        </h3>
        <div className="flex items-center space-x-2">
          <Icon name="BarChart3" size={16} className="text-accent" />
          <span className="text-sm text-text-secondary">
            Last 7 days
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {statItems?.map((item) => (
          <div
            key={item?.id}
            className="p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between mb-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: `${item?.color}20`,
                  border: `2px solid ${item?.color}`
                }}
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  style={{ color: item?.color }}
                />
              </div>
              
              {item?.change !== undefined && (
                <div className="flex items-center space-x-1">
                  <Icon 
                    name={getChangeIcon(item?.changeType)} 
                    size={14} 
                    style={{ color: getChangeColor(item?.changeType) }}
                  />
                  <span 
                    className="text-xs font-bold"
                    style={{ color: getChangeColor(item?.changeType) }}
                  >
                    {item?.change > 0 ? '+' : ''}{item?.change}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-text-primary">
                {item?.value}
              </div>
              <div className="text-sm text-text-secondary">
                {item?.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Weekly Progress Bar */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-secondary">
            Weekly Goal Progress
          </span>
          <span className="text-sm font-mono text-text-primary">
            {stats?.weeklyProgress}% Complete
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 shadow-glow-primary"
            style={{ width: `${stats?.weeklyProgress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-text-secondary">
            {stats?.completedThisWeek} of {stats?.weeklyGoal} quests completed
          </span>
          <span className="text-xs text-accent font-medium">
            {stats?.weeklyGoal - stats?.completedThisWeek} remaining
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
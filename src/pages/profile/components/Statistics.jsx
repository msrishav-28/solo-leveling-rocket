import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const Statistics = ({ stats }) => {
  const statItems = [
    { label: 'Total XP Earned', value: stats.totalXP.toLocaleString(), icon: 'Zap', color: 'text-primary' },
    { label: 'Quests Completed', value: stats.questsCompleted, icon: 'CheckCircle', color: 'text-success' },
    { label: 'Longest Streak', value: `${stats.longestStreak} days`, icon: 'Trophy', color: 'text-accent' },
    { label: 'Current Streak', value: `${stats.currentStreak} days`, icon: 'Flame', color: 'text-warning' },
    { label: 'Average XP/Quest', value: stats.averageXP, icon: 'TrendingUp', color: 'text-primary' },
    { label: 'Most Active Attribute', value: `${stats.mostActiveAttribute.name} (${stats.mostActiveAttribute.level})`, icon: 'Star', color: 'text-secondary' },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-elevation-2">
      <h2 className="text-xl font-heading font-bold text-primary mb-6 tracking-wider">
        STATISTICS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statItems.map((stat, index) => (
          <div
            key={index}
            className="bg-input border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs text-text-secondary mb-1 uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className={`text-lg font-heading font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
              <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <Icon name={stat.icon} size={20} className={stat.color} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

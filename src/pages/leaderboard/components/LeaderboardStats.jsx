import React from 'react';
import Icon from '../../../components/AppIcon';

const LeaderboardStats = ({ stats }) => {
  const statCards = [
    {
      label: 'Total Hunters',
      value: stats?.totalHunters?.toLocaleString(),
      icon: 'Users',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      label: 'Active Today',
      value: stats?.activeToday?.toLocaleString(),
      icon: 'Activity',
      color: 'text-success',
      bgColor: 'bg-success/10',
      iconColor: 'text-success'
    },
    {
      label: 'S-Rank Hunters',
      value: stats?.sRankHunters,
      icon: 'Crown',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent'
    },
    {
      label: 'Avg Level',
      value: stats?.averageLevel?.toFixed(1),
      icon: 'TrendingUp',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statCards?.map((stat, index) => (
        <div
          key={index}
          className={`
            ${stat?.bgColor} border border-border rounded-lg p-4
            transition-all duration-300 hover:scale-105 hover:shadow-elevation-2
          `}
        >
          <div className="flex items-center justify-between mb-2">
            <div className={`
              w-10 h-10 ${stat?.bgColor} rounded-lg flex items-center justify-center
              border border-opacity-20
            `}>
              <Icon name={stat?.icon} size={20} className={stat?.iconColor} />
            </div>
          </div>
          
          <div>
            <p className={`text-2xl font-heading font-bold ${stat?.color} font-mono`}>
              {stat?.value}
            </p>
            <p className="text-sm text-text-secondary font-medium">
              {stat?.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardStats;
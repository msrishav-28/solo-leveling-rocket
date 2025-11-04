import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import RankBadge from './RankBadge';

const LeaderboardTable = ({ hunters, currentUserId, onHunterClick, loading }) => {
  const formatXP = (xp) => {
    if (xp >= 1000000) return `${(xp / 1000000)?.toFixed(1)}M`;
    if (xp >= 1000) return `${(xp / 1000)?.toFixed(1)}K`;
    return xp?.toLocaleString();
  };

  const formatDate = (date) => {
    const now = new Date();
    const diff = now - new Date(date);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return new Date(date)?.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (hunters?.length === 0) {
    return (
      <div className="bg-surface border border-border rounded-lg p-8 text-center">
        <Icon name="Users" size={48} className="text-text-secondary mx-auto mb-4" />
        <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
          No Hunters Found
        </h3>
        <p className="text-text-secondary">
          Try adjusting your search filters to find more hunters.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-elevation-2">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="text-left py-4 px-6 font-heading font-bold text-text-primary">
                Rank
              </th>
              <th className="text-left py-4 px-6 font-heading font-bold text-text-primary">
                Hunter
              </th>
              <th className="text-left py-4 px-6 font-heading font-bold text-text-primary">
                Level
              </th>
              <th className="text-left py-4 px-6 font-heading font-bold text-text-primary">
                Total XP
              </th>
              <th className="text-left py-4 px-6 font-heading font-bold text-text-primary">
                Current Streak
              </th>
              <th className="text-left py-4 px-6 font-heading font-bold text-text-primary">
                Last Active
              </th>
            </tr>
          </thead>
          <tbody>
            {hunters?.map((hunter, index) => {
              const isCurrentUser = hunter?.id === currentUserId;
              return (
                <tr
                  key={hunter?.id}
                  className={`
                    border-b border-border transition-all duration-300 cursor-pointer
                    hover:bg-muted/50 hover:shadow-glow-primary
                    ${isCurrentUser ? 'bg-primary/5 border-primary/30 shadow-glow-primary' : ''}
                  `}
                  onClick={() => onHunterClick(hunter)}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <span className={`
                        text-2xl font-heading font-bold font-mono
                        ${isCurrentUser ? 'text-primary' : 'text-text-secondary'}
                      `}>
                        #{hunter?.position}
                      </span>
                      <RankBadge rank={hunter?.rank} />
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src={hunter?.avatar}
                          alt={hunter?.avatarAlt}
                          className="w-10 h-10 rounded-full object-cover border-2 border-border"
                        />
                        {hunter?.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-surface"></div>
                        )}
                      </div>
                      <div>
                        <p className={`
                          font-medium
                          ${isCurrentUser ? 'text-primary font-bold' : 'text-text-primary'}
                        `}>
                          {hunter?.name}
                          {isCurrentUser && (
                            <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                              You
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {hunter?.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-lg font-mono font-bold text-accent">
                      {hunter?.level}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-lg font-mono font-bold text-primary">
                      {formatXP(hunter?.totalXP)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Flame" size={16} className="text-warning" />
                      <span className="font-mono font-bold text-warning">
                        {hunter?.currentStreak}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-text-secondary">
                      {formatDate(hunter?.lastActive)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Mobile Cards */}
      <div className="md:hidden">
        {hunters?.map((hunter) => {
          const isCurrentUser = hunter?.id === currentUserId;
          return (
            <div
              key={hunter?.id}
              className={`
                p-4 border-b border-border transition-all duration-300 cursor-pointer
                hover:bg-muted/50 active:bg-muted
                ${isCurrentUser ? 'bg-primary/5 border-primary/30 shadow-glow-primary' : ''}
              `}
              onClick={() => onHunterClick(hunter)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className={`
                    text-xl font-heading font-bold font-mono
                    ${isCurrentUser ? 'text-primary' : 'text-text-secondary'}
                  `}>
                    #{hunter?.position}
                  </span>
                  <RankBadge rank={hunter?.rank} size="small" />
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Flame" size={14} className="text-warning" />
                  <span className="text-sm font-mono font-bold text-warning">
                    {hunter?.currentStreak}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <Image
                    src={hunter?.avatar}
                    alt={hunter?.avatarAlt}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  {hunter?.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-surface"></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className={`
                    font-medium
                    ${isCurrentUser ? 'text-primary font-bold' : 'text-text-primary'}
                  `}>
                    {hunter?.name}
                    {isCurrentUser && (
                      <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        You
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {hunter?.title}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-text-secondary mb-1">Level</p>
                  <p className="font-mono font-bold text-accent">
                    {hunter?.level}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Total XP</p>
                  <p className="font-mono font-bold text-primary">
                    {formatXP(hunter?.totalXP)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Last Active</p>
                  <p className="text-xs text-text-secondary">
                    {formatDate(hunter?.lastActive)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardTable;
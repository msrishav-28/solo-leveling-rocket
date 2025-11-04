import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ user, content, rating, rank, delay = 0 }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-accent fill-current' : 'text-gray-600'}
      />
    ));
  };

  const getRankColor = (rank) => {
    const colors = {
      'F': '#666666',
      'E': '#00ff00',
      'D': '#00d9ff',
      'C': '#b700ff',
      'B': '#ffd700',
      'A': '#ff0000',
      'S': '#ffd700'
    };
    return colors?.[rank] || '#666666';
  };

  return (
    <div 
      className="bg-surface/80 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow-primary"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <Image
            src={user?.avatar}
            alt={user?.avatarAlt}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
          />
          <div 
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-background"
            style={{ 
              backgroundColor: getRankColor(rank),
              color: rank === 'F' ? '#ffffff' : '#000000'
            }}
          >
            {rank}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white">{user?.name}</h4>
          <p className="text-sm text-text-secondary">{rank}-Rank Hunter</p>
        </div>
      </div>
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {renderStars(rating)}
        <span className="text-sm text-text-secondary ml-2">({rating}/5)</span>
      </div>
      {/* Testimonial Content */}
      <blockquote className="text-text-secondary leading-relaxed italic">
        "{content}"
      </blockquote>
      {/* Quote Icon */}
      <div className="flex justify-end mt-4">
        <Icon name="Quote" size={24} className="text-primary/30" />
      </div>
    </div>
  );
};

export default TestimonialCard;
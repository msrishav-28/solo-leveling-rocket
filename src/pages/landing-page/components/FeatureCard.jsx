import React from 'react';
import Icon from '../../../components/AppIcon';

const FeatureCard = ({ icon, title, description, benefits, delay = 0 }) => {
  return (
    <div 
      className="bg-surface/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow-primary group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-secondary transition-all duration-300">
          <Icon name={icon} size={32} className="text-primary-foreground" />
        </div>
      </div>
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      {/* Description */}
      <p className="text-text-secondary mb-6 leading-relaxed">
        {description}
      </p>
      {/* Benefits List */}
      <ul className="space-y-2">
        {benefits?.map((benefit, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Icon 
              name="Check" 
              size={16} 
              className="text-success mt-1 flex-shrink-0" 
            />
            <span className="text-sm text-text-secondary group-hover:text-white transition-colors duration-300">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default FeatureCard;
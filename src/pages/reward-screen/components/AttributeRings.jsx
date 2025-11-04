import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AttributeRings = ({ attributeGains, playerAttributes }) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationPhase(1), 800);
    return () => clearTimeout(timer);
  }, []);

  const attributes = [
    { key: 'strength', name: 'Strength', icon: 'Sword', color: 'text-destructive' },
    { key: 'intelligence', name: 'Intelligence', icon: 'Brain', color: 'text-primary' },
    { key: 'constitution', name: 'Constitution', icon: 'Shield', color: 'text-success' },
    { key: 'dexterity', name: 'Dexterity', icon: 'Zap', color: 'text-warning' },
    { key: 'charisma', name: 'Charisma', icon: 'Heart', color: 'text-secondary' },
    { key: 'luck', name: 'Luck', icon: 'Clover', color: 'text-accent' }
  ];

  const getProgressPercentage = (current, max = 100) => {
    return Math.min((current / max) * 100, 100);
  };

  const AttributeRing = ({ attribute, index }) => {
    const currentValue = playerAttributes?.[attribute?.key] || 0;
    const gainValue = attributeGains?.[attribute?.key] || 0;
    const previousValue = currentValue - gainValue;
    
    const previousPercentage = getProgressPercentage(previousValue);
    const currentPercentage = getProgressPercentage(currentValue);
    
    const circumference = 2 * Math.PI * 45;
    const previousOffset = circumference - (previousPercentage / 100) * circumference;
    const currentOffset = circumference - (currentPercentage / 100) * circumference;

    return (
      <div 
        className={`
          relative flex flex-col items-center space-y-3
          transition-all duration-500 transform
          ${animationPhase >= 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
        `}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Attribute Ring */}
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="6"
              fill="transparent"
            />
            
            {/* Previous progress (gray) */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={previousOffset}
              className="transition-all duration-1000"
            />
            
            {/* Current progress (colored) */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={animationPhase >= 1 ? currentOffset : previousOffset}
              className={`transition-all duration-1500 ${attribute?.color}`}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Center icon and value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon 
              name={attribute?.icon} 
              size={20} 
              className={`${attribute?.color} mb-1`} 
            />
            <span className="text-sm font-mono font-bold text-text-primary">
              {currentValue}
            </span>
          </div>
          
          {/* Gain indicator */}
          {gainValue > 0 && (
            <div className={`
              absolute -top-2 -right-2 bg-success text-background
              rounded-full px-2 py-1 text-xs font-bold
              animate-pulse-glow
              ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}
            `}>
              +{gainValue}
            </div>
          )}
        </div>
        {/* Attribute name */}
        <div className="text-center">
          <div className="text-sm font-medium text-text-primary">
            {attribute?.name}
          </div>
          {gainValue > 0 && (
            <div className="text-xs text-success font-mono">
              {previousValue} → {currentValue}
            </div>
          )}
        </div>
      </div>
    );
  };

  const hasAnyGains = Object.values(attributeGains)?.some(gain => gain > 0);

  if (!hasAnyGains) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-heading text-text-primary mb-2 flex items-center justify-center space-x-2">
          <Icon name="TrendingUp" size={24} className="text-primary" />
          <span>Attribute Growth</span>
        </h3>
        <p className="text-text-secondary">
          Your hunter grows stronger with each completed quest
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {attributes?.map((attribute, index) => {
          const gainValue = attributeGains?.[attribute?.key] || 0;
          if (gainValue <= 0) return null;
          
          return (
            <AttributeRing 
              key={attribute?.key} 
              attribute={attribute} 
              index={index} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default AttributeRings;
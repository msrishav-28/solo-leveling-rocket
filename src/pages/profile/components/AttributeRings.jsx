import React, { useState } from 'react';
import Icon from '../../../components/AppIcon.jsx';

const AttributeRings = ({ attributes }) => {
  const [hoveredAttribute, setHoveredAttribute] = useState(null);

  const getIconName = (iconName) => {
    const iconMap = {
      'Sword': 'Sword',
      'Brain': 'Brain',
      'Heart': 'Heart',
      'Zap': 'Zap',
      'Users': 'Users',
      'Clover': 'Clover'
    };
    return iconMap[iconName] || 'Circle';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-elevation-2">
      <h2 className="text-xl font-heading font-bold text-primary mb-6 tracking-wider">
        ATTRIBUTES
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {attributes.map((attr) => {
          const percentage = (attr.totalPoints % 1200) / 1200 * 100; // Mock calculation for ring fill

          return (
            <div
              key={attr.name}
              className="relative group"
              onMouseEnter={() => setHoveredAttribute(attr.name)}
              onMouseLeave={() => setHoveredAttribute(null)}
            >
              <div className="bg-input border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
                {/* SVG Ring */}
                <div className="relative w-full aspect-square mb-3">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="rgba(0, 217, 255, 0.1)"
                      strokeWidth="8"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 52}`}
                      strokeDashoffset={`${2 * Math.PI * 52 * (1 - percentage / 100)}`}
                      className="transition-all duration-500"
                      style={{
                        filter: 'drop-shadow(0px 0px 8px rgba(0, 217, 255, 0.5))'
                      }}
                    />
                  </svg>

                  {/* Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Icon name={getIconName(attr.icon)} size={24} className="text-primary mb-1" />
                    <p className="text-2xl font-heading font-bold text-text-primary">
                      {attr.value}
                    </p>
                  </div>
                </div>

                {/* Attribute Name */}
                <div className="text-center space-y-1">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                    {attr.name}
                  </p>
                  <p className="text-xs font-mono text-primary">
                    {attr.totalPoints} pts
                  </p>
                </div>
              </div>

              {/* Tooltip */}
              {hoveredAttribute === attr.name && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full
                  bg-popover border border-primary/50 rounded-lg px-3 py-2 text-xs whitespace-nowrap
                  shadow-glow-primary z-10 animate-scale-in">
                  <p className="text-text-primary font-semibold">
                    {attr.nextLevel} more to Level {attr.value + 1}
                  </p>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 
                    bg-popover border-r border-b border-primary/50 rotate-45"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttributeRings;

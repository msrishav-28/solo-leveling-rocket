import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const HunterNameInput = ({ value, onChange, isAvailable, isChecking, error }) => {
  const showAvailability = value.length >= 3 && !isChecking;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-text-secondary">
        Hunter Name
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Sung_Jinwoo"
          maxLength={20}
          className={`
            w-full h-12 px-4 pr-12 bg-input border rounded-lg
            text-text-primary placeholder-text-secondary/50 font-mono
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition-all duration-300
            ${error ? 'border-error' : 
              isAvailable === true ? 'border-success' : 
              isAvailable === false ? 'border-error' : 
              'border-border'}
          `}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {isChecking ? (
            <Icon name="Loader2" size={18} className="animate-spin text-primary" />
          ) : showAvailability && isAvailable === true ? (
            <Icon name="CheckCircle" size={18} className="text-success" />
          ) : showAvailability && isAvailable === false ? (
            <Icon name="XCircle" size={18} className="text-error" />
          ) : null}
        </div>
      </div>
      
      {/* Character Count */}
      <div className="flex justify-between items-center text-xs">
        <div>
          {showAvailability && (
            <span className={isAvailable ? 'text-success' : 'text-error'}>
              {isAvailable ? '✓ Available!' : '✗ Already taken'}
            </span>
          )}
          {error && (
            <span className="text-error flex items-center">
              <Icon name="AlertCircle" size={12} className="mr-1" />
              {error}
            </span>
          )}
        </div>
        <span className="text-text-secondary">
          {value.length} / 20
        </span>
      </div>
      
      <p className="text-xs text-text-secondary">
        Only letters, numbers, and underscores allowed
      </p>
    </div>
  );
};

export default HunterNameInput;

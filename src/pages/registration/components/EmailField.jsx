import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const EmailField = ({ value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-text-secondary">
        Email Address
      </label>
      <div className="relative">
        <input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="hunter@example.com"
          className={`
            w-full h-12 px-4 bg-input border rounded-lg
            text-text-primary placeholder-text-secondary/50
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition-all duration-300
            ${error ? 'border-error' : 'border-border'}
          `}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
          <Icon name="Mail" size={18} />
        </div>
      </div>
      {error && (
        <p className="text-sm text-error flex items-center">
          <Icon name="AlertCircle" size={14} className="mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailField;

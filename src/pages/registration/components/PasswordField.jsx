import React, { useState } from 'react';
import Icon from '../../../components/AppIcon.jsx';

const PasswordField = ({ label, value, onChange, error, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-text-secondary">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full h-12 px-4 pr-12 bg-input border rounded-lg
            text-text-primary placeholder-text-secondary/50
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition-all duration-300
            ${error ? 'border-error' : 'border-border'}
          `}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors"
        >
          <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={18} />
        </button>
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

export default PasswordField;

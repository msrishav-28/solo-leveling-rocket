import React from 'react';

const PasswordStrengthMeter = ({ strength }) => {
  const getStrengthColor = () => {
    switch (strength) {
      case 0:
        return 'bg-error';
      case 1:
        return 'bg-warning';
      case 2:
        return 'bg-success';
      case 3:
        return 'bg-success';
      default:
        return 'bg-border';
    }
  };

  const getStrengthLabel = () => {
    switch (strength) {
      case 0:
        return 'Weak';
      case 1:
        return 'Medium';
      case 2:
        return 'Strong';
      case 3:
        return 'Very Strong';
      default:
        return '';
    }
  };

  const widthPercentage = ((strength + 1) / 4) * 100;

  return (
    <div className="space-y-1">
      <div className="h-1 w-full bg-border rounded-full overflow-hidden">
        <div
          className={`h-full ${getStrengthColor()} transition-all duration-300 rounded-full`}
          style={{ width: `${widthPercentage}%` }}
        />
      </div>
      {strength > 0 && (
        <p className={`text-xs ${
          strength === 0 ? 'text-error' : 
          strength === 1 ? 'text-warning' : 
          'text-success'
        }`}>
          Password strength: {getStrengthLabel()}
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;

import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const TermsCheckbox = ({ checked, onChange, error }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-3">
        <button
          type="button"
          onClick={() => onChange(!checked)}
          className={`
            w-5 h-5 mt-0.5 flex-shrink-0 rounded border-2 flex items-center justify-center
            transition-all duration-200
            ${checked 
              ? 'bg-primary border-primary shadow-glow-primary' 
              : 'border-border hover:border-primary'
            }
          `}
        >
          {checked && <Icon name="Check" size={14} className="text-primary-foreground" />}
        </button>
        <label className="text-xs text-text-secondary leading-relaxed cursor-pointer select-none"
          onClick={() => onChange(!checked)}
        >
          I agree to the{' '}
          <a href="/terms" className="text-primary hover:underline" onClick={(e) => e.stopPropagation()}>
            Terms of Service
          </a>
          {' '}and{' '}
          <a href="/privacy" className="text-primary hover:underline" onClick={(e) => e.stopPropagation()}>
            Privacy Policy
          </a>
        </label>
      </div>
      {error && (
        <p className="text-xs text-error flex items-center">
          <Icon name="AlertCircle" size={12} className="mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

export default TermsCheckbox;

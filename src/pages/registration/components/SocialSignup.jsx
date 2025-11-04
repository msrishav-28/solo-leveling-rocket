import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const SocialSignup = ({ onSocialSignup }) => {
  const socialProviders = [
    { name: 'Google', icon: 'Mail', color: 'border-primary hover:bg-primary/10' },
    { name: 'GitHub', icon: 'Github', color: 'border-text-secondary hover:bg-text-secondary/10' }
  ];

  return (
    <div className="space-y-3">
      {socialProviders.map((provider) => (
        <button
          key={provider.name}
          type="button"
          onClick={() => onSocialSignup(provider.name.toLowerCase())}
          className={`
            w-full h-12 bg-input border rounded-lg
            flex items-center justify-center space-x-2
            text-text-primary font-medium
            transition-all duration-200
            hover:scale-102 active:scale-98
            ${provider.color}
          `}
        >
          <Icon name={provider.icon} size={20} />
          <span>Sign up with {provider.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialSignup;

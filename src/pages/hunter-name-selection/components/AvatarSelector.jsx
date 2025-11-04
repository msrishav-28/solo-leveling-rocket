import React from 'react';

const AvatarSelector = ({ selectedAvatar, onSelect }) => {
  const avatarStyles = [
    { id: 'stern', label: 'Stern', emoji: '😠' },
    { id: 'confident', label: 'Confident', emoji: '😎' },
    { id: 'mysterious', label: 'Mysterious', emoji: '😶' },
    { id: 'determined', label: 'Determined', emoji: '😤' }
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1">
          Choose Your Appearance
        </label>
        <p className="text-xs text-text-secondary">
          Cosmetic only - can be changed later
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {avatarStyles.map((style) => (
          <button
            key={style.id}
            type="button"
            onClick={() => onSelect(style.id)}
            className={`
              flex flex-col items-center space-y-2 p-3 rounded-lg
              border-2 transition-all duration-200
              hover:scale-105 active:scale-95
              ${selectedAvatar === style.id 
                ? 'border-primary bg-primary/10 shadow-glow-primary' 
                : 'border-border bg-input hover:border-primary/50'
              }
            `}
          >
            <div className={`
              w-16 h-16 rounded-full flex items-center justify-center text-3xl
              ${selectedAvatar === style.id ? 'bg-primary/20' : 'bg-muted'}
            `}>
              {style.emoji}
            </div>
            <span className={`
              text-xs font-medium
              ${selectedAvatar === style.id ? 'text-primary' : 'text-text-secondary'}
            `}>
              {style.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;

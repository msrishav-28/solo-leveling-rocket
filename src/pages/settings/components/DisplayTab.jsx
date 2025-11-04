import React, { useState } from 'react';
import Icon from '../../../components/AppIcon.jsx';

const DisplayTab = ({ onChangesDetected }) => {
  const [settings, setSettings] = useState({
    theme: 'dark',
    animationIntensity: 'full'
  });

  const handleChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
    onChangesDetected(true);
  };

  const handleSave = () => {
    console.log('Saving display settings:', settings);
    onChangesDetected(false);
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-text-primary mb-2">
          Display Settings
        </h2>
        <p className="text-sm text-text-secondary">
          Customize the visual appearance of the app
        </p>
      </div>

      {/* Theme */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Palette" size={18} className="text-primary" />
          <span>Theme</span>
        </h3>

        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'dark', label: 'Dark', icon: 'Moon' },
            { id: 'light', label: 'Light', icon: 'Sun' },
            { id: 'auto', label: 'Auto', icon: 'Laptop' }
          ].map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleChange('theme', theme.id)}
              disabled={theme.id !== 'dark'}
              className={`
                flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200
                ${settings.theme === theme.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-background text-text-secondary hover:border-primary/50'
                }
                ${theme.id !== 'dark' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <Icon name={theme.icon} size={24} className="mb-2" />
              <span className="text-sm font-medium">{theme.label}</span>
              {theme.id !== 'dark' && (
                <span className="text-xs text-text-secondary mt-1">Phase 2</span>
              )}
            </button>
          ))}
        </div>

        <p className="text-sm text-text-secondary">
          Dark mode optimized for late-night gaming sessions
        </p>
      </div>

      {/* Animation Intensity */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Zap" size={18} className="text-primary" />
          <span>Animation Intensity</span>
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {[
            { id: 'full', label: 'Full', description: 'All effects enabled' },
            { id: 'reduced', label: 'Reduced', description: 'For accessibility' }
          ].map((intensity) => (
            <button
              key={intensity.id}
              onClick={() => handleChange('animationIntensity', intensity.id)}
              className={`
                flex flex-col items-start p-4 rounded-lg border-2 transition-all duration-200
                ${settings.animationIntensity === intensity.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-background hover:border-primary/50'
                }
              `}
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  settings.animationIntensity === intensity.id
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`}>
                  {settings.animationIntensity === intensity.id && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
                <span className="font-semibold text-text-primary">{intensity.label}</span>
              </div>
              <p className="text-xs text-text-secondary ml-6">{intensity.description}</p>
            </button>
          ))}
        </div>

        <p className="text-sm text-text-secondary">
          Reduced mode disables particle effects and glows for better performance
        </p>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4 border-t border-border">
        <button
          onClick={handleSave}
          className="h-12 px-8 bg-primary text-primary-foreground font-bold rounded-lg shadow-glow-primary hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default DisplayTab;

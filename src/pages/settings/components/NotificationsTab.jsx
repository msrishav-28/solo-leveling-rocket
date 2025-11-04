import React, { useState } from 'react';
import Icon from '../../../components/AppIcon.jsx';

const NotificationsTab = ({ onChangesDetected }) => {
  const [settings, setSettings] = useState({
    questReminders: true,
    reminderTime: '06:00',
    streakWarning: true,
    streakWarningTime: '22:00',
    rankUpAlerts: true,
    weeklyDigest: false,
    weeklyDigestDay: 'friday',
    weeklyDigestTime: '19:00',
    browserPush: true,
    email: false
  });

  const handleChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
    onChangesDetected(true);
  };

  const handleSave = () => {
    // Mock save
    console.log('Saving notification settings:', settings);
    onChangesDetected(false);
    alert('Settings saved successfully!');
  };

  const handleTestNotification = () => {
    // Mock test notification
    alert('Test notification sent! Check your browser notifications.');
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-text-primary mb-2">
          Notification Settings
        </h2>
        <p className="text-sm text-text-secondary">
          Configure when and how you receive notifications
        </p>
      </div>

      {/* Quest Reminders */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary flex items-center space-x-2">
              <Icon name="Bell" size={18} className="text-primary" />
              <span>Quest Reminders</span>
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              Get notified about upcoming quests
            </p>
          </div>
          <button
            onClick={() => handleChange('questReminders', !settings.questReminders)}
            className={`
              relative w-12 h-6 rounded-full transition-all duration-300
              ${settings.questReminders ? 'bg-primary' : 'bg-border'}
            `}
          >
            <div className={`
              absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300
              ${settings.questReminders ? 'left-7' : 'left-1'}
            `} />
          </button>
        </div>

        {settings.questReminders && (
          <div className="pl-6 space-y-3">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Reminder Time
              </label>
              <input
                type="time"
                value={settings.reminderTime}
                onChange={(e) => handleChange('reminderTime', e.target.value)}
                className="w-full h-10 px-4 bg-background border border-border rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-xs text-text-secondary mt-1">
                Send reminders at this time daily
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Streak Warning */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary flex items-center space-x-2">
              <span className="text-lg">🔥</span>
              <span>Streak Warning</span>
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              Alert if no quests completed today
            </p>
          </div>
          <button
            onClick={() => handleChange('streakWarning', !settings.streakWarning)}
            className={`
              relative w-12 h-6 rounded-full transition-all duration-300
              ${settings.streakWarning ? 'bg-primary' : 'bg-border'}
            `}
          >
            <div className={`
              absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300
              ${settings.streakWarning ? 'left-7' : 'left-1'}
            `} />
          </button>
        </div>

        {settings.streakWarning && (
          <div className="pl-6">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Warning Time
            </label>
            <input
              type="time"
              value={settings.streakWarningTime}
              onChange={(e) => handleChange('streakWarningTime', e.target.value)}
              className="w-full h-10 px-4 bg-background border border-border rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        )}
      </div>

      {/* Rank-Up Alerts */}
      <div className="bg-input border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary flex items-center space-x-2">
              <Icon name="Trophy" size={18} className="text-accent" />
              <span>Rank-Up Alerts</span>
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              Get notified immediately when you rank up
            </p>
          </div>
          <button
            onClick={() => handleChange('rankUpAlerts', !settings.rankUpAlerts)}
            className={`
              relative w-12 h-6 rounded-full transition-all duration-300
              ${settings.rankUpAlerts ? 'bg-primary' : 'bg-border'}
            `}
          >
            <div className={`
              absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300
              ${settings.rankUpAlerts ? 'left-7' : 'left-1'}
            `} />
          </button>
        </div>
      </div>

      {/* Notification Methods */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary">
          Notification Methods
        </h3>

        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={settings.browserPush}
              onChange={(e) => handleChange('browserPush', e.target.checked)}
              className="w-5 h-5 rounded border-2 border-primary text-primary focus:ring-2 focus:ring-primary"
            />
            <span className="text-text-primary">Browser Push Notifications</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer opacity-50">
            <input
              type="checkbox"
              checked={settings.email}
              disabled
              className="w-5 h-5 rounded border-2 border-border text-border"
            />
            <span className="text-text-secondary">Email (Coming in Phase 2)</span>
          </label>
        </div>

        <button
          onClick={handleTestNotification}
          className="mt-4 h-10 px-6 bg-input border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200"
        >
          <Icon name="Bell" size={16} className="inline mr-2" />
          Test Notification
        </button>
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

export default NotificationsTab;

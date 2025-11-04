import React, { useState } from 'react';
import Icon from '../../../components/AppIcon.jsx';

const PrivacyTab = ({ onChangesDetected }) => {
  const [settings, setSettings] = useState({
    profileVisibility: 'public'
  });

  const handleChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
    onChangesDetected(true);
  };

  const handleSave = () => {
    console.log('Saving privacy settings:', settings);
    onChangesDetected(false);
    alert('Settings saved successfully!');
  };

  const handleExportJSON = () => {
    const data = {
      exported: new Date().toISOString(),
      hunter: 'Shadow Hunter',
      stats: { level: 15, xp: 8750 }
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hunter-data.json';
    a.click();
  };

  const handleExportCSV = () => {
    const csv = 'Name,Level,XP\nShadow Hunter,15,8750';
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hunter-data.csv';
    a.click();
  };

  const handleLogoutAll = () => {
    if (window.confirm('Are you sure you want to logout from all sessions?')) {
      console.log('Logging out all sessions');
      alert('Logged out from all sessions');
    }
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone. Your account will be permanently deleted after a 30-day grace period.'
    );
    if (confirmed) {
      console.log('Account deletion initiated');
      alert('Account deletion initiated. You have 30 days to cancel this action.');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-text-primary mb-2">
          Privacy & Data
        </h2>
        <p className="text-sm text-text-secondary">
          Manage your privacy settings and data
        </p>
      </div>

      {/* Profile Visibility */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Eye" size={18} className="text-primary" />
          <span>Profile Visibility</span>
        </h3>

        <div className="space-y-3">
          {[
            { 
              id: 'public', 
              label: 'Public', 
              description: 'Searchable and visible on leaderboard' 
            },
            { 
              id: 'private', 
              label: 'Private', 
              description: 'Not searchable, hidden from leaderboard' 
            }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => handleChange('profileVisibility', option.id)}
              className={`
                w-full flex items-start p-4 rounded-lg border-2 transition-all duration-200 text-left
                ${settings.profileVisibility === option.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-background hover:border-primary/50'
                }
              `}
            >
              <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 flex-shrink-0 ${
                settings.profileVisibility === option.id
                  ? 'border-primary bg-primary'
                  : 'border-border'
              }`}>
                {settings.profileVisibility === option.id && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
              <div>
                <p className="font-semibold text-text-primary">{option.label}</p>
                <p className="text-sm text-text-secondary">{option.description}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-sm text-text-secondary">
          Choose how your profile appears to other hunters
        </p>
      </div>

      {/* Data Export */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Download" size={18} className="text-primary" />
          <span>Data Export</span>
        </h3>

        <p className="text-sm text-text-secondary">
          Download your data in JSON or CSV format
        </p>

        <div className="flex space-x-3">
          <button
            onClick={handleExportJSON}
            className="flex-1 h-10 px-4 bg-background border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Icon name="FileJson" size={16} />
            <span>Export as JSON</span>
          </button>
          <button
            onClick={handleExportCSV}
            className="flex-1 h-10 px-4 bg-background border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Icon name="FileText" size={16} />
            <span>Export as CSV</span>
          </button>
        </div>
      </div>

      {/* Session Management */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Shield" size={18} className="text-primary" />
          <span>Session Management</span>
        </h3>

        <p className="text-sm text-text-secondary">
          Last login: November 4, 2025 2:15 PM
        </p>

        <button
          onClick={handleLogoutAll}
          className="h-10 px-6 bg-background border border-warning text-warning font-semibold rounded-lg hover:bg-warning/10 transition-all duration-200"
        >
          <Icon name="LogOut" size={16} className="inline mr-2" />
          Logout All Sessions
        </button>
      </div>

      {/* Account Deletion */}
      <div className="bg-error/10 border border-error/30 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-error flex items-center space-x-2">
          <Icon name="AlertTriangle" size={18} />
          <span>Danger Zone</span>
        </h3>

        <p className="text-sm text-text-secondary">
          Once you delete your account, there is no going back. Your account will enter a 30-day grace period before permanent deletion.
        </p>

        <button
          onClick={handleDeleteAccount}
          className="h-10 px-6 bg-error text-error-foreground font-semibold rounded-lg hover:bg-error/90 transition-all duration-200"
        >
          <Icon name="Trash2" size={16} className="inline mr-2" />
          Delete Account
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

export default PrivacyTab;

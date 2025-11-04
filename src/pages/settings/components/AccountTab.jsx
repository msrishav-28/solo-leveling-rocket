import React, { useState } from 'react';
import Icon from '../../../components/AppIcon.jsx';

const AccountTab = ({ onChangesDetected }) => {
  const [email] = useState('hunter@example.com');
  const [connectedAccounts] = useState([
    { provider: 'google', connected: true },
    { provider: 'github', connected: true }
  ]);

  const handleChangeEmail = () => {
    const newEmail = prompt('Enter new email address:', email);
    if (newEmail && newEmail !== email) {
      console.log('Changing email to:', newEmail);
      alert('Email change verification sent to ' + newEmail);
    }
  };

  const handleChangePassword = () => {
    alert('Password change link sent to your email');
  };

  const handleUnlink = (provider) => {
    if (window.confirm(`Are you sure you want to unlink your ${provider} account?`)) {
      console.log('Unlinking', provider);
      alert(`${provider} account unlinked`);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-text-primary mb-2">
          Account Settings
        </h2>
        <p className="text-sm text-text-secondary">
          Manage your account credentials and connections
        </p>
      </div>

      {/* Email */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Mail" size={18} className="text-primary" />
          <span>Email Address</span>
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-text-primary font-mono">{email}</p>
          <button
            onClick={handleChangeEmail}
            className="h-10 px-6 bg-background border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200"
          >
            Change Email
          </button>
        </div>
      </div>

      {/* Password */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Lock" size={18} className="text-primary" />
          <span>Password</span>
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-text-secondary">••••••••</p>
          <button
            onClick={handleChangePassword}
            className="h-10 px-6 bg-background border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200"
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Link" size={18} className="text-primary" />
          <span>Connected Accounts</span>
        </h3>

        <div className="space-y-3">
          {connectedAccounts.map((account) => (
            <div
              key={account.provider}
              className="flex items-center justify-between p-4 bg-background border border-border rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                  <Icon 
                    name={account.provider === 'google' ? 'Mail' : 'Github'} 
                    size={20} 
                    className="text-primary" 
                  />
                </div>
                <div>
                  <p className="font-semibold text-text-primary capitalize">
                    {account.provider}
                  </p>
                  <p className="text-sm text-success flex items-center space-x-1">
                    <Icon name="CheckCircle" size={14} />
                    <span>Connected</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleUnlink(account.provider)}
                className="h-9 px-4 bg-background border border-error text-error font-semibold rounded-lg hover:bg-error/10 transition-all duration-200 text-sm"
              >
                Unlink
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountTab;

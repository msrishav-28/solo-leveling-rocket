import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon.jsx';
import NotificationsTab from './components/NotificationsTab';
import DisplayTab from './components/DisplayTab';
import PrivacyTab from './components/PrivacyTab';
import AccountTab from './components/AccountTab';
import AboutTab from './components/AboutTab';

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('notifications');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Mock user data
  const playerData = {
    name: "Shadow Hunter",
    level: 15,
    rank: "C",
    currentXP: 8750,
    levelXP: 8000,
    nextLevelXP: 10000,
    streak: 12
  };

  const tabs = [
    { id: 'notifications', label: 'Notifications', icon: 'Bell' },
    { id: 'display', label: 'Display', icon: 'Monitor' },
    { id: 'privacy', label: 'Privacy & Data', icon: 'Shield' },
    { id: 'account', label: 'Account', icon: 'User' },
    { id: 'about', label: 'About', icon: 'Info' }
  ];

  const handleNavigate = (path) => {
    if (hasUnsavedChanges) {
      const confirm = window.confirm('You have unsaved changes. Are you sure you want to leave?');
      if (!confirm) return;
    }
    navigate(path);
  };

  const handleTabChange = (tabId) => {
    if (hasUnsavedChanges) {
      const confirm = window.confirm('You have unsaved changes. Are you sure you want to switch tabs?');
      if (!confirm) return;
    }
    setActiveTab(tabId);
    setHasUnsavedChanges(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'notifications':
        return <NotificationsTab onChangesDetected={setHasUnsavedChanges} />;
      case 'display':
        return <DisplayTab onChangesDetected={setHasUnsavedChanges} />;
      case 'privacy':
        return <PrivacyTab onChangesDetected={setHasUnsavedChanges} />;
      case 'account':
        return <AccountTab onChangesDetected={setHasUnsavedChanges} />;
      case 'about':
        return <AboutTab />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Settings | Solo Leveling Tracker</title>
        <meta name="description" content="Manage your account settings and preferences" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header user={playerData} onNavigate={handleNavigate} />
        
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Page Title */}
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary">
              <span className="text-primary text-glow">Settings</span>
            </h1>
            <p className="text-text-secondary">
              Manage your account and preferences
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tabs Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-card border border-border rounded-xl p-2 space-y-1 shadow-elevation-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                      font-medium transition-all duration-200
                      ${activeTab === tab.id
                        ? 'bg-primary/10 text-primary border-l-4 border-primary'
                        : 'text-text-secondary hover:bg-surface/50 hover:text-text-primary border-l-4 border-transparent'
                      }
                    `}
                  >
                    <Icon name={tab.icon} size={20} />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1">
              <div className="bg-card border border-border rounded-xl shadow-elevation-2">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </main>

        {/* Mobile spacing */}
        <div className="h-20 md:hidden"></div>
      </div>
    </>
  );
};

export default Settings;

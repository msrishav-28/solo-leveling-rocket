import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const AboutTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-text-primary mb-2">
          About
        </h2>
        <p className="text-sm text-text-secondary">
          Information about Solo Leveling Habit Tracker
        </p>
      </div>

      {/* Version Info */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
            <Icon name="Zap" size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-primary">
              Solo Leveling Tracker
            </h3>
            <p className="text-sm text-text-secondary">
              Version 1.0.0 MVP
            </p>
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">
          Transform your daily habits into an epic RPG adventure. Complete quests, gain XP, 
          level up attributes, and rise from F to S-Rank Hunter.
        </p>
      </div>

      {/* Links */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary">
          Resources
        </h3>

        <div className="space-y-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <Icon name="Github" size={20} className="text-text-secondary group-hover:text-primary transition-colors" />
              <span className="text-text-primary">GitHub Repository</span>
            </div>
            <Icon name="ExternalLink" size={16} className="text-text-secondary" />
          </a>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <Icon name="MessageCircle" size={20} className="text-text-secondary group-hover:text-primary transition-colors" />
              <span className="text-text-primary">Join Our Discord</span>
            </div>
            <Icon name="ExternalLink" size={16} className="text-text-secondary" />
          </a>

          <a
            href="mailto:support@example.com"
            className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={20} className="text-text-secondary group-hover:text-primary transition-colors" />
              <span className="text-text-primary">Send Feedback</span>
            </div>
            <Icon name="ExternalLink" size={16} className="text-text-secondary" />
          </a>

          <a
            href="/lore"
            className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <Icon name="Book" size={20} className="text-text-secondary group-hover:text-primary transition-colors" />
              <span className="text-text-primary">About The System (Lore)</span>
            </div>
            <Icon name="ChevronRight" size={16} className="text-text-secondary" />
          </a>
        </div>
      </div>

      {/* Credits */}
      <div className="bg-input border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-text-primary">
          Credits
        </h3>

        <div className="text-sm text-text-secondary space-y-2">
          <p>
            Inspired by the manga/manhwa <span className="text-primary font-semibold">Solo Leveling</span> by Chugong
          </p>
          <p>
            Built with React, Tailwind CSS, and ❤️
          </p>
          <p className="text-xs pt-2 border-t border-border">
            © 2025 Solo Leveling Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;

import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/solo-leveling-tracker' },
    { name: 'Discord', icon: 'MessageCircle', url: 'https://discord.gg/solo-leveling' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/solo_leveling_app' }
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features-section' },
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Leaderboard', href: '/leaderboard' },
        { name: 'Roadmap', href: '#' }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord Server', href: 'https://discord.gg/solo-leveling' },
        { name: 'GitHub', href: 'https://github.com/solo-leveling-tracker' },
        { name: 'Bug Reports', href: 'https://github.com/solo-leveling-tracker/issues' },
        { name: 'Feature Requests', href: 'https://github.com/solo-leveling-tracker/discussions' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Getting Started', href: '#' },
        { name: 'API Documentation', href: '#' },
        { name: 'Habit Formation Guide', href: '#' },
        { name: 'RPG Mechanics', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Data Export', href: '#' }
      ]
    }
  ];

  const trustSignals = [
    { name: 'SSL Secured', icon: 'Shield', description: 'Your data is protected with SSL encryption' },
    { name: 'Open Source', icon: 'Code', description: 'Fully transparent and community-driven' },
    { name: 'Privacy First', icon: 'Lock', description: 'We never sell or share your personal data' }
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-slate-900 border-t border-border">
      {/* Trust Signals Section */}
      <div className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustSignals?.map((signal, index) => (
              <div key={index} className="flex items-center space-x-4 text-center md:text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow-primary flex-shrink-0">
                  <Icon name={signal?.icon} size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{signal?.name}</h3>
                  <p className="text-sm text-text-secondary">{signal?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow-primary">
                  <Icon name="Zap" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary text-glow">
                    Solo Leveling
                  </h3>
                  <p className="text-sm text-text-secondary">Habit Tracker</p>
                </div>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Transform your daily habits into an epic RPG adventure. Level up your life, 
                one quest at a time, and become the S-Rank Hunter you were meant to be.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
                    title={social?.name}
                  >
                    <Icon name={social?.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks?.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{section?.title}</h4>
                <ul className="space-y-3">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link?.href}
                        className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="py-6 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-text-secondary mb-4 md:mb-0">
              © {currentYear} Solo Leveling Habit Tracker. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <span>Made with ❤️ for the Hunter community</span>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} />
                <span>English (US)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
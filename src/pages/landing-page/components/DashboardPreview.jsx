import React from 'react';

import Icon from '../../../components/AppIcon';

const DashboardPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Your Hunter Dashboard
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Get a glimpse of your command center where you'll manage quests, track progress, 
            and watch your character evolve through consistent habit formation.
          </p>
        </div>

        {/* Dashboard Preview Container */}
        <div className="relative">
          {/* Main Dashboard Screenshot */}
          <div className="relative bg-surface/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-border shadow-2xl">
            {/* Mock Dashboard Interface */}
            <div className="bg-background rounded-lg p-6 md:p-8">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">Hunter Alex</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-xs font-bold text-background">
                        A
                      </div>
                      <span className="text-text-secondary">A-Rank Hunter</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-primary">2,847</div>
                    <div className="text-xs text-text-secondary">Total XP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-success">127</div>
                    <div className="text-xs text-text-secondary">Day Streak</div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-secondary">Level 18 Progress</span>
                  <span className="text-sm text-primary">847 / 1200 XP</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full shadow-glow-primary"
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>

              {/* Quest Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  { title: 'Morning Workout', difficulty: 'Hard', xp: 150, streak: 12, completed: true },
                  { title: 'Read 30 Minutes', difficulty: 'Normal', xp: 100, streak: 8, completed: true },
                  { title: 'Meditation', difficulty: 'Easy', xp: 70, streak: 25, completed: false }
                ]?.map((quest, index) => (
                  <div key={index} className={`bg-surface rounded-lg p-4 border ${quest?.completed ? 'border-success' : 'border-border'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{quest?.title}</h4>
                      <Icon 
                        name={quest?.completed ? "CheckCircle" : "Circle"} 
                        size={20} 
                        className={quest?.completed ? "text-success" : "text-text-secondary"} 
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">{quest?.difficulty}</span>
                      <span className="text-primary">+{quest?.xp} XP</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-2">
                      <Icon name="Flame" size={14} className="text-orange-500" />
                      <span className="text-xs text-text-secondary">{quest?.streak} days</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Attribute Rings Preview */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { name: 'STR', value: 85, color: '#ff0033' },
                  { name: 'INT', value: 92, color: '#00d9ff' },
                  { name: 'CON', value: 78, color: '#00ff00' },
                  { name: 'DEX', value: 88, color: '#ffd700' },
                  { name: 'CHA', value: 75, color: '#b700ff' },
                  { name: 'LUK', value: 82, color: '#ffcc00' }
                ]?.map((attr, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#1a1f3a"
                          strokeWidth="4"
                          fill="none"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke={attr?.color}
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={`${attr?.value * 1.76} 176`}
                          className="transition-all duration-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{attr?.value}</span>
                      </div>
                    </div>
                    <div className="text-xs text-text-secondary">{attr?.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Feature Highlights */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-glow-primary hidden md:block">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={16} />
              <span className="text-sm font-semibold">Real-time XP</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-glow-success hidden md:block">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" size={16} />
              <span className="text-sm font-semibold">Streak Tracking</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: 'BarChart3',
              title: 'Visual Progress',
              description: 'Track your growth with beautiful charts, progress bars, and attribute rings that show your development over time.'
            },
            {
              icon: 'Calendar',
              title: 'Smart Scheduling',
              description: 'Set up recurring quests, custom schedules, and receive intelligent reminders to maintain your momentum.'
            },
            {
              icon: 'Users',
              title: 'Social Features',
              description: 'Connect with other hunters, share achievements, and compete on global leaderboards for extra motivation.'
            }
          ]?.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow-primary">
                <Icon name={feature?.icon} size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                {feature?.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import PlayerStats from './components/PlayerStats';
import QuestList from './components/QuestList';
import RecentAchievements from './components/RecentAchievements';
import UpcomingReminders from './components/UpcomingReminders';
import QuickStats from './components/QuickStats';

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock player data
  const playerData = {
    name: "Shadow Hunter",
    level: 15,
    rank: "C",
    currentXP: 8750,
    levelXP: 8000,
    nextLevelXP: 10000,
    streak: 12,
    attributes: [
      { name: "STR", value: 45, icon: "Sword" },
      { name: "INT", value: 38, icon: "Brain" },
      { name: "CON", value: 42, icon: "Shield" },
      { name: "DEX", value: 35, icon: "Zap" },
      { name: "CHA", value: 28, icon: "Users" },
      { name: "LUK", value: 31, icon: "Clover" }
    ]
  };

  // Mock quests data
  const questsData = [
    {
      id: 1,
      title: "Morning Meditation",
      description: "Practice mindfulness meditation for 15 minutes to increase focus and mental clarity.",
      type: "daily",
      difficulty: "Easy",
      linkedAttributes: ["INT", "CON"],
      xpReward: 150,
      completed: false,
      timeTracked: null,
      schedule: "Daily at 7:00 AM"
    },
    {
      id: 2,
      title: "Strength Training Workout",
      description: "Complete a full-body strength training session focusing on compound movements.",
      type: "recurring",
      difficulty: "Hard",
      linkedAttributes: ["STR", "CON"],
      xpReward: 300,
      completed: false,
      timeTracked: null,
      schedule: "Monday, Wednesday, Friday at 6:00 PM"
    },
    {
      id: 3,
      title: "Read Programming Book",
      description: "Read at least 20 pages of \'Clean Code\' to improve software development skills.",
      type: "daily",
      difficulty: "Normal",
      linkedAttributes: ["INT"],
      xpReward: 200,
      completed: true,
      timeTracked: "45 minutes",
      schedule: "Daily at 9:00 PM"
    },
    {
      id: 4,
      title: "Network with Colleagues",
      description: "Reach out to 3 professional contacts to maintain and build relationships.",
      type: "recurring",
      difficulty: "Normal",
      linkedAttributes: ["CHA"],
      xpReward: 180,
      completed: false,
      timeTracked: null,
      schedule: "Weekly on Fridays"
    },
    {
      id: 5,
      title: "Complete Project Proposal",
      description: "Finish writing the comprehensive project proposal for the new client initiative.",
      type: "one-time",
      difficulty: "Hard",
      linkedAttributes: ["INT", "CHA"],
      xpReward: 500,
      completed: false,
      timeTracked: null,
      schedule: "Due: November 10, 2025"
    }
  ];

  // Mock achievements data
  const achievementsData = [
    {
      id: 1,
      title: "Streak Master",
      description: "Maintained a 10-day quest completion streak",
      type: "streak",
      rarity: "rare",
      xpReward: 500,
      timeEarned: "2 days ago"
    },
    {
      id: 2,
      title: "Knowledge Seeker",
      description: "Completed 25 intelligence-based quests",
      type: "attribute",
      rarity: "epic",
      xpReward: 750,
      timeEarned: "1 week ago"
    },
    {
      id: 3,
      title: "Early Bird",
      description: "Completed morning quests for 7 consecutive days",
      type: "quest",
      rarity: "common",
      xpReward: 200,
      timeEarned: "3 days ago"
    }
  ];

  // Mock reminders data
  const remindersData = [
    {
      id: 1,
      questTitle: "Morning Meditation",
      questType: "daily",
      scheduledTime: "2025-11-03T07:00:00",
      priority: "high",
      description: "Start your day with mindfulness"
    },
    {
      id: 2,
      questTitle: "Strength Training Workout",
      questType: "recurring",
      scheduledTime: "2025-11-03T18:00:00",
      priority: "medium",
      description: "Full-body workout session"
    },
    {
      id: 3,
      questTitle: "Read Programming Book",
      questType: "daily",
      scheduledTime: "2025-11-03T21:00:00",
      priority: "low",
      description: "Continue with Clean Code chapter 5"
    }
  ];

  // Mock quick stats data
  const quickStatsData = {
    totalQuests: 47,
    questsChange: 5,
    completedToday: 3,
    todayChange: 1,
    weeklyStreak: 12,
    streakChange: 2,
    totalXP: 15750,
    xpChange: 850,
    weeklyProgress: 68,
    completedThisWeek: 17,
    weeklyGoal: 25
  };

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleCompleteQuest = (questId) => {
    // Navigate to quest completion modal
    navigate('/quest-completion-modal', { state: { questId } });
  };

  const handleEditQuest = (questId) => {
    // Navigate to quest creation modal with edit mode
    navigate('/quest-creation-modal', { state: { questId, mode: 'edit' } });
  };

  const handleCreateQuest = () => {
    navigate('/quest-creation-modal');
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  // Add this handler function
  const handleNavigate = (path) => {
    navigate(path);
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header user={playerData} onNavigate={handleNavigate} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary">
              Welcome back, <span className="text-primary text-glow">{playerData?.name}</span>!
            </h1>
            <div className="flex items-center space-x-4 text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>{formatDate(currentTime)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>{formatTime(currentTime)}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={handleViewLeaderboard}
              iconName="Trophy"
              iconPosition="left"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              Leaderboard
            </Button>
            <Button
              variant="default"
              onClick={handleCreateQuest}
              iconName="Plus"
              iconPosition="left"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary"
            >
              Create New Quest
            </Button>
          </div>
        </div>

        {/* Player Stats Section */}
        <PlayerStats player={playerData} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Quest List - Takes up 2 columns on xl screens */}
          <div className="xl:col-span-2">
            <QuestList 
              quests={questsData}
              onCompleteQuest={handleCompleteQuest}
              onEditQuest={handleEditQuest}
            />
          </div>

          {/* Side Panel - Takes up 1 column on xl screens */}
          <div className="space-y-6">
            <QuickStats stats={quickStatsData} />
            <RecentAchievements achievements={achievementsData} />
            <UpcomingReminders reminders={remindersData} />
          </div>
        </div>

        {/* Quick Actions Footer */}
        <div className="bg-surface rounded-lg border border-border p-6 shadow-elevation-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-text-primary">
                  Ready to level up?
                </h3>
                <p className="text-text-secondary text-sm">
                  Complete more quests to gain XP and advance your rank!
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                iconName="Settings"
                className="text-text-secondary hover:text-primary"
              >
                Settings
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="User"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Profile
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Mobile spacing for bottom navigation */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default Dashboard;
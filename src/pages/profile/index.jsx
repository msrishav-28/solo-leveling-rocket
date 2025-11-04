import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HunterIdentity from './components/HunterIdentity';
import AttributeRings from './components/AttributeRings';
import Statistics from './components/Statistics';
import Achievements from './components/Achievements';
import Equipment from './components/Equipment';

const Profile = () => {
  const navigate = useNavigate();

  // Mock player data
  const playerData = {
    name: "Shadow Hunter",
    email: "hunter@example.com",
    joinedDate: "November 3, 2025",
    level: 15,
    rank: "C",
    currentXP: 8750,
    levelXP: 8000,
    nextLevelXP: 10000,
    currentStreak: 12,
    maxStreak: 15,
    avatar: "😎",
    attributes: [
      { name: "Strength", value: 45, totalPoints: 1234, nextLevel: 287, icon: "Sword", color: "primary" },
      { name: "Intelligence", value: 38, totalPoints: 987, nextLevel: 213, icon: "Brain", color: "primary" },
      { name: "Constitution", value: 42, totalPoints: 1156, nextLevel: 144, icon: "Heart", color: "primary" },
      { name: "Dexterity", value: 35, totalPoints: 845, nextLevel: 355, icon: "Zap", color: "primary" },
      { name: "Charisma", value: 28, totalPoints: 654, nextLevel: 146, icon: "Users", color: "primary" },
      { name: "Luck", value: 31, totalPoints: 723, nextLevel: 277, icon: "Clover", color: "primary" }
    ]
  };

  const statistics = {
    totalXP: 8750,
    questsCompleted: 47,
    longestStreak: 15,
    currentStreak: 12,
    averageXP: 186,
    mostActiveAttribute: { name: "Strength", level: 45 },
    totalPlayTime: "23 hours",
    questSuccessRate: 94
  };

  const achievements = [
    {
      id: 1,
      title: "First Quest Completed",
      description: "Completed your first quest",
      date: "November 3, 2025",
      rarity: "common",
      unlocked: true
    },
    {
      id: 2,
      title: "Rank F Reached",
      description: "Advanced to F-Rank",
      date: "November 3, 2025",
      rarity: "common",
      unlocked: true
    },
    {
      id: 3,
      title: "Level 10 Achieved",
      description: "Reached level 10",
      date: "November 5, 2025",
      rarity: "uncommon",
      unlocked: true
    },
    {
      id: 4,
      title: "10-Day Streak",
      description: "Maintained a 10-day streak",
      date: "November 8, 2025",
      rarity: "rare",
      unlocked: true
    },
    {
      id: 5,
      title: "7-Day Streak",
      description: "Complete quests for 7 days straight",
      date: null,
      rarity: "common",
      unlocked: false
    },
    {
      id: 6,
      title: "30-Day Streak",
      description: "Complete quests for 30 days straight",
      date: null,
      rarity: "epic",
      unlocked: false
    },
    {
      id: 7,
      title: "Level 50",
      description: "Reach level 50",
      date: null,
      rarity: "legendary",
      unlocked: false
    }
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Helmet>
        <title>Profile - {playerData.name} | Solo Leveling Tracker</title>
        <meta name="description" content={`View ${playerData.name}'s hunter profile, stats, and achievements`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header user={playerData} onNavigate={handleNavigate} />
        
        <main className="container mx-auto px-4 py-8 space-y-8 max-w-7xl">
          {/* Page Title */}
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary">
              Hunter <span className="text-primary text-glow">Profile</span>
            </h1>
            <p className="text-text-secondary">
              View your progress, stats, and achievements
            </p>
          </div>

          {/* Hunter Identity */}
          <HunterIdentity player={playerData} />

          {/* Attributes Section */}
          <AttributeRings attributes={playerData.attributes} />

          {/* Statistics */}
          <Statistics stats={statistics} />

          {/* Achievements */}
          <Achievements achievements={achievements} />

          {/* Equipment (Phase 2) */}
          <Equipment />
        </main>

        {/* Mobile spacing */}
        <div className="h-20 md:hidden"></div>
      </div>
    </>
  );
};

export default Profile;

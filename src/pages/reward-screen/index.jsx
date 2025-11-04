import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import XPGainDisplay from './components/XPGainDisplay';
import AttributeRings from './components/AttributeRings';
import RankProgressIndicator from './components/RankProgressIndicator';
import AchievementNotifications from './components/AchievementNotifications';
import ActionButtons from './components/ActionButtons';
import Icon from '../../components/AppIcon';

const RewardScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Mock reward data - in real app this would come from quest completion
  const mockRewardData = {
    questTitle: "Morning Meditation",
    questDifficulty: "Normal",
    baseXP: 100,
    multiplier: 1.0,
    streakBonus: 25,
    timeBonus: 15,
    totalXP: 140,
    attributeGains: {
      constitution: 2,
      charisma: 1,
      intelligence: 1
    },
    playerAttributes: {
      strength: 45,
      intelligence: 62,
      constitution: 58,
      dexterity: 41,
      charisma: 39,
      luck: 33
    },
    previousRank: "D",
    currentRank: "D",
    newRank: "C",
    isRankUp: false,
    newAchievements: [
      {
        id: 1,
        title: "Mindful Warrior",
        description: "Complete 7 consecutive meditation sessions",
        type: "streak",
        rarity: "rare",
        rewards: {
          xp: 50,
          title: "The Centered"
        },
        progress: {
          current: 7,
          target: 7
        }
      },
      {
        id: 2,
        title: "Early Bird",
        description: "Complete morning quests for 30 days",
        type: "consistency",
        rarity: "epic",
        rewards: {
          xp: 100
        },
        progress: {
          current: 30,
          target: 30
        }
      }
    ],
    playerStats: {
      totalXP: 15420,
      currentStreak: 12,
      completedQuests: 89,
      currentRank: "D"
    }
  };

  // Get reward data from location state or use mock data
  const rewardData = location?.state?.rewardData || mockRewardData;

  useEffect(() => {
    // Show content after initial mount
    const timer1 = setTimeout(() => setShowContent(true), 300);
    
    // Mark animation as complete after all animations
    const timer2 = setTimeout(() => setAnimationComplete(true), 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleContinue = () => {
    navigate('/dashboard', { 
      state: { 
        fromReward: true,
        updatedStats: rewardData?.playerStats 
      }
    });
  };

  const handleShare = () => {
    const shareText = `🎉 Just completed "${rewardData?.questTitle}" and gained ${rewardData?.totalXP} XP!\n\n💪 Growing stronger every day with Solo Leveling Habit Tracker!\n\n#SoloLeveling #HabitTracker #LevelUp #PersonalGrowth`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Solo Leveling Achievement',
        text: shareText,
        url: window.location?.origin
      })?.catch(console.error);
    } else {
      navigator.clipboard?.writeText(shareText)?.then(() => {
        // Show success feedback
        console.log('Achievement copied to clipboard!');
      })?.catch(console.error);
    }
  };

  const user = {
    name: "Shadow Hunter",
    level: 24,
    rank: rewardData?.currentRank
  };

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onNavigate={navigate} />
      {/* Reward Screen Overlay */}
      <div className={`
        fixed inset-0 z-40 bg-background/95 backdrop-blur-lg
        transition-opacity duration-500
        ${showContent ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="min-h-screen flex flex-col">
          {/* Header Section */}
          <div className="flex-shrink-0 pt-24 pb-8">
            <div className="text-center space-y-4">
              <div className={`
                transition-all duration-1000 transform
                ${showContent ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
              `}>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary text-glow mb-2">
                  Quest Complete!
                </h1>
                <p className="text-xl text-text-secondary">
                  "{rewardData?.questTitle}" has been conquered
                </p>
              </div>
              
              {/* Celebration Icons */}
              <div className="flex items-center justify-center space-x-4">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={24}
                    className={`
                      text-accent animate-float
                      ${showContent ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto px-4 pb-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* XP Gain Display */}
              <XPGainDisplay
                baseXP={rewardData?.baseXP}
                multiplier={rewardData?.multiplier}
                streakBonus={rewardData?.streakBonus}
                timeBonus={rewardData?.timeBonus}
                totalXP={rewardData?.totalXP}
                difficulty={rewardData?.questDifficulty}
              />
              
              {/* Attribute Growth */}
              <AttributeRings
                attributeGains={rewardData?.attributeGains}
                playerAttributes={rewardData?.playerAttributes}
              />
              
              {/* Rank Up Indicator */}
              {rewardData?.isRankUp && (
                <RankProgressIndicator
                  currentRank={rewardData?.previousRank}
                  newRank={rewardData?.newRank}
                  isRankUp={rewardData?.isRankUp}
                />
              )}
              
              {/* Achievement Notifications */}
              <AchievementNotifications
                newAchievements={rewardData?.newAchievements}
              />
              
              {/* Action Buttons */}
              <ActionButtons
                questData={rewardData}
                onShare={handleShare}
                onContinue={handleContinue}
              />
            </div>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Floating Particles */}
          {[...Array(20)]?.map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-2 h-2 bg-primary rounded-full animate-float
                ${showContent ? 'opacity-30' : 'opacity-0'}
              `}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3000}ms`,
                animationDuration: `${3000 + Math.random() * 2000}ms`
              }}
            />
          ))}
          
          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
};

export default RewardScreen;
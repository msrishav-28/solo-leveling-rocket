import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestHeader from './components/QuestHeader';
import TimeTracker from './components/TimeTracker';
import DifficultyOverride from './components/DifficultyOverride';
import XPPreview from './components/XPPreview';
import StreakInfo from './components/StreakInfo';
import CompletionActions from './components/CompletionActions';

const QuestCompletionModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Mock quest data - in real app this would come from props or API
  const mockQuest = location?.state?.quest || {
    id: "quest_001",
    title: "Morning Workout Routine",
    description: "Complete a 30-minute workout session including cardio and strength training exercises to boost your physical fitness and energy levels.",
    difficulty: "Normal",
    attribute: "Strength",
    baseXP: 50,
    type: "daily",
    category: "fitness",
    estimatedTime: 30,
    lastCompletedDate: "2025-11-02",
    createdAt: "2025-10-15T08:00:00Z"
  };

  // Mock user data
  const mockUser = {
    id: "user_001",
    name: "Shadow Hunter",
    level: 12,
    currentStreak: 7,
    totalXP: 2450,
    attributes: {
      strength: 25,
      intelligence: 18,
      constitution: 22,
      dexterity: 15,
      charisma: 12,
      luck: 8
    }
  };

  const [quest] = useState(mockQuest);
  const [user] = useState(mockUser);
  const [selectedDifficulty, setSelectedDifficulty] = useState(quest?.difficulty);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate total XP based on current settings
  const calculateTotalXP = () => {
    const difficultyMultipliers = {
      'Easy': 0.7,
      'Normal': 1.0,
      'Hard': 1.5
    };

    const getTimeBonus = (timeInSeconds) => {
      const minutes = timeInSeconds / 60;
      if (minutes >= 30) return 1.2;
      if (minutes >= 15) return 1.1;
      if (minutes >= 5) return 1.05;
      return 1.0;
    };

    const getStreakBonus = (streak) => {
      if (streak >= 30) return 1.5;
      if (streak >= 14) return 1.3;
      if (streak >= 7) return 1.2;
      if (streak >= 3) return 1.1;
      return 1.0;
    };

    const difficultyMultiplier = difficultyMultipliers?.[selectedDifficulty];
    const timeBonus = getTimeBonus(timeSpent);
    const streakBonus = getStreakBonus(user?.currentStreak);
    
    const baseWithDifficulty = Math.floor(quest?.baseXP * difficultyMultiplier);
    const withTimeBonus = Math.floor(baseWithDifficulty * timeBonus);
    const finalXP = Math.floor(withTimeBonus * streakBonus);
    
    return finalXP;
  };

  const totalXP = calculateTotalXP();

  const handleClose = () => {
    navigate('/dashboard');
  };

  const handleComplete = async (completionData) => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Quest completed:', completionData);
    setIsProcessing(false);
  };

  const handleSkip = async (skipData) => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Quest skipped:', skipData);
    setIsProcessing(false);
  };

  const handleReschedule = async (rescheduleData) => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Quest rescheduled:', rescheduleData);
    setIsProcessing(false);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape' && !isProcessing) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isProcessing]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
      <div className="w-full h-full overflow-hidden md:w-auto md:h-auto md:max-w-4xl md:max-h-[90vh]">
        <div className="h-full bg-card border-0 md:border md:border-border rounded-none md:rounded-xl shadow-elevation-3 overflow-hidden">
          {/* Modal Content */}
          <div className="h-full flex flex-col">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 md:p-8 space-y-6">
                {/* Quest Header */}
                <QuestHeader quest={quest} onClose={handleClose} />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Time Tracker */}
                    <TimeTracker 
                      onTimeUpdate={setTimeSpent}
                      initialTime={0}
                    />

                    {/* Difficulty Override */}
                    <DifficultyOverride
                      originalDifficulty={quest?.difficulty}
                      selectedDifficulty={selectedDifficulty}
                      onDifficultyChange={setSelectedDifficulty}
                    />
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* XP Preview */}
                    <XPPreview
                      baseXP={quest?.baseXP}
                      difficulty={selectedDifficulty}
                      timeSpent={timeSpent}
                      currentStreak={user?.currentStreak}
                      totalXP={totalXP}
                    />

                    {/* Streak Information */}
                    <StreakInfo
                      currentStreak={user?.currentStreak}
                      questType={quest?.type}
                      lastCompletedDate={quest?.lastCompletedDate}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Footer with Actions */}
            <div className="border-t border-border bg-card p-6 md:p-8">
              <CompletionActions
                quest={quest}
                selectedDifficulty={selectedDifficulty}
                timeSpent={timeSpent}
                totalXP={totalXP}
                onComplete={handleComplete}
                onSkip={handleSkip}
                onReschedule={handleReschedule}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCompletionModal;
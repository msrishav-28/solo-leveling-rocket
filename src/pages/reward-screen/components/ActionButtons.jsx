import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ActionButtons = ({ questData, onShare, onContinue }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else {
      navigate('/dashboard');
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      // Default share functionality
      const shareText = `🎉 Just completed "${questData?.title || 'a quest'}" and gained ${questData?.totalXP || 0} XP! \n\n#SoloLeveling #HabitTracker #LevelUp`;
      
      if (navigator.share) {
        navigator.share({
          title: 'Solo Leveling Achievement',
          text: shareText,
          url: window.location?.origin
        })?.catch(console.error);
      } else {
        // Fallback to clipboard
        navigator.clipboard?.writeText(shareText)?.then(() => {
          // Could show a toast notification here
          console.log('Achievement copied to clipboard!');
        })?.catch(console.error);
      }
    }
  };

  const handleViewProfile = () => {
    navigate('/profile');
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  return (
    <div className="space-y-6">
      {/* Primary Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="default"
          size="lg"
          onClick={handleContinue}
          iconName="ArrowRight"
          iconPosition="right"
          className="min-w-48 shadow-glow-primary"
        >
          Continue Adventure
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={handleShare}
          iconName="Share2"
          iconPosition="left"
          className="min-w-48"
        >
          Share Achievement
        </Button>
      </div>
      
      {/* Secondary Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          variant="ghost"
          size="default"
          onClick={handleViewProfile}
          iconName="User"
          iconPosition="left"
          className="text-text-secondary hover:text-primary"
        >
          View Profile
        </Button>
        
        <Button
          variant="ghost"
          size="default"
          onClick={handleViewLeaderboard}
          iconName="Trophy"
          iconPosition="left"
          className="text-text-secondary hover:text-primary"
        >
          Leaderboard
        </Button>
      </div>
      
      {/* Quick Stats */}
      <div className="bg-surface/30 backdrop-blur-sm rounded-lg p-4 border border-border">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-1">
              <Icon name="Zap" size={16} className="text-success" />
              <span className="text-xs text-text-secondary">Total XP</span>
            </div>
            <div className="font-mono font-bold text-success">
              {questData?.playerStats?.totalXP?.toLocaleString() || '0'}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-1">
              <Icon name="Flame" size={16} className="text-warning" />
              <span className="text-xs text-text-secondary">Streak</span>
            </div>
            <div className="font-mono font-bold text-warning">
              {questData?.playerStats?.currentStreak || '0'} days
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-1">
              <Icon name="Target" size={16} className="text-primary" />
              <span className="text-xs text-text-secondary">Completed</span>
            </div>
            <div className="font-mono font-bold text-primary">
              {questData?.playerStats?.completedQuests || '0'}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-1">
              <Icon name="Crown" size={16} className="text-accent" />
              <span className="text-xs text-text-secondary">Rank</span>
            </div>
            <div className="font-mono font-bold text-accent">
              {questData?.playerStats?.currentRank || 'F'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Motivational Message */}
      <div className="text-center space-y-2">
        <p className="text-text-secondary text-sm">
          "The path of growth never ends. Every quest completed makes you stronger."
        </p>
        <div className="flex items-center justify-center space-x-2 text-xs text-text-secondary">
          <Icon name="Clock" size={14} />
          <span>Ready for your next challenge?</span>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
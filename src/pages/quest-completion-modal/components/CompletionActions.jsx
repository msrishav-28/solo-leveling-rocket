import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CompletionActions = ({ 
  quest, 
  selectedDifficulty, 
  timeSpent, 
  totalXP, 
  onComplete, 
  onSkip, 
  onReschedule,
  isProcessing 
}) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [actionType, setActionType] = useState(null);

  const handleAction = (type) => {
    setActionType(type);
    setShowConfirmation(true);
  };

  const confirmAction = async () => {
    setShowConfirmation(false);
    
    try {
      switch (actionType) {
        case 'complete':
          await onComplete({
            questId: quest?.id,
            difficulty: selectedDifficulty,
            timeSpent,
            xpEarned: totalXP,
            completedAt: new Date()?.toISOString()
          });
          // Navigate to reward screen
          navigate('/reward-screen', {
            state: {
              quest,
              xpEarned: totalXP,
              difficulty: selectedDifficulty,
              timeSpent
            }
          });
          break;
        case 'skip':
          await onSkip({
            questId: quest?.id,
            skippedAt: new Date()?.toISOString(),
            reason: 'manual_skip'
          });
          navigate('/dashboard');
          break;
        case 'reschedule':
          await onReschedule({
            questId: quest?.id,
            rescheduledAt: new Date()?.toISOString()
          });
          navigate('/dashboard');
          break;
      }
    } catch (error) {
      console.error('Action failed:', error);
      setActionType(null);
    }
  };

  const getActionDetails = () => {
    switch (actionType) {
      case 'complete':
        return {
          title: 'Complete Quest',
          message: `You will earn ${totalXP} XP and this quest will be marked as completed.`,
          icon: 'CheckCircle',
          color: 'text-success',
          confirmText: 'Complete Quest',
          confirmVariant: 'default'
        };
      case 'skip':
        return {
          title: 'Skip Quest',
          message: 'This quest will be marked as skipped and your streak may be affected.',
          icon: 'SkipForward',
          color: 'text-warning',
          confirmText: 'Skip Quest',
          confirmVariant: 'warning'
        };
      case 'reschedule':
        return {
          title: 'Reschedule Quest',
          message: 'This quest will be moved to tomorrow and your streak will be maintained.',
          icon: 'Calendar',
          color: 'text-primary',
          confirmText: 'Reschedule',
          confirmVariant: 'outline'
        };
      default:
        return null;
    }
  };

  if (showConfirmation) {
    const actionDetails = getActionDetails();
    
    return (
      <div className="space-y-6">
        <div className="bg-surface rounded-lg border border-border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center`}>
              <Icon name={actionDetails?.icon} size={20} className={actionDetails?.color} />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-text-primary">
                {actionDetails?.title}
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                {actionDetails?.message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button
            variant={actionDetails?.confirmVariant}
            onClick={confirmAction}
            loading={isProcessing}
            iconName={actionDetails?.icon}
            iconPosition="left"
            className="flex-1"
          >
            {actionDetails?.confirmText}
          </Button>
          
          <Button
            variant="outline"
            onClick={() => {
              setShowConfirmation(false);
              setActionType(null);
            }}
            disabled={isProcessing}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Primary Action */}
      <Button
        variant="default"
        onClick={() => handleAction('complete')}
        disabled={isProcessing}
        iconName="CheckCircle"
        iconPosition="left"
        fullWidth
        className="h-12 text-lg font-semibold shadow-glow-primary"
      >
        Complete Quest (+{totalXP} XP)
      </Button>

      {/* Secondary Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button
          variant="outline"
          onClick={() => handleAction('skip')}
          disabled={isProcessing}
          iconName="SkipForward"
          iconPosition="left"
        >
          Mark as Skipped
        </Button>
        
        <Button
          variant="outline"
          onClick={() => handleAction('reschedule')}
          disabled={isProcessing}
          iconName="Calendar"
          iconPosition="left"
        >
          Reschedule
        </Button>
      </div>

      {/* Action Descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="text-center p-3 bg-success/5 rounded-lg border border-success/20">
          <Icon name="CheckCircle" size={16} className="text-success mx-auto mb-1" />
          <div className="text-xs text-success font-medium">Complete</div>
          <div className="text-xs text-text-secondary">Earn XP & maintain streak</div>
        </div>
        
        <div className="text-center p-3 bg-warning/5 rounded-lg border border-warning/20">
          <Icon name="SkipForward" size={16} className="text-warning mx-auto mb-1" />
          <div className="text-xs text-warning font-medium">Skip</div>
          <div className="text-xs text-text-secondary">No XP, may break streak</div>
        </div>
        
        <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/20">
          <Icon name="Calendar" size={16} className="text-primary mx-auto mb-1" />
          <div className="text-xs text-primary font-medium">Reschedule</div>
          <div className="text-xs text-text-secondary">Move to tomorrow</div>
        </div>
      </div>
    </div>
  );
};

export default CompletionActions;
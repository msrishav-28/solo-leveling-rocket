import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SchedulingOptions = ({ 
  questType, 
  reminderTime, 
  onReminderTimeChange,
  frequency,
  onFrequencyChange,
  deadline,
  onDeadlineChange,
  completionsPerDay,
  onCompletionsPerDayChange
}) => {
  const frequencyOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-heading font-semibold text-text-primary flex items-center">
        <Icon name="Clock" size={20} className="mr-2 text-primary" />
        Scheduling Options
      </h3>
      {/* Reminder Time */}
      <div className="space-y-2">
        <Input
          type="time"
          label="Reminder Time"
          description="Set a daily reminder for this quest"
          value={reminderTime}
          onChange={(e) => onReminderTimeChange(e?.target?.value)}
          className="w-full md:w-48"
        />
      </div>
      {/* Frequency for Recurring Tasks */}
      {questType === 'recurring' && (
        <div className="space-y-3">
          <label className="block text-base font-medium text-text-primary">
            Frequency
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {frequencyOptions?.map((option) => (
              <button
                key={option?.value}
                type="button"
                onClick={() => onFrequencyChange(option?.value)}
                className={`
                  p-3 rounded-lg border-2 transition-all duration-300
                  hover:scale-105 text-center
                  ${frequency === option?.value 
                    ? 'bg-primary/10 border-primary text-primary shadow-glow-primary' 
                    : 'bg-surface border-border text-text-primary hover:border-primary/50'
                  }
                `}
              >
                <span className="font-medium text-sm">{option?.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Completions Per Day for Daily Habits */}
      {questType === 'daily' && (
        <div className="space-y-2">
          <Input
            type="number"
            label="Completions Per Day"
            description="How many times can this be completed daily?"
            value={completionsPerDay}
            onChange={(e) => onCompletionsPerDayChange(parseInt(e?.target?.value) || 1)}
            min="1"
            max="10"
            className="w-full md:w-32"
          />
        </div>
      )}
      {/* Deadline for One-Time Quests */}
      {questType === 'oneTime' && (
        <div className="space-y-2">
          <Input
            type="datetime-local"
            label="Deadline (Optional)"
            description="Set a completion deadline for this quest"
            value={deadline}
            onChange={(e) => onDeadlineChange(e?.target?.value)}
            className="w-full md:w-64"
          />
        </div>
      )}
      {/* Advanced Options */}
      <div className="bg-muted/30 rounded-lg p-4 space-y-4">
        <h4 className="text-base font-heading font-medium text-text-primary flex items-center">
          <Icon name="Settings" size={16} className="mr-2 text-secondary" />
          Advanced Options
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg border border-border">
            <Icon name="Bell" size={16} className="text-accent" />
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">Push Notifications</p>
              <p className="text-xs text-text-secondary">Browser notifications for reminders</p>
            </div>
            <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-all duration-300"></div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg border border-border">
            <Icon name="Repeat" size={16} className="text-success" />
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">Auto-Reset</p>
              <p className="text-xs text-text-secondary">Reset progress at midnight</p>
            </div>
            <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingOptions;
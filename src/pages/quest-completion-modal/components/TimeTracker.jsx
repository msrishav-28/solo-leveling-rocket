import React, { useState, useEffect } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TimeTracker = ({ onTimeUpdate, initialTime = 0 }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(initialTime);
  const [startTime, setStartTime] = useState(null);
  const [manualTime, setManualTime] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);

  useEffect(() => {
    let interval;
    if (isTracking && startTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        setElapsedTime(elapsed);
        onTimeUpdate(elapsed);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking, startTime, onTimeUpdate]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes?.toString()?.padStart(2, '0')}:${secs?.toString()?.padStart(2, '0')}`;
    }
    return `${minutes}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    if (isTracking) {
      setIsTracking(false);
      setStartTime(null);
    } else {
      setIsTracking(true);
      setStartTime(Date.now() - (elapsedTime * 1000));
    }
  };

  const handleReset = () => {
    setIsTracking(false);
    setStartTime(null);
    setElapsedTime(0);
    onTimeUpdate(0);
  };

  const handleManualTimeSubmit = () => {
    const timeInMinutes = parseInt(manualTime);
    if (timeInMinutes && timeInMinutes > 0) {
      const timeInSeconds = timeInMinutes * 60;
      setElapsedTime(timeInSeconds);
      onTimeUpdate(timeInSeconds);
      setManualTime('');
      setShowManualInput(false);
    }
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-heading font-semibold text-text-primary">
          Time Tracking
        </h3>
        <button
          onClick={() => setShowManualInput(!showManualInput)}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Manual Entry
        </button>
      </div>
      <div className="text-center mb-6">
        <div className="text-4xl font-mono font-bold text-primary mb-2 text-glow">
          {formatTime(elapsedTime)}
        </div>
        <p className="text-sm text-text-secondary">
          {isTracking ? 'Timer Running' : 'Timer Stopped'}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-4 mb-4">
        <Button
          variant={isTracking ? "destructive" : "default"}
          onClick={handleStartStop}
          iconName={isTracking ? "Pause" : "Play"}
          iconPosition="left"
          className="min-w-[120px]"
        >
          {isTracking ? 'Stop' : 'Start'}
        </Button>

        <Button
          variant="outline"
          onClick={handleReset}
          iconName="RotateCcw"
          iconPosition="left"
          disabled={elapsedTime === 0}
        >
          Reset
        </Button>
      </div>
      {showManualInput && (
        <div className="border-t border-border pt-4">
          <div className="flex items-end space-x-3">
            <div className="flex-1">
              <Input
                label="Manual Time Entry"
                type="number"
                placeholder="Enter minutes"
                value={manualTime}
                onChange={(e) => setManualTime(e?.target?.value)}
                min="1"
                max="480"
              />
            </div>
            <Button
              variant="outline"
              onClick={handleManualTimeSubmit}
              disabled={!manualTime || parseInt(manualTime) <= 0}
              className="mb-0"
            >
              Set
            </Button>
          </div>
          <p className="text-xs text-text-secondary mt-2">
            Enter time in minutes (1-480 minutes max)
          </p>
        </div>
      )}
    </div>
  );
};

export default TimeTracker;
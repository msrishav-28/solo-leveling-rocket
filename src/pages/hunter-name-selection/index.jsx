import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon.jsx';
import HunterNameInput from './components/HunterNameInput';
import AvatarSelector from './components/AvatarSelector';

const HunterNameSelection = () => {
  const navigate = useNavigate();
  const [hunterName, setHunterName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('confident');
  const [isAvailable, setIsAvailable] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Debounced availability check
  useEffect(() => {
    if (hunterName.length < 3) {
      setIsAvailable(null);
      return;
    }

    setIsChecking(true);
    const timer = setTimeout(async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock availability check (all names except these are available)
      const unavailableNames = ['Sung_Jinwoo', 'ShadowMonarch', 'Admin', 'Test'];
      const available = !unavailableNames.includes(hunterName);
      
      setIsAvailable(available);
      setIsChecking(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [hunterName]);

  const handleNameChange = (value) => {
    // Only allow alphanumeric and underscore, max 20 chars
    const filtered = value.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 20);
    setHunterName(filtered);
    setError('');
  };

  const validateName = () => {
    if (!hunterName.trim()) {
      setError('Hunter name is required');
      return false;
    }
    if (hunterName.length < 3) {
      setError('Hunter name must be at least 3 characters');
      return false;
    }
    if (!isAvailable) {
      setError('This hunter name is already taken');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateName()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock profile creation success
      console.log('Hunter profile created:', { hunterName, selectedAvatar });
      
      // Navigate to onboarding tutorial
      navigate('/onboarding');
    } catch (error) {
      console.error('Profile creation error:', error);
      setError('Failed to create hunter profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-muted border-2 border-primary/50 rounded-2xl shadow-elevation-5 animate-scale-in">
        {/* Header */}
        <div className="p-8 pb-6 border-b border-border">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
              <Icon name="User" size={32} className="text-background" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-primary tracking-wider">
              NAME YOUR HUNTER
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed">
              Your journey begins now. Create your unique identity.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <HunterNameInput
            value={hunterName}
            onChange={handleNameChange}
            isAvailable={isAvailable}
            isChecking={isChecking}
            error={error}
          />

          <AvatarSelector
            selectedAvatar={selectedAvatar}
            onSelect={setSelectedAvatar}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !isAvailable || hunterName.length < 3}
            className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-lg
              shadow-glow-primary hover:scale-105 active:scale-98 
              transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
              disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Icon name="Loader2" size={20} className="animate-spin mr-2" />
                Creating Hunter...
              </span>
            ) : (
              'BEGIN ADVENTURE'
            )}
          </button>

          {/* Info Text */}
          <p className="text-xs text-text-secondary text-center leading-relaxed">
            Your hunter name will be visible to other players on the leaderboard
          </p>
        </form>
      </div>
    </div>
  );
};

export default HunterNameSelection;

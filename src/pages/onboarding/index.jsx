import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon.jsx';
import WelcomeStep from './components/WelcomeStep';
import FirstQuestStep from './components/FirstQuestStep';
import CompleteQuestStep from './components/CompleteQuestStep';
import SuccessStep from './components/SuccessStep';

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 'welcome', component: WelcomeStep },
    { id: 'first-quest', component: FirstQuestStep },
    { id: 'complete-quest', component: CompleteQuestStep },
    { id: 'success', component: SuccessStep }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to dashboard on final step
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-muted border-2 border-primary/50 rounded-2xl shadow-elevation-5 animate-scale-in overflow-hidden">
        {/* Skip Button */}
        {currentStep < steps.length - 1 && (
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-10 text-xs text-text-secondary hover:text-primary transition-colors"
          >
            Skip Tutorial
          </button>
        )}

        {/* Content */}
        <CurrentStepComponent 
          onNext={handleNext}
          onBack={handleBack}
          showBack={currentStep > 0}
          isLastStep={currentStep === steps.length - 1}
        />

        {/* Progress Indicators */}
        {currentStep < steps.length - 1 && (
          <div className="p-6 flex justify-center space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === currentStep 
                    ? 'w-8 bg-primary shadow-glow-primary' 
                    : index < currentStep 
                    ? 'w-2 bg-primary/50' 
                    : 'w-2 bg-border'
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;

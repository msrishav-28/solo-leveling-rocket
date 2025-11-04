import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import QuestTypeSelector from './components/QuestTypeSelector';
import AttributeSelector from './components/AttributeSelector';
import DifficultySelector from './components/DifficultySelector';
import SchedulingOptions from './components/SchedulingOptions';
import QuestTemplates from './components/QuestTemplates';
import XPPreview from './components/XPPreview';

const QuestCreationModal = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('create');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'daily',
    difficulty: 'normal',
    attributes: [],
    reminderTime: '09:00',
    frequency: 'daily',
    deadline: '',
    completionsPerDay: 1
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Handle attribute selection
  const handleAttributeToggle = (attributeId) => {
    setFormData(prev => ({
      ...prev,
      attributes: prev?.attributes?.includes(attributeId)
        ? prev?.attributes?.filter(id => id !== attributeId)
        : [...prev?.attributes, attributeId]
    }));
  };

  // Handle template selection
  const handleTemplateSelect = (template) => {
    setFormData(prev => ({
      ...prev,
      title: template?.title,
      description: template?.description,
      type: template?.type,
      difficulty: template?.difficulty,
      attributes: template?.attributes
    }));
    setActiveTab('create');
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData?.title?.trim()) {
      newErrors.title = 'Quest title is required';
    }

    if (!formData?.description?.trim()) {
      newErrors.description = 'Quest description is required';
    }

    if (formData?.attributes?.length === 0) {
      newErrors.attributes = 'Select at least one attribute';
    }

    if (formData?.type === 'oneTime' && formData?.deadline && new Date(formData.deadline) < new Date()) {
      newErrors.deadline = 'Deadline must be in the future';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock quest creation success
      console.log('Quest created:', formData);
      
      // Navigate back to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating quest:', error);
      setErrors({ submit: 'Failed to create quest. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle save as template
  const handleSaveAsTemplate = () => {
    if (!validateForm()) {
      return;
    }
    
    // Mock save as template
    console.log('Saved as template:', formData);
    alert('Quest template saved successfully!');
  };

  // Handle modal close
  const handleClose = () => {
    navigate('/dashboard');
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const tabs = [
    { id: 'create', label: 'Create Quest', icon: 'Plus' },
    { id: 'templates', label: 'Templates', icon: 'Bookmark' },
    { id: 'preview', label: 'XP Preview', icon: 'Zap' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-surface">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Sword" size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-text-primary">
                Create New Quest
              </h1>
              <p className="text-sm text-text-secondary">
                Define your next adventure and start earning XP
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="text-text-secondary hover:text-text-primary"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-border bg-muted/30">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`
                flex-1 flex items-center justify-center space-x-2 px-4 py-3
                font-medium transition-all duration-300 relative
                ${activeTab === tab?.id 
                  ? 'text-primary bg-primary/10' :'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                }
              `}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="hidden sm:inline">{tab?.label}</span>
              {activeTab === tab?.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          {activeTab === 'create' && (
            <form onSubmit={handleSubmit} className="p-6 space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-lg font-heading font-semibold text-text-primary border-b border-border pb-2">
                  Basic Information
                </h2>
                
                <Input
                  label="Quest Title"
                  type="text"
                  placeholder="Enter a compelling quest name..."
                  value={formData?.title}
                  onChange={(e) => handleInputChange('title', e?.target?.value)}
                  error={errors?.title}
                  required
                  className="w-full"
                />

                <div className="space-y-2">
                  <label className="block text-base font-medium text-text-primary">
                    Description
                  </label>
                  <textarea
                    placeholder="Describe what this quest involves and why it matters to you..."
                    value={formData?.description}
                    onChange={(e) => handleInputChange('description', e?.target?.value)}
                    rows={4}
                    className={`
                      w-full px-4 py-3 bg-input border rounded-lg
                      text-text-primary placeholder-text-secondary
                      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                      transition-all duration-300 resize-none
                      ${errors?.description ? 'border-error' : 'border-border'}
                    `}
                  />
                  {errors?.description && (
                    <p className="text-sm text-error flex items-center">
                      <Icon name="AlertCircle" size={14} className="mr-1" />
                      {errors?.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Quest Configuration */}
              <div className="space-y-8">
                <QuestTypeSelector
                  selectedType={formData?.type}
                  onTypeChange={(type) => handleInputChange('type', type)}
                />

                <AttributeSelector
                  selectedAttributes={formData?.attributes}
                  onAttributeToggle={handleAttributeToggle}
                />
                {errors?.attributes && (
                  <p className="text-sm text-error flex items-center -mt-4">
                    <Icon name="AlertCircle" size={14} className="mr-1" />
                    {errors?.attributes}
                  </p>
                )}

                <DifficultySelector
                  selectedDifficulty={formData?.difficulty}
                  onDifficultyChange={(difficulty) => handleInputChange('difficulty', difficulty)}
                />

                <SchedulingOptions
                  questType={formData?.type}
                  reminderTime={formData?.reminderTime}
                  onReminderTimeChange={(time) => handleInputChange('reminderTime', time)}
                  frequency={formData?.frequency}
                  onFrequencyChange={(freq) => handleInputChange('frequency', freq)}
                  deadline={formData?.deadline}
                  onDeadlineChange={(deadline) => handleInputChange('deadline', deadline)}
                  completionsPerDay={formData?.completionsPerDay}
                  onCompletionsPerDayChange={(count) => handleInputChange('completionsPerDay', count)}
                />
              </div>

              {/* Error Display */}
              {errors?.submit && (
                <div className="bg-error/10 border border-error/30 rounded-lg p-4">
                  <p className="text-error flex items-center">
                    <Icon name="AlertCircle" size={16} className="mr-2" />
                    {errors?.submit}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                <Button
                  type="submit"
                  variant="default"
                  loading={isSubmitting}
                  iconName="Sword"
                  iconPosition="left"
                  className="flex-1"
                >
                  {isSubmitting ? 'Creating Quest...' : 'Create Quest'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleSaveAsTemplate}
                  iconName="Bookmark"
                  iconPosition="left"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none"
                >
                  Save as Template
                </Button>
                
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}

          {activeTab === 'templates' && (
            <div className="p-6">
              <QuestTemplates onTemplateSelect={handleTemplateSelect} />
            </div>
          )}

          {activeTab === 'preview' && (
            <div className="p-6">
              <XPPreview
                questType={formData?.type}
                difficulty={formData?.difficulty}
                selectedAttributes={formData?.attributes}
                questTitle={formData?.title}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestCreationModal;
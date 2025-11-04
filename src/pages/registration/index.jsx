import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon.jsx';
import EmailField from './components/EmailField';
import PasswordField from './components/PasswordField';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';
import TermsCheckbox from './components/TermsCheckbox';
import SocialSignup from './components/SocialSignup';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Calculate password strength
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;
    return Math.min(strength, 3); // 0 = weak, 1 = medium, 2 = strong, 3 = very strong
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Calculate password strength
    if (field === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms of Service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock registration success
      console.log('Registration successful:', formData.email);
      
      // Navigate to hunter name selection
      navigate('/hunter-name-selection');
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
    // Implement social signup logic
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-muted border-2 border-primary/50 rounded-2xl shadow-elevation-5 animate-scale-in">
        {/* Header */}
        <div className="relative p-8 pb-6 border-b border-border">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-text-secondary hover:text-primary transition-colors duration-200"
          >
            <Icon name="X" size={24} />
          </button>
          
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-heading font-bold text-primary tracking-wider">
              CREATE YOUR HUNTER ACCOUNT
            </h1>
            <p className="text-sm text-text-secondary">
              Begin your journey to become the strongest
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <EmailField
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
          />

          <PasswordField
            label="Password"
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
            error={errors.password}
            placeholder="Enter your password"
          />

          <PasswordStrengthMeter strength={passwordStrength} />

          <PasswordField
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(value) => handleInputChange('confirmPassword', value)}
            error={errors.confirmPassword}
            placeholder="Re-enter your password"
          />

          <TermsCheckbox
            checked={formData.agreeToTerms}
            onChange={(checked) => handleInputChange('agreeToTerms', checked)}
            error={errors.agreeToTerms}
          />

          {errors.submit && (
            <div className="bg-error/10 border border-error/30 rounded-lg p-3">
              <p className="text-error text-sm flex items-center">
                <Icon name="AlertCircle" size={16} className="mr-2" />
                {errors.submit}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-lg
              shadow-glow-primary hover:scale-105 active:scale-98 
              transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
              disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Icon name="Loader2" size={20} className="animate-spin mr-2" />
                Creating Account...
              </span>
            ) : (
              'CREATE ACCOUNT'
            )}
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-muted px-2 text-text-secondary">Or continue with</span>
            </div>
          </div>

          {/* Social Signup */}
          <SocialSignup onSocialSignup={handleSocialSignup} />

          {/* Footer */}
          <div className="text-center pt-4">
            <p className="text-sm text-text-secondary">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-primary hover:underline font-medium"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

import React from 'react';
import { cn } from 'utils/cn';

const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-orbitron font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-gradient-to-r from-[#00d9ff] to-[#b700ff] text-white hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] hover:scale-105',
      secondary: 'bg-[#1a1f3a] text-[#00d9ff] border-2 border-[#00d9ff] hover:bg-[#00d9ff] hover:text-[#0a0e27] hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]',
      danger: 'bg-[#ff0033] text-white hover:shadow-[0_0_20px_rgba(255,0,51,0.5)] hover:scale-105',
      ghost: 'bg-transparent text-[#00d9ff] hover:bg-[#1a1f3a]',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-xl',
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

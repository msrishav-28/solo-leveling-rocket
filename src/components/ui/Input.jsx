import React from 'react';
import { cn } from 'utils/cn';

const Input = React.forwardRef(
  ({ className, type = 'text', label, error, icon: Icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-orbitron text-[#00d9ff] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00d9ff]">
              <Icon size={20} />
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              'w-full bg-[#1a1f3a] border-2 border-[#2a2f4a] rounded-lg px-4 py-2.5',
              'text-white font-inter placeholder:text-gray-500',
              'focus:outline-none focus:border-[#00d9ff] focus:shadow-[0_0_10px_rgba(0,217,255,0.3)]',
              'transition-all duration-300',
              Icon && 'pl-11',
              error && 'border-[#ff0033]',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-[#ff0033] font-inter">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

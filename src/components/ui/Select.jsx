import React from 'react';
import { cn } from 'utils/cn';

const Select = React.forwardRef(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-orbitron text-[#00d9ff] mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full bg-[#1a1f3a] border-2 border-[#2a2f4a] rounded-lg px-4 py-2.5',
            'text-white font-inter',
            'focus:outline-none focus:border-[#00d9ff] focus:shadow-[0_0_10px_rgba(0,217,255,0.3)]',
            'transition-all duration-300',
            'cursor-pointer',
            error && 'border-[#ff0033]',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-[#1a1f3a] text-white">
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-[#ff0033] font-inter">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[var(--color-espresso)]"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full h-12 px-4 touch-manipulation
            bg-white
            border border-[var(--color-stone)]/40
            rounded-[var(--radius-md)]
            text-[var(--color-charcoal)]
            placeholder:text-[var(--color-warm-gray-light)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent
            transition-all duration-[var(--duration-fast)]
            ${error ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-sm text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;

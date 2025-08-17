'use client';

import { useState, useRef } from 'react';
import { Button } from '@nextui-org/react';
import { verifyPasscode } from '../actions';

interface PasscodeFormProps {
  onSuccess: (embedHtml: string) => void;
}

/// <summary>
/// Component that renders a 6-digit numerical passcode input form for accessing the photos album
/// </summary>
/// <param name="onSuccess">Callback function called when passcode is successfully verified with embed HTML</param>
export function PasscodeForm({ onSuccess }: PasscodeFormProps) {
  const [passcode, setPasscode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const justClearedRef = useRef<number | null>(null);

  /// <summary>
  /// Submits the passcode for verification
  /// </summary>
  /// <param name="fullPasscode">The complete 6-digit passcode</param>
  const submitPasscode = async (fullPasscode: string) => {
    if (fullPasscode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await verifyPasscode(fullPasscode);
      
      if (result.success && result.embedHtml) {
        onSuccess(result.embedHtml);
      } else {
        setError(result.error || 'Invalid passcode');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  /// <summary>
  /// Handles input change for individual digit inputs
  /// </summary>
  /// <param name="index">The index of the input being changed</param>
  /// <param name="value">The new value for the input</param>
  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    
    const newPasscode = [...passcode];
    newPasscode[index] = value.slice(-1); // Only take the last character
    setPasscode(newPasscode);
    setError('');

    // Check if this input was just cleared - if so, don't auto-advance
    const wasJustCleared = justClearedRef.current === index;
    if (wasJustCleared) {
      justClearedRef.current = null; // Reset the flag
    }

    // Auto-focus next input (only if we didn't just clear this input)
    if (value && index < 5 && !wasJustCleared) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all digits are filled
    if (value && index === 5) {
      const fullPasscode = newPasscode.join('');
      if (fullPasscode.length === 6) {
        setTimeout(() => submitPasscode(fullPasscode), 100);
      }
    }
  };

  /// <summary>
  /// Handles key down events for navigation and deletion
  /// </summary>
  /// <param name="index">The index of the input</param>
  /// <param name="e">The keyboard event</param>
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !passcode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  /// <summary>
  /// Handles focus events to auto-clear the input for easier editing
  /// </summary>
  /// <param name="index">The index of the input being focused</param>
  const handleFocus = (index: number) => {
    if (passcode[index]) {
      const newPasscode = [...passcode];
      newPasscode[index] = '';
      setPasscode(newPasscode);
      setError('');
      // Mark this input as just cleared to prevent auto-advance on next input
      justClearedRef.current = index;
    }
  };

  /// <summary>
  /// Handles form submission and passcode verification
  /// </summary>
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullPasscode = passcode.join('');
    await submitPasscode(fullPasscode);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Wedding Photos</h2>
        <p className="text-gray-600">Enter the 6-digit passcode to view our wedding album</p>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="flex justify-center space-x-2">
          {passcode.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={() => handleFocus(index)}
              className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
            />
          ))}
        </div>
        
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        
        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full bg-foreground text-white h-12"
        >
          Take me to photos
        </Button>
      </form>
    </div>
  );
}
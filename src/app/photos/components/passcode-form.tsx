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

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
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
  /// Handles form submission and passcode verification
  /// </summary>
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullPasscode = passcode.join('');
    
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
              className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
            />
          ))}
        </div>
        
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        
        <Button
          type="submit"
          color="primary"
          isLoading={isLoading}
          disabled={passcode.join('').length !== 6}
          className="w-full"
        >
          Access Photos
        </Button>
      </form>
    </div>
  );
}
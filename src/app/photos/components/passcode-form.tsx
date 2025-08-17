'use client';

import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { verifyPasscode } from '../actions';

interface PasscodeFormProps {
  onSuccess: (embedHtml: string) => void;
}

/// <summary>
/// Component that renders a passcode input form for accessing the photos album
/// </summary>
/// <param name="onSuccess">Callback function called when passcode is successfully verified with embed HTML</param>
export function PasscodeForm({ onSuccess }: PasscodeFormProps) {
  const [passcode, setPasscode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  /// <summary>
  /// Handles form submission and passcode verification
  /// </summary>
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await verifyPasscode(passcode);
      
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
        <p className="text-gray-600">Enter the passcode to view our wedding album</p>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <Input
          type="password"
          label="Passcode"
          placeholder="Enter passcode"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          isInvalid={!!error}
          errorMessage={error}
          required
        />
        
        <Button
          type="submit"
          color="primary"
          isLoading={isLoading}
          disabled={!passcode.trim()}
          className="w-full"
        >
          Access Photos
        </Button>
      </form>
    </div>
  );
}
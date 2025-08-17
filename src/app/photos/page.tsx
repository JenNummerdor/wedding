'use client';

import { useState } from 'react';
import { Container } from '@/app/components/container';
import { PasscodeForm } from './components/passcode-form';
import { Button, Link } from '@nextui-org/react';

/// <summary>
/// Photos page component that displays a passcode form and reveals Google Photos album link after verification
/// </summary>
export default function Page() {
  const [albumLink, setAlbumLink] = useState<string | null>(null);

  /// <summary>
  /// Handles successful passcode verification by storing the album link
  /// </summary>
  /// <param name="link">The Google Photos album link to display</param>
  const handlePasscodeSuccess = (link: string) => {
    setAlbumLink(link);
  };


  return (
    <Container title='Photos'>
      <div className='flex justify-center items-center min-h-[400px]'>
        {!albumLink ? (
          <PasscodeForm onSuccess={handlePasscodeSuccess} />
        ) : (
          <div className="text-center space-y-6 max-w-md mx-auto">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Wedding Photos</h2>
              <p className="text-gray-600 mb-4">
                Click the link below to view our wedding album on Google Photos
              </p>
            </div>
            
            <Button
              as={Link}
              href={albumLink}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full bg-foreground text-white"
            >
              View Wedding Album
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
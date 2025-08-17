'use client';

import { useState } from 'react';
import { Container } from '@/app/components/container';
import { PasscodeForm } from './components/passcode-form';

/// <summary>
/// Photos page component that displays a passcode form and reveals Flickr album embed after verification
/// </summary>
export default function Page() {
  const [embedHtml, setEmbedHtml] = useState<string | null>(null);

  /// <summary>
  /// Handles successful passcode verification by storing the embed HTML
  /// </summary>
  /// <param name="html">The Flickr embed HTML to display</param>
  const handlePasscodeSuccess = (html: string) => {
    setEmbedHtml(html);
  };

  return (
    <>
      {!embedHtml ? (
        <Container title='Photos'>
          <div className='flex justify-center items-center'>
            <PasscodeForm onSuccess={handlePasscodeSuccess} />
          </div>
        </Container>
      ) : (
        <div className="container mx-auto max-w-5xl mb-8">
          <div className="flex justify-center items-center min-h-screen">
            <div 
              className="w-full"
              dangerouslySetInnerHTML={{ __html: embedHtml }}
            />
          </div>
        </div>
      )}
    </>
  );
}
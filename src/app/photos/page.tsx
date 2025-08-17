'use client';

import { useState, useEffect, useRef } from 'react';
import { Container } from '@/app/components/container';
import { PasscodeForm } from './components/passcode-form';

/// <summary>
/// Photos page component that displays a passcode form and reveals Flickr album embed after verification
/// </summary>
export default function Page() {
  const [embedHtml, setEmbedHtml] = useState<string | null>(null);
  const embedRef = useRef<HTMLDivElement>(null);

  /// <summary>
  /// Handles successful passcode verification by storing the embed HTML
  /// </summary>
  /// <param name="html">The Flickr embed HTML to display</param>
  const handlePasscodeSuccess = (html: string) => {
    setEmbedHtml(html);
  };

  /// <summary>
  /// Executes any scripts found in the embedded HTML after it's rendered
  /// </summary>
  useEffect(() => {
    if (embedHtml && embedRef.current) {
      const scripts = embedRef.current.querySelectorAll('script');
      scripts.forEach((script) => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src;
          newScript.async = script.async;
        } else {
          newScript.textContent = script.textContent;
        }
        document.head.appendChild(newScript);
      });
    }
  }, [embedHtml]);

  return (
    <>
      {!embedHtml ? (
        <Container title='Photos'>
          <div className='flex justify-center items-center'>
            <PasscodeForm onSuccess={handlePasscodeSuccess} />
          </div>
        </Container>
      ) : (
        <div className="flex justify-center items-center min-h-screen px-4">
          <div className="w-full max-w-5xl mx-auto">
            <div 
              ref={embedRef}
              className="w-full"
              dangerouslySetInnerHTML={{ __html: embedHtml }}
            />
          </div>
        </div>
      )}
    </>
  );
}
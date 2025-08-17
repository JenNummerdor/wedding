'use server';

/// <summary>
/// Verifies the provided passcode and returns the Flickr embed HTML if valid
/// </summary>
/// <param name="passcode">The passcode entered by the user</param>
/// <returns>Response object containing success status and embed HTML if verified</returns>
export async function verifyPasscode(passcode: string): Promise<{
  success: boolean;
  embedHtml?: string;
  error?: string;
}> {
  const VALID_PASSCODE = '122025';
  
  if (passcode === VALID_PASSCODE) {
    return {
      success: true,
      embedHtml: '<a data-flickr-embed="true" href="https://www.flickr.com/photos/203372664@N06/albums/72177720328414732" title="Jen and Oscar 2024"><img src="https://live.staticflickr.com/65535/54725982049_e8bb7dda4b.jpg" width="640" height="480" alt="Jen and Oscar 2024"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
    };
  }
  
  return {
    success: false,
    error: 'Invalid passcode. Please try again.',
  };
}
'use server';

/// <summary>
/// Verifies the provided passcode and returns the Google Photos album link if valid
/// </summary>
/// <param name="passcode">The passcode entered by the user</param>
/// <returns>Response object containing success status and album link if verified</returns>
export async function verifyPasscode(passcode: string): Promise<{
  success: boolean;
  albumLink?: string;
  error?: string;
}> {
  const VALID_PASSCODE = '122025';
  
  if (passcode === VALID_PASSCODE) {
    return {
      success: true,
      albumLink: 'https://photos.google.com/share/AF1QipP5MJL_RDzZU_J62atoGUcEGU_sZYE2jkreUx34OxwwXDM4Gk_FfdGr_o6ujcgbkA?key=NWdGYXJoZDFlQU1od3AzUXhfVXpWRUJGaW05Z29n',
    };
  }
  
  return {
    success: false,
    error: 'Invalid passcode. Please try again.',
  };
}
import Image from 'next/image';
import { Container } from '@/app/components/container';
import holly from 'public/holly-dog2.jpg';

const GOOGLE_FORM_URL_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSd45lFU14koCSxV5mkTyXEmqLukAiIXPImPHUriYLXCUkEtBw/viewform?usp=sf_link';

export default function Page() {
  return (
    <Container title='RSVP'>
      <div className='m-8 mt-2 flex items-center flex-col'>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
          Please RSVP by May 1, 2024.
        </p>
        <a href={GOOGLE_FORM_URL_LINK}>
          <button className='m-4 md:m-7 text-base rounded p-4 bg-dark-green-400 text-ivory'>
            Click Here
          </button>
        </a>
        <p className='text-base sm:text-md md:text-lg lg:text-xl'>
          You will be directed to a Google Form which will ask for a password.
          It is our house number, which you can find on the return address of
          the envelope in which you received your invitation. If you have any
          questions, please call or text us!
        </p>
        <Image
          className='w-full h-full max-w-md m-8 rounded-xl'
          src={holly}
          alt='Holly with sunglasses'
        />
      </div>
    </Container>
  );
}

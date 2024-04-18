import Image from 'next/image';
import hero from 'public/hero.jpg';
import { Card, CardBody, CardFooter } from '@nextui-org/react';

export function Hero() {
  return (
    <Card shadow='lg' radius='none' className='max-w-4xl mt-6'>
      <CardBody>
        <Image
          priority
          src={hero}
          alt='Jen and Oscar in Florence'
          style={{ width: '100%', height: '100%' }}
        />
      </CardBody>
      <CardFooter className='z-10 absolute flex justify-center p-4 mt-2 md:mt-8 overflow-visible'>
        <div className='text-accent-600 text-6xl md:text-8xl'>
          <p className='font-invitation '>
            Jen&nbsp;<span className='md:-ml-4 sm:-ml-2'>+</span>
            &nbsp;Oscar
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

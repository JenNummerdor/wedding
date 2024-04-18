import { Container } from '@/app/components/container';
import Image from 'next/image';
import airportsTwo from 'public/airports2.jpg';
import whisperingOaks from 'public/whispering-oaks.jpeg';
import fairfieldHotel from 'public/fairfield-hotel.png';
import { Divider } from '@nextui-org/react';

export default function Page() {
  return (
    <Container title='Travel'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl m-4 font-serif'>
        <h1 className='col-span-2 text-center font-sans text-2xl'>
          Getting Here
        </h1>
        <div className='p-4 rounded-xl col-span-2 md:col-span-1'>
          If you&apos;re flying in, you have three options:
          <ol>
            <li>1. Salt Lake City International Airport (SLC)</li>
            <li>2. Grand Junction Regional Airport (GJT) </li>
            <li>3. Canyonlands Field Regional Airport (CNY)</li>
          </ol>
          The SLC airport will likely be the cheapest option, but it is the
          furthest away from the wedding venue. However, this is the airport we
          live closest to, so it could be an easier option to coordinate
          carpooling and such. The Grand Junction airport is the middle ground
          and is a good mix of price and time. The Canyonlands Airport will
          likely be the most expensive option depending on where you are flying
          from. However, it is the most convenient airport in terms of time.
        </div>
        <div className='p-4 rounded-xl col-span-2 md:col-span-1'>
          <Image
            className='rounded-xl'
            src={airportsTwo}
            alt='map of airports near Moab'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <Divider className='my-4 col-span-2 ' />

        <h1 className='col-span-2 text-center font-sans text-2xl'>
          Accommodations - Whispering Oaks
        </h1>
        <div className='p-4 rounded-xl col-span-2 md:col-span-1'>
          <Image
            className='rounded-xl'
            src={whisperingOaks}
            alt='wedding-venue-pavillion'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className='p-4 rounded-xl col-span-2 md:col-span-1'>
          <p>
            This wedding is taking place on a ranch in the La Sal Mountains in
            Moab at the Whispering Oaks Ranch. Conveniently, there are some
            cabins on site in walking distance of the pavillion. Due to limited
            availability, we will be assigning cabins to guests.
          </p>
        </div>

        <Divider className='my-4 col-span-2 ' />

        <h1 className='col-span-2 text-center font-sans text-2xl'>
          Accommodations - Fairfield Hotel
        </h1>
        <div className='p-4 rounded-xl col-span-2 md:col-span-1'>
          <p>
            We have blocked rooms at the Fairfield Hotel in Moab. This hotel is
            around 45 minutes from the wedding venue. Please ask us about the
            group rate and we will provide you with the party name. You must
            book by July 16th. We will likely have a shuttle to and from the
            hotel at the end of the night.
          </p>
        </div>
        <div className='p-4 rounded-xl col-span-2 md:col-span-1'>
          <Image
            className='rounded-xl'
            src={fairfieldHotel}
            alt='hotel-with-exterior-view-and-moab-rocks-in-the-background'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <Divider className='my-4 col-span-2 ' />
        <div className='p-4 col-span-2 text-center'>
          The information on this page is preliminary and we will be updating
          this page with more information. If you have any questions, please
          reach out to us.
        </div>
      </div>
    </Container>
  );
}

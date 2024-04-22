'use client';
import { Container } from '@/app/components/container';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Page() {
  return (
    <Container title='FAQ'>
      <Accordion variant='shadow'>
        <AccordionItem
          key='1'
          aria-label='What will the weather be like?'
          title='What will the weather be like?'
        >
          <div className='text-sm'>
            In the summertime, Moab tends to experience high temperatures,
            typically ranging in the mid to high 90s. Fortunately, our wedding
            venue in the La Sal Mountains sits at an elevation of approximately
            8,000 feet, offering cooler temperatures, ideally in the 80s. Given
            the dry climate, we recommend staying hydrated by drinking plenty of
            water and applying sunscreen regularly.
          </div>
        </AccordionItem>
        <AccordionItem
          key='2'
          aria-label='Am I allowed to bring a plus one?'
          title='Am I allowed to bring a plus one?'
        >
          <div className='text-sm'>
            Right now, no, unless you have already received explit permission.
            The plus one policy is in place to ensure that we can provide a
            fantastic night for everyone due to space/cost limitations. We are
            open to loosening this policy once we have a better idea of the RSVP
            count. Please reach out to us directly if you have any questions.
          </div>
        </AccordionItem>
        <AccordionItem
          key='3'
          aria-label='What is the pet policy?'
          title='What is the pet policy?'
        >
          <div className='text-sm'>
            While we adore our furry friends, Whispering Oaks has a very strict
            no pets policy. Holly, our dog, will be joining us as the ring
            bearer, after receiving pre-authorization. Thank you for
            understanding!
          </div>
        </AccordionItem>

        <AccordionItem
          key='4'
          aria-label='What is the dress code?'
          title='What is the dress code?'
        >
          <div className='text-sm'>
            This wedding is taking place outside on a ranch in the mountains.
            Feel free to dress-to-impress, but don&apos;t be afraid to choose
            sensible clothing. The night may be cool, and you will have to walk
            on some grass if you&apos;re attending the ceremony.
          </div>
        </AccordionItem>
        <AccordionItem
          key='5'
          aria-label='What should I bring?'
          title='What should I bring?'
        >
          <div className='text-sm'>
            Bring bug spray, an extra jacket, sunscreen, a bathing suit, and
            good dancing shoes!
          </div>
        </AccordionItem>
        <AccordionItem
          key='6'
          aria-label='Is there a shuttle?'
          title='Is there a shuttle?'
        >
          <div className='text-sm'>
            Due to cost considerations, we will likely not have a shuttle from
            the airports. We are working to coordinate carpools and will provide
            more information as the date approaches. We will be providing
            shuttles to and from the Fairfield Hotel in Moab at the end of the
            night on Saturday for those staying in the hotel.
          </div>
        </AccordionItem>
        <AccordionItem
          key='7'
          aria-label='What is the general vibe?'
          title='What is the general vibe?'
        >
          <div className='text-sm'>
            This wedding will be an eclectic mix of friends old and new, and
            family from all over the country. The general vibe will be relaxed
            and fun. We will be at the ranch from Friday to Sunday, so there
            will be plenty of time to catch up with old friends and make new
            ones. You never know who you might meet!
          </div>
        </AccordionItem>
        <AccordionItem
          key='8'
          aria-label='Will there be a bar?'
          title='Will there be a bar?'
        >
          <div className='text-sm'>
            Utah is one of the strictest states in the nation when it comes to
            liquor laws. Fortunately, Whispering Oaks Ranch is considered
            private property! We will be providing beer, wine, and a signature
            cocktail (or two) for the night.
          </div>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

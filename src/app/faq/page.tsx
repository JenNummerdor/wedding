'use client';
import { Container } from '@/app/components/container';
import { Accordion, AccordionItem } from '@nextui-org/react';

const COCKTAIL_ATTIRE_LINK =
  'https://www.theknot.com/content/cocktail-wedding-attire';
const SEMI_FORMAL_ATTIRE_LINK =
  'https://www.theknot.com/content/what-to-wear-semi-formal';

export default function Page() {
  return (
    <Container title='FAQ'>
      <Accordion variant='shadow'>
        <AccordionItem
          key='1'
          aria-label='Am I allowed to bring a plus one?'
          title='Am I allowed to bring a plus one?'
        >
          <div className='text-sm'>
            Yes! We originally were not allowing plus ones due to space, but we
            have got tons of room to spare now. Please make sure to include them
            in the RSVP.
          </div>
        </AccordionItem>
        <AccordionItem
          key='2'
          aria-label='Are kids welcome?'
          title='Are kids welcome?'
        >
          <div className='text-sm'>
            Absolutely! Kids under 18 who are living with you are welcome. If
            you are unsure, please ask! Please make sure to include them in the
            RSVP. There&apos;s even a small playground on site.
          </div>
        </AccordionItem>
        <AccordionItem
          key='3'
          aria-label='What is the pet policy?'
          title='What is the pet policy?'
        >
          <div className='text-sm'>
            Unfortunately, Whispering Oaks has a very strict no pets policy.
            Holly, our dog, will be joining us as the ring bearer, after
            receiving pre-authorization from the owners. Thank you for
            understanding!
          </div>
        </AccordionItem>
        <AccordionItem
          key='4'
          aria-label='What will the weather be like?'
          title='What will the weather be like?'
        >
          <div className='text-sm'>
            In the summertime, Moab tends to experience high temperatures,
            typically ranging in the mid to high 90s. Fortunately, our wedding
            venue in the La Sal Mountains sits at an elevation of approximately
            8,000 feet, offering cooler temperatures, with highs in the 80s and
            lows in the 50&apos;. Bring a jacket for the evening! Given the dry
            climate, we recommend staying hydrated by drinking plenty of water
            and applying sunscreen regularly.
          </div>
        </AccordionItem>
        <AccordionItem
          key='5'
          aria-label='What is the dress code?'
          title='What is the dress code?'
        >
          <div className='text-sm'>
            This wedding is taking place outside on a ranch in the mountains.
            The night may be cool, and you will have to walk on some grass if
            you&apos;re attending the ceremony, so we do not recommend wearing
            stilettos, unless you want to aerate the lawn. The dress code we
            recommend falls under cocktail to semi-formal attire. You can read
            more about{' '}
            <a
              href={COCKTAIL_ATTIRE_LINK}
              className='text-primary-400 font-bold'
              target='_blank'
              rel='noopener noreferrer'
            >
              cocktail attire here
            </a>
            , and
            <a
              href={SEMI_FORMAL_ATTIRE_LINK}
              className='text-primary-400 font-bold'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              semi-formal attire here
            </a>
            .
          </div>
        </AccordionItem>
        <AccordionItem
          key='6'
          aria-label='What should I bring?'
          title='What should I bring?'
        >
          <div className='text-sm'>
            Don&apos;t forget bug spray, an extra jacket, sunscreen, a bathing
            suit, and good dancing shoes!
          </div>
        </AccordionItem>
        <AccordionItem
          key='7'
          aria-label='Is there a shuttle?'
          title='Is there a shuttle?'
        >
          <div className='text-sm'>
            Due to cost considerations, we will likely not have a shuttle from
            the airports. We are working to coordinate carpools and will provide
            more information as the date approaches. We will be providing
            limited shuttles to and from the Fairfield Hotel in Moab at the end
            of the night on Saturday for those staying in the hotel.
          </div>
        </AccordionItem>
        <AccordionItem
          key='8'
          aria-label='What will the atmosphere be?'
          title='What will the atmosphere be?'
        >
          <div className='text-sm'>
            Thin! We&apos;re getting married in the mountains!
            <br />
            <br />
            All joking aside, this wedding will be an eclectic mix of friends
            old and new and family from all over. We are counting on less than
            100 people at the time that this is written, which is around the
            middle of May. This will be relaxed, fun and maybe slightly silly.
            We will be at the ranch from Friday to Sunday, so there will be
            plenty of time to catch up with old friends and make new ones. You
            never know who you might meet!
          </div>
        </AccordionItem>
        <AccordionItem
          key='9'
          aria-label='Will there be alcohol?'
          title='Will there be alcohol?'
        >
          <div className='text-sm'>
            Utah is one of the strictest states in the nation when it comes to
            liquor laws. Fortunately, this wedding venue is considered private
            property! We will be providing beer, wine, and a signature cocktail
            (or two) for the night.
          </div>
        </AccordionItem>
        <AccordionItem
          key='10'
          aria-label='How will I know where I am staying?'
          title='How will I know where I am staying?'
        >
          <div className='text-sm'>
            The cabins at Whispering Oaks are limited, so we have assigned a
            cabin to people who are immediate family or part of the wedding
            party as first priority. The cabins are not free. We will be sending
            out an email with hotel blocks or cabin assignment by the end of
            May. Please note that we really wish everyone could stay in the
            cabins, but the hotel that we have partnered with is also a great
            place to be!
          </div>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

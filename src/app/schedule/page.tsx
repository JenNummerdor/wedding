import { Container } from '@/app/components/container';
import { Day } from '@/app/schedule/day';
import { Event } from '@/app/schedule/event';
import { PropertyMap } from '@/app/schedule/property-map';

export default function Page() {
  return (
    <Container title='Schedule'>
      <div className='flex flex-col sm:flex-row items-center'>
        <div className='flex-1'>
          <PropertyMap />
        </div>
        <div id='schedule' className='flex-1'>
          <Day day='Friday' date={16}>
            <Event
              name='Rehearsal Dinner'
              location='Cedar Bend Cabin'
              start='6 PM'
              end='7:30 PM'
              details='Burgers will be provided. BYOB.'
            />
          </Day>

          <Day day='Saturday' date={17}>
            <Event
              name='Wedding Ceremony'
              location='Pavilion'
              start='3:30 PM'
              end='4 PM'
            />
            <Event
              name='Reception'
              location='Pavilion'
              start='4 PM'
              end='12 AM'
            />
            <Event name='Dinner' location='Pavilion' start='6 PM' end='7 PM' />
          </Day>

          <Day day='Sunday' date={18}>
            <Event name='Checkout' start='11 AM' end='' />
          </Day>
        </div>
      </div>
    </Container>
  );
}

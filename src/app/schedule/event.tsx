import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { RenderIf } from '../components/renderif';

type Props = {
  name: string;
  location?: string;
  start: string;
  end: string;
  details?: string;
};

export function Event({
  name,
  location = 'Whispering Oaks Ranch',
  start,
  end,
  details,
}: Props) {
  return (
    <Card
      shadow='none'
      id='event-card'
      className='w-72 bg-secondary-100 rounded-lg'
    >
      <CardBody className='items-center'>
        <p className='text-xl italic'>{name}</p>
        <p>
          {start} - {end}
        </p>
        <p>{location}</p>
        <RenderIf condition={!!details}>
          <p className='text-xs'>{details}</p>
        </RenderIf>
      </CardBody>
    </Card>
  );
}

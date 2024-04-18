import {Card, CardBody, CardHeader} from "@nextui-org/react";

type Props = {
  name: string;
  location?: string;
  start: string;
  end: string;
};

export function Event({ name, location = "Whispering Oaks Ranch", start, end }: Props) {
  return (
    <Card shadow="none" id="event-card" className="w-72 bg-secondary-100 rounded-lg">
      <CardBody className="items-center">
        <p className="text-xl italic">{name}</p>
        <p>{start} - {end}</p>
        <p>{location}</p>
      </CardBody>
    </Card>
  )
}
import {Card, CardBody} from "@nextui-org/react";

type Props = {
  name: string;
  location?: string;
  start: string;
  end: string;
};

export function Event({ name, location = "Whispering Oaks Ranch", start, end }: Props) {
  return (
    <Card shadow="none" id="event-card">
      <CardBody className=" flex items-center">
        <p className="text-xl italic">{name}</p>
        <p className="text-base">{start} - {end}</p>
        <p className="text-base">{location}</p>
      </CardBody>
    </Card>
  )
}
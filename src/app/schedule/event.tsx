import {Card, CardBody, CardHeader} from "@nextui-org/react";

type Props = {
  name: string;
  location?: string;
  start: string;
  end: string;
};

export function Event({ name, location = "Whispering Oaks Ranch", start, end }: Props) {
  return (
    <Card shadow="none">
      <CardHeader>{name}</CardHeader>
      <CardBody>
        <p>{start} - {end}</p>
        <p>{location}</p>
      </CardBody>
    </Card>
  )
}
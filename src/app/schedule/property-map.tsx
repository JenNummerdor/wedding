import Image from "next/image";
import map from 'public/property-map.jpg';
import {Card} from "@nextui-org/react";

export function PropertyMap() {
  return (
    <Card shadow="lg" className="max-w-5xl">
      <Image src={map} alt="property map of whispering oaks" style={{ width: '100%', height: '100%' }} />
    </Card>
  )
}
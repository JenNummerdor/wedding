import Image from "next/image";
import hero from "public/hero.jpg";
import {Card, CardBody, CardFooter} from "@nextui-org/react";
export function Hero() {
  return (
    <Card shadow="lg" radius="none" className="max-w-4xl mb-12">
      <CardBody>
        <Image src={hero} alt="Jen and Oscar in Florence" style={{ width: '100%', height: '100%' }} />
      </CardBody>
      <CardFooter className="absolute z-10 inset-x-3 bottom-3">
        <div className="text-cedar-rose-100 text-4xl font-semibold">
          <p className="">
            Jen&nbsp;<span className="italic text-sm">and</span>&nbsp;Oscar
          </p>
          <p className="text-cedar-rose-300">are getting</p>
          <p className="">married.</p>
        </div>
      </CardFooter>
    </Card>
  )
}
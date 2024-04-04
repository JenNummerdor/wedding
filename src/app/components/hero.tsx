import Image from "next/image";
import hero from "public/hero.jpg";
import {Card, CardFooter, CardHeader} from "@nextui-org/react";
export function Hero() {
  return (
    <Card shadow="lg" radius="lg" className="max-w-4xl">
      <CardHeader className="absolute z-10 top-1 items-center">
        <div className="flex flex-col items-center mx-auto">
          <p className="text-black text-4xl font-semibold">
            Jen&nbsp;<span className="italic text-sm">and</span>&nbsp;Oscar
          </p>
          <p className="text-black text-lg font-medium">are getting married!</p>
        </div>
      </CardHeader>
      <Image src={hero} alt="hero" style={{ width: '100%', height: '100%' }} />
      <CardFooter className="absolute z-10 inset-x-0 bottom-0">
        <div>
          <p className="text-white text-xl font-medium">Come celebrate with us</p>
          <h4 className="text-white text-4xl font-semibold">August 17, 2024</h4>
        </div>
      </CardFooter>
    </Card>
  )
}
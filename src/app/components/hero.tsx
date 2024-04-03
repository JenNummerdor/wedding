import Image from "next/image";
import hero from "public/hero.jpg";
export const Hero = () => <Image src={hero} alt="hero" style={{ width: '100%', height: '100%' }} />
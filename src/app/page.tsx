import styles from "./page.module.css";
import {Hero} from "@/app/components/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className="flex flex-col items-center gap-y-2 py-10">
        <h1 className="uppercase text-xl">Our Story</h1>
        <p className="text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Tristique senectus et netus et malesuada fames. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Fermentum et sollicitudin ac orci phasellus. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Euismod quis viverra nibh cras. Iaculis eu non diam phasellus vestibulum lorem. Maecenas ultricies mi eget mauris. Amet nisl suscipit adipiscing bibendum. Euismod quis viverra nibh cras. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Blandit turpis cursus in hac. Leo integer malesuada nunc vel risus commodo. Id eu nisl nunc mi ipsum faucibus vitae.
        </p>
        <p className="text-base text-center">
          Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Lectus arcu bibendum at varius vel. Eget nullam non nisi est sit amet facilisis magna etiam. Pellentesque id nibh tortor id aliquet. Integer quis auctor elit sed vulputate mi sit. Elementum pulvinar etiam non quam.
        </p>
      </div>
    </main>
  );
}

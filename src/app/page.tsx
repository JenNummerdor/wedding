import styles from "./page.module.css";
import {Hero} from "@/app/components/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <div className="flex flex-col items-center gap-y-2 py-10">
        <h1 className="uppercase text-xl">Our Story</h1>
        <p className="text-base text-center">
          Jen and Oscar met in 2016 playing in the mountains of Colorado after being introduced by their mutual friend
          Vivian. Very soon after meeting the three of them began planning their first adventure into Utah.
          Serendipitously, Jen and Oscar were put in charge of driving the first day and what should have been a short
          drive turned into an all night affair after Oscar missed his exit by several hours lost in
          conversation with Jen. One trip, turned into many and days became years...
        </p>
        <p className="text-base text-center">
          These days their lives are a little busier and a little richer with the growing family and friends who support
          them. You can still find all of them playing in the mountains; and most importantly Jen and Oscar will still
          occasionally miss their exit.
        </p>
        <p className="text-base text-center">
          They are so excited for you to join them in this beautiful state they call home and cannot wait to celebrate
          with you in August!
        </p>
      </div>
    </main>
  );
}

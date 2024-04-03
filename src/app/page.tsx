import styles from "./page.module.css";
import {Hero} from "@/app/components/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <h1>Coming Soon!</h1>
    </main>
  );
}

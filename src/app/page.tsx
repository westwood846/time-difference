import Image from "next/image";
import styles from "./page.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Difference } from "./difference";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Time difference</h1>
      <p>Time difference between two dates</p>
      <Difference />
    </main>
  );
}

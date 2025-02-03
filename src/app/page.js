
import styles from "./page.module.css";
import Title from "./conponents/title/index.js";
import Input from "./conponents/input/index.js";

export default function Home() {
  return (
    <div className={styles.cardContainer}>
      <Title></Title>
      <Input></Input>
    </div>
  );
}

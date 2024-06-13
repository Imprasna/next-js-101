import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p>*&nbsp;* : Layout will re-render only the first time the component mounts, it is efficient for the performance thingy. Whereas in the case of <code className={styles.code}>Template.jsx</code> the children will keep re-rendering every single time. So, better go with <code className={styles.code}>Layout.jsx</code></p>
      </div>
    </main>
  );
}

import { useState } from "react";
import styles from "../styles/about.module.css";

function About() {
  const [counter, setCounter] = useState(0);

  const handleCounterMinus = () => {
    setCounter(--counter);
  };
  const handleCounterPlus = () => {
    setCounter(++counter);
  };

  return (
    <div className={styles.container}>
      <h1>About us</h1>
      <p>This is the about page.</p>

      <h2>counter:</h2>
      <div className={styles.counterContainer}>
        <button onClick={handleCounterMinus}>-</button>
        <p className={styles.p2}>{counter}</p>
        <button onClick={handleCounterPlus}>+</button>
      </div>
    </div>
  );
}

export default About;

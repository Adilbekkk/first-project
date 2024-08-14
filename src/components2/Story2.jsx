import styles from "./Components.module.css";

export default function Story2() {
  return (
    <div>
      <div className={styles.text}>
        <h1>
          Mayuresh was definitely <br /> doing something <br /> different.
        </h1>
      </div>
      <div className={styles.bear}>
        <img
          src="Bear.jpg"
          alt="img"
          width={600}
          height={500}
          style={{ borderRadius: "30px" }}
        />
        <p style={{ fontSize: "40px", lineHeight: "50px", margin: "83px" }}>
          Knowing this he would spend <br /> nights up, pulling together <br />
          interactive presentation that <br /> were highly influenced by <br />
          social media in its format.
        </p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.year}>
        <p>2013</p>
      </div>
    </div>
  );
}

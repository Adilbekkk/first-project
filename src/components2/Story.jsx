import styles from "./Components.module.css";

export default function Story() {
  return (
    <div>
      <div className={styles.photo1}>
        <img src="photo1.jpg" alt="photo" width={"620px"} height={"700px"} />
        <h1>
          A decade long affair <br />
          with presentations
        </h1>
        <p>Adilbek' story of creating this site</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.year}>
        <p>2012</p>
      </div>
      <div className={styles.storyText}>
        <p>
          The story starts at with both Mayuresh and <br /> Tejas studying at
          IIT Bombay.
        </p>
        <p>
          Mayuresh spent his evenings hosting <br /> workshops with 5-7
          enthusiasts who were <br /> keen to learn his new found passion -
          design
        </p>
        <p>
          At the end of each workshop he would get <br /> asked the same
          question each time...
        </p>
        <img
          src="blue text.webp"
          alt="img"
          width={800}
          style={{ marginTop: "80px" }}
        />
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}

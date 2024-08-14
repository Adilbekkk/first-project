import styles from "./Components.module.css";

export default function Story3() {
  return (
    <div>
      <div>
        <p
          className={styles.text}
          style={{ fontSize: "40px", lineHeight: "50px" }}
        >
          <span style={{ textDecoration: "underline" }}> Mayuresh </span>
          scheduled his last workshop: <br />
          “How to make kickass presentations”
        </p>
        <h1
          className={styles.text}
          style={{
            fontSize: "100px",
            lineHeight: "90px",
            fontWeight: "bold",
            margin: "200px 0px 200px 0px",
          }}
        >
          Then <br /> something <br />
          crazyyy <br /> happened
        </h1>
      </div>
      <p
        className={styles.text}
        style={{ fontSize: "40px", lineHeight: "50px" }}
      >
        Instead of the usual 5-7 people, <br />
        300 lined up outside of his dorm
      </p>
      <div className={styles.flex}>
        <img
          src="lightBear.jpg"
          alt="img"
          width={800}
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div className={styles.divider}></div>
      <div>
        <p
          className={styles.text}
          style={{ fontSize: "40px", lineHeight: "50px" }}
        >
          He ran it twice that day. These 600+ people <br /> included
          consultants, investment bankers, <br /> researchers even a few
          professors.
        </p>
        <p
          className={styles.text}
          style={{ fontSize: "40px", lineHeight: "50px" }}
        >
          All with the same problem...
        </p>
      </div>
      <div>
        <h1
          className={styles.text}
          style={{
            fontSize: "100px",
            lineHeight: "90px",
            fontWeight: "bold",
            margin: "200px 0px 100px 0px",
          }}
        >
          People were <br />{" "}
          <span className={styles.gradient}> frustrated</span> with the <br />{" "}
          way they were <br /> telling stories.
        </h1>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.year}>
        <p>2018</p>
      </div>
    </div>
  );
}

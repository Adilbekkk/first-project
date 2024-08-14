import styles from "./Components.module.css";
export default function Story5() {
  return (
    <div>
      <p
        className={styles.text}
        style={{ fontSize: "40px", lineHeight: "50px" }}
      >
        Over a year of testing showed them that the <br /> problem was much
        bigger and deeper than <br /> just redesigning Powerpoint...
      </p>
      <div className={styles.flex}>
        <img
          width={800}
          style={{ borderRadius: "30px" }}
          src="img/Story5.jpg"
          alt="img"
        />
      </div>
      <div className={styles.flex}>
        <div
          style={{
            backgroundColor: "black",
            backgroundOpacity: "0.4",
            width: "380px",
            height: "280px",
            textAlign: "center",
            marginRight: "20px",
            marginTop: "50px",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <p style={{ fontSize: "30px" }}>
            The tools and formats <br /> were tedious due to so <br /> many
            choices.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "black",

            width: "380px",
            height: "280px",
            textAlign: "center",
            marginLeft: "20px",
            marginTop: "50px",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <p style={{ fontSize: "30px" }}>
            Not only was it hard <br /> but it is way too easy <br /> to make
            crappy ones.
          </p>
        </div>
      </div>
      <h1
        className={styles.text}
        style={{
          fontSize: "100px",
          lineHeight: "90px",
          fontWeight: "bold",
          margin: "100px 0px 100px 0px",
        }}
      >
        <span style={{ fontSize: "70px", lineHeight: "90px" }}>
          {" "}
          People just wanted{" "}
        </span>
        <br />
        <span
          className={styles.gradient}
          style={{ fontSize: "140px", lineHeight: "90px" }}
        >
          {" "}
          convenience
        </span>
      </h1>
      <div className={styles.divider}></div>
    </div>
  );
}

import styles from "./Components.module.css";

export default function Story7() {
  return (
    <div className={styles.albumContainer}>
      <div className={styles.wordss}>
        <p
          className={styles.text}
          style={{
            fontSize: "30px",
            lineHeight: "50px",
            marginRight: "300px",
            marginBottom: "-50px",
          }}
        >
          We are on mission too
        </p>
        <h1
          style={{
            fontSize: "100px",
            lineHeight: "120px",
            fontWeight: "bolder",
          }}
        >
          Enable every <br /> team to make <br />
          impactful <br />
          presentations, <br />
          effortlessly
        </h1>
      </div>
      <div className={styles.albums}>
        <div className={styles.album1}>
          <div>
            <img
              className={styles.hbeta}
              src="img/album1.jpg"
              alt="1"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            {" "}
            <img
              className={styles.hbeta}
              src="img/album2.jpg"
              alt="2"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            {" "}
            <img
              className={styles.hbeta}
              src="img/album3.jpg"
              alt="3"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            {" "}
            <img
              className={styles.hbeta}
              src="img/album4.jpg"
              alt="4"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            <img
              className={styles.hbeta}
              src="img/album5.jpg"
              alt="5"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className={styles.album2}>
          <div>
            <img
              className={styles.hbeta}
              src="img/album6.jpg"
              alt="6"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            {" "}
            <img
              className={styles.hbeta}
              src="img/album7.jpg"
              alt="7"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            <img
              className={styles.hbeta}
              src="img/album8.jpg"
              alt="8"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            <img
              className={styles.hbeta}
              src="img/album9.jpg"
              alt="9"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            <img
              className={styles.hbeta}
              src="img/album10.jpg"
              alt="10"
              width={160}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

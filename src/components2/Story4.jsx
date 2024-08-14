import styles from "./Components.module.css";
import { Parallax, useParallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";

export default function Story4() {
  const parallax = useParallax({
    onProgressChange: (progress) => {
      console.log(progress);
      if (parallax.ref.current) {
        // console.log(progress)
        // set progress to CSS variable
        // const width = progress * 100;
        // console.log(progress);
        parallax.ref.current.style.setProperty(
          "--progress",
          progress.toString()
        );
      }
    },
  });

  return (
    <div ref={parallax.ref}>
      <p
        className={styles.text}
        style={{ fontSize: "40px", lineHeight: "50px" }}
      >
        Over the next 5 years at BCG{" "}
        <span style={{ textDecoration: "underline" }}> Mayuresh</span> <br />{" "}
        found himself surrounded by presentations all <br /> over again and the
        question never stopped...
      </p>
      <div className={styles.flex}>
        <img
          src="graduation.jpg"
          alt="img"
          width={800}
          style={{ borderRadius: "30px" }}
        />
        <div>
          <img
            src="img/popup-01.png"
            alt="01"
            width={450}
            style={{
              padding: `0 calc(20px / var(--progress))`,
              position: "absolute",
              left: "2%",
              top: "-10%",
            }}
          />
          <img
            src="img/popup-02.png"
            alt="02"
            width={450}
            style={{
              padding: `0 calc(20px / var(--progress))`,

              position: "absolute",
              left: "8%",
              top: "30%",
            }}
          />
          <img
            src="img/popup-03.png"
            alt="03"
            width={450}
            style={{
              padding: `0 calc(20px / var(--progress))`,
              position: "absolute",
              left: "-3%",
              top: "45%",
            }}
          />
          <img
            src="img/popup-04.png"
            alt="04"
            width={450}
            style={{
              padding: `0 calc(20px / var(--progress))`,
              position: "absolute",
              left: "5%",
              bottom: "-10%",
            }}
          />
          <img
            src="img/popup-05.png"
            alt="05"
            width={450}
            style={{
              padding: `0 calc(20px / var(--progress))`,
              position: "absolute",
              right: "-1%",
              top: "-10%",
            }}
          />
          <img
            src="img/popup-06.png"
            alt="06"
            width={450}
            style={{
              padding: `0 calc(20px / var(--progress))`,
              position: "absolute",
              right: "3%",
              top: "10%",
            }}
          />
          <img
            src="img/popup-07.png"
            alt="07"
            width={450}
            style={{
              padding: `0 calc(20px / var(--progress))`,
              position: "absolute",
              right: "2%",
              top: "50%",
            }}
          />
          <img
            src="img/popup-08.png"
            alt="08"
            width={450}
            style={{
              padding: `0 calc(20px / var(--progress))`,
              position: "absolute",
              right: "10%",
              bottom: "-20%",
            }}
          />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.year}>
        <p>2018</p>
      </div>
    </div>
  );
}

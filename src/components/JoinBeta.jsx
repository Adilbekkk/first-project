import styles from "./Components.module.css";
import { Parallax, useParallax } from "react-scroll-parallax";
import { Box, Tooltip } from "@mantine/core";

export default function JoinBeta() {
  const parallax = useParallax({
    onProgressChange: (progress) => {
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
    <div style={{ width: "100%", backgroundColor: "whitesmoke" }}>
      <div
        ref={parallax.ref}
        style={{
          margin: `0 calc(50px * var(--progress))`,
          backgroundColor: "#1a1a1a",
          borderRadius: "0 0 30px 30px",
        }}
      >
        <a href="/join" className={styles.abeta}>
          <Tooltip.Floating label="Yes I want to join">
            <Box style={{ cursor: "default" }}>
              <div className={styles.beta}>
                <h1 className={styles.hbeta}>Join our beta</h1>
                <h1 className={styles.hbeta}>Join our beta</h1>
                <h1 className={styles.hbeta}>Join our beta</h1>
                <h1 className={styles.hbeta}>Join our beta</h1>
              </div>
            </Box>
          </Tooltip.Floating>
        </a>
      </div>
    </div>
  );
}

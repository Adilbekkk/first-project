import styles from "./Components.module.css";

const Workflow = () => {
  return (
    <>
      <div className="workflow">
        <div className={styles.sozder}>
          <p style={{ color: "rgb(112 83 255)", fontSize: "30px" }}>Workflow</p>
          <h1 style={{ fontSize: "90px" }}>
            Create at <br />
            the speed <br />
            of though
          </h1>
          <p style={{ fontSize: "18px" }}>
            Focus on your getting your thoughts out and crafting the best <br />{" "}
            message while Chronicle does the heavy lifting for you
          </p>
        </div>
        <div className={styles.flowbox}>
          <div className={styles.shifts}>
            <div className={styles.shift}>
              <p>Shift</p>
            </div>
            <div className={styles.ctrl}>
              <p>Ctrl</p>
            </div>
            <div className={styles.T}>
              <p>T</p>
            </div>
          </div>
          <div className={styles.sozder2}>
            <h1 style={{ textAlignLast: "center", fontSize: "40px" }}>
              A keyboard <br /> first experience
            </h1>
            <p style={{ textAlignLast: "center", fontSize: "22px" }}>
              Powerful shortcuts and a keyboard-first <br />
              workflow means you will get to your finish line <br />
              in no time
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Workflow;

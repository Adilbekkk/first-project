import styles from "./Components.module.css";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function Story6() {
  return (
    <div>
      <p
        className={styles.text}
        style={{ fontSize: "40px", lineHeight: "50px" }}
      >
        We believe in a future where presentations are <br /> not just pretty
        pictures & visuals. They are a <br /> powerful combination of:
      </p>
      <div
        className={styles.text}
        style={{
          fontSize: "40px",
          opacity: "0.3",
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-microphone-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
            <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
          </svg>
          <h1>Narrative</h1>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-broadcast"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18.364 19.364a9 9 0 1 0 -12.728 0" />
            <path d="M15.536 16.536a5 5 0 1 0 -7.072 0" />
            <path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
          <h1>Information Design</h1>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-activity"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12h4l3 8l4 -16l3 8h4" />
          </svg>
          <h1>Motion Design</h1>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
            <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />
            <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
            <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
            <path d="M5 3l-1 -1" />
            <path d="M4 7h-1" />
            <path d="M14 3l1 -1" />
            <path d="M15 6h1" />
          </svg>
          <h1>Interactions</h1>
        </div>
      </div>
      <p
        className={styles.text}
        style={{ fontSize: "40px", lineHeight: "50px" }}
      >
        But not everyone has the time, patience or <br /> skills to do all of
        that. This is why we are <br /> building Chronicle.
      </p>
    </div>
  );
}

import styles from "./Components.module.css";
import { Parallax, useParallax } from "react-scroll-parallax";
import { Box, Tooltip } from "@mantine/core";

export default function About() {
  const navItems = [
    { id: 1, title: "Contact", link: "/contact" },
    { id: 2, title: "Blog", link: "/blog" },
    { id: 3, title: "Our Story", link: "/our-story" },
    { id: 4, title: "Careers", link: "/careers" },
  ];

  const company = [
    { id: 1, title: "Press", link: "/press" },
    { id: 2, title: "Brand Assets", link: "/brand" },
    { id: 3, title: "Terms of service", link: "/terms" },
    { id: 4, title: "Privacy Policy", link: "/privacy" },
  ];

  return (
    <div className={styles.about}>
      <div style={{ paddingTop: "100px" }}>
        <nav className={styles.nav2}>
          <div>
            <p style={{ fontWeight: "500", fontSize: "25px" }}> chronicle</p>
            <p style={{ fontWeight: "500", fontSize: "30px", opacity: "0.6" }}>
              Experience the future <br /> of storytelling.
            </p>
          </div>
          <ul>
            <p
              style={{
                fontWeight: "500",
                fontSize: "larger",
                marginLeft: "15px",
              }}
            >
              About
            </p>
            {navItems.map((item) => (
              <li key={item.id}>
                <a className={styles.list} href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <p
              style={{
                fontWeight: "500",
                fontSize: "larger",
                marginLeft: "15px",
              }}
            >
              Company
            </p>
            {company.map((item) => (
              <li key={item.id}>
                <a className={styles.list} href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ paddingTop: "30px" }}>
            <p
              className={styles.twitter}
              style={{
                fontWeight: "500",
                fontSize: "20px",
                padding: "10px",
                borderRadius: "40px",
                backgroundColor: "white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-twitter"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00abfb"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
              Follow us
              <span style={{ opacity: "0.6" }}> on Twitter for updates</span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex",
                backgroundColor: "white",
                borderRadius: "40px",
                paddingLeft: "10px",
              }}
            >
              <img src="beta.svg" alt="img" />
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  marginLeft: "20px",
                }}
              >
                Apply for early <br /> access
              </p>
            </div>
            <p style={{ opacity: "0.7", fontWeight: "500" }}>
              We are still fine tuning the product and would love <br /> your
              help. Join our Beta to help contribute
            </p>
          </div>
        </nav>
        <div
          style={{
            color: "#1a1a1a",
            fontWeight: "500",
            opacity: "0.6",
            marginLeft: "240px",
            marginTop: "200px",
          }}
        >
          Being built remote on sunny shores around the world
        </div>
      </div>
    </div>
  );
}

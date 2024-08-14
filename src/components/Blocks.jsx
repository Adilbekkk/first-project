import { Parallax, useParallax } from "react-scroll-parallax";
export default function Blocks() {
  return (
    <>
      <div className="block">
        <p style={{ color: "rgb(112 83 255)", fontSize: "27px" }}>
          Introducing Blocks
        </p>
        <h1 style={{ fontSize: "80px" }}>A new, easy way to create</h1>
      </div>

      <div className="grid-container">
        <Parallax speed={-25}>
          <div className="item1">
            <img src="block-tickets.png" alt="tickets" width={"280px"} />
            <img src="block-poll.png" alt="poll" width={"280px"} />
          </div>
        </Parallax>

        <Parallax speed={0}>
          <div className="item2">
            <img src="block-image-stack.png" alt="image" width={"280px"} />
          </div>
        </Parallax>

        <Parallax speed={11}>
          <div className="item3">
            <img src="block-tickets.png" alt="tickets" width={"280px"} />
          </div>
        </Parallax>

        <Parallax speed={-10}>
          <div className="item4">
            <img src="block-roadmap.png" alt="roadmap" width={"280px"} />
            <img src="block-jessica.png" alt="jessica" width={"280px"} />
          </div>
        </Parallax>

        <Parallax speed={-25}>
          <div className="item5">
            <img src="block-stats.png" alt="block" width={"280px"} />
            <img src="block-timeline.png" alt="timeline" width={"280px"} />
          </div>
        </Parallax>
      </div>
    </>
  );
}

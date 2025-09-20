import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { blob, dots, instagram, linkedin, linktree } from "@/assets";
import "./styles/home.css";
import { IoArrowDown } from "react-icons/io5";
import { Carousel } from "@/components";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isMobile, setMobile] = useState(window.innerWidth < 740);
  const [atTop, setAtTop] = useState(window.scrollY === 0);
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 740);
    window.addEventListener("resize", handleResize);

    const handleTop = () => setAtTop(window.scrollY === 0);
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleTop);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleTop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="home-section">
        <h1 className="home-h1">
          <span style={{ color: "var(--colour-dark-orange)" }}>
            Technical <br />
            Solutions for <br />
          </span>
          <span style={{ color: "var(--colour-blue)" }}>Social Good</span>
        </h1>
        <ul className="home-ul">
          <li>
            <a href="https://www.instagram.com/projectmagmanz/">
              <img
                src={instagram}
                alt="Instagram"
                height={isMobile ? 48 : 64}
                width={isMobile ? 48 : 64}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/project-magma-nz">
              <img
                src={linkedin}
                alt="LinkedIn"
                height={isMobile ? 48 : 64}
                width={isMobile ? 48 : 64}
              />
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/projectmagmanz">
              <img
                src={linktree}
                alt="Linktree"
                height={isMobile ? 48 : 64}
                width={isMobile ? 48 : 64}
              />
            </a>
          </li>
        </ul>
        <IoArrowDown
          className={`home-arrow${atTop ? "" : " hidden"}`}
          size={isMobile ? 32 : 48}
        />
        <img
          src={blob}
          className="blob tan"
          style={{
            height: "100%",
            right: 0,
            transform: `translate(30%, 10%) rotate(${10 - 0.03 * scroll}deg)`,
          }}
        />
        <img
          src={blob}
          className="blob orange"
          style={{
            height: "80%",
            right: 0,
            transform: `translate(50%, -10%) rotate(${150 + 0.04 * scroll}deg)`,
          }}
        />
        <img
          src={dots}
          className="blob blue"
          style={{
            height: "60%",
            bottom: 0,
            left: 0,
            transform: `translate(-50%, 50%) rotate(${-70 + 0.02 * scroll}deg)`,
          }}
        />
      </section>
      <section className="home-section">
        <div className="home-info">
          <p style={{ color: "var(--colour-dark-orange)" }}>
            Project Magma is a student initiative that connects{" "}
            <strong>STEM+ students</strong> with <strong>non-profits</strong> to
            deliver semester-long technical projects, creating{" "}
            <strong>lasting social impact</strong>.
          </p>
          <p style={{ color: "var(--colour-blue)" }}>
            Join us as a member for <strong>free</strong> to access workshops,
            projects, and more!
          </p>
          <a href="https://forms.gle/wMDQGo9Ews73hzHK6">
            <button className="home-button">Join Us</button>
          </a>
        </div>
        <img
          src={blob}
          className="blob blue"
          style={{
            height: "60%",
            bottom: 0,
            left: 0,
            transform: `translate(-50%, 30%) rotate(${-10 - 0.02 * scroll}deg)`,
          }}
        />
        <img
          src={dots}
          className="blob dark-orange"
          style={{
            height: "60%",
            bottom: 0,
            right: 0,
            transform: `translate(50%, 30%) rotate(${-80 + 0.01 * scroll}deg)`,
          }}
        />
      </section>
      <section className="home-section">
        <Carousel />
        <img
          src={blob}
          className="blob tan"
          style={{
            height: "100%",
            top: 0,
            left: 0,
            transform: `translate(-30%, 0) rotate(0)`,
          }}
        />
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { instagram, linkedin, linktree } from "@/assets";
import "./styles/home.css";
import { IoArrowDown } from "react-icons/io5";
import { Carousel } from "@/components";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isMobile, setMobile] = useState(window.innerWidth < 740);
  const [atTop, setAtTop] = useState(window.scrollY === 0);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 740);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
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
      </section>
      <section className="home-section">
        <Carousel />
      </section>
    </>
  );
}

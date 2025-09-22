import { createFileRoute } from "@tanstack/react-router";
import FAQAccordion from "@/components/AccordionFAQ";
import "./styles/about.css";
import ToTop from "@/components/ToTop";

// Generic components
import blob1 from "@/assets/Blob1.png";
import blob2 from "@/assets/Blob2.png";
import dots1 from "@/assets/Dots1.png";
import dots2 from "@/assets/Dots2.png";
import Blob from "@/components/Blob";
import { IoArrowForward } from "react-icons/io5";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Blob
        src={blob1}
        top="35rem"
        right="-2rem"
        width="280px"
        height="280px"
        rotation={180}
        scale={2}
      />
      <Blob
        src={blob2}
        top="70rem"
        left="2rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2.2}
      />
      <Blob
        src={dots2}
        top="90rem"
        left="-1rem"
        width="220px"
        height="220px"
        rotation={70}
        scale={2}
      />
      <Blob
        src={dots1}
        top="120rem"
        right="1rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2}
      />

      <h1 className="header-container">About Project Magma</h1>
      <section className="about-section">
        <div className="about-two-cols">
          <div>
            <h2
              className="about-title"
              style={{ textAlign: "center" }}
            >
              Who We Are
            </h2>

            <p className="about-regular-TwoCols-text">
              Project Magma is a student organisation and initiative started at
              the University of Auckland to connect interested STEM+ students
              with non-profit organisations across Auckland and beyond, to
              facilitate semester-long project development that solves technical
              problems faced by these organisations.{" "}
            </p>
          </div>
          <img
            src="/src/assets/about-1.jpg"
            alt="About Us - Launch Workshop"
            className="about-img"
          />
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-title">What We Do</h2>

        <p className="about-regular-text">
          Our projects typically start with improving and automating the
          clients’ existing operations. On the technical side this is usually
          related to data analysis and visualisation, some GUI and web tool
          development, natural language processing, email and database
          automation, and general research suited for the scope of each
          semester-long project. The typical technical outcomes at the end
          usually lead to social impact at larger scales long-term.
        </p>

        <p className="about-regular-text">
          Within the programme, each team usually has a team lead (Project
          Manager, PM) and/or secretary to help the whole team keep track of
          progress, and provide a support system. Project Magma executives also
          support teams on the side throughout the project cycle.
        </p>

        <p className="about-regular-text">
          What’s most important about our projects is that,{" "}
          <b>no matter what background you come from,</b> as long as you have a
          keen interest in taking part in nonprofit community work and/or
          gaining technical experience, there will be something in store for
          you!
        </p>
        <a href="/projects">
          <button className="about-project-button">
            Check out some of our projects <IoArrowForward />
          </button>
        </a>
      </section>
      <section className="about-section">
        <div className="about-two-cols">
          <img
            src="/src/assets/about-2.jpg"
            alt="About Us - Showcase Workshop"
            className="about-img"
          />
          <div>
            <h2
              className="about-title"
              style={{ textAlign: "center" }}
            >
              Our Non-Profit Clients
            </h2>

            <p className="about-regular-TwoCols-text">
              The types of work many of our clients do span youth counselling
              and mentoring, education, and many areas of healthcare. By working
              on each project, members also open up opportunities to network
              with volunteers, managers, and professionals in these
              not-for-profit spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2
          className="about-title"
          style={{ textAlign: "center" }}
        >
          Frequently Asked Questions (FAQs)
        </h2>

        <FAQAccordion />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "40px",
          }}
        >
          <ToTop />
        </div>
      </section>
    </>
  );
}

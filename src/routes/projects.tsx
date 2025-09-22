import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components";
import { allProjects } from "@/data/projects";
import "./styles/projects.css";
import { useMobile } from "@/context/MobileContext";
import ToTop from "@/components/ToTop";
import blob1 from "@/assets/Blob1.png";
import blob3 from "@/assets/Blob3.png";
import dots1 from "@/assets/Dots1.png";
import dots2 from "@/assets/Dots2.png";
import Blob from "@/components/Blob";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  const isMobile = useMobile();
  const semesters = Object.keys(allProjects);

  return (
    <>
      <Blob
        src={blob1}
        top="25rem"
        right="-1rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2}
      />
      <Blob
        src={dots2}
        top="65rem"
        left="-1rem"
        width="220px"
        height="220px"
        rotation={70}
        scale={2}
      />
      <Blob
        src={dots1}
        top="115rem"
        right="-1rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2}
      />
      <Blob
        src={blob3}
        top="175rem"
        left="-1rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2.2}
      />

      <h1 className="header-container">Our Work</h1>
      <div className="semester-buttons">
        {semesters.map((sem) => (
          <button
            className="semester-button"
            key={sem}
            onClick={() => {
              const el = document.getElementById(sem);
              if (el) {
                const top =
                  el.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({
                  top,
                  behavior: "smooth",
                });
              }
            }}
          >
            {sem}
          </button>
        ))}
      </div>
      <section className="projects-section">
        {Object.entries(allProjects).map(([sem, projects]) => (
          <div
            key={sem}
            id={sem}
          >
            <h2
              className={isMobile ? "semester-title-mobile" : "semester-title"}
            >
              {sem}
            </h2>
            <div
              className={
                isMobile ? "cards-container-mobile" : "cards-container"
              }
            >
              {projects.map((project, idx) => (
                <ProjectCard
                  key={project.title + idx}
                  title={project.title}
                  imageSrc={project.imageSrc}
                  blurb={project.blurb}
                />
              ))}
            </div>
          </div>
        ))}
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

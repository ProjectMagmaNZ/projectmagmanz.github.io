import { createFileRoute, Link } from "@tanstack/react-router";
import "./styles/projects.css";
import blob1 from "@/assets/Blob1.png";
import blob3 from "@/assets/Blob3.png";
import dots1 from "@/assets/Dots1.png";
import dots2 from "@/assets/Dots2.png";
import Blob from "@/components/Blob";
import { projectPartners, projectPartners2, projectHighlights } from "@/data/projects";
import {projectList} from "@/data/projects"
import { ProjectCard } from "@/components";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
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
        top="35rem"
        left="-1rem"
        width="220px"
        height="220px"
        rotation={70}
        scale={2}
      />
      <Blob
        src={dots1}
        top="65rem"
        right="-1rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2}
      />
      <Blob
        src={blob3}
        top="85rem"
        left="-1rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2.2}
      />

      <section className="projects-section">
        <h1 className="projects-h1">
          Over the years we've had the chance to be<br />
          building some amazing projects with our clients:
        </h1>

        <div className="projects-grid">
          {Object.values(projectHighlights).map((highlight) => (
            <div
              className="project-highlight"
              key={highlight.title}
            >
              <center><h2 className="project-highlight-title">{highlight.title}</h2></center>
              <center><img
                key={highlight.title}
                src={highlight.imageSrc}
                alt={highlight.title}
                width="100%"
                className="partner-logo"
              /></center>
              <p className="project-highlight-blurb">{highlight.blurb}</p>
            </div>
          ))}
        </div>

        <h1 className="projects-h1">
          ...And we've had the chance to <br /> work with some amazing people:
        </h1>

        <center><p className="project-subheading-text">Some of our workshops...</p></center>

        <br></br>

        <div className="projects-grid">
          {Object.values(projectPartners).map((partner) =>
            partner.link ? (
              <Link
                to={partner.link}
                key={partner.name}
              >
                <img
                  key={partner.name}
                  src={partner.logoSrc}
                  alt={partner.name}
                  height={250}
                  className="partner-logo"
                />
              </Link>
            ) : (
              <img
                key={partner.name}
                src={partner.logoSrc}
                alt={partner.name}
                height={250}
                className="partner-logo"
              />
            )
          )}
        </div>

        <center><p className="project-subheading-text">Example from our CAAH project in 2024...</p></center>

        <br></br>

        <div className="projects-grid">
          {Object.values(projectPartners2).map((partner) =>
            partner.link ? (
              <Link
                to={partner.link}
                key={partner.name}
              >
                <img
                  key={partner.name}
                  src={partner.logoSrc}
                  alt={partner.name}
                  height={250}
                  className="partner-logo"
                />
              </Link>
            ) : (
              <img
                key={partner.name}
                src={partner.logoSrc}
                alt={partner.name}
                height={250}
                className="partner-logo"
              />
            )
          )}
        </div>
        <div className="projects-expanded-container">
          {projectList.filter((project) => project.blurb) // Only show projects with blurbs (filters out empty entries)
                    .map((project, index) => (
                      <ProjectCard
                      key={index}
                      title={project.partner}
                      blurb={project.blurb}
                      />))}
        </div>

        <h1 className="projects-h1">Interested in supporting or volunteering with us?</h1>

        <button className="projects-cta">
          <Link
            className="projects-cta-link"
            to="/contact"
          >
            <b>Contact Us</b>
          </Link>
        </button>
      </section>
    </>
  );
}

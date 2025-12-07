import { createFileRoute, Link } from "@tanstack/react-router";
import "./styles/projects.css";
import blob1 from "@/assets/Blob1.png";
import blob3 from "@/assets/Blob3.png";
import dots1 from "@/assets/Dots1.png";
import dots2 from "@/assets/Dots2.png";
import Blob from "@/components/Blob";
import { projectPartners, projectHighlights } from "@/data/projects";

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
          Over the years we've had the chance <br />
          to work with some amazing people:
        </h1>

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

        <h1 className="projects-h1">
          And we've had the chance to <br />
          build some amazing projects:
        </h1>

        <div className="projects-grid">
          {Object.values(projectHighlights).map((highlight) => (
            <div
              className="project-highlight"
              key={highlight.title}
            >
              <h2 className="project-highlight-title">{highlight.title}</h2>
              <img
                key={highlight.title}
                src={highlight.imageSrc}
                alt={highlight.title}
                width="100%"
                className="partner-logo"
              />
              <p className="project-highlight-blurb">{highlight.blurb}</p>
            </div>
          ))}
        </div>

        <h1 className="projects-h1">Interested in working with us?</h1>

        <button className="projects-cta">
          <Link
            className="projects-cta-link"
            to="/contact"
          >
            Contact Us
          </Link>
        </button>
      </section>
    </>
  );
}

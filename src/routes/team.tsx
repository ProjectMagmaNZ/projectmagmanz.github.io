import { createFileRoute } from "@tanstack/react-router";
import ExecMemberCard from "@/components/ExecMemberCard";
import execs from "@/data/execs";
import "./styles/team.css";

import dots1 from "@/assets/Dots1.png";
import dots2 from "@/assets/Dots2.png";

export const Route = createFileRoute("/team")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="page-title">Meet The Team</h1>
      <img
        className="first-dots"
        src={dots1}
      />
      <img
        className="second-dots"
        src={dots2}
      />
      <img
        className="third-dots"
        src={dots1}
      />
      <img
        className="fourth-dots"
        src={dots2}
      />
      <div className="exec-grid">
        {execs
          .filter((exec) => exec.name) // Only show execs with names (filters out empty entries)
          .map((exec, index) => (
            <ExecMemberCard
              key={index}
              name={exec.name}
              degree={exec.degree}
              role={exec.role}
              imageSrc={exec.imageSrc}
              quote={exec.quote}
            />
          ))}
      </div>
    </div>
  );
}

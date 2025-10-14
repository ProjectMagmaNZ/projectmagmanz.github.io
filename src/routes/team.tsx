import { createFileRoute } from '@tanstack/react-router'
import ExecMemberCard from "@/components/ExecMemberCard";
import execs from "@/data/execs";
import "./styles/team.css"

export const Route = createFileRoute('/team')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1 className="page-title">Meet The Team</h1>
      <img className="first-dots" src="src\assets\Dots1.png" alt="" />
      <img className="second-dots" src="src\assets\Dots2.png" alt="" />
      <img className="third-dots" src="src\assets\Dots1.png" alt="" />
      <img className="fourth-dots" src="src\assets\Dots2.png" alt="" />
      <div className="exec-grid">
        {execs
          .filter(exec => exec.name) // Only show execs with names (filters out empty entries)
          .map((exec, index) => (
            <ExecMemberCard
              key={index}
              name={exec.name}
              degree={exec.degree}
              role={exec.role}
              imageSrc={exec.imageSrc}
              quote={exec.quote}
            />
          ))
        }
      </div>
    </div>
  )
}
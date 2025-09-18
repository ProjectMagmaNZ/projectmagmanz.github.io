import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '@/components'
import { allProjects } from '@/data/projects'
import './styles/projects.css'
import { useMobile } from '@/context/MobileContext'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  const isMobile = useMobile();
  return <>
    <section className="projects-section">
      
      {Object.entries(allProjects).map(([sem, projects]) => (
        <div key={sem}>
          <h2 className={isMobile ? 'semester-title-mobile' : 'semester-title'}>{sem}</h2>
          <div className={isMobile ? "cards-container-mobile" : "cards-container"}>
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
    </section>
    
  </>

}

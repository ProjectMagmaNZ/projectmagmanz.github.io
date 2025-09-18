import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '@/components'
import { allProjects } from '@/data/projects'
import './styles/projects.css'
import { useMobile } from '@/context/MobileContext'
import ToTop from '@/components/ToTop'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  const isMobile = useMobile();
  const semesters = Object.keys(allProjects);

  return <>
    <h1 className='header-container'>Projects</h1>
    <div className='semester-buttons'>
      {semesters.map(sem => (
        <button className="semester-button"
          key={sem}
          onClick={() => {
            const el = document.getElementById(sem);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          {sem}
        </button>
      ))}
    </div>
    <section className="projects-section">
      
      {Object.entries(allProjects).map(([sem, projects]) => (
        <div key={sem} id={sem}>
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
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '40px' }}>
        <ToTop />
      </div>
    </section>
    
    
  </>

}

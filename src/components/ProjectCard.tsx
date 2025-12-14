import "./styles/card.css";

interface ProjectCardProps {
  title: string;
  blurb: string;
}

export default function ProjectCard({ title, blurb }: ProjectCardProps) {
  return (
    <>
      <div className="card">
        <div className="card-title">{title}</div>
        <div className="card-blurb">{blurb}</div>
      </div>

    </>
  );
}
import "./styles/card.css";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  blurb: string;
}

export default function ProjectCard({ title, imageSrc, blurb }: ProjectCardProps) {
  return (
    <>
      <div className="card">
        <div className="card-title">{title}</div>
        <img className="card-image"
          src={imageSrc}
          alt={title}
        />
        <div className="card-blurb">{blurb}</div>
      </div>

    </>
  );
}
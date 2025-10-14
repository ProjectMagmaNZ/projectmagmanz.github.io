import "./styles/card.css";

interface ExecCardProps {
    name: string;
    degree: string;
    role: string;
    imageSrc: string;
    quote: string;
}

export default function ExecMemberCard({ name, degree, role, imageSrc, quote }: ExecCardProps){
    return (
        <div className="execCard">
            <img className="execImg"
            src={imageSrc}
            alt={name} 
            />
            <div className="card-blurb exec-card-blurb">
                <div className="name-and-degree">
                    <p className="name">{name}</p>
                    <p className="degree">{degree}</p> 
                </div>
                <p className="role">{role}</p>
                <p className="quote">{quote}</p>
            </div>
        </div>
    )
}
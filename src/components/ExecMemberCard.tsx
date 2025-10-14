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
                    <h1 className="name">{name}</h1>
                    <h1 className="degree">{degree}</h1> 
                </div>
                <h1 className="role">{role}</h1>
                <h1 className="quote">{quote}</h1>
            </div>
        </div>
    )
}
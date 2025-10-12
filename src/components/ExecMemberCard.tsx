import "./styles/execCard.css";

interface ExecCardProps {
    name: string;
    degree: string;
    role: string;
    imageSrc: string;
    quote: string;
}

export default function ExecMemberCard({ name, degree, role, imageSrc, quote }: ExecCardProps){
    return (
        <div className="card">
            <img className="execImg"
            src={imageSrc}
            alt={name} 
            />
            <div className="blurb">
                <div className="nameAndDegree">
                    <h1 className="name">{name} - {degree}</h1>
                </div>
                <h1 className="role">{role}</h1>
                <h1 className="quote">{quote}</h1>
            </div>
        </div>
    )
}
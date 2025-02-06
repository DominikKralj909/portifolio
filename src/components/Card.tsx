interface CardProps {
    title: string;
    description: string;
    technologies: string[];
    website: string;
    startDate?: string;
    endDate?: string;
    isProject?: boolean;
}

const Card = ({ 
    title, 
    description, 
    technologies, 
    website, 
    startDate, 
    endDate, 
    isProject = false 
}: CardProps) => {
    return (
        <a href={website} target="_blank" rel="noopener noreferrer" className="card">
            {startDate && endDate && (
                <div className="card-header">
                    <span className="date">{startDate} - {endDate}</span>
                </div>
            )}
            <div className="card-body">
                {!isProject ? (
                    <h3 className="title">{title}</h3>
                ) : (
                    <div className="project-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                            <path d="M488 32H360c-20.4 0-39.8 5.5-56.8 15.1C286.2 37.5 266.9 32 246.5 32H88C39.4 32 0 71.4 0 120v272c0 48.6 39.4 88 88 88h144c26.5 0 48-21.5 48-48V80c0-8.8 7.2-16 16-16h136c13.3 0 24 10.7 24 24v272c0 13.3-10.7 24-24 24H360c-26.5 0-48 21.5-48 48s21.5 48 48 48h128c48.6 0 88-39.4 88-88V120c0-48.6-39.4-88-88-88zm-200 40v336c0 4.4-3.6 8-8 8H88c-13.3 0-24-10.7-24-24V120c0-13.3 10.7-24 24-24h136c13.3 0 24 10.7 24 24z" />
                        </svg>
                    </div>
                )}
                <p className="description">{description}</p>
            </div>
            <div className="card-footer">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-chip">{tech}</span>
                ))}
            </div>
        </a>
    );
};

export default Card;

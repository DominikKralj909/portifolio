interface ExperienceCardProps {
	startDate: string;
    endDate: string;
    title: string;
    company: string;
    website: string;
    description: string;
    technologies: string[];
}

function ExperienceCard({ startDate, endDate, technologies, title, company, website, description }: ExperienceCardProps) {
	return (
 		<a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="protifolio-content-experience-card"
        >
            <div className="protifolio-content-experience-card-header">
                <span className="date">{startDate} - {endDate}</span>
            </div>
            <div className="protifolio-content-experience-card-body">
                <h3 className="title">{title}</h3>
                <p className="company">{company}</p>
                <p className="description">{description}</p>
            </div>
            <div className="protifolio-content-experience-card-footer">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-chip">{tech}</span>
                ))}
            </div>
        </a>
	);
};

export default ExperienceCard;
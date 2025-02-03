
interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    link: string;
}

const ProjectCard = ({ title, description, techStack, link }: ProjectCardProps) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <div className="project-card-tech">
                    {techStack.map((tech, index) => (
                        <span key={index} className="project-chip">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;

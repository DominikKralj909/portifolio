import { experiences } from '../mocks/mockExperience';
import { projects } from '../mocks/mockProjects';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';

function Content() {
	return (
		<main className="portifolio-content">
			<section className="portifolio-content-about">
				<p className="portifolio-content-about-text">
					I’m a front-end engineer passionate about crafting accessible, pixel-perfect user interfaces that balance thoughtful design with strong engineering principles. 
					My work revolves around building performant and user-friendly web applications that enhance user experience and accessibility.
				</p>
				<p className="portifolio-content-about-text">
					Currently, I’m a front-end developer at <a href="https://www.artkod.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">Artkod</a>, 
					a web development agency where I work on complex applications. 
					While my primary focus is on front-end development, I also collaborate closely with backend systems to ensure seamless integration and functionality.
				</p>
				<p className="portifolio-content-about-text">
					Over the years, I’ve worked across diverse environments, from product-based companies to agencies, refining my skills in UI/UX, performance optimization, and accessibility. 
					I thrive at the intersection of design and development, ensuring that every interface I build is both beautiful and highly functional.
				</p>
				<p className="portifolio-content-about-text">
					Outside of work, you’ll find me hiking through nature trails or spending time with my dog on long walks.
				</p>
			</section>
			<section className="portifolio-content-experience">
				{experiences.map((exp, index) => (
					<ExperienceCard key={index} {...exp} />
				))}
			</section>
			 <section className="portfolio-content-projects">
                <h2 className="section-title">Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>
		</main>
	);
};

export default Content;
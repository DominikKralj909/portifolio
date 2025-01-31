import ExperienceCard from './ExperienceCard';

const experiences = [
    {
        startDate: '01/2025',
        endDate: 'Present',
        title: 'Front-End Developer',
        company: 'Artkod',
        website: 'https://www.artkod.com/',
        description: `Working on complex web applications, ensuring high performance, accessibility, and seamless UI/UX.`,
        technologies: ['React', 'Sass', 'Laravel', 'Typescript', 'CRM']
    }, {
        startDate: '01/2021',
        endDate: '12/2024',
        title: 'Front-End Engineer',
        company: 'CloudSense',
        website: 'https://www.cloudsense.com/',
        description: `
			Developed and maintained a robust UI component library tailored for business logic-driven products, 
			ensuring component consistency across a suite of complex business applications. Worked on mayor business products, learning and integrating new technologies essential to
			meeting complex product requirements and high reliability standards.
		`,
        technologies: ['React', 'Redux', 'Sass', 'Jest/RTL', 'Salesforce', 'Typescript']
    },  {
        startDate: '07/2022',
        endDate: '08/2022',
        title: 'Front-End Developer Intern',
        company: 'Perpetuum Mobile',
        website: 'https://www.perpetuum.hr/en',
        description: `
			Designed and implemented a custom website theme using Drupal 9, contributing to client-facing solutions.
			Actively sought feedback from senior developers, enhancing the theme iteratively and gaining valuable insights into professional web
			development workflow.
		`,
        technologies: ['Drupal', 'HTML5', 'CSS3', 'Javascript']
    },
];


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
		</main>
	);
};

export default Content;
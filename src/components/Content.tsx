/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

import { experiences } from '../mocks/mockExperience';
import { projects } from '../mocks/mockProjects';

import Card from './Card';

interface ContentProps {
  onSectionVisible: (ref: HTMLElement) => void;
}

function Content({ onSectionVisible }: ContentProps) {
    const aboutRef = useRef<HTMLElement>(null);
    const experienceRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onSectionVisible(entry.target as HTMLElement);
                    }
                });
            },
            { threshold: 0.5, rootMargin: '-25% 0px 0px 0px' }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
            if (experienceRef.current) observer.unobserve(experienceRef.current);
            if (projectsRef.current) observer.unobserve(projectsRef.current);
        };
    }, [onSectionVisible]);

    return (
        <main className="portifolio-content">
            <section className="portifolio-content-about" id="about" ref={aboutRef}>
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
            <section className="portifolio-content-experience" id="experience" ref={experienceRef}>
                <h3 className="portifolio-content-title">Experience</h3>
                {experiences.map((exp, index) => (
                    <Card
                        key={index}
                        title={exp.title}
                        description={exp.description}
                        technologies={exp.technologies}
                        website={exp.website}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                    />
                ))}
            </section>
            <section className="portifolio-content-projects" id="projects" ref={projectsRef}>
                <h3 className="portifolio-content-title">Projects</h3>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.techStack}
                            website={project.link}
                            isProject={true}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Content;

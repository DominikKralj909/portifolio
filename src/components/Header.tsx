import { useEffect, useState } from 'react';

import { socialLinks } from '../mocks/socialLinks';

interface HeaderProps {
	title: string;
	subtitle: string;
	content: string;
	currentSection: HTMLElement | null;
}

const navigationLinks = ['about', 'experience', 'projects'];

function Header({ title, subtitle, content, currentSection }: HeaderProps) {
	const [activeLink, setActiveLink] = useState('');
	
	const handleLinkClick = (link: string) => setActiveLink(link);

	useEffect(() => {
		if (currentSection) setActiveLink(currentSection.id.toLowerCase());
	}, [currentSection]);
	
	return (
		<header className="portifolio-header">
			<div className="portifolio-header-content">
				<h1 className="portifolio-header-title">{title}</h1>
				<h2 className="portifolio-header-subtitle">{subtitle}</h2>
				<p className="portifolio-header-content-text">{content}</p>
			</div>
			<nav className="portifolio-header-navigation">
				{navigationLinks.map((link) => (
					<a
						href={`#${link}`}
						key={link}
						onClick={() => handleLinkClick(link)}
						className={activeLink === link ? 'active' : ''}
						aria-label={`Go to ${link} section`}
						rel="noopener noreferrer" 
					>
						{link}
					</a>
				))}
			</nav>
			<div className="portifolio-header-social-icons">
				{socialLinks.map(({ href, label, iconClass }, index) => (
					<a
						key={index}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
					>
						<i className={iconClass}></i>
					</a>
				))}
      		</div>
		</header>
	);
}

export default Header;
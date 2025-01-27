import { useState } from 'react';

interface HeaderProps {
	title: string;
	subtitle: string;
	content: string;
}

const socialLinks = [
	{
	  href: "https://github.com/DominikKralj909",
	  label: "Visit GitHub profile",
	  iconClass: "fab fa-github",
	}, {
	  href: "https://www.linkedin.com/in/dominik-kralj-637568210",
	  label: "Visit LinkedIn profile",
	  iconClass: "fab fa-linkedin",
	}, {
	  href: "https://www.instagram.com/dominik.kralj/?__pwa=1",
	  label: "Visit Instagram profile",
	  iconClass: "fab fa-instagram",
	},
];

const navigationLinks = ['about', 'experience', 'projects'];

function Header({ title, subtitle, content }: HeaderProps) {
	const [activeLink, setActiveLink] = useState('');


	const handleLinkClick = (link: string) => setActiveLink(link);
	
	return (
		<header className="portifolio-header">
			<div className="portifolio-header-content">
				<h1 className="portifolio-header-title">{title}</h1>
				<h2 className="portifolio-header-subtitle">{subtitle}</h2>
				<p>{content}</p>
			</div>
			<nav className="portifolio-header-navigation">
				{navigationLinks.map((link) => (
					<a
						href={`#${link}`}
						key={link}
						onClick={() => handleLinkClick(link)}
						className={activeLink === link ? 'active' : ''}
						aria-label={`Go to ${link} section`} 
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
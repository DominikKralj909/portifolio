 import { useEffect, useState, useRef } from 'react';

import Content from './Content';
import Header from './Header';

function Portifolio() {
	const contentRef = useRef<HTMLDivElement | null>(null);
	const [currentSectionRef, setCurrentSectionRef] = useState<HTMLElement | null>(null);

	 const handleCurrentSectionRef = (ref: HTMLElement) => {
		setCurrentSectionRef(ref); 
	};

	 useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (!contentRef.current) return;

            event.preventDefault(); 

            const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
            const maxScroll = scrollHeight - clientHeight;

            if ((scrollTop === 0 && event.deltaY < 0) || (scrollTop >= maxScroll && event.deltaY > 0)) {
                return;
            }

            contentRef.current.scrollBy({
                top: event.deltaY * 4,
                behavior: "smooth",
            });
        };

        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => window.removeEventListener("wheel", handleScroll);
    }, []);

	useEffect(() => {
		if (window.scrollY === 0) {
			console.log('test')
		}
	}, [])

	return (
		<div className="portifolio"  ref={contentRef}>
			<Header 
				title="dominik kralj"
				subtitle="frontend engineer"
				content="I build accessible, pixel-perfect digital experiences for the web."
				currentSection={currentSectionRef} 
			/>
			<Content onSectionVisible={handleCurrentSectionRef}/>
		</div>
	);
};

export default Portifolio;
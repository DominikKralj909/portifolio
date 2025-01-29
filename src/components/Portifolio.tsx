import Content from "./Content";
import Header from "./Header";

function Portifolio() {
	return (
		<div className="portifolio">
			<Header 
				title="dominik kralj"
				subtitle="frontend engineer"
				content="I build accessible, pixel-perfect digital experiences for the web." 
			/>
			<Content />
		</div>
	);
};

export default Portifolio;
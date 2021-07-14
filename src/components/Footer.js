import { Fade } from 'react-awesome-reveal';

const Footer = () => {
	return (
		<footer className="bck-red">
			<Fade delay={300}>
				<div className="footer-logo-venue">
					The BIG <br></br> Bamboo
				</div>
				<p className="footer-copyright">&copy; 2021 all rights reserved</p>
			</Fade>
		</footer>
	);
};

export default Footer;

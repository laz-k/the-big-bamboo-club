import { Fade } from 'react-awesome-reveal';

const Footer = () => {
	return (
		<footer className="bck-footer">
			<Fade delay={300}>
				<div className="footer-logo-venue">
				<a href="/">
						<img className="footer-logo" src={require('../resources/images/header-logo.png').default} alt="logo" />
					</a>
				</div>
				<p className="footer-copyright">&copy; 2021 all rights reserved</p>
			</Fade>
		</footer>
	);
};

export default Footer;

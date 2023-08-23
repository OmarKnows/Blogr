import './Footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
	return (
		<div className='footer'>
			<img className='logo' src={logo} alt='logo' />
			<div className='footer-title'>Product</div>
			<div className='footer-title'>Company</div>
			<div className='footer-title'>Connect</div>
			<div className='footer-item'>Pricing</div>
			<div className='footer-item'>Team</div>
			<div className='footer-item'>Newsletter</div>
			<div className='footer-item'>Marketplace</div>
			<div className='footer-item'>Blog</div>
			<div className='footer-item'>Linkedin</div>
			<div className='footer-item'>Features</div>
			<div className='footer-item'>Careers</div>
			<div className='footer-item'></div>
			<div className='footer-item'>Integrations</div>
		</div>
	);
};

export default Footer;

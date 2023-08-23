import './Header.css';
import logo from '../../assets/logo.svg';
import arrow from '../../assets/icon-arrow-light.svg';

const Header = () => {
	return (
		<div className='header'>
			<div className='flex-box '>
				<img className='logo' src={logo} alt='logo' />
				<div className='header-item'>
					Product
					<img src={arrow} />
				</div>
				<div className='header-item'>
					Company <img src={arrow} />
				</div>
				<div className='header-item'>
					Connect
					<img src={arrow} />
				</div>
			</div>
			<div className='flex-box'>
				<div className='login'>Login</div>
				<div className='primary-btn'>Sign Up</div>
			</div>
		</div>
	);
};

export default Header;

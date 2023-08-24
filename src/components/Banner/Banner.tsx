import background from '../../assets/bg-pattern-intro-desktop.svg';
import './Banner.css';
import '../../App.css';
import Header from '../Header/Header';
const Banner = () => {
	return (
		<div className='banner'>
			<Header />
			<div className='container'>
				{/* <img className='background' src={background} alt='background' /> */}
				<div className='banner-items'>
					<div className='title'>A modern publishing platform</div>
					<div className='sub-title'> Grow your audience and build your online brand</div>
					<div className='flex-box'>
						<div className='primary-btn'>Start for Free</div>
						<div className='secondary-btn'>Learn More</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

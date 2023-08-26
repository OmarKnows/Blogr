import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import illustration1 from './assets/illustration-editor-desktop.svg';
import illustration2 from './assets/illustration-phones.svg';
import illustration3 from './assets/bg-pattern-circles.svg';

function App() {
	return (
		<>
			<Banner />

			{/* section 1 */}
			<div className='title-one'>Design for the future</div>
			<div className='section-one'>
				<div className='p-container'>
					<div>
						<div className='p-title mt-4'>Introducing an extensible editor</div>
						<p className='p-one'>
							Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The
							editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos
							and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the
							look of a blog.
						</p>
					</div>
					<div>
						<div className='p-title'>Robust content management</div>
						<p>
							Flexible content management enables users to easily move through posts. Increase the usability of your
							blog by adding customized categories, sections, format or flow. With this functionality, you're in full
							control.
						</p>
					</div>
				</div>
				<div className='ill-1'>
					<img src={illustration1} />
				</div>
			</div>

			{/* section 2 */}
			<div className='section-two'>
				<div>
					<img className='ill-3' src={illustration3} />
				</div>
				<div>
					<div className='title-two'>State of the Art Infratructure</div>
					<p className='p-two'>
						With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
						This ensures your site will load instantly, no matter where your readers are, keeping your site competetive.
					</p>
				</div>
			</div>
			<img className='ill-2' src={illustration2} />

			<Footer />
		</>
	);
}

export default App;

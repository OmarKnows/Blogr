import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import illustration1 from './assets/illustration-editor-desktop.svg';

function App() {
	return (
		<>
			<Banner />

			<div className='title-one'>Design for the future</div>
			<div className='grid-container'>
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
				<div className='illustration-1'>
					<img src={illustration1} alt='' />
				</div>
			</div>

			<Footer />
		</>
	);
}

export default App;

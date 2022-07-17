import './Resume.scss'
import Github from 'assets/Contacts/github.svg';
import LinkedIn from 'assets/Contacts/linkedin.svg';
import { useEffect, useState } from 'react';

// type TableOfContentItemType = {
// 	indent: number,
// 	id: string,
// 	title: string,
// 	active: boolean,
// }

function Resume() {
	const [showNav, setShowNav] = useState(window.innerWidth >= 800);

	const onResize = () => {
		setShowNav(window.innerWidth >= 800);
	};

	const observer = new IntersectionObserver(elements => {
		elements.forEach(element => {
			const id = element.target.getAttribute('id');
			if (element.intersectionRatio > 0) {
				document.querySelector(`nav>div>div>div>a[href="#${id}"]`)?.parentElement?.classList.add('active');
			} else {
				document.querySelector(`nav a[href="#${id}"]`)?.parentElement?.classList.remove('active');
			}
		});
	});

	useEffect(() => {
		window.addEventListener('resize', onResize);
		document.querySelectorAll('*[id]')
			.forEach((element) => { observer.observe(element) });

		return () => {
			window.removeEventListener('resize', onResize);
		};
	});

	return (
		<section id='resume'
			className={showNav ? 'Resume flex column' : 'no-nav Resume flex column'}
		>
			<nav className={showNav ? '' : 'no-nav'}>
				<div className='sticky'>
					<div className='contact'>
						<h3>CONTACT</h3>
						<a href='tel:0223227529'>
							<span>📞</span>
							022 322 7529 | Auckland, NZ
						</a>
						<a href='mailto:qsha020@aucklanduni.ac.nz'>
							<span>✉️</span>
							qsha020@aucklanduni.ac.nz
						</a>
						<a href='https://linkedin.com/in/mightbesimon'>
							<img alt='LinkedIn' src={LinkedIn} />
							linkedin.com/in/mightbesimon
						</a>
						<a href='https://github.com/mightbesimon'>
							<img alt='Github' src={Github} />
							github.com/mightbesimon
						</a>
						<a href='https://mightbesimon.com'>
							<span>🌏</span>mightbesimon.com
						</a>
					</div>
					<div className='table-of-contents'>
						<h3>TABLE OF CONTENTS</h3>
						<div>
							<a href='#resume'>Simon Resumé</a>
						</div>
						<div className='indent1'>
							<a href='#summary'>Summary</a>
						</div>
						<div className='indent1'>
							<a href='#work-experience'>Work Experience</a>
						</div>
						<div className='indent2'>
							<a href='#work-experience-healthnow'>HealthNow Ltd</a>
						</div>
						<div className='indent1'>
							<a href='#leadership-experience'>Leadership Experience</a>
						</div>
						<div className='indent2'>
							<a href='#leader-experience-faculty-representative'>Faculty Representative</a>
						</div>
						<div className='indent2'>
							<a href='#leader-experience-studentvoice-representative'>Student Representative</a>
						</div>
						<div className='indent1'>
							<a href='#personal-projects'>Personal Projects</a>
						</div>
						<div className='indent1'>
							<a href='#personal-skills'>Personal Skills</a>
						</div>
						<div className='indent1'>
							<a href='#technical-skills'>Technical Skills</a>
						</div>
						<div className='indent1'>
							<a href='#certifications'>Certifications</a>
						</div>
						<div className='indent1'>
							<a href='#education'>Education</a>
						</div>
						<div className='indent1'>
							<a href='#achievements'>Achievements</a>
						</div>
						<div className='indent1'>
							<a href='#other-accomplishments'>Other Accomplishments</a>
						</div>
						<div className='indent1'>
							<a href='#other-interests'>Other Interests</a>
						</div>
						<div className='indent1'>
							<a href='#references'>References</a>
						</div>
					</div>
				</div>
			</nav>

			<h1>Simon Shan</h1>

			<section className={showNav ? 'contact' : 'no-nav contact'}>
				<h2>CONTACT</h2>
				<div className='contact'>
					<a href='tel:0223227529'>
						<span>📞</span>022 322 7529 | Auckland, NZ
					</a>
					<a href='mailto:qsha020@aucklanduni.ac.nz'>
						<span>✉️</span>qsha020@aucklanduni.ac.nz
					</a>
					<a href='https://linkedin.com/in/mightbesimon'>
						<img alt='LinkedIn' src={LinkedIn} />
						linkedin.com/in/mightbesimon
					</a>
					<a href='https://github.com/mightbesimon'>
						<img alt='Github' src={Github} />
						github.com/mightbesimon
					</a>
					<a href='https://mightbesimon.com'>
						<span>🌏</span>mightbesimon.com
					</a>
				</div>
			</section>

			<h2 id='summary'>SUMMARY</h2>

			<p className='summary'>
				Full-time software engineer at HealthNow Ltd.
				Also final year student at University of Auckland.
				Curious, adaptive and methodical.
				Proficient in React, C#, Python, C, Java and many others.
				Experienced in working in a team, pull requests, frontend, backend and architecturing.
				Top of my class with lots of personal projects.
			</p>

			<h2 id='work-experience'>WORK EXPERIENCE</h2>

			<h2 id='leadership-experience'>LEADERSHIP EXPERIENCE</h2>

			<h2 id='personal-projects'>PERSONAL PROJECTS</h2>

			<h2 id='personal-skills'>PERSONAL SKILLS</h2>

			<h2 id='technical-skills'>TECHNICAL SKILLS</h2>

			<h2 id='certifications'>CERTIFICATIONS</h2>

			<h2 id='education'>EDUCATION</h2>

			<h2 id='achievements'>ACHIEVEMENTS</h2>

			<h2 id='other-accomplishments'>OTHER ACCOMPLISHMENTS</h2>

			<h2 id='other-interests'>OTHER INTERESTS</h2>

			<div>
				<ul>
					<li>Snowboarding</li>
					<li>Wood carving</li>
					<li>Literary adaptation movies</li>
					<li>Animal documentaries</li>
					<li>Tennis</li>
					<li>Hiking</li>
					<li>Gardening</li>
					<li>Drawing</li>
					<li>Chess</li>
					<li>Archery</li>
					<li>Drums</li>
				</ul>
				<p className='small'>Favourite classes of animal:</p>
				<p>birds and fish</p>
			</div>

			<h2 id='references'>REFERENCES</h2>

			<p>Available on request</p>

		</section >
	)
}

export default Resume;

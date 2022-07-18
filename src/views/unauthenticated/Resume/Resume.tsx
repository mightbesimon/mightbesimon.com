import './Resume.scss'
import Github from 'assets/Contacts/github.svg';
import LinkedIn from 'assets/Contacts/linkedin.svg';
import { useEffect } from 'react';

// type TableOfContentItemType = {
// 	indent: number,
// 	id: string,
// 	title: string,
// 	active: boolean,
// }

function Resume() {

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
		document.querySelectorAll('*[id]')
			.forEach((element) => { observer.observe(element) });

		return () => {
		};
	});

	return (
		<section id='resume'
			className='Resume flex column'
		>
			<nav>
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
							<a href='#leader-experience-faculty-representative'>Faculty Rep</a>
						</div>
						<div className='indent2'>
							<a href='#leader-experience-studentvoice-representative'>StudentVoice Rep</a>
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


			<section className='contact'>
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


			<section id='summary'>
				<h2>SUMMARY</h2>

				<div className='summary'>
					<p>
						Full-time software engineer at HealthNow Ltd (Start-up).
						Also final year student at University of Auckland.
						Curious, adaptive and methodical.
						Proficient in React, C#, Python, C, Java and many others.
						Experienced in working in a team, pull requests, frontend, backend and architecturing.
						Top of my class with lots of personal projects.
					</p>
				</div>
			</section>


			<section id='work-experience'>
				<h2>WORK EXPERIENCE</h2>

				<div className='work-experience'>
					<h3 id='work-experience-healthnow'>
						Software Engineer — <a href='https://healthnow.co.nz'>
							HealthNow Ltd (Start-up)
						</a>
					</h3>
					<p className='small'>2022 - present</p>
					<p>
						frontend React, backend C# and AWS, data analytics and sometimes even UI design.
					</p>
				</div>
			</section>


			<section id='leadership-experience'>
				<h2>LEADERSHIP EXPERIENCE</h2>

				<div className='leadership-experience'>
					<h3 id='leader-experience-faculty-representative'>
						Faculty Representative — Science Faculty
					</h3>
					<p className='small'>2021</p>
					<h3 id='leader-experience-studentvoice-representative'>
						Students' Association StudentVoice Representative — 13 courses
					</h3>
					<p className='small'>2020 - present</p>
					<p>
						As a consecutive StudentVoice representative for two years, I have consistently voiced student concerns to academic staff and Students' Association. This role involves <a href='#personal-skills-listening-communication'>active and critical listening and communication skills</a>. In my Student-Staff Consultative meetings, I have advised the committee of numerous ideas for improvement and asserted students' suggestions.
					</p>
				</div>
			</section>


			<section id='personal-projects'>
				<h2>PERSONAL PROJECTS</h2>
			</section>


			<section id='personal-skills'>
				<h2>PERSONAL SKILLS</h2>

				<div className='personal-skills'>
					<h3 id='personal-skills-listening-communication'>Listening Skills and Communication</h3>
					<p>As a consecutive class representative for two years, I have consistently voiced student concerns to academic staff and Students' Association.</p>
					<div className='br' />
					<h3>Receptive Learning and Self Learning</h3>
					<p>I taught myself many languages before classes by doing my own research and gained competency quickly. Similarly, I taught myself two instruments.</p>
					<div className='br' />
					<h3>Teamwork</h3>
					<p>Having partaken in various group projects, I learnt to both collaborate and delegate in a team. Our team designed truss bridges and hearing devices to assist people with impairments.</p>
					<div className='br' />
					<h3>Thinking Outside the Box</h3>
					<p>I often come up with completely unique solutions for problems to optimise the final work.</p>
				</div>
			</section>


			<section id='technical-skills'>
				<h2>TECHNICAL SKILLS</h2>
			</section>


			<section id='certifications'>
				<h2>CERTIFICATIONS</h2>

				<div className='certifications'>
					<h3>AZ-900: Microsoft Azure Fundamentals</h3>
					<p className='small'>Issued in Jun 2021 by Microsoft</p>
				</div>
			</section>


			<section id='education'>
				<h2>EDUCATION</h2>

				<div className='education'>
					<div id='education-auckland-computer-science'
						className='flex wrap'
					>
						<div>
							<h3>University of Auckland —&nbsp;</h3>
							<p>Bachelor of Science</p>
							<p className='small'>2020 - 2022</p>
						</div>
						<div>
							<h3><strong>Computer Science</strong></h3>
							<p className='small'><a href='#achievements-first-in-course'>First in Course Award</a> received in May 2021</p>
							<p className='small'>7 <a href='#achievements-outstanding'>Certificates of Outstanding Achievement</a></p>
						</div>
					</div>
					<div className='br' />
					<div id='education-auckland-business-analytics'
						className='flex wrap'
					>
						<div>
							<h3>University of Auckland —&nbsp;</h3>
							<p>Bachelor of Commerce</p>
							<p className='small'>2019 - grad in 2022</p>
						</div>
						<div>
							<h3><strong>Business Analytics,</strong></h3>
							<h3 id='education-auckland-commercial-law'>
								<strong>Commercial Law</strong>
							</h3>
							<p className='small'>papers include Accounting, Law in Commerce</p>
						</div>
					</div>
					<div className='br' />
					<div id='education-auckland-computer-science'
						className='flex wrap'
					>
						<div>
							<h3>University of Auckland —&nbsp;</h3>
							<p className='small'>Auckland, NZ</p>
							<p className='small'>2019</p>
						</div>
						<div>
							<h3><strong>Engineering <em>(Honours)</em></strong></h3>
							<p className='small'>papers include Engineering Computation</p>
							<p className='small'>and Software Development</p>
						</div>
					</div>
				</div>
			</section>


			<section id='achievements'>
				<h2>ACHIEVEMENTS</h2>

				<div className='achievements'>
					<h3 id='achievements-first-in-course'>
						First in Course Award
					</h3>
					<p className='small'>Received in 2021</p>
					<div className='br' />
					<h3>Community Engagement Recognition</h3>
					<p className='small'>Co-curricular activities recognised by the University of Auckland</p>
					<div className='br' />
					<h3 id='achievements-outstanding'>
						Certificates of Outstanding Achievement — 10 classes
					</h3>
					<p className='small'>Received in 2020 for the classes Object Oriented Software Development, Algorithms and Data Structures, Cyber Security and 7 others.</p>
					<div className='br' />
					<h3>1.5k+ downloads on Microsoft Marketplace</h3>
					<p className='small'>For my VSCode extension <em>Emoji File Icons</em>, a hobby project</p>
					<div className='br' />
					<h3>Completed Google's coding challenge</h3>
				</div>
			</section>


			<section id='other-accomplishments'>
				<h2>OTHER ACCOMPLISHMENTS</h2>

				<div className='other-accomplishments'>
					<p>Completed The Pinnacles hike, Coromandel</p>
					<p className='small'>Elevation: 759m | Distance: 20.4km | Time: 6.5hr return</p>
					<p>Attempted Tongariro Alpine Crossing, Manawatu-Wanganui</p>
					<p>Completed Mt Taranaki Lake hike, twice</p>
				</div>
			</section>


			<section id='other-interests'>
				<h2>OTHER INTERESTS</h2>

				<div className='other-interests'>
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
			</section>


			<section id='references'>
				<h2>REFERENCES</h2>

				<div className='reference'>
					<p>Available on request</p>
				</div>
			</section>

		</section >
	)
}

export default Resume;

import './ResumeNav.scss';
import Github from 'assets/Socials/github.svg';
import LinkedIn from 'assets/Socials/linkedin.svg';

function ResumeNav()
{
	return (
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
						<a href='#resume'>Résumé</a>

						<div className='indent1'>
							<a href='#summary'>Summary</a>
						</div>

						<div className='indent1'>
							<a href='#work-experience'>Work Experience</a>
							<div className='indent2'>
								<a href='#work-experience-healthnow'>HealthNow Ltd</a>
							</div>
						</div>

						<div className='indent1'>
							<a href='#leadership-experience'>Leadership Experience</a>
							<div className='indent2'>
								<a href='#leader-experience-faculty-representative'>Faculty Rep</a>
							</div>
							<div className='indent2'>
								<a href='#leader-experience-studentvoice-representative'>StudentVoice Rep</a>
							</div>
						</div>

						<div className='indent1'>
							<a href='#personal-skills'>Personal Skills</a>
							<div className='indent2'>
								<a href='#personal-skills-listening-communication'>Listening &amp; Communication</a>
							</div>
							<div className='indent2'>
								<a href='#personal-skills-learning'>Learning</a>
							</div>
							<div className='indent2'>
								<a href='#personal-skills-teamwork'>Teamwork</a>
							</div>
							<div className='indent2'>
								<a href='#personal-skills-thinking'>Thinking</a>
							</div>
						</div>

						<div className='indent1'>
							<a href='#technical-skills'>Technical Skills</a>
						</div>

						<div className='indent1'>
							<a href='#personal-projects'>Personal Projects</a>
						</div>

						<div className='indent1'>
							<a href='#certifications'>Certifications</a>
							<div className='indent2'>
								<a href='#certifications-azure'>AZ-900</a>
							</div>
						</div>

						<div className='indent1'>
							<a href='#education'>Education</a>
							<div className='indent2'>
								<a href='#education-auckland-computer-science'>Computer Science</a>
							</div>
							<div className='indent2'>
								<a href='#education-auckland-business-analytics'>Business Analytics</a>
							</div>
							<div className='indent2'>
								<a href='#education-auckland-commercial-law'>Commercial Law</a>
							</div>
							<div className='indent2'>
								<a href='#education-auckland-engineering'>Engineering</a>
							</div>
						</div>

						<div className='indent1'>
							<a href='#achievements'>Achievements</a>
							<div className='indent2'>
								<a href='#achievements-first-in-course'>First in Course Award</a>
							</div>
							<div className='indent2'>
								<a href='#achievements-community-engagement'>Community Engagement</a>
							</div>
							<div className='indent2'>
								<a href='#achievements-outstanding'>Certificates</a>
							</div>
							<div className='indent2'>
								<a href='#achievements-vscode'>1.5k+ Downloads</a>
							</div>
							<div className='indent2'>
								<a href='#achievements-google'>Google Challenge</a>
							</div>
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
			</div>
		</nav>
	);
}

export default ResumeNav;

import './ResumeNav.scss';
import Github from 'assets/Contacts/github.svg';
import LinkedIn from 'assets/Contacts/linkedin.svg';

function ResumeNav() {
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
						<a href='#resume'>Resumé</a>

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
			</div>
		</nav>
	)
}

export default ResumeNav;

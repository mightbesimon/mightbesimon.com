import { ContactForm } from 'components/Embedded/GoogleForms';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

function Contact()
{
	return (
		<SectionWrapper view='Contact' title='CONTACT'>
			<h1>Leave a message <span className='stroke'>✍️</span></h1>
			<div style={{
				colorScheme: 'light',
				margin: '1rem auto',
			}}>
				<ContactForm />
			</div>
		</SectionWrapper >
	);
}

export default Contact;

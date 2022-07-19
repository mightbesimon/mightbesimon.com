import styles from './ResumePDF.styles';
import { Document, Page, Text, View } from '@react-pdf/renderer';

function ResumePDF() {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<Text style={styles.h1}>Simon Shan</Text>
				<Text style={styles.h2}>SUMMARY</Text>
				<View style={styles.section}>
					<Text>Full-time software engineer at HealthNow Ltd (Start-up). Also final year student at University of Auckland. Curious, adaptive and methodical. Proficient in React, C#, Python, C, Java and many others. Experienced in working in a team, pull requests, frontend, backend and architecturing. Top of my class with lots of personal projects.</Text>
				</View>
				<Text style={styles.h2}>WORK EXPERIENCE</Text>
				<View style={styles.section}>
					<Text style={styles.h3}>Software Engineer — HealthNow Ltd (Start-up)</Text>
					<Text style={styles.small}>2022 - present</Text>
					<Text>teamplayer first job with not much experience when I started, got hired because I was first of my software dev class, learned on the job. love the team dynamic we have and I recieve lots of recognition from my colleages. I feel very valued. frontend React, backend C# and AWS, data analytics and sometimes even UI design.</Text>
				</View>
				<Text style={styles.h2}>LEADERSHIP EXPERIENCE</Text>
				<Text style={styles.h2}>PERSONAL SKILLS</Text>
				<Text style={styles.h2}>TECHNICAL SKILLS</Text>
				<Text style={styles.h2}>PERSONAL PROJECTS</Text>
				<Text style={styles.h2}>CERTIFICATIONS</Text>
				<Text style={styles.h2}>EDUCATION</Text>
				<Text style={styles.h2}>ACHIEVEMENTS</Text>
				<Text style={styles.h2}>OTHER ACCOMPLISHMENTS</Text>
				<Text style={styles.h2}>OTHER INTERESTS</Text>
				<Text style={styles.h2}>REFERENCE</Text>
			</Page>
		</Document>
	);
};

export default ResumePDF;

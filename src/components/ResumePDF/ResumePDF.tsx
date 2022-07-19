import styles from './ResumePDF.styles';
import { Document, Page, Text, View } from '@react-pdf/renderer';

function ResumePDF() {
	return (
		<Document>
			<Page size="A4">
				<View style={styles.section}>
					<Text>Section #1</Text>
				</View>
				<View style={styles.section}>
					<Text>Section #2</Text>
				</View>
			</Page>
		</Document>
	);
};

export default ResumePDF;

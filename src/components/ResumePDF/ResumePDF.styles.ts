import { Font, StyleSheet } from '@react-pdf/renderer';

const rem = (rem: number) => {
	return rem * 12;
};

const palette = {
	mariana0: 'hsl(215, 15%, 16%)',
	mariana1: 'hsl(212, 15%, 22%)',
	mariana2: 'hsl(212, 14%, 36%)',
	mariana3: 'hsl(219, 28%, 88%)',
	orange: 'hsl(32, 75%, 60%)',
	mint: 'hsl(114, 25%, 60%)',
};

const styles = StyleSheet.create({
	page: {
		padding: rem(1),
		fontSize: rem(1),
		lineHeight: 1.25,
	},
	section: {
		margin: rem(1),
	},
	h1: {
		fontSize: rem(3),
		fontWeight: 200,
		color: palette.mariana0,
	},
	h2: {
		marginTop: rem(1),
		paddingHorizontal: rem(1),
		fontSize: rem(1.5),
		borderBottom: `2px solid ${palette.mariana2}`,
		color: palette.mint,
	},
	h3: {
		color: palette.orange,
	},
	small: {
		opacity: 0.6,
	}
});

export default styles;

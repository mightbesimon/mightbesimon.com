import './DimensionalButton.scss';

type DimensionalButtonProps = {
	children?: JSX.Element | JSX.Element[] | string,
	onClick?: () => void,
	width?: string,
	height?: string,
	borderRadius?: {
		base?: string,
		button?: string,
	},
	colour?: {
		base?: string,
	},
	font?: {
		size?: string,
		colour?: string,
	},
};

function DimensionalButton({ children, onClick,
	width, height, borderRadius, colour, font,
}: DimensionalButtonProps): JSX.Element {
	return (
		<div className='button dimensional'
			style={{
				width, height,
				borderRadius: borderRadius?.base,
				background: colour?.base,
			}}
		>
			<div style={{ borderRadius: borderRadius?.button, }}>
				<div
					onClick={onClick}
					style={{
						borderRadius: borderRadius?.button,
						fontSize: font?.size,
						color: font?.colour,
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export default DimensionalButton;

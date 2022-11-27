import ColourEnum from 'types/ColourEnums';
import './DimensionalButton.scss';

type DimensionalButtonProps = {
	children?: JSX.Element | JSX.Element[] | string,
	onClick?: () => void,
	width?: string,
	height?: string,
	borderRadius?: string,
	font?: {
		size?: string,
		colour?: string,
	},
	colour?: ColourEnum,
};

function DimensionalButton({ children, onClick,
	width, height, borderRadius, font, colour,
}: DimensionalButtonProps): JSX.Element
{
	return (
		<div className={'button dimensional '
			+ (colour ? colour : '')}
			style={{ width, height, borderRadius }}
		>
			<div
				onClick={onClick}
				style={{
					borderRadius,
					fontSize: font?.size,
					color: font?.colour,
				}}
			>
				{children}
			</div>
		</div>
	);
}

export default DimensionalButton;

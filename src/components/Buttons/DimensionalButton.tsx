import ColourEnum from 'types/ColourEnums';
import './DimensionalButton.scss';

type DimensionalButtonProps = {
	className?: string,
	children?: JSX.Element | JSX.Element[] | string,
	onClick?: () => void,
	width?: string,
	height?: string,
	borderRadius?: string,
	colour?: ColourEnum,
	font?: {
		size?: string,
		colour?: string,
	},
};

function DimensionalButton({ className, children, onClick,
	width, height, borderRadius, colour, font,
}: DimensionalButtonProps): JSX.Element
{
	return (
		<div className={'button dimensional '
			+ className + ' ' + (colour ? colour : '')}
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

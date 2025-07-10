import './DimensionalButton.scss';
import ColourEnum from 'types/ColourEnums';

type DimensionalButtonProps = {
	className?: string,
	children?: JSX.Element | JSX.Element[] | string,
	onClick?: () => void,
	width?: string,
	height?: string,
	borderRadius?: string,
	colour?: ColourEnum,
	plain?: boolean,
};

function DimensionalButton({ className, children, onClick,
	width, height, borderRadius, plain, colour,
}: DimensionalButtonProps): JSX.Element
{
	return (
		<div className={'button dimensional '
			+ (colour ? `${colour} ` : '')
			+ (plain ? '' : 'outline ')
			+ className}
			style={{ width, height, borderRadius }}
		>
			<div
				onClick={onClick}
				style={{ borderRadius }}
			>
				{children}
			</div>
		</div>
	);
}

export default DimensionalButton;

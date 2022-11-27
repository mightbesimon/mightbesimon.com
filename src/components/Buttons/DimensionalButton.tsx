import './DimensionalButton.scss';

type DimensionalButtonProps = {
	children?: JSX.Element | JSX.Element[] | string,
	onClick?: () => void,
	width?: string,
	height?: string,
	borderRadius?: string,
	colour?: string,
};

function DimensionalButton({ children, onClick,
	width, height, borderRadius, colour,
}: DimensionalButtonProps): JSX.Element
{
	return (
		<div className={'button dimensional'}
			style={{ width, height, borderRadius, background: colour }}
			onClick={onClick}
		>
			<div>{children}</div>
		</div>
	);
}

export default DimensionalButton;

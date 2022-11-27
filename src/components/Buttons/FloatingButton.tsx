import './FloatingButton.scss';

type FloatingButtonProps = {
	className?: string,
	children?: JSX.Element | JSX.Element[] | string,
	onClick?: () => void,
	width?: string,
	height?: string,
	borderRadius?: string,
	colour?: string,
};

function FloatingButton({ className, children, onClick,
	width, height, borderRadius, colour,
}: FloatingButtonProps): JSX.Element
{
	return (
		<div className={'button floating ' + className}
			style={{ width, height, borderRadius, background: colour }}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

export default FloatingButton;

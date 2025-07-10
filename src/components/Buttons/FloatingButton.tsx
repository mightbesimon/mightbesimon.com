import './FloatingButton.scss';

type FloatingButtonProps = {
	className?: string,
	children?: JSX.Element | JSX.Element[] | string,
	onClick?: () => void,
	width?: string,
	height?: string,
	borderRadius?: string,
	colour?: string,
	plain?: boolean,
};

function FloatingButton({ className, children, onClick,
	width, height, borderRadius, colour, plain,
}: FloatingButtonProps): JSX.Element
{
	return (
		<div className={'button floating stroke '
			+ (plain ? '' : 'outline ')
			+ className}
			style={{ width, height, borderRadius, background: colour }}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

export default FloatingButton;

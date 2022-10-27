import './DimensionalButton.scss';

type DimensionalButtonProps = {
	children?: JSX.Element | JSX.Element[] | string,
};

function DimensionalButton({ children }: DimensionalButtonProps): JSX.Element {
	return (
		<div className='button dimensional'>
			<div>
				<div>{children}</div>
			</div>
		</div>
	);
}

export default DimensionalButton;

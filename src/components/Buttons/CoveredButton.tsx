import './CoveredButton.scss';
import DimensionalButton from './DimensionalButton';

type CoveredButtonProps = {
	children?: JSX.Element | JSX.Element[] | string,
};

function CoveredButton({ children }: CoveredButtonProps): JSX.Element {

	return (
		<div className='covered button'>
			<div className='base'>
				<DimensionalButton>{children}</DimensionalButton>
			</div>
			<div className='cover'>
				<div><div>⚠️</div></div>
			</div>
		</div>
	);
}

export default CoveredButton;

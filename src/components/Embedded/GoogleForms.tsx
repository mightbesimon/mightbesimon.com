import './GoogleForms.scss';
import url from 'data/links.json';
import ColourEnum from 'types/ColourEnums';
import { ReactComponent as Cross } from 'assets/NoughtsCrosses/cross.svg';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import FloatingButton from 'components/Buttons/FloatingButton';
import EllipsisSpinner from 'components/Spinner/EllipsisSpinner';
import { useState } from 'react';

export function ContactForm(): JSX.Element
{
	return (
		<iframe
			className='google form'
			src={`${url.contact}/viewform?embedded=true`}
			title='contact me'
			width='600'
			height='640'
		>
			<EllipsisSpinner />
		</iframe>
	);
}

export function ContactButton(): JSX.Element
{
	const [showForm, setShowFrom] = useState(false);

	return (
		<div className='contact button'>
			<DimensionalButton
				width='8rem' height='2rem'
				colour={ColourEnum.purple}
				onClick={() => setShowFrom(true)}
			>
				<span className='stroke'>✉️</span>
				<span>&nbsp;Contact me</span>
			</DimensionalButton>
			<div className={showForm ? 'form show' : 'form'}>
				<div>
					<ContactForm />
					<FloatingButton onClick={() => setShowFrom(false)}>
						<Cross />
					</FloatingButton>
				</div>
			</div>
		</div>
	);
}

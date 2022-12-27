import './EllipsisSpinner.scss';

type EllipsisSpinnerProps = {
	text?: string,
};

function EllipsisSpinner({ text }: EllipsisSpinnerProps)
{
	return (
		<div className="ellipsis loader">
			<div>{text}</div>
			<div>{text}</div>
			<div>{text}</div>
			<div>{text}</div>
		</div>
	);
}
export default EllipsisSpinner;

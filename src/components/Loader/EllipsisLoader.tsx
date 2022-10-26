import './EllipsisLoader.scss';

type EllipsisLoaderProps = {
	text?: string,
};

function EllipsisLoader({ text }: EllipsisLoaderProps) {
	return (
		<div className="ellipsis loader">
			<div>{text}</div>
			<div>{text}</div>
			<div>{text}</div>
			<div>{text}</div>
		</div>
	);
}
export default EllipsisLoader;

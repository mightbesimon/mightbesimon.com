import './ToolBar.scss';

type ToolBarProps = {
	children: JSX.Element[] | JSX.Element,
};

function ToolBar({ children }: ToolBarProps) {
	return (
		<div className='toolbar flex fixed'>
			{children}
		</div>
	);
}

export default ToolBar;

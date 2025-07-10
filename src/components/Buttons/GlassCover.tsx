import './GlassCover.scss';

type GlassCoverProps = {
	children?: JSX.Element | JSX.Element[] | string,
	topChildren?: JSX.Element | JSX.Element[] | string,
	locked?: boolean,
	isOpen?: boolean,
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>,
	width?: string,
	height?: string,
	borderRadius?: string,
	plain?: boolean,
};

function GlassCover({ children,
	topChildren, locked, isOpen, setIsOpen,
	width, height, borderRadius, plain,
}: GlassCoverProps): JSX.Element
{
	return (
		<div className={'covered button '
			+ (locked ? '' : ' unlocked ')
			+ (isOpen ? ' open ' : '')
			+ (plain ? '' : 'outline ')}
			style={{ width, height }}
		>
			<div className='base' style={{ borderRadius }}>
				{children}
			</div>
			<div className='cover' style={{ borderRadius }}>
				<div>
					<div>
						{topChildren}
					</div>
				</div>
			</div>
		</div>
	);
}

export default GlassCover;

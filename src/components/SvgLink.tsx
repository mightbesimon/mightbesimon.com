export type SvgLinkProps = {
	name: string,
	svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
	url: string,
	newTab?: boolean,
};

function SvgLink({ name, svg: Svg, url, newTab }: SvgLinkProps) {
	return (
		<a className='svg image link' key={name}
			href={url} target={newTab ? '_blank' : undefined}
			rel='noopener noreferrer'
		>
			<Svg />
		</a>
	)
}

export default SvgLink;

type SvgLinkProps = {
	name: string,
	svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
	url: string,
};

function SvgLink({ name, svg: Svg, url }: SvgLinkProps) {
	return (
		<a className='svg image link' key={name} href={url}>
			<Svg />
		</a>
	)
}

export default SvgLink;

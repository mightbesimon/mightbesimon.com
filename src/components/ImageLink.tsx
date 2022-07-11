export type SvgLinkProps = {
	name: string,
	svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
	url: string,
}

export function SvgLink({ name, svg: Svg, url }: SvgLinkProps) {
	return (
		<a className='svg image link' key={name} href={url}>
			<Svg />
		</a>
	)
}

export type ImageLinkProps = {
	name: string,
	image: string,
	url: string,
};

export function ImageLink({ name, image, url }: ImageLinkProps) {
	return (
		<a className='image link' key={name} href={url}>
			<img alt={name} src={image} />
		</a>
	)
}

export default ImageLink;

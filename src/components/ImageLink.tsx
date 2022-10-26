type ImageLinkProps = {
	name: string,
	image: string,
	url: string,
};

function ImageLink({ name, image, url }: ImageLinkProps) {
	return (
		<a className='image link' key={name} href={url}>
			<img alt={name} src={image} />
		</a>
	)
}

export default ImageLink;

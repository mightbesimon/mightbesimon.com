type ImageLinkProps = {
	name: string,
	image: string,
	url: string,
	newTab?: boolean,
};

function ImageLink({ name, image, url, newTab }: ImageLinkProps) {
	return (
		<a className='image link' key={name}
			href={url} target={newTab ? '_blank' : undefined}
			rel='noopener noreferrer'
		>
			<img alt={name} src={image} />
		</a>
	);
}

export default ImageLink;

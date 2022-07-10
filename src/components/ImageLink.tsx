import ImageLinkType from "types/ImageLinkType";

function ImageLink({ name, icon, url }: ImageLinkType) {
	return (
		<a className='image-link' key={name} href={url}>
			<img alt={name} src={icon} />
		</a>
	)
}

export default ImageLink;

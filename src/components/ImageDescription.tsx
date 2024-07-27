import * as React from 'react';
import { imageMap, imageMapKey } from '../utils/imageMap';

interface ImageDescription {
	id: imageMapKey;
	title: string;
	description: string;
}

const ImageDescription = ({ id, title, description }: ImageDescription) => (
	<div key={id} style={{ width: 300 }}>
		<h3 style={{ textAlign: 'left', height: 20 }}>{title}</h3>
		<p style={{ width: 300, height: 52 }}>{description}</p>
		<div className="item">
			<img
				src={imageMap[id]}
				alt="Example"
				width={300}
				height={400}
			/>
		</div>
	</div>
);

export default ImageDescription;
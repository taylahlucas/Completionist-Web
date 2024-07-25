import * as React from 'react';
import { imageMap, imageMapKey } from '../utils/imageMap';

interface ImageDescription {
	id: imageMapKey;
	description: string;
}

const ImageDescription = ({ id, description }: ImageDescription) => (
	<div key={id} className="scroll-item" style={{ width: 300 }}>
		<p style={{ width: 300 }}>{description}</p>
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
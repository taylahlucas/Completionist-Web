import { gameMapKey, imageMapKey } from "./imageMap";

export interface Feature {
	id: imageMapKey;
	title: string;
	description: string;
}

export interface PageViewProps {
	heading: string;
	title: string;
	subtitle: string;
	availableGames: gameMapKey[];
	features: Feature[];
}

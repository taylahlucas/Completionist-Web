import { gameMapKey } from "./imageMap";
import { Feature } from "./types";

export const availableGames: gameMapKey[] = [
	'fallout3',
	'fallout4',
	'skyrim',
	'witcher3'
];

export enum gameNames {
	fallout3 = 'Fallout 3',
	fallout4 = 'Fallout 4',
	skyrim = 'Skyrim',
	witcher3 = 'Witcher 3'
}

export const features: Feature[] = [
	{
		id: 'track-games',
		title: 'In-Game Progress Tracking',
		description: 'Track quests, collectables, locations and miscellaneous items from your favourite games.'
	},
	{
		id: 'change-settings',
		title: 'Customizable Tracking',
		description: 'Customize what counts towards your Completionist goal!'
	},
	{
		id: 'achievements',
		title: 'Achievements',
		description: 'View overall progress and link your steam account to view your steam achievements!'
	}
]
import trackGames from "../assets/images/track-games.png";
import changeSettings from "../assets/images/change-settings.png";
import fallout3 from "../assets/images/fallout3.jpg";
import fallout4 from "../assets/images/fallout4.jpg";
import skyrim from "../assets/images/skyrim.jpg";
import witcher3 from "../assets/images/witcher3.jpeg";

export type imageMapKey = 'track-games' | 'change-settings' | 'achievements';

export type gameMapKey = 'fallout3' | 'fallout4' | 'skyrim' | 'witcher3';

const imageUrl = '/src/assets/images';

export const imageMap = {
	'track-games': trackGames,
  'change-settings': changeSettings,
	'achievements': changeSettings
};

export const gameImageMap = {
	'fallout3': fallout3,
	'fallout4': fallout4,
	'skyrim': skyrim,
	'witcher3': witcher3,
}
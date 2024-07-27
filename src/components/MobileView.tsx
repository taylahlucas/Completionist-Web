import * as React from 'react';
import { PageViewProps } from "../utils/types";
import Button from './Button';
import appStoreFilled from '../assets/images/app-store-filled.png';
import googlePlayFilled from '../assets/images/google-play-filled.png';
import ImageDescription from './ImageDescription';
import { gameImageMap } from '../utils/imageMap';
import { gameNames } from '../utils/constants';

const imageContainerStyles = {
	alignItems: 'flex-end',
	width: '75%'
}

const MobileView = ({
	heading,
	title,
	subtitle,
	availableGames,
	features
}: PageViewProps) => {
	return (
		<main className="layout">
			<div>
				<h2 style={{ paddingLeft: 8 }}>{heading}</h2>
				<h1 className="h1-mobile" style={{ marginTop: -20 }}>{title}</h1>
				<h3 className="heading-light" style={{ marginTop: -20, paddingLeft: 16 }}>{subtitle}</h3>
			</div>

			<Button
				title='App Store'
				onPress={(): void => console.log("Link to App Store")}
				href={appStoreFilled}
			/>

			<Button
				title='Google Play Store'
				onPress={(): void => console.log("Link to Google Play Store")}
				href={googlePlayFilled}
			/>

			<h3 style={{ alignSelf: 'center' }}>Available Games</h3>
			<div className="row row-mobile-container">
				{availableGames.map((game) => (
					<div className="gameItem" style={{ padding: 4 }}>
						<img
							src={gameImageMap[game]}
							alt="Example"
							style={{ borderRadius: 10, opacity: 0.3 }}
							width={120}
							height={120}
						/>
						<p className="gameTitle">{gameNames[game]}</p>
					</div>
				))}
			</div>

			<h2>Features</h2>
			<div style={{ paddingLeft: 20 }}>
				{features.map(feature => (
					<ImageDescription
						id={feature.id}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</main>
	);
};

export default MobileView;
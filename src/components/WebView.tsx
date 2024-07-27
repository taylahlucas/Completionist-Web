import * as React from "react"
import '../assets/global.css';
import ImageDescription from '../components/ImageDescription';
import { gameImageMap } from "../utils/imageMap";
import { gameNames } from "../utils/constants";
import Button from '../components/Button';
import appStoreFilled from '../assets/images/app-store-filled.png';
import googlePlayFilled from '../assets/images/google-play-filled.png';
import { PageViewProps } from "../utils/types";

const imageContainerStyles = {
	alignItems: 'flex-end',
	width: '75%'
}

const gameContainerStyles = {
	justifyContent: 'flex-start',
	paddingRight: 32,
	marginTop: -20
}

const WebView = ({
	heading,
	title,
	subtitle,
	availableGames,
	features
}: PageViewProps) => (
	<main className="layout">
		<div className="row">
			<div>
				<h2 style={{ paddingLeft: 8 }}>{heading}</h2>
				<h1 style={{ marginTop: -20 }}>{title}</h1>
				<h3 className="heading-light" style={{ marginTop: -20, paddingLeft: 16 }}>{subtitle}</h3>
			</div>

			<div className="row">
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
			</div>
		</div>

		<div className="row">
			<div className="grid-container-flex" style={imageContainerStyles}>
				{features.map(feature => (
					<ImageDescription
						id={feature.id}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>

			<div className="col" style={gameContainerStyles}>
				<h2 style={{ alignSelf: 'center' }}>Available Games</h2>
				<div className="grid-container">
					{availableGames.map((game) => (
						<div className="gameItem">
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
			</div>
		</div>
	</main>
)

export default WebView;
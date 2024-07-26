import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../assets/global.css';
import ImageDescription from '../components/ImageDescription';
import { gameImageMap } from "../utils/imageMap";
import { availableGames, gameNames } from "../utils/constants";
import Button from '../components/Button';
import appStoreFilled from '../assets/images/app-store-filled.png';
import googlePlayFilled from '../assets/images/google-play-filled.png';
import useDeviceDetect from "../utils/hooks/useDeviceDetect";

const pageStyles = {
	marginTop: 16,
	padding: 8,
}

const imageContainerStyles = {
	alignItems: 'flex-end', 
	width: '75%'
}

const gameContainerStyles = { 
	justifyContent: 'flex-start', 
	paddingRight: 32 
}

// TODO: Add translations
const IndexPage: React.FC<PageProps> = () => {
	const { isMobile } = useDeviceDetect();
	console.log("isMObile: ", isMobile)
	return (
		<main style={pageStyles}>
			<div className="row">
				<div>
					<h2 style={{ paddingLeft: 8 }}>Welcome to</h2>
					<h1 style={{ marginTop: -20 }}>Completionist.</h1>
					<h3 style={{ marginTop: -20, paddingLeft: 16 }}>A simple way to track your gaming progress.</h3>
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
					<ImageDescription
						id='track-games'
						description='Track quests, collectables, locations and miscellaneous items from your favourite games.'
					/>

					<ImageDescription
						id='change-settings'
						description='Customize what counts towards your Completionist goal!'
					/>

					<ImageDescription
						id='achievements'
						description='View overall progress and link your steam account to view your steam achievements!'
					/>
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
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

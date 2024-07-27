import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../assets/global.css';
import { availableGames, features, gameNames } from "../utils/constants";
import useDeviceDetect from "../utils/hooks/useDeviceDetect";
import MobileView from "../components/MobileView";
import WebView from "../components/WebView";

// TODO: Add translations
const IndexPage: React.FC<PageProps> = () => {
	const { isMobile } = useDeviceDetect();
	
	const props = {
		heading: "Welcome to",
		title: "Completionist.",
		subtitle: "A simple way to track your gaming progress.",
		availableGames,
		features
	}
	return (
		<>
			{
				isMobile ? <MobileView {...props} /> : <WebView {...props} />
			}
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

import { useEffect, useState } from "react";
import JsonData from "../../../data/data.json";
import { SearchBar } from "../../common/SearchBar";
import LoaderScreen from "../../loaderScreen";
import { Projects } from "../HomePage/Projects";
import { Header } from "./Header";
import { SearchedProject } from "./SearchedProject";

function ProjectSearch(props) {
	const [landingPageData, setLandingPageData] = useState({});

	const [displayLoader, setDisplayLoader] = useState("block");
	const [displayContent, setDisplayContent] = useState("none");
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	// fake loader
	setTimeout(function () {
		setDisplayLoader("none");
		// setDisplayContent("block");
	}, 1500);

	setTimeout(function () {
		// setDisplayLoader("none");
		setDisplayContent("block");
	}, 1400);

	return (
		<div>
			<LoaderScreen display={displayLoader} />

			<div style={{ display: displayContent }}>
				<Header data={landingPageData.Header} />
				<SearchBar />
				<SearchedProject data={landingPageData.Projects} />
			</div>
		</div>
	);
}

export default ProjectSearch;

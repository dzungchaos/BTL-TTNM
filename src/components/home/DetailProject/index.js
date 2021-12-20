import { useEffect, useState } from "react";
import JsonData from "../../../data/data.json";
import { Flat } from "./Flat";
import { Position } from "./Position";
import { Utilities } from "./Utilities";

const DetailProject = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);
	return (
		<div style={{ marginTop: "50px" }}>
			<Position />
			<Flat />
			<Utilities data={landingPageData.Utilities} />
		</div>
	);
};

export default DetailProject;

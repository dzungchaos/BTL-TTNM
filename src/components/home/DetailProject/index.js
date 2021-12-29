import { useEffect, useState } from "react";
import JsonData from "../../../data/data.json";
import { DetailProjectDemo } from "./DetailProjectDemo";
import { Flat } from "./Flat";
import { Position } from "./Position";
import { Utilities } from "./Utilities";
import VirtualTuor from "./VirtualTuor";

const DetailProject = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);
	return (
		<div style={{ marginTop: "50px" }}>
			<VirtualTuor />
			<DetailProjectDemo />
			<Flat />
			<Position />
			<Utilities data={landingPageData.Utilities} />
		</div>
	);
};

export default DetailProject;

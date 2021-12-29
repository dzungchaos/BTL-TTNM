import { useEffect, useState } from "react";
import JsonData from "../../../data/data.json";
import { HustHome } from "./HustHome";
import { ImagesCompany } from "./ImagesCompany";
import { Partners } from "./Partners";
import { Vision } from "./Vision";

function Introduce(props) {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<div>
			<ImagesCompany data={landingPageData.Gallery} />
			<HustHome data={landingPageData.About} />
			<Vision data={landingPageData.About} />
			<Partners data={landingPageData.Partners} />
		</div>
	);
}

export default Introduce;

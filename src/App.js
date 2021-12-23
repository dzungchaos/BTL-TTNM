import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Footer } from "./components/common/Footer";
import { Navigation } from "./components/common/Navigation";
import Notfound from "./components/common/Notfound";
import DetailProject from "./components/home/DetailProject";
import Project from "./components/home/Project/Projects";
import HomePage from "./components/home/HomePage";
import Introduce from "./components/home/Introduce";
import ProjectSearch from "./components/home/ProjectSearch";
import Transaction from "./components/home/Transaction";
import LoaderScreen from "./components/loaderScreen";
import JsonData from "./data/data.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

function App() {
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
			{/* nav bar */}

			<LoaderScreen display={displayLoader} />

			{/* main content */}
			<div style={{ display: displayContent }}>
				<Navigation />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/introduce' element={<Introduce />} />
					<Route path='/transaction/*' element={<Transaction />} />
					<Route path='/search/' element={<ProjectSearch />} />
					<Route path='/detail-project/' element={<DetailProject />} />
					<Route path='/projects/' element={<Project />} />

					<Route path='*' element={<Notfound />} />
				</Routes>

				{/* footer */}
				<Footer data={landingPageData.Contact} />
			</div>
		</div>
	);
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

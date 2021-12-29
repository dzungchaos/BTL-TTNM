import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Footer } from "./components/common/Footer";
import { Navigation } from "./components/common/Navigation";
import Notfound from "./components/common/Notfound";
import DetailProject from "./components/home/DetailProject";
import HomePage from "./components/home/HomePage";
import Introduce from "./components/home/Introduce";
// import Project from "./components/home/Project";
import ProjectSearch from "./components/home/ProjectSearch";
import Transaction from "./components/home/Transaction";
import LoaderScreen from "./components/loaderScreen";
import JsonData from "./data/data.json";
import Chat from "./components/common/Chat";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

function App() {
	const [landingPageData, setLandingPageData] = useState({});
	const [displayLoader, setDisplayLoader] = useState("block");
	const [displayContent, setDisplayContent] = useState("none");
	const messages = [
		"Chao ban, chung toi co the ho tro gi cho ban?",
		"Minh dang muon mua nha",
		"Chung toi se ho tro ban",
		"Cam on cong ty",
	];

	const getMessage = (message) => {
		console.log(message);
	};

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
					{/* <Route path='/project/' element={<Project />} /> */}
					<Route path='/detail-project/' element={<DetailProject />} />

					<Route path='*' element={<Notfound />} />
				</Routes>
				<Chat messages={messages} getMessage={getMessage} />
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

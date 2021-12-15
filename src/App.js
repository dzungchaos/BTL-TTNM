import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Footer } from "./components/common/Footer";
import { Navigation } from "./components/common/Navigation";
import Notfound from "./components/common/Notfound";
import HomePage from "./components/home/HomePage";
import Introduce from "./components/home/Introduce";
import Transaction from "./components/home/Transaction";
import JsonData from "./data/data.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

function App() {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<div>
			{/* nav bar */}
			<Navigation />

			{/* main content */}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/introduce' element={<Introduce />} />
				<Route path='/transaction/*' element={<Transaction />} />

				<Route path='*' element={<Notfound />} />
			</Routes>

			{/* footer */}
			<Footer data={landingPageData.Contact} />
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

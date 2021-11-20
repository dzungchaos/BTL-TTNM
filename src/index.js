import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";
import { Vr } from './components/Vr';

import Overview from "./components/vrt/Overview"
import Map from "./components/vrt/Map"
import Kitchen from './components/vrt/apartment/Kitchen';
import LivingRoom from './components/vrt/apartment/LivingRoom';
import Bedroom from './components/vrt/apartment/Bedroom';
import Bathroom from './components/vrt/apartment/Bathroom';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>


			  <Routes>
        <Route path="/" element={<App/>}/>

				{/* II. Virtual tour routing:  */}
        	<Route path="vrt" element={<Vr/>}>
							<Route path="overview" element={<Overview/>} />
							<Route path="apartment" >
								<Route path="living-room" element={<LivingRoom/>} />
								<Route path="kitchen" element={<Kitchen/>} />
								<Route path="bedroom" element={<Bedroom/>} />
								<Route path="bathroom" element={<Bathroom/>} />
							</Route>
							<Route path="map" element={<Map/>} />
				</Route>
			</Routes>	
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

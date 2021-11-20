import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";
import { Vr } from './components/Vr';

import Overview from "./components/vrt/Overview"
import Apartment from "./components/vrt/Apartment"
import Map from "./components/vrt/Map"


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>


			  <Routes>
        <Route path="/" element={<App/>}/>

				{/* II. Virtual tour routing:  */}
        	<Route path="vrt" element={<Vr/>}>
							<Route path="overview" element={<Overview/>} />
							<Route path="apartment" element={<Apartment/>} />
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

import { Route, Routes } from "react-router-dom";
import Buy from "./Buy";
import Sell from "./Sell/Sell";

const Transaction = () => {
	return (
		<Routes>
			<Route path='/buy' element={<Buy />} />
			<Route path='/sale' element={<Sell />} />
			{/* <Route path='/buy' element={<HomePage />} /> */}
		</Routes>
	);
};

export default Transaction;

import { Route, Routes } from "react-router-dom";
import Buy from "./Buy";

const Transaction = () => {
	return (
		<Routes>
			<Route path='/buy' element={<Buy />} />
			{/* <Route path='/buy' element={<HomePage />} /> */}
		</Routes>
	);
};

export default Transaction;

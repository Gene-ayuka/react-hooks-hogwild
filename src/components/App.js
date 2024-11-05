import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Hoglist from "./HogLists"
import "./style.css"

import hogs from "../porkers_data";
import HogDetails from "./HogDetails";

function App() {
	return (
		<Router>
		<div className="App">
			<Nav />
			
			<Routes>
			<Route path="/" element={<Hoglist/>}/>
			<Route path="/hog/:name" element={<HogDetails />}/>
			</Routes>
		</div>
		</Router>
	);
}

export default App;

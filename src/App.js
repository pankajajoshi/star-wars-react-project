import React, { useState } from "react";

import "./style.css";
import Main from "./components/Main";
import Planets from "./components/Planets";
import Starships from "./components/Starships";

function App() {
	const [selectedComponent, setSelectedComponent] = useState("Main");

	return (
		<>
			<nav>
				<button onClick={() => setSelectedComponent("Main")}>Main Page</button>
				<button onClick={() => setSelectedComponent("Planets")}>Planets</button>
				<button onClick={() => setSelectedComponent("Starships")}>
					Starships
				</button>
			
			</nav>
			<div id="ctn-main">
				{selectedComponent === "Main" && <Main />}
				{selectedComponent === "Planets" && <Planets />}
				{selectedComponent === "Starships" && <Starships />}
				
			</div>
		</>
	);
}

export default App;
import React, { useState } from "react";
import Nav from "./Nav";
import PigList from "./PigList";
import Filter from "./Filter";

import hogs from "../porkers_data";



function App() {
  const [allHogs, setAllHogs] = useState(hogs)

	return (
		<div className="App">
			<Nav />
      <Filter hogs={hogs} allHogs={allHogs} setAllHogs={setAllHogs} />
      <PigList className='ui grid container' hogs={hogs} allHogs={allHogs}/>
		</div>
	);
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Speech from "./pages/Speech"
import Image from "./pages/Image"

function App() {
  return (
      <div className="App">
		    <Routes>
					<Route path="/" element={<div />} />
          <Route index element={<Home />} />
          <Route path="image" element={<Image/>}/>
          <Route path="speech" element={<Speech />} />
          <Route path="*" element={<Speech />} />
				</Routes>
      </div>
  );
}

export default App;

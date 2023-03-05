import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Speech from "./pages/Speech"
import Text from "./pages/Text"
import Textbox from "./pages/Textbox"

import Header from './components/Header';
import Image from "./pages/Image"

function App() {
  return (
      <div className="App">
				<Header />
		    <Routes>
					<Route path="/" element={<div />} />
          <Route index element={<Home />} />
          <Route path="image" element={<Image/>}/>
          <Route path="speech" element={<Speech />} />
          <Route path="text" element={<Text />} />
          <Route path="textbox" element={<Textbox />} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
          {/* <Route path="*" element={<Speech />} /> */}
          <Route path="*" element={<Speech />} />
				</Routes>
      </div>
  );
}

export default App;

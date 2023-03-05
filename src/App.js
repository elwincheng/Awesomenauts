import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Speech from "./pages/Speech"

function App() {
  return (
      <div className="App">
		    <Routes>
					<Route path="/" element={<div />} />
          <Route index element={<Home />} />
          <Route path="speech" element={<Speech />} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
          {/* <Route path="*" element={<Speech />} /> */}
				</Routes>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

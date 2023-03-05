import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logoText.png'

function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '80px', backgroundColor: '#fff', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
			<Link to="/">
				<img src={logo} alt="Logo" style={{ marginLeft: '20px', height: '60px', width: 'auto' }} />
			</Link>
    </div>
  );
}

export default Header;

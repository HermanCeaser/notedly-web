import React from 'react'
import logo from '../img/logo.svg'
import './header.css'

const Header = () => {
	return(
		<header>
			<img src= {logo} alt="Notedly Logo" height="40"/>
			<h1 id="logo-text">Notedly</h1>
		</header>
	)
}
export default Header;
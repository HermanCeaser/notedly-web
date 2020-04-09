import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import Shared Layout Component
import Layout from '../layout'

//import page components
import Home from './home/home'
import MyNotes from './mynotes/mynotes'
import Favorites from './favorites/favorites'
import NewNote from  './new/new'

const Pages = () => {
	return(
		<Router>
			<Layout>
				<Route exact path = "/" component = { Home } />
				<Route exact path = "/mynotes" component = { MyNotes } />
				<Route exact path = "/favorites" component = { Favorites } />
				<Route exact path = "/new" component = { NewNote } />
			</Layout>
		</Router>
	)
}

export default Pages
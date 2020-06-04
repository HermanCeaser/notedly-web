import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//import apollo client libraries
import { useQuery, gql } from '@apollo/client'


//import Shared Layout Component
import Layout from '../layout'

//import page components
import Home from './home/home'
import MyNotes from './mynotes/mynotes'
import Favorites from './favorites/favorites'
import NewNote from  './new/new'
import NotePage from './note/note'
import Signup from './signup/signup'
import Signin from './signin/signin'
import EditNote from './note/editNote';

const IS_LOGGED_IN = gql`
	{
		isLoggedIn @client
	}
	
`;

//pages component
const Pages = () => {
	return(
		<Router>
			<Layout>
				<Route exact path = "/" component = { Home } />
				<PrivateRoute exact path = "/mynotes" component = { MyNotes } />
				<PrivateRoute exact path = "/favorites" component = { Favorites } />
				<PrivateRoute exact path = "/new" component = { NewNote } />
				<PrivateRoute exact path = "/edit/:id" component = { EditNote}/>
				<Route path = "/note/:id" component = {NotePage} />
				<Route path = '/signup' component = { Signup } />
				<Route path = '/signin' component = { Signin} />
			</Layout>
		</Router>
	)
}

//Private route Component
const PrivateRoute = ({ component: Component, ...rest }) => {
	const { loading, error, data } = useQuery(IS_LOGGED_IN);
	//display loading message if data is loading
	if(loading) return <p> Loading ... </p>;
	//display error message if there is an error
	if(error) return <p>${error.message}</p>;

	/* 
	If User is LoggedIn, route them to the requested component, else
	redirect them to the signin page.
	*/
	return (
		<Route 
			{ ...rest }
			render = { 
				props => data.isLoggedIn === true? 
				( <Component {...props} /> ):
				( <Redirect to={{ pathname: '/signin', state: { from: props.location }}}/> ) 
			}
		/>
	)

}

export default Pages
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link, withRouter } from 'react-router-dom'
import logo from '../img/logo.svg'
import './header.css'

//local query
const IS_LOGGED_IN = gql`
	{ 
		isLoggedIn @client
	}
`;

const Header = props => {
	//query hook for user logged in state
	const { data, client } = useQuery(IS_LOGGED_IN)
	return(
		<header>
			<img src= {logo} alt="Notedly Logo" height="40"/>
			<h1 id="logo-text">Notedly</h1>
			{/*if isLogged display a logout link display
			signin options */}
			<div className="login-options" >
				{data.isLoggedIn? 
				(<button onClick={
					() => {
						//remove the token
						localStorage.removeItem('token');

						//Clear application's cache
						client.resetStore();

						//update the localstate for isloggedin
						client.writeQuery({
							query: gql`{
								isLoggedIn @client
							}`,
							data: { isLoggedIn: false }
						})

						//redirect user to home page
						props.history.push('/');
					}
				} >Logout </button>):
				(<div >
						<Link className="button-as-link" to={'/signin'}>SignIn</Link>
				</div>)
			}
			</div>
		</header>
	)
}
export default withRouter(Header);
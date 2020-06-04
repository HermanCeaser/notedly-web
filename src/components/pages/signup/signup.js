import React, { useEffect } from 'react'

//import useMutation and gql from graphql libraries
import { useMutation, useApolloClient, gql } from '@apollo/client'

//import form shared component
import UserForm from '../../forms/userForm'

//write the signup Mutation
const SIGN_UP = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;


const Signup = props => {
    useEffect(() => {
        document.title = 'Sign Up - Notedly'
    });

    //our useApolloClient
    const client = useApolloClient();
    //our useMutation Hook
    const [signUp, { loading, error }] = useMutation(SIGN_UP, {
        onCompleted: data => {
            //log the JSON WEBTOKEN
            localStorage.setItem('token', data.signUp)

            //update local cache to show that user isLoggedIn
            client.writeQuery({ 
                query: gql`{
                    isLoggedIn @client
                }`,
                data: { isLoggedIn: true }})
            //redirect user to the home page
            props.history.push('/')
            console.log(client)
            
        }
    });
    
    
    return(
        <React.Fragment>
            <UserForm action={ signUp } formType={ 'signup' } />
            { loading  &&  <p>Loading...</p> }

            { error  && <p>error.message</p> }
        </React.Fragment>
    )
}

export default Signup;


import React, { useEffect } from 'react'

//import useMutation and gql from graphql libraries
import { useMutation, useApolloClient, gql } from '@apollo/client'

//import form shared component
import UserForm from '../../forms/userForm'

//write the signup Mutation
const SIGN_IN = gql`
    mutation signIn($email: String!, $password: String!) {
        signIn(email: $email,  password: $password)
    }
`;

const Signin = props => {
    useEffect(() => {
        document.title = 'Sign In - Notedly'
    });

    //our useApolloClient
    const client = useApolloClient();
    //our useMutation Hook
    const [signIn, { loading, error }] = useMutation(SIGN_IN, {
        onCompleted: data => {
            //log the JSON WEBTOKEN
            localStorage.setItem('token', data.signIn);

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
    

    return (
        <React.Fragment>
            <UserForm action={ signIn } formType={ 'signin' } />
            { loading  &&  <p>Loading...</p> }

            { error  && <p> ${error.message}</p> }
        </React.Fragment>
    )
}
export default Signin
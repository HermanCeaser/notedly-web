import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './userForm.css'


const UserForm = ({action, formType}) => {
    useEffect(() => {
        document.title = 'Sign Up - Notedly'
    });

    //set the default state
    const [ values, setValues ] = useState();

    //update state when a user types in the form
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div className="form">
           <form onSubmit = { 
               //perfom a mutation when a user submits th form
               event => {
                   event.preventDefault();
                   action({ variables: { ...values }})
                   console.log(`values: ${values}`);
               }}>
               
               { formType ===  'signup'? 
                <div className="header">Sign Up</div> : 
                <div className="header">Sign In</div>}

               { formType === 'signup'?
                <React.Fragment>
                    <label htmlFor="username">Username</label>
                    <input required name="username" id="username" type="text" placeholder="Username"  onChange ={onChange} />
                </React.Fragment>:
                ''}
               
                <label htmlFor="email">Email:</label>
                <input required name="email" id="email" type="email" placeholder="user@email.com"  onChange ={onChange} />
                
                <label htmlFor="password">Password:</label>
                <input required name="password" id="password" type="password" onChange ={onChange}/>

                { formType ===  'signin'? 
                <React.Fragment>
                    <p>Don't Have an Account? <Link to={'/signup'}>Create one</Link></p>
                    <button style={{display:"inline"}} type="submit" >Sign In</button> 
                </React.Fragment>: 
                <button style={{display:"inline"}} type="submit" >Sign Up </button>}
           </form>
        </div>
    )
}

export default withRouter(UserForm);


import React, { useState } from 'react'

//import css styles
import './noteForm.css'

const NoteForm = ({ content, action }) => {
    //set Default value for state of the form
    const [value, setValue] = useState({ content:  content? content:  ""});

    //update state when form value changes
    const onChange = evt => {
        setValue({
            ...value,
            [evt.target.name]: evt.target.value
        });
    };

    return (
        <div className="wrapper">
            <form onSubmit={
                e => {
                    e.preventDefault();
                    action({ variables: { ...value } });
                    console.log(value);
                }
            } >
                <h3> Create Your Note Here</h3>
                <textarea 
                    required 
                    type="text" 
                    name="content" 
                    value = {value.content} 
                    onChange={onChange}
                />
                <button type="submit">Add</button>
            </form>
        </div> 
    )
}

export default NoteForm;
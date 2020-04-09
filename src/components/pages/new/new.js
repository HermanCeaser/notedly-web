import React, { useEffect } from 'react';

const NewNote = () => {
	useEffect(() => {
		//Update the document title
		document.title = 'Create Note - Notedly'
	})
    return (
      	<div>
        	<p>Create a New note</p>
       	</div>  
    );
};

NewNote.displayName = 'NewNote';

export default NewNote;

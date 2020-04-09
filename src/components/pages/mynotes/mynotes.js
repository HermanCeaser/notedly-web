import React, { useEffect } from 'react';

const MyNotes = () => {
	useEffect(() => {
		//Update the document title
		document.title = 'My Notes - Notedly'
	})
    return (
        <div>
        	<p>These are my notes</p>
        </div>
    );
};

MyNotes.displayName = 'MyNotes';


export default MyNotes;

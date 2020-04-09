import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'

//import date library
import { format } from 'date-fns'

//import Styles
import './note.css'

const Note = ({ note }) => {
    return (
        <article className="note" key = { note.id }>
        	<div className="metadata">
        		<div className="meta-info">
        			<img src={ note.author.avatar} 
        				 alt = { `${note.author.username}'s avatar` } 
        				 height="50px"
        			/> {' '}
        		</div>
        		<div className="meta-info">
        			<em> by</em> { note.author.username } <br/>
        			{ format(note.createdAt, 'MMM Do YYYY') } 
        		</div>
        		<div className="user-actions">
        			<em>Favorites: </em>{ note.favoriteCount } {' '}
        		</div>
        	</div>
        	<ReactMarkdown source={ note.content }/>
		</article>
    );
};

Note.propTypes = {
    note: PropTypes.object,
};

Note.defaultProps = {
	note: {},
}

export default Note;

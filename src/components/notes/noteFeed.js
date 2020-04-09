import React from 'react';
import PropTypes from 'prop-types';
import Note from './note';

//import Styles
import './noteFeed.css'

const NoteFeed = ({ notes }) => {
    return (
        <div>
        	{ notes.map(note => (
        		<div className="note-wrapper" key={note.id}>
        			<Note note={note} />
        		</div>
        		)
        	)}
        </div>
    );
};

NoteFeed.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object)
};

NoteFeed.defaultProps = {
	notes: [],
}

export default NoteFeed;

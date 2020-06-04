import React from 'react';
import PropTypes from 'prop-types';
import Note from './note';
import { Link } from 'react-router-dom';

//import Styles
import './noteFeed.css'

const NoteFeed = ({ notes }) => {
    return (
        <div>
        	{ notes.map(note => (
        		<div className="note-wrapper" key={note.id}>
        			<Note note={note} />
                    <Link to={`note/${note.id}`}>Permalink</Link>
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

import React from 'react';

import './note.styles.css';
import './note.positions.css';

import NoteImage from '../note/note.image.component';


const NoteContainer = (props) => {
    console.log('this.props :>> ', props.noteId);
    return(
         <div className="note-container" id={props.noteId} align="center">
             <NoteImage/>         
        </div>   
    )
};

export default NoteContainer;
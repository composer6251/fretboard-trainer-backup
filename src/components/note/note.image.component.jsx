import { Component } from 'react';
import React from 'react';

import WholeNote from '../../images/whole-note.png';
import './note.positions.css';

class NoteImage extends Component {
    //todo: figure out how to pass props.id to generate note position
    // Use state?
  //  console.log('props.noteId :>> ', noteId);
    render(){
    return(
        <div align="center" className="note-image">
            <img src={WholeNote} alt="note" />          
        </div>   
    )
    }
};

export default NoteImage;
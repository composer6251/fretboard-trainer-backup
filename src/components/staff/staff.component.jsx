import React from 'react';

import './staff.styles.scss';

import TrebleClefComponent from '../clef/treble-clef.component';
import { Component } from 'react';
import NoteContainer from '../note/note.container.component';
import Note from '../note/note.image.component';


class StaffComponent extends Component{

    // TODO: pass css location props to <NoteContainer> to realign it
    // TODO: do I need to move sidebar controller into sidebar. 
    // TODO: lift state of sidebar/s and staff to fretboard page level
    // TODO : *****DRAW IT OUT FIRST******
    constructor(props){
        super(props);
        this.state = {
            note : {
                noteId : "C4"
            } 
        }
    }

render(){
        return(
        <div className="staff">          

            <TrebleClefComponent />
            <NoteContainer noteId={this.state.note.noteId}/>
            
            <div className="staff">

                {/* Higher Ledger Lines */}
                <hr className='line ledger-line top-ledger-line'/>
                <hr className='line ledger-line'/>
                <hr className='line ledger-line'/>

                {/* staff lines */}
                <hr className='line staff-line top-staff-line'/>
                <hr className='line staff-line'/>
                <hr className='line staff-line'/>
                <hr className='line staff-line'/>
                <hr className='line staff-line'/>

                {/* Lower ledger Lines */}
                <hr className='line ledger-line ledger-line'/>
                <hr className='line ledger-line'/>
                <hr className='line ledger-line'/>
            </div>
        </div>
        )
    }
}
export default StaffComponent;
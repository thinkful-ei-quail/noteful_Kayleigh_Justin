import React, { Component } from 'react'
import './Notes.css';
import NoteList from '../NoteList/NoteList';

class Notes extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        //console.log("App -> NotesStore", this.props.NotesStore)
        return(
            <div className='container'>
               <p>Notes go here</p>
               <NoteList
                    NotesStore={this.props.NotesStore}
               />
            </div>
        );
    }
}

export default Notes
import React, { Component } from 'react'
import './Notes.css';
import NoteList from '../NoteList/NoteList';
import NoteItem from '../NoteItem/NoteItem';

class Notes extends Component {

    render() {
        console.log("App -> NotesStore", this.props.NotesStore)
        let notes=this.props.NotesStore;
        let folderId=this.props.match.params.folderId;
        if (folderId) notes=notes.filter(note => note.folderId === folderId)
        
        return(
            <div className='container'>
                {notes.map((note,idy) => (
                    <NoteItem
                    folderId= {note.folderId}
                    noteId= {note.id}
                    key={'Note '+ (idy+1)}
                    // NoteId ={note.folderId}
                    //  item= {item}
                    name= {note.name}
                    content={note.content}
                    modified={note.modified}
                />
                ))}
               <p>Notes go here</p>
               
            </div>
        );
    }
}

export default Notes
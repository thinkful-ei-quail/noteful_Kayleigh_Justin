import React, { Component } from 'react'
//import './';
import NoteItem from '../NoteItem/NoteItem';

class NoteList extends Component {


    render() {
        console.log("App -> NoteList", this.props.NotesStore)
        return(
            <div className='container'>
            
            {this.props.NotesStore.map((note,idy) => (
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

            </div>
        );
    }
}

export default NoteList
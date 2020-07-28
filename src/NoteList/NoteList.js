import React, { Component } from 'react'
//import './';
import NoteItem from '../NoteItem/NoteItem';

class NoteList extends Component {


    render() {
        return(
            <div className='container'>
            

            />
            {this.props.NotesStore.map((item,idy) => (
            <NoteItem
             folderId= {'Folder '+ (idy+1)}
             key={item.id}
             id ={item.id}
            //  item= {item}
             name= {item.name}
           />
         ))}

            </div>
        );
    }
}

export default NoteList
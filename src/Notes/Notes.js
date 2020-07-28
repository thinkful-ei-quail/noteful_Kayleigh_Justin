import React, { Component } from 'react'
//import './';
//import  from './';

class Notes extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        console.log("App -> NotesStore", this.props.NotesStore)
        return(
            <div className='container'>
               <p>Notes go here</p>
            </div>
        );
    }
}

export default Notes
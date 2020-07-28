import React, { Component } from 'react'
import FolderList from '../FolderList/FolderList'
//import './';
//import  from './';

class Folders extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        console.log("App -> FolderStore", this.props.FolderStore)
        return(
            <div className='container'>
                <FolderList 
                    FolderStore={this.props.FolderStore}
                />

                {console.log("App -> FolderStore", this.props.FolderStore)}
               {/* {this.props.DummyStore} */}
            </div>
        );
    }
}

export default Folders
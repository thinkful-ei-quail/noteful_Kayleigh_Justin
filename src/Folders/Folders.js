import React, { Component } from 'react'
import FolderList from '../FolderList/FolderList'
import FolderItem from '../FolderItem/FolderItem'
//import './';
//import  from './';

class Folders extends Component {

    render() {
        
        //console.log("App -> FolderStore", this.props.FolderStore)
        return(
            <div className='container'>
            {this.props.FolderStore.map((item,idx) => (
            <FolderItem
            //  id= {'Folder '+ (idx+1)}
             key={item.id}
             id ={item.id}
            //  item= {item}
             name= {item.name}
           />
            ))}
                <p>folders go here</p>
               {/* {this.props.DummyStore} */}
            </div>
        );
    }
}

export default Folders
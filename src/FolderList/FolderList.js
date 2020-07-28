import React, { Component } from 'react';
import './FolderList.css'
import FolderItem from '../FolderItem/FolderItem'


class FolderList extends Component {
  render() {
    //console.log("App -> FolderList", this.props.FolderStore)
    return (
      <div>
         {this.props.FolderStore.map((item,idx) => (
            <FolderItem
             folderId= {'Folder '+ (idx+1)}
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

export default FolderList;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import './';
//import  from './';

class FolderItem extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        // console.log(this.props.name)
        return(
            <div className='container'>
                <Link
                    to={`/folder/${this.props.id}`}
                >{this.props.name}</Link>
                {/* <input
                    type="radio"
                    id= {this.props.id}
                    className='folder_'
                    name={this.props.name}
                    // onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                /> */}
                {/* <label htmlFor={this.props.id} className="folder__label">
                    {this.props.name} 
                </label> */}
            </div>
        );
    }
}

export default FolderItem
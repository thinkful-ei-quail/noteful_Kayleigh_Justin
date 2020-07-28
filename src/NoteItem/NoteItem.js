import React, { Component } from 'react';
import {format, parseISO} from 'date-fns';
import {Link} from 'react-router-dom';
//import './';
//import  from './';

class NoteItem extends Component {


    render() {
        console.log(this.props.modified);
        // console.log("Name" + this.props.name);
        return(
            <div className='container'>
               <Link
                    to={`/note/${this.props.id}`}
                    // type="radio"
                    // // NoteId= {this.props.NoteId}
                    // className='folder_'
                    // name={this.props.name}
                    // onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                >{this.props.name}</Link>
                <label htmlFor={this.props.NoteId} className="folder__label">
                    {/* {this.props.name} */}
                    
                </label> <br />
                {"Date modified on " + format(parseISO(this.props.modified), 'do MMM yyyy')}
            </div>
        );
    }
}

export default NoteItem
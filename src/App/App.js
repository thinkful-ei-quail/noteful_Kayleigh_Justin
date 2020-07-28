import React, { Component }  from 'react';
// import { Route } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header';
import Folders from '../Folders/Folders';
import Notes from '../Notes/Notes';
import DummyStore from '../dummy-store';
// import MainPage from '../MainPage';
// import NotFoundPage from '../NotFoundPage';

class App extends Component {
  state = {
    STORE: DummyStore
  }

  render() {
    console.log("App -> DummyStore", DummyStore)
    return (
      <main className="App">
        
        <Header />
        <Folders 
          FolderStore={this.state.STORE.folders}
        />
        <Notes 
          NotesStore={this.state.STORE.notes}
        />

      </main>
    );
  }
}

export default App;

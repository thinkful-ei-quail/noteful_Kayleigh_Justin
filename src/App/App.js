import React, { Component }  from 'react';
import { Route } from 'react-router-dom'
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

    return (
      <main className="App">
        
        <Header />
        {/* Side bar */}
        <Route exact path={['/','/folder/:folderId']} render={(routeProps) => 
          <Folders 
            FolderStore={this.state.STORE.folders}
            {...routeProps}
          />}
        />
        {/* Middle of page */}
        <Route exact path={['/','/folder/:folderId']} render={(routeProps) => 
          <Notes 
            NotesStore={this.state.STORE.notes}
            {...routeProps}
          />}
        />

        <Route exact path={'/note/:noteId'} render={(routeProps) => 
          <Folders 
            FolderStore={this.state.STORE.folders}
            {...routeProps}
          />}
        />
        <Route exact path={'/note/:noteId'} render={(routeProps) => 
          <Folders 
            NotesStore={this.state.STORE.notes}
            {...routeProps}
          />}
        />


      </main>
    );
  }
}

export default App;
 
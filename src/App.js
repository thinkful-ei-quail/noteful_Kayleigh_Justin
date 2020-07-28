import React, { Component }  from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './header';
import Folders from './folders';
import Notes from './notes';
import FolderPage from './FolderPage';
import NotePage from './NotePage';
import DummyStore from './dummy-store';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

class App extends Component {
  state = {
    STORE: DummyStore
  }

  render() {
    return (
      <main className="App">
        
        <Header />
        <Folders />
        <Notes />

      </main>
    );
  }
}

export default App;

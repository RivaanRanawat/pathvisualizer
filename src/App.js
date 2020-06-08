import React, {Component} from 'react';
import './App.css';
import PathFindingVisualiser from './PathFindingVisualiser.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <PathFindingVisualiser/>
      </div>
  );
  }
}

export default App;

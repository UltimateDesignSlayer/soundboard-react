//Entry point file. This is the top of the tree.

import React from 'react';
import ReactDOM from 'react-dom';

import {Layout} from './layouts/layout';

const appContainer = document.getElementById('appContainer');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      appState: 'default'
    }
  }

  changeAppState(appState) {
    this.setState({
      appState: appState
    });
  }

  render() {
    return (
      <Layout changeAppState={this.changeAppState.bind(this)} appState={this.state.appState} headerText='Soundboard Meow' footerText='Woof!' />
    );
  }
}

ReactDOM.render(<App />, appContainer);

import React from 'react';

import {Body} from './components/body';
import {Footer} from './components/footer';
import {Header} from './components/header';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.headerText);

    // This is how we set initial state in this ES6 class model.
    // Replaces using getInitialState().g
    this.state = {
      headerText: this.props.headerText,
      themeClass: 'theme-' + this.props.appState
    };
  }

  changeThemeState(themeClassName) {
    this.setState({
      themeClass: themeClassName
    });
  }

  changeHeaderText(text) {
    this.setState({
      headerText: text
    });
  }

  render() {
    return (
      <div className={this.state.themeClass}>
        <Header changeHeaderText={this.changeHeaderText.bind(this)} changeTheme={this.changeThemeState.bind(this)} headerText={this.state.headerText} />
        <Body />
        <Footer />
      </div>
    );
  }
}

export {Layout};

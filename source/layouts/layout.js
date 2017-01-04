import React from 'react';

import {Body} from './components/body';
import {Footer} from './components/footer';
import {Header} from './components/header';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: 'mainMenu',
      soundboardId: '',
      soundboardHeading: 'Soundboard!',
      themeClass: 'theme-default'
    };

    this.changeAppState = this.changeAppState.bind(this);
  }

  changeAppState(statusObj) {
    console.log(statusObj.soundboardId);
    this.setState({
      appState: statusObj.appState,
      soundboardId: statusObj.soundboardId,
      soundboardHeading: statusObj.soundboardHeading,
      themeClass: 'theme-' + statusObj.soundboardId
    });
  }

  render() {
    return (
      <div className={this.state.themeClass}>
        <Header headerText={this.state.soundboardHeading} />
        <Body appStatusChanger={this.changeAppState} soundboardId={this.state.soundboardId} appState={this.state.appState} />
        <Footer />
      </div>
    );
  }
}

export {Layout};

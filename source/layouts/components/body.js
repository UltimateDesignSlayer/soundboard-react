import React from 'react';

import {MainMenu} from './menu/mainMenu';
import {Soundboard} from './soundboard/soundboard';

class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      displayStatus: 'mainMenu',
      soundboardId: ''
    };

    this.changeAppState = this.changeAppState.bind(this);
  }

  changeAppState(statusObj) {
    console.log(statusObj.soundboardId);
    this.setState({
      displayStatus: statusObj.appState,
      soundboardId: statusObj.soundboardId
    });
    // () => console.log(this.state.displayStatus);
  }

  render() {
    var appStateRender;

    if (this.state.displayStatus === 'mainMenu') {
      appStateRender = <MainMenu appStatusChanger={this.changeAppState} />;
    } else {
      appStateRender = <Soundboard appStatusChanger={this.changeAppState} soundboardId={this.state.soundboardId} />;
    }

    return (
      <div className='main'>
        {appStateRender}
      </div>
    );
  }
}

export {Body};

import React from 'react';

import {MainMenu} from './menu/mainMenu';
import {Soundboard} from './soundboard/soundboard';

class Body extends React.Component {
  constructor() {
    super();
  }

  render() {
    var appStateRender;

    if (this.props.appState === 'mainMenu') {
      appStateRender = <MainMenu appStatusChanger={this.props.appStatusChanger} />;
    } else {
      appStateRender = <Soundboard appStatusChanger={this.props.appStatusChanger} soundboardId={this.props.soundboardId} />;
    }

    return (
      <div className='main'>
        {appStateRender}
      </div>
    );
  }
}

export {Body};

import React from 'react';

import {MainMenu} from './menu/mainMenu';
import {Soundboard} from './soundboard/soundboard';

class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      displayStatus: 'mainMenu'
    };

    this.changeAppState = this.changeAppState.bind(this);
  }

  changeAppState(status) {
    console.log(status);
    this.setState({
      displayStatus: status
    });
    // () => console.log(this.state.displayStatus);

  }

  render() {
    var appStateRender;
    console.log('display menu',this.displayMenu);
    if (this.state.displayStatus === 'mainMenu') {
      appStateRender = <MainMenu appStatusChanger={this.changeAppState} />;
    } else {
      appStateRender = <Soundboard />;
    }

    return (
      <div className='main'>
        {appStateRender}
      </div>
    );
  }
}

export {Body};

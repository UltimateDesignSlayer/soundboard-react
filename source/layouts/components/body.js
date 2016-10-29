import React from 'react';

import {MainMenu} from './menu/mainMenu';
import {Soundboard} from './soundboard/soundboard';

class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: true
    };
  }

  changeMenuState(status) {
    console.log('in body',status);
    this.setState({
      displayMenu: status
    });
  }

  render() {
    var menuRender;
    console.log('display menu',this.displayMenu);
    if (this.state.displayMenu) {
      menuRender = <MainMenu menuStatusChanger={this.changeMenuState} />;
    }

    return (
      <div className='main'>
        {menuRender}
        <Soundboard />
      </div>
    );
  }
}

export {Body};

import React from 'react';

import {MainMenu} from './menu/mainMenu';

class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      display: true
    };
  }

  changeMenuState(status) {
    this.setState({
      display: status
    });
  }

  render() {
    return (
      <div className='main'>
        <MainMenu display={this.state.display} menuStatusChanger={this.changeMenuState.bind(this)} />
      </div>
    );
  }
}

export {Body};

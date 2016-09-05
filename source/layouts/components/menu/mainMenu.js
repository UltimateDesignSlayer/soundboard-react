import React from 'react';

import {MenuItem} from './menuItem'

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    //Get this data form some other source. Keep here for now...
    this.menuData = [
      {name: 'test'},
      {name: 'abc'},
      {name: '123'}
    ];

    
  }

  menuSelector(appState) {

  }

  render() {

    return (
      <ul className='main-menu'>
        {
          this.menuData.map(function(val, i) {
            return <MenuItem menuItemName={val.name} key={i} />
          })
        }
      </ul>
    );
  }
}

export {MainMenu};

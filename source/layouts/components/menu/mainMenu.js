import React from 'react';

import {MenuItem} from './menuItem'

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    //Get this data form some other source. Keep here for now...
    this.menuData = [
      {name: 'Alphabet', id: 'alphabet'},
      {name: 'Numbers', id: 'numbers'},
      {name: 'Another thing', id: 'another-thing'}
    ];
  }

  render() {
    var that = this;

    return (
      <ul className='main-menu {(appState)}'>
        {
          this.menuData.map(function(val, i) {
            return <MenuItem menuSelectHandler={that.props.appStatusChanger} menuItemId={val.id} menuItemName={val.name} key={i} />
          })
        }
      </ul>
    );
  }
}

export {MainMenu};

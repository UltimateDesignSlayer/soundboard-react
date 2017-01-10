import React from 'react';

import {MenuItem} from './menuItem'

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    //Get this data form some other source. Keep here for now...
    this.menuData = [
      {name: 'Alphabet', id: 'alphabet'},
      {name: 'Numbers', id: 'numbers'},
      {name: 'Jungle Animals', id: 'jungle-animals'},
      {name: 'Farm Animals', id: 'farm-animals'}
    ];
  }

  render() {
    var that = this;

    return (
      <div className='main-menu row {(appState)}'>
        {
          this.menuData.map(function(val, i) {
            return <MenuItem menuSelectHandler={that.props.appStatusChanger} menuItemId={val.id} menuItemName={val.name} key={i} />
          })
        }
      </div>
    );
  }
}

export {MainMenu};

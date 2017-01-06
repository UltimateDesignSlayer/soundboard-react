import React from 'react';

class MenuItem extends React.Component {
  constructor() {
    super();
  }

  menuItemSelect(e) {
    var itemStateObj = {
      appState: 'soundboard',
      soundboardId: this.props.menuItemId,
      soundboardHeading: this.props.menuItemName
    }

    this.props.menuSelectHandler(itemStateObj); 
  }

  render() {
    return(
      <li onClick={ this.menuItemSelect.bind(this) }>
        { this.props.menuItemName }
      </li>
    );
  }
}

export {MenuItem};

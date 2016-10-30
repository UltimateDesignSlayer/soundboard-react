import React from 'react';

class MenuItem extends React.Component {
  constructor() {
    super();
  }

  menuItemSelect(e) {
    this.props.menuSelectHandler('soundboard');
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

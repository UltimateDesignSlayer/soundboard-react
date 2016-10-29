import React from 'react';

class MenuItem extends React.Component {
  constructor() {
    super();
  }

  menuItemSelect(e) {
    console.log(e);
    this.props.menuSelectHandler('OI!!!');
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

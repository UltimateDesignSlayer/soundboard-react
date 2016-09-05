import React from 'react';

class MenuItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <li>{this.props.menuItemName}</li>
    );
  }
}

export {MenuItem};

import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <h1>{this.props.headerText}</h1>
      </header>
    );
  }
}

export {Header};

import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  changeTheme(e) {
    console.log(e);
    this.props.changeTheme('theme-super-why');
    this.props.changeHeaderText('super why');
  }

  render() {
    return (
      <header>
        <h1>{this.props.headerText}</h1>
        <button onClick={this.changeTheme.bind(this)}>Super why</button>
      </header>
    );
  }
}

export {Header};

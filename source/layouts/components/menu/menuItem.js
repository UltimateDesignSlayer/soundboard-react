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
      <div className="col-xs-3 menu-item" onClick={ this.menuItemSelect.bind(this) }>
        { this.props.menuItemName }
      </div>
    );
  }
}

export {MenuItem};

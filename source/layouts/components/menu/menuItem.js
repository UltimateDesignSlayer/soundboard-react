import React from 'react';
import {
  Router,
  Route,
  Link
} from 'react-router';

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
      <div className="col-xs-6 menu-item" onClick={ this.menuItemSelect.bind(this) }>
        <Link to="/topics">{ this.props.menuItemName }</Link>
      </div>
    );
  }
}

export {MenuItem};

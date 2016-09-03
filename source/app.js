// Entry point file.
// Import React resources
import React from './vendor/react.min';
import ReactDOM from './vendor/react-dom.min';

// Import components
import {MainMenu} from './main-menu';

// App container in DOM
const appContainer = document.getElementById('soundboardApp');

ReactDOM.render(
  <MainMenu />,
  appContainer
);

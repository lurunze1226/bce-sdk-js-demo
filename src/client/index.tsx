import React from 'react';
import ReactDOM from 'react-dom';

// import 'amis/lib/themes/default.css';
import 'amis/lib/themes/antd.css';
import 'amis/lib/themes/cxd.css';
// import 'amis/lib/themes/dark.css';
import 'amis/lib/helper.css';
import 'font-awesome/css/font-awesome.css';

import App from './App';
import './style/style.css';


ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}

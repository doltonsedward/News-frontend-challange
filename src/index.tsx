import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';

import './index.css';
import App from './App';
import store from './application/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-right" />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

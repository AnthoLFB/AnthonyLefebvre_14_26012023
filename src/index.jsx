import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';

//CSS
import './styles/global/reset.css';
import './styles/global/font.css';

//Redux
import { Provider } from 'react-redux';
import store from './utils/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);

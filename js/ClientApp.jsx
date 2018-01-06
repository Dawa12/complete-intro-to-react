// @flow

import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderApp = () => {
  render(
    <BrowserRouter key={Math.random()}>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
=======
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
>>>>>>> v3-14
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}

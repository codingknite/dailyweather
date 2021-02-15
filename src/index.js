import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode >,
  document.getElementById('root')
);


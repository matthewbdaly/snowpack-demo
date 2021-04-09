import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

interface ImportMeta {
  readonly hot?: {
    accept: () => void;
  };
}

if ((import.meta as ImportMeta).hot) {
  (import.meta as ImportMeta).hot?.accept();
}

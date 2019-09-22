import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.querySelector('#app');
setTimeout(() => ReactDOM.render(<App />, root), 1000);

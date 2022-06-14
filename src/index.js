import React from 'react'
import  ReactDOM  from 'react-dom/client';
import './index.css'
import App from './app'




// New React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
const element = <App />;
root.render(element);
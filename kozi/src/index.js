import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<BrowserRouter>

<App></App>
</BrowserRouter>




);


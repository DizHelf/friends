import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import {Users} from './app/components';

ReactDOM.render(
    <React.StrictMode>
        <Users />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

import './styles/styles.css';
//import './test';

import React from 'react';
import ReactDOM from 'react-dom';

const component = (innerHTML) =>  <h1>{ innerHTML }</h1>;

ReactDOM.render(
    component('Hello world'),
    document.getElementById('root'),
);
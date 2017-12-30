import React from 'react';
import ReactDOM from 'react-dom';

//import styles
import './app.css';

import {BrowserRouter, Route} from 'react-router-dom'
 
//import components
import App from './components/app';
import Car from './components/car';

ReactDOM.render(
<BrowserRouter>
<div>
    <Route exact path="/" component={App} > </Route>
    <Route path="/car/:id" component={Car} > </Route>
</div>
</BrowserRouter>

, document.getElementById('root'));


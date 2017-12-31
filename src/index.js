import React from 'react';
import ReactDOM from 'react-dom';

//import provider
import {Provider} from 'react-redux';

//import store and middleware
import {createStore , applyMiddleware} from 'redux';

//import styles
import './app.css';

//import reducers
import reducers from './reducers'

//import route
import {BrowserRouter, Route} from 'react-router-dom'
 
//import components
import App from './components/app';
import Car from './components/car';


const createStoreWithMiddleware = applyMiddleware()(createStore)


ReactDOM.render( <Provider store={createStoreWithMiddleware(reducers)} > 
<BrowserRouter>
<div>
    <Route exact path="/" component={App} > </Route>
    <Route path="/car/:id" component={Car} > </Route>
</div>
</BrowserRouter>
</Provider>

, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import Slider from './src/slider.jsx';
import Slider2 from './src/slider.jsx';
 
import { Provider } from 'react-redux'

import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './src/reducers/index.js'



// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const route = (
	<Provider store={store}>
     <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Slider}></IndexRoute>
        <Route path="/single" component={Slider2}></Route>
      </Route>
     </Router>
    </Provider>)

ReactDOM.render(route,document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import '../css/index.css';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
)

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={ store }>
            <App />    
        </Provider>, 
        document.getElementById('app')
    );
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Router from './Router';

import reducers from './reducers';

class App extends Component
{
    componentWillMount()
    {
        firebase.initializeApp({
            apiKey: 'AIzaSyAcoDLCCxNMJkr5NAIc8X691TriIy0SpKQ',
            authDomain: 'react-native-skeleton.firebaseapp.com',
            databaseURL: 'https://react-native-skeleton.firebaseio.com',
            storageBucket: 'react-native-skeleton.appspot.com',
            messagingSenderId: '400758255171'
        });
    }

    render(){
        return(
            <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
                <Router />
            </Provider>
        );
    }
}

export default App;


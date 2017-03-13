import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBh95mLLrG7CCD5Ts810guFuP-HMXVwuss",
    authDomain: "portpolio-16967.firebaseapp.com",
    databaseURL: "https://portpolio-16967.firebaseio.com",
    storageBucket: "portpolio-16967.appspot.com",
    messagingSenderId: "54643699999"
};

firebase.initializeApp(config);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
});

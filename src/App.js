import React, { Component } from 'react';
import './App.css';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HomeHeader/>
                <HomeFooter/>
            </div>
        );
    }
}

export default App;
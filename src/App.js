import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import * as firebase from 'firebase';

class App extends Component {

    render() {
        const db = firebase.database();
        const socialUrl = db.ref().child('socialUrl/facebook');
        debugger;

        console.log(socialUrl);
        socialUrl.on('value', snap=>{
            console.log("2")
        });
        
        return (
            <div className="App">
                <Header/>
                {this.props.children}
                {                    
                    console.log("1")
                }
                <Footer />
            </div>
        );
    }
}

export default App;
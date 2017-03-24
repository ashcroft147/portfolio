import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import * as firebase from 'firebase';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urlList : "123"
        }
        this._printDbInfo = this._printDbInfo.bind(this);
    }

    _printDbInfo() {
        const homeDb = firebase.database().ref().child('home');
        const socialUrl = homeDb.child('socialUrl');
 
        socialUrl.on('value', snap => {
            console.log(snap.val());
            this.setState({
                urlList : snap.val()
            }) 
        });
    }

    componentWillMount() {
        this._printDbInfo();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                {this.props.children}
                <Footer urlList={this.state.urlList}/>
            </div>
        );
    }
}

export default App;
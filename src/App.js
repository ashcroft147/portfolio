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
        const db = firebase.database().ref().child('home');
        const socialUrl = db.child('socialUrl');

        socialUrl.on('value', snap => {
            this.setState({
                urlList : snap.val()
            }) 
        });
    }

    componentDidMount() {
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
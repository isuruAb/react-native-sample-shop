/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react';
import { name as appName } from './app.json';
import Splash from './components/Splash';

import Navigator from './Navigator';
import { Provider } from 'react-redux';
import store from './store';

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = { currenttScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currenttScreen: 'Navigator' })
        }, 3000)
    }
    render() {
        const { currenttScreen } = this.state;
        let mainscreen = currenttScreen === 'Splash' ? <Splash /> : <Provider store={store}><Navigator /></Provider>
        return mainscreen
    }
}

AppRegistry.registerComponent(appName, () => DashboardMain);

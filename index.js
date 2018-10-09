/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react';
import { name as appName } from './app.json';
import Splash from './components/Splash';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navigator from './Navigator';

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
        let mainscreen = currenttScreen === 'Splash' ? <Splash /> : <Navigator />
        return mainscreen
    }
}

AppRegistry.registerComponent(appName, () => DashboardMain);

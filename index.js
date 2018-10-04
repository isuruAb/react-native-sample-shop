/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import React,{Component} from 'react';
import {name as appName} from './app.json';
import Splash from './components/Splash';
import Login from './components/Login';


class Main extends Component{
    constructor(props){
        super(props);
        this.state={currenttScreen:'Splash'};
        setTimeout(()=>{
            this.setState({currenttScreen:'Login'})
        },3000)
    }
    render(){
        const {currenttScreen}=this.state;
        let mainscreen=currenttScreen==='Splash'?<Splash />:<Login/>
        return mainscreen
    }
}
AppRegistry.registerComponent(appName, () => Main);

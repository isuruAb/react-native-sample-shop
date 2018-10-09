import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, Platform } from 'react-native';

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        const {navigate}=this.props.navigation;
        setTimeout(() => {
            navigate("SplashScreen",{});
        }, 3000)
    }
    render() {
        const { currenttScreen } = this.state;
        let mainscreen = currenttScreen === 'Splash' ? <Splash /> : <Dashboard />
        return mainscreen
    }
}

class Splash extends Component {
    static navigationoptions={
        title:'Splash Screen'
    }
    render() {
       
        return (
            <View style={styles.container}>
                <StatusBar  barStyle={(Platform.OS === 'ios') ? "dark-content" : 'light-content'} />

                <Image
                    style={styles.title}
                    source={require('../images/logo.png')}
                />
                {/* <Text style={styles.title}>Sample App</Text> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7c744',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        //        fontWeight: '300',
        //        fontSize: 45,
        //        color: '#fff',
        width: 256,
        height: 128
    }
})
export default Splash;
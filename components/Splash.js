import React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Splash extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Sample App</Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'green',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:35,
        color:'white'
    }
})
export default Splash;
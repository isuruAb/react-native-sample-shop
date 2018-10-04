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
        backgroundColor:'#f7c744',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontWeight:'300',
        fontSize:45,
        color:'#fff'
    }
})
export default Splash;
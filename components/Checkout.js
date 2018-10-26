import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    AsyncStorage

} from 'react-native';
import Swiper from 'react-native-swiper';

class Checkout extends Component {
    static navigationOptions = {
        titleColor: '#fff',
        tintColor: "#fff",
        headerStyle: {
            backgroundColor: '#f7c744',
            height: 60,
            elevation: null
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 25
        },
        headerBackTitleStyle: {
            color: '#fff',
            fontSize: 20

        },
        headerTintColor: "#fff"
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    _onPressBuyMe = (item) => {

    }
    render() {
        const state = this.state;
        //var singleItem = state.singleItem;
        return (
            <View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    titleContainer: {
        height: 60,
        backgroundColor: '#f7c744',
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#fff'
    },
    wrapper: {
        height: 300,
        color: '#000'
    },
    image: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    adTitle: {
        color: '#000',
        fontWeight: '400',
        fontSize: 26,
        margin: 5
    },
    adContent: {
        fontSize: 16,
        fontWeight: '100',
        marginTop: 5
    },
    btnColor: {
        color: '#9E9E9E',
        fontSize: 55
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    contentContainer: {
        paddingVertical: 20
    },
    buyMeButton: {
        backgroundColor: '#F44336',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        alignItems: 'center',
        padding: 20

    },
    buttonText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '500'
    }
})
export default Checkout;
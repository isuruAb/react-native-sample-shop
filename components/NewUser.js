import React, { Component } from 'react';
import {
    Alert,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback,
    TextInput,
    StatusBar,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    AsyncStorage
} from 'react-native';

const util = require('util')

class NewUser extends Component {
    static navigationOptions = { header: null };


    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onPressSignInButton = () => {
        var { navigate } = this.props.navigation;
        navigate("LoginScreen", {});
    }

    onPressSignUpButton = () => {
        var { navigate } = this.props.navigation;
        navigate("SignupScreen", {});
    }

    render() {

        //console.log("this.props.navigation=" + util.inspect(this.props.navigation, false, null));
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={(Platform.OS === 'ios') ? "dark-content" : 'light-content'} />
                <KeyboardAvoidingView
                    behavior={(Platform.OS === 'ios') ? "padding" : null}
                    style={styles.container}
                >
                    <TouchableWithoutFeedback
                        style={styles.container}
                        onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer} >

                            <View style={styles.logoContainer}>
                                <Image
                                    style={styles.logo}
                                    source={require('../images/logo.png')}
                                />
                                <Text style={styles.title}>We promise you to give an awesome shopping experience</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressSignInButton}>
                                    <Text style={styles.buttonText}>
                                        SIGNIN
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.signUpButtonContainer} onPress={this.onPressSignUpButton}>
                                    <Text style={styles.buttonText}>
                                        SIGN UP
                                        </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#77d2ff',
        flexDirection: 'column',
    },
    logoContainer: {

        alignItems: 'center',
        justifyContent: (Platform.OS === 'ios') ? "center" : null,
        flex: 1
    },
    logo: {
        width: 256,
        height: 128
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        color: '#0f0f0f',
        margin: 5,
        opacity: 0.8
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        //height: 200,
        padding: 20,
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 10,
        borderRadius: 5

    },
    signUpButtonContainer: {
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: '#ea8546',
        borderRadius: 5

    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default NewUser;
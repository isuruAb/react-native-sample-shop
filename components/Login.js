import React, { Component } from 'react';
import {
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

class Login extends Component {
    
    onPressSignInButton() {

        fetch('http://localhost:3000/api/user_token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auth: {
                    email: 'admin@elephant.com',
                    password: 'passElephant',
                }
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                AsyncStorage.setItem('token', responseJson.jwt);
                AsyncStorage.getItem('token').then((value) => {console.log(value);});
            })
            .catch((error) => {
                console.error(error);
            });;

    }
    render() {
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
                                <Text style={styles.title}>Login to your account</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder='username/email'
                                    placeholderTextColor='#0f0f0f'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()} />
                                <TextInput style={styles.input}
                                    placeholder='password'
                                    placeholderTextColor='#0f0f0f'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={'txtPassword'}
                                />
                                <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressSignInButton}>
                                    <Text style={styles.buttonText}>
                                        Sign In
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
        backgroundColor: '#fff',
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
        opacity: 0.5
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        //height: 200,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 10,
        margin: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default Login;
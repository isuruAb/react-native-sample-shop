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

class Signup extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#FFA726',
            height: 60,
            elevation: null,
            borderBottomWidth: 0,

        }
    };


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confPass: '',
            signupError: false,
            signupErrorMessage: ''
        };
    }
    onPressSignUpButton = () => {
        var { navigate } = this.props.navigation;
        if (this.state.password != this.state.confPass) {
            this.setState({
                signupError: true,
                signupErrorMessage: 'Password does not match'
            })
        }
        else {
            console.log('signup');
            // fetch('http://localhost:3000/api/users/signup', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(
            //         {
            //             "username": this.state.username,
            //             "password": this.state.password
            //         }
            //     ),
            // }).then((response) => response.json())
            //     .then((responseJson) => {
            //         if (responseJson.status == 500) {
            //             this.setState({ signupError: true, signupErrorMessage: 'Please check your username and password again' })
            //         }
            //         else {
            //             navigate("LoginScreen", { value });
            //         }
            //     })
            //     .catch((error) => {
            //         this.setState({ signupError: true });
            //         console.error(error);
            //     });
        }

    }

    changeUsername(username) {
        this.setState({ username: username });
    }
    changePass(password) {
        this.setState({ password });
    }
    changeConfPass(confPass) {
        this.setState({ confPass });
    }
    render() {
        if (this.state.signupError) {
            Alert.alert(
                'Login Failed',
                this.state.signupErrorMessage,
                [
                    { text: 'OK', onPress: () => this.setState({ signupError: false }) },
                ],
                { cancelable: false }
            )
        }
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
                                <Text style={styles.title}>Be ready for an awesome shoping experience</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder='username/email'
                                    autoCapitalize="none"
                                    placeholderTextColor='#0f0f0f'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    value={this.state.username}
                                    onChangeText={username => this.changeUsername(username)}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()} />
                                <TextInput style={styles.input}
                                    placeholder='password'
                                    placeholderTextColor='#0f0f0f'
                                    returnKeyType='go'
                                    secureTextEntry
                                    value={this.state.password}
                                    onChangeText={password => this.changePass(password)}
                                    autoCorrect={false}
                                    ref={'txtPassword'}
                                />
                                <TextInput style={styles.input}
                                    placeholder='Confirm Password'
                                    placeholderTextColor='#0f0f0f'
                                    returnKeyType='next'
                                    secureTextEntry
                                    value={this.state.Cpassword}
                                    onChangeText={confPassword => this.changeConfPass(confPassword)}
                                    autoCorrect={false}
                                    ref={'confirmtxtPassword'}
                                />
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
        backgroundColor: '#FFA726',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        //justifyContent: (Platform.OS === 'ios') ? "center" : null,
        flex: 1
    },
    logo: {
        width: 256,
        height: 128
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        margin: 5,
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        //height: 200,
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 5
    },
    signUpButtonContainer: {
        backgroundColor: '#E65100',
        paddingVertical: 10,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Signup;
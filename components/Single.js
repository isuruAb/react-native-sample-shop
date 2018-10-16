import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView
} from 'react-native';

class Single extends Component {
    static navigationOptions = {
        titleColor: '#fff',
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
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            singleItem: this.props.navigation.state.params.item,
        };
    }
    listOfNames = () => {

    }
    render() {
        const state = this.state;
        var singleItem = state.singleItem;
        console.log("aaa", singleItem.id);
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: singleItem.image }}
                    />
                    <View style={styles.content}>
                        <Text style={styles.adTitle}>{singleItem.adTitle}</Text>
                        <Text style={styles.adContent}>{singleItem.adContent}</Text>
                    </View>

                </ScrollView>
                <TouchableOpacity onPress={this._onPressBuyMe} style={styles.buyMeButton}>

                    <Text style={styles.buttonText}>Buy Me</Text>
                </TouchableOpacity>
            </SafeAreaView>
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
    image: {
        height: 300,
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
        fontWeight: '400',
        fontSize: 26,
        margin: 5
    },
    adContent: {
        fontSize: 16,
        fontWeight: '100',
        marginTop: 5
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
export default Single;
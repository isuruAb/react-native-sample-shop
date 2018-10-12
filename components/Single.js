import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native';

class Dashboard extends Component {
    static navigationOptions = {
        title: 'Jewellery',
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
                    <Image
                        style={styles.image}
                        source={{ uri: singleItem.image }}
                    />
                    <View style={styles.content}>
                        <Text >{singleItem.adTitle}</Text>
                        <Text style={styles.adContent}>{singleItem.adContent}</Text>
                    </View>

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
        height: 80,
        margin: 10,
        flex: 1
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    adTitle: {
        fontWeight: '600',
        fontSize: 16,
        margin: 5
    },
    adContent: {

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    }
})
export default Dashboard;
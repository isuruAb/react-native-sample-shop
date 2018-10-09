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
        headerLeft: null
    };
    constructor(props) {
        super(props);
        this.state = {
            itemList: [
                { id: 1, adTitle: 'Name of Item 1', adContent: ' description goes here. this is a demo content to fill the space.', image: 'https://images-na.ssl-images-amazon.com/images/I/71yPA9JDiiL._UL1500_.jpg' },
                { id: 2, adTitle: 'Name of Item 2', adContent: ' description goes here. this is a demo content to fill the space.', image: 'https://ajs.com.sg/admin/views/subcategory/020218021431.png' },
                { id: 3, adTitle: 'Name of Item 3', adContent: ' description goes here. this is a demo content to fill the space.', image: 'https://cdn.shopify.com/s/files/1/2201/6013/collections/Jewellery-PS6801-1000-ES6101-2000.jpg' },
                { id: 4, adTitle: 'Name of Item 4', adContent: ' description goes here. this is a demo content to fill the space.', image: 'https://www.lalithaajewellery.com/upload/product/lalithaa_599ef3f7028a2.png' },
                { id: 5, adTitle: 'Name of Item 5', adContent: ' description goes here. this is a demo content to fill the space.', image: 'https://www.lalithaajewellery.com/upload/product/lalithaa_599ef3f7028a2.png' },
                { id: 6, adTitle: 'Name of Item 6', adContent: ' description goes here. this is a demo content to fill the space.', image: 'https://ajs.com.sg/admin/views/subcategory/020218021431.png' },
                { id: 7, adTitle: 'Name of Item 7', adContent: ' description goes here. this is a demo content to fill the space.', image: 'https://ajs.com.sg/admin/views/subcategory/020218021431.png' }]
        };
    }
    listOfNames = () => {

    }
    render() {
        const state = this.state;
        return (
            <SafeAreaView style={styles.container}>

                <View>
                    {/* <View style={styles.titleContainer}>
                        <Text style={styles.title}>Jewellery</Text>
                    </View> */}
                    <FlatList
                        data={state.itemList}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.image }}
                                />
                                <View style={styles.content}>
                                    <Text style={styles.adTitle}>{item.adTitle}</Text>
                                    <Text style={styles.adContent}>{item.adContent}</Text>
                                </View>

                            </View>
                        )}
                    />
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
    listItem: {
        height: 100,
        margin: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000'
    },
    image: {
        height: 80,
        width: 100,
        flex: 1,
        margin: 10
    },
    content: {
        flex: 2,
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
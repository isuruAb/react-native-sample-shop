import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,

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
                { id: 1, adTitle: 'Name of Item 1', adContent: ' description goes here. this is a demo content to fill the space.',price:'1200', image: 'https://images-na.ssl-images-amazon.com/images/I/71yPA9JDiiL._UL1500_.jpg' },
                { id: 2, adTitle: 'Name of Item 2', adContent: ' description goes here. this is a demo content to fill the space.',price:'900', image: 'https://ajs.com.sg/admin/views/subcategory/020218021431.png' },
                { id: 3, adTitle: 'Name of Item 3', adContent: ' description goes here. this is a demo content to fill the space.',price:'3200', image: 'https://cdn.shopify.com/s/files/1/2201/6013/collections/Jewellery-PS6801-1000-ES6101-2000.jpg' },
                { id: 4, adTitle: 'Name of Item 4', adContent: ' description goes here. this is a demo content to fill the space.',price:'4200', image: 'https://www.lalithaajewellery.com/upload/product/lalithaa_599ef3f7028a2.png' },
                { id: 5, adTitle: 'Name of Item 5', adContent: ' description goes here. this is a demo content to fill the space.',price:'2200', image: 'https://www.lalithaajewellery.com/upload/product/lalithaa_599ef3f7028a2.png' },
                { id: 6, adTitle: 'Name of Item 6', adContent: ' description goes here. this is a demo content to fill the space.',price:'2440', image: 'https://ajs.com.sg/admin/views/subcategory/020218021431.png' },
                { id: 7, adTitle: 'Name of Item 7', adContent: ' description goes here. this is a demo content to fill the space.',price:'2200', image: 'https://ajs.com.sg/admin/views/subcategory/020218021431.png' }]
        };
    }
    listOfNames = () => {

    }
    onPressMoreDetails = (item) => {
        var { navigate } = this.props.navigation;
        console.log('dash',item);
        navigate("SingleScreen",{item});
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
                            <View>

                            <TouchableOpacity style={styles.listItem} onPress={()=>this.onPressMoreDetails(item)}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.image }}
                                    />
                                    <View style={styles.content}>
                                        <Text style={styles.adTitle}>{item.adTitle}</Text>
                                        <Text style={styles.adContent}>{item.adContent}</Text>
                                        <Text style={styles.price}>VND {item.price} </Text>
                                    </View>
                            </TouchableOpacity>
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
        height: 80,
        backgroundColor: '#f7c744',
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#fff'
    },
    listItem: {
        height: 120,
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
    price:{
        fontWeight: '400',
        fontSize: 15,
        color:'red'
    },
    adTitle: {
        fontWeight: '600',
        fontSize: 16,
        margin: 5
    },

    adContent: {

    },
    buttonContainer: {

    },
    buttonText: {

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    }
})
export default Dashboard;
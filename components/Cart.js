import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

class Cart extends Component {
    static navigationOptions = {
        title: 'In Your Cart',
        titleColor: '#fff',
        headerStyle: {
            backgroundColor: '#f7c744',
            height: 60,
            elevation: null
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 25,
            textAlign: "center",
            flex: 1,
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            inCart: []
        };
    }
    listOfNames = () => {

    }
    onPressMoreDetails = (item) => {
        var { navigate } = this.props.navigation;
        navigate("SingleScreen", { item });
    }
    componentWillMount() {
        AsyncStorage.getItem('addedItems').then((value) => {
            var v = JSON.parse(value);
            var obj = {};
            for (var i = 0, len = v.length; i < len; i++) {
                var k=v[i]['qty'];
                if(!obj[v[i]['id']]){
                    obj[v[i]['id']] = v[i];
                    obj[v[i]['id']]['qty']=0;
                }
                obj[v[i]['id']]['qty']+=1;
            }
            console.log("obj", obj);
            var val = [];
            for (var key in obj) {
                val.push(obj[key]);
            }
            this.setState({ inCart: JSON.parse(value) })
            console.log("aaaa", this.state.inCart)
        })

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
                        data={state.inCart}
                        renderItem={({ item }) => (
                            <View>

                                <View style={styles.listItem} onPress={() => this.onPressMoreDetails(item)}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.image[0] }}
                                    />
                                    <View style={styles.content}>
                                        <Text style={styles.adTitle}>{item.adTitle}</Text>
                                        <Text style={styles.price}>VND {item.price} </Text>
                                        <TouchableOpacity onPress={() => this._onPressBuyMe(singleItem)}>
                                            <Text style={styles.buttonText}>X</Text>
                                        </TouchableOpacity>
                                    </View>
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
    price: {
        fontWeight: '400',
        fontSize: 15,
        color: 'red'
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
export default Cart;
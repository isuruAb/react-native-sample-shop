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
import Icon from 'react-native-vector-icons/FontAwesome';

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
    _onPressDeleteItem(item) {
        var state = this.state.inCart;
        var index = state.map(function (e) { return e.id; }).indexOf(item.id);
        state.splice(index, 1);
        this.setState({ inCart: state });
        AsyncStorage.setItem('addedItems', JSON.stringify(this.state.inCart));
    }

    componentWillMount() {
        AsyncStorage.getItem('addedItems').then((value) => {
            var v = JSON.parse(value);
            var obj = {};
            for (var i = 0, len = v.length; i < len; i++) {
                var k = v[i]['qty'];
                if (!obj[v[i]['id']]) {
                    obj[v[i]['id']] = v[i];
                    obj[v[i]['id']]['qty'] = 0;
                }
                obj[v[i]['id']]['qty'] += 1;
            }
            console.log("obj", obj);
            var val = [];
            for (var key in obj) {
                val.push(obj[key]);
            }
            this.setState({ inCart: val })
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
                        extraData={this.state}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <View style={styles.listItem} onPress={() => this.onPressMoreDetails(item)}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.image[0] }}
                                    />
                                    <View style={styles.content}>
                                        <View style={styles.details}>
                                            <Text style={styles.adTitle}>{item.adTitle}</Text>
                                            <Text style={styles.qty}>Qty: {item.qty} </Text>
                                            <Text style={styles.price}>VND {item.price * item.qty} </Text>
                                        </View>
                                        <View style={styles.closeBtnWrapper}>
                                            <TouchableOpacity style={styles.closeBtn} onPress={() => this._onPressDeleteItem(item)}>
                                                <Icon name="close" size={25} color="#fff" />

                                            </TouchableOpacity>
                                        </View>


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
    title: {
        fontSize: 25,
        color: '#fff'
    },
    listItem: {
        height: 120,
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        height: 80,
        width: 100,
        flex: 1,
        margin: 10
    },
    itemContainer: {
        height: 130,
        borderBottomWidth: 1,
        borderBottomColor: '#c6c6c6'
    },
    content: {
        flex: 2,
        flexDirection: 'row',
        margin: 10
    },
    details: {
        flex: 2,
    },
    closeBtnWrapper: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    closeBtn: {
        height: 50,
        width: 50,
        borderRadius: 90,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F44336',
        justifyContent: 'center',

    },
    qty: {
        fontWeight: '400',
        fontSize: 15,
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    }
})
export default Cart;
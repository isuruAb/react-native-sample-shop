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
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProduct } from '../actions/productActions';
import { connect } from 'react-redux';

class Dashboard extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Jewellery',
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
        },
        headerLeft: null,
        headerRight: (
            <View>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.state.params.onPressCart()}>
                    <Icon name="shopping-cart" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            itemList: this.props.products.products
        };
    }
    listOfNames = () => {

    }

    onPressMoreDetails = (item) => {
        var { navigate } = this.props.navigation;
        console.log('dash', item);
        navigate("SingleScreen", { item });
    }
    onPressCart = () => {
        var { navigate } = this.props.navigation;
        navigate("CartScreen", {});
    }
    componentDidMount() {
        this.props.navigation.setParams({ onPressCart: this.onPressCart })
        this.props.getProduct();

    }

    render() {
        const itemList = this.props.products.products;
        return (
            <SafeAreaView style={styles.container}>

                <View>
                    <FlatList
                        data={itemList}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>

                                <TouchableOpacity style={styles.listItem} onPress={() => this.onPressMoreDetails(item)}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.image[0] }}
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
        margin: 5,
        marginTop: 10,
        flexDirection: 'row',

    },
    itemContainer: {
        height: 130,
        borderBottomWidth: 1,
        borderBottomColor: '#c6c6c6'
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
    },
    cartBtn: {
        margin: 5
    }
})
const mapStateToProps = (state) => {
    return {
        products: state.productReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: () => {
            dispatch(getProduct());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

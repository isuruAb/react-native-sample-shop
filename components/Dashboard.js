import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProduct, toggleSearchMode, getSearchResult } from '../actions/productActions';
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
            <View style={styles.rightWrapper}>

                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.state.params.onPressSearch()}>
                    <Icon name="search" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.state.params.onPressCart()}>
                    <Icon name="shopping-cart" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            itemList: this.props.products.products,
        };
    }
    listOfNames = () => {

    }

    onPressMoreDetails(item){
        var { navigate } = this.props.navigation;
        console.log('item',item);
        navigate("SingleScreen", { item });
    }


    onPressCart = () => {
        var { navigate } = this.props.navigation;
        navigate("CartScreen", {});
    }

    async componentDidMount() {
        this.props.navigation.setParams({
            onPressCart: this.onPressCart,
            onPressSearch: this.props.toggleSearchMode,
        })
        let token = await AsyncStorage.getItem('token');
        this.props.getProduct(token);
    }

    async searchProducts(text) {
        let token = await AsyncStorage.getItem('token');
        this.props.getSearchResult(text, token);
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
                                        source={{ uri: item.images.split(",")[0] }}
                                    />
                                    <View style={styles.content}>
                                        <Text style={styles.adTitle}>{item.name}</Text>
                                        <Text style={styles.adContent}>{item.description.substring(0, 70)}...</Text>
                                        <Text style={styles.price}>VND {item.price} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.products.searchMode}
                >
                    <View style={styles.masterWrapper} >
                        <View style={styles.searchWrapper} >
                            <TouchableOpacity
                                style={styles.searchBackBtn}
                                onPress={() => {
                                    this.props.toggleSearchMode();
                                }}>
                                <Icon name="arrow-circle-left" size={30} color="#fff" />
                            </TouchableOpacity>
                            <View style={styles.searchFieldWrapper}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={styles.searchField}
                                    onChangeText={(text) => this.searchProducts(text)}
                                    placeholder='Search'
                                    placeholderTextColor='#0f0f0f'
                                    ref={'searchField'}
                                />
                            </View>
                        </View>
                        <View style={styles.searchResultWrapper}>
                            <FlatList
                                display={this.props.products.searchResult.length <= 0 ? 'none' : 'flex'}
                                data={this.props.products.searchResult}
                                renderItem={({ item }) => (
                                    <View style={styles.itemContainer} >
                                        <TouchableOpacity style={styles.listItem} onPress={() => this.onPressMoreDetails(item)} >
                                            <Image
                                                style={styles.image}
                                                source={{ uri: item.images.split(",")[1] }}
                                            />
                                            <View style={styles.content}>
                                                <Text style={styles.adTitle}>{item.name}</Text>
                                                <Text style={styles.adContent}>{item.description.substring(0, 70)}...</Text>
                                                <Text style={styles.price}>VND {item.price} </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}

                            />
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    rightWrapper: {
        flexDirection: 'row'
    },
    masterWrapper: {
        flexDirection: 'column',
        flex: 1
    },
    searchResultWrapper: {
        flex: 9
    },
    searchWrapper: {
        flexDirection: "row",
        margin: 22,
        flex: 1,
        height: 70
    },
    searchBackBtn: {
        margin: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 100,
        backgroundColor: '#f7c744',

    },
    searchFieldWrapper: {
        alignContent: "center",
        justifyContent: "center",
        flex: 5,
        height: 70
    },
    searchField: {
        backgroundColor: '#f8f8f8',
        height: 40,
        padding: 10,
        fontSize: 18,
    },
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
        getProduct: (token) => {
            dispatch(getProduct(token));
        },
        toggleSearchMode: () => {
            dispatch(toggleSearchMode());
        },
        getSearchResult: (text, token) => {
            dispatch(getSearchResult(text, token));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

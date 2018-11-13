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
    ScrollView,
    AsyncStorage
} from 'react-native';

import { SearchBar } from 'react-native-elements'
import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconEnctyo from 'react-native-vector-icons/Entypo';

import { getAllProduct, toggleSearchMode, getSearchResult } from '../actions/productActions';
import { getBanner } from '../actions/bannerActions';
import { connect } from 'react-redux';

class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
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
        headerLeft: (
            <View>
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.state.params.onPressSearch()}>
                    <Icon name="bars" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        ),
        headerRight: (
            <View style={styles.rightWrapper}>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.state.params.onPressSearch()}>
                    <Icon name="search" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.state.params.onPressCart()}>
                    <Icon name="shopping-cart" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.state.params.onPressCart()}>
                    <IconEnctyo name="dots-three-vertical" size={20} color="#fff" />
                </TouchableOpacity>

            </View>
        ),
    });

    constructor(props) {
        super(props);
        // this.state = {
        //     itemList: this.props.products.products,
        // };
    }
    listOfNames = () => {

    }

    onPressMoreDetails(item) {
        var { navigate } = this.props.navigation;
        console.log('item', item);
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
        this.props.getBanner(token);
        this.props.getAllProduct(token);
    }

    async searchProducts(text) {
        let token = await AsyncStorage.getItem('token');
        this.props.getSearchResult(text, token);

    }
    goToCategory(category) {
        console.log("goto category", category);
        var { navigate } = this.props.navigation;
        // console.log('item', item);
        navigate("DashboardScreen", { category });
    }
    render() {

        const itemList = this.props.products.allProducts;
        const bannerList = this.props.banners.banners;
        //const name = (bannerList[0] || {}).url;

        console.log('bannerLiist', bannerList);
        return (
            <SafeAreaView style={styles.container}>

                <View>
                    <ScrollView contentContainerStyle={styles.contentContainer}>

                        <Swiper
                            style={styles.wrapper}
                            showsButtons={false}
                            showsPagination={true}
                            dotColor="#000"
                            activeDotColor="#f7c744"
                            autoplay={true}
                        >
                            <Image
                                style={styles.sliderImages}
                                source={{ uri: (bannerList[0] || {}).url }}
                            />
                            <Image
                                style={styles.sliderImages}
                                source={{ uri: (bannerList[1] || {}).url }}
                            />

                        </Swiper>
                        <View style={styles.catList}>
                            <TouchableOpacity onPress={() => this.goToCategory('Diamonds')}>
                                <View style={styles.category}>
                                    <Icon name="diamond" size={40} color="#fff" />
                                    <Text style={styles.catName}>Diamonds</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToCategory('White Gold')}>
                                <View style={styles.category}>
                                    <Icon name="balance-scale" size={40} color="#fff" />
                                    <Text style={styles.catName}>White Gold</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToCategory('Gold')}>
                                <View style={styles.category}>
                                    <Icon name="chain" size={40} color="#fff" />
                                    <Text style={styles.catName}>Gold</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToCategory('rose gold')}>
                                <View style={styles.category}>
                                    <Icon name="chain" size={40} color="#fff" />
                                    <Text style={styles.catName}>Rose Gold</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToCategory('necklace')}>
                                <View style={styles.category}>
                                    <Icon name="diamond" size={40} color="#fff" />
                                    <Text style={styles.catName}>Necklace</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToCategory('rings')}>
                                <View style={styles.category}>
                                    <Icon name="balance-scale" size={40} color="#fff" />
                                    <Text style={styles.catName}>Rings</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToCategory('bracelet')}>
                                <View style={styles.category}>
                                    <Icon name="balance-scale" size={40} color="#fff" />
                                    <Text style={styles.catName}>Bracelet</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToCategory('checkQuality')}>
                                <View style={styles.category}>
                                    <Icon name="balance-scale" size={40} color="#fff" />
                                    <Text style={styles.catName}>Check Quality</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToCategory('Silver')}>
                                <View style={styles.category}>
                                    <Icon name="balance-scale" size={40} color="#fff" />
                                    <Text style={styles.catName}>Silver</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={itemList}
                            extraData={this.props}
                            renderItem={({ item }) => (
                                <View style={styles.itemContainer}>
                                    <TouchableOpacity style={styles.listItem} onPress={() => this.onPressMoreDetails(item)}>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: item.image[0].url }}
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
                    </ScrollView>
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
                                <SearchBar
                                    lightTheme
                                    clearIcon={{ color: '#f8f8f8' }}
                                    searchIcon={{ size: 24 }}
                                    maxLength={40}
                                    onChangeText={(text) => this.searchProducts(text)}
                                    style={styles.searchField}
                                    placeholder='Search...' />

                                {/*               <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={styles.searchField}
                                    onChangeText={(text) => this.searchProducts(text)}
                                    placeholder='Search'
                                    placeholderTextColor='#0f0f0f'
                                    ref={'searchField'}
                                /> */}
                            </View>
                        </View>
                        <View style={styles.searchResultWrapper}>
                            <FlatList
                                display={this.props.products.searchResult.length <= 0 ? 'none' : 'flex'}
                                data={this.props.products.searchResult}
                                extraData={this.props}
                                renderItem={({ item }) => (
                                    <View style={styles.itemContainer} >
                                        <TouchableOpacity style={styles.listItem} onPress={() => this.onPressMoreDetails(item)} >
                                            <Image
                                                style={styles.image}
                                                source={{ uri: item.image[0].url }}
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
const Dimensions = require('Dimensions');

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        height: 150,
        color: '#000'
    },

    rightWrapper: {
        flexDirection: 'row'
    },
    contentContainer: {
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
    sliderImages: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    catList: {
        flexDirection: "row",
        margin: 5,
        marginTop: 0,
        flexWrap: 'wrap',
    },
    category: {
        width: (window.width / 3) - 10,
        height: (window.width / 3) - 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc119',
        // padding: 30,
        marginLeft: 5,
        marginTop: 5,
        alignContent: 'center'
    },
    catName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
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
        products: state.productReducer,
        banners: state.bannerReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProduct: (token) => {
            dispatch(getAllProduct(token));
        },
        getBanner: (token) => {
            dispatch(getBanner(token));
        },
        toggleSearchMode: () => {
            dispatch(toggleSearchMode());
        },
        getSearchResult: (text, token) => {
            dispatch(getSearchResult(text, token));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

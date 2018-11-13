import {
    AsyncStorage
} from 'react-native';
export function getProduct(token, category) {
    console.log("tokentokentoken, category", token, category);
    return dispatch => fetch('http://localhost:3000/api/v1/products/all?tags=' + category, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            console.log("get all category products", responseJson);
            dispatch({
                type: "GET_ALL_CATEGORY_PRODCUCTS",
                payload: responseJson
            });
        })
    // return dispatch => {
    //     dispatch(
    //         {
    //             type: "GET_ALL_PRODCUCTS",
    //             payload: [{
    //                 id: 1, name: 'Name of Item 1', adTag: ['indian', 'gold'], description: ' description goes here. this is a demo content to fill the space.', price: '1200', images: "https://images-na.ssl-images-amazon.com/images/I/71yPA9JDiiL._UL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71yPA9JDiiL._UL1500_.jpg"},
    //             { id: 2, name: 'Name of Item 2', adTag: ['indian', 'gold'], description: ' description goes here. this is a demo content to fill the space.', price: '900', images: "https://ajs.com.sg/admin/views/subcategory/020218021431.png,https://ajs.com.sg/admin/views/subcategory/020218021431.png" },
    //             { id: 3, name: 'Name of Item 3', adTag: ['western', 'White gold', 'pendant'], description: ' description goes here. this is a demo content to fill the space.', price: '3200', images: "https://cdn.shopify.com/s/files/1/2201/6013/collections/Jewellery-PS6801-1000-ES6101-2000.jpg,https://cdn.shopify.com/s/files/1/2201/6013/collections/Jewellery-PS6801-1000-ES6101-2000.jpg" },
    //             { id: 4, name: 'Name of Item 4', adTag: ['western', 'White gold', 'rose gold'], description: ' description goes here. this is a demo content to fill the space.', price: '4200', images: "https://www.eqvvs.co.uk/images/ted-baker-jewellery-evaniar-enchanted-heart-pendant-p4319-87428_image.jpg,https://www.eqvvs.co.uk/images/ted-baker-jewellery-evaniar-enchanted-heart-pendant-p4319-87428_image.jpg" },
    //             { id: 5, name: 'Name of Item 5', adTag: ['western', 'White gold', 'pearl'], description: ' description goes here. this is a demo content to fill the space.', price: '2200', images: "https://images-na.ssl-images-amazon.com/images/I/615JCt72MXL._UY695_.jpg,https://images-na.ssl-images-amazon.com/images/I/615JCt72MXL._UY695_.jpg" },
    //             { id: 6, name: 'Name of Item 6', adTag: ['western', 'White gold', 'necklace'], description: ' description goes here. this is a demo content to fill the space.', price: '2440', images: "https://www.soganijewellers4u.com/image/cache/catalog/newlogo/VHS361-5-1000x1000.jpg,https://www.soganijewellers4u.com/image/cache/catalog/newlogo/VHS361-5-1000x1000.jpg" },
    //             { id: 7, name: 'Name of Item 7', adTag: ['indian', 'gold'], description: ' description goes here. this is a demo content to fill the space.', price: '2200', images: "https://ajs.com.sg/admin/views/subcategory/020218021431.png,https://ajs.com.sg/admin/views/subcategory/020218021431.png" }
    //             ]
    //         })
    // }

}

export function getAllProduct(token) {
    console.log("tokentokentoken, category", token);
    return dispatch => fetch('http://localhost:3000/api/v1/products/all', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            console.log("get all products", responseJson);
            dispatch({
                type: "GET_ALL_PRODCUCTS",
                payload: responseJson
            });
        })
}



export function getSelectedProduct() {
    return dispatch => {
        return AsyncStorage.getItem('addedItems').then((value) => {
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
            dispatch(
                {
                    type: "GET_ALL_SELECTED_PRODCUCTS",
                    payload: val
                })
        });
    }
}

export function deleteSelectedProduct(newProductsList) {
    AsyncStorage.setItem('addedItems', JSON.stringify(newProductsList))
    return {
        type: "GET_ALL_SELECTED_PRODCUCTS",
        payload: newProductsList
    };
}

export function checkoutProducts(finalProducts) {
    return {
        type: "CHECKOUT_ORDER",
        payload: finalProducts
    };
}
export function toggleSearchMode() {
    return {
        type: "TO_SEARCH_MODE",

    };
}

export function getSearchResult(text, token) {
    if (text === '') {
        return {
            type: "SEARCH_PRODUCTS",
            payload: []
        };
    }
    return dispatch => fetch('http://localhost:3000/api/v1/products/search?name=' + text, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            console.log("responseJson", responseJson);
            setTimeout(() => {
                dispatch({
                    type: "SEARCH_PRODUCTS",
                    payload: responseJson
                });
            }, 2000)
        })

}


import {
    AsyncStorage
} from 'react-native';
export function getProduct() {
    return dispatch => {
        dispatch(
            {
                type: "GET_ALL_PRODCUCTS",
                payload: [{
                    id: 1, adTitle: 'Name of Item 1', adTag: ['indian', 'gold'], adContent: ' description goes here. this is a demo content to fill the space.', price: '1200', image: ['https://images-na.ssl-images-amazon.com/images/I/71yPA9JDiiL._UL1500_.jpg',
                        'https://images-na.ssl-images-amazon.com/images/I/71yPA9JDiiL._UL1500_.jpg']
                },
                { id: 2, adTitle: 'Name of Item 2', adTag: ['indian', 'gold'], adContent: ' description goes here. this is a demo content to fill the space.', price: '900', image: ['https://ajs.com.sg/admin/views/subcategory/020218021431.png', 'https://ajs.com.sg/admin/views/subcategory/020218021431.png'] },
                { id: 3, adTitle: 'Name of Item 3', adTag: ['western', 'White gold', 'pendant'], adContent: ' description goes here. this is a demo content to fill the space.', price: '3200', image: ['https://cdn.shopify.com/s/files/1/2201/6013/collections/Jewellery-PS6801-1000-ES6101-2000.jpg', 'https://cdn.shopify.com/s/files/1/2201/6013/collections/Jewellery-PS6801-1000-ES6101-2000.jpg'] },
                { id: 4, adTitle: 'Name of Item 4', adTag: ['western', 'White gold', 'rose gold'], adContent: ' description goes here. this is a demo content to fill the space.', price: '4200', image: ['https://www.eqvvs.co.uk/images/ted-baker-jewellery-evaniar-enchanted-heart-pendant-p4319-87428_image.jpg', 'https://www.eqvvs.co.uk/images/ted-baker-jewellery-evaniar-enchanted-heart-pendant-p4319-87428_image.jpg'] },
                { id: 5, adTitle: 'Name of Item 5', adTag: ['western', 'White gold', 'pearl'], adContent: ' description goes here. this is a demo content to fill the space.', price: '2200', image: ['https://images-na.ssl-images-amazon.com/images/I/615JCt72MXL._UY695_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/615JCt72MXL._UY695_.jpg'] },
                { id: 6, adTitle: 'Name of Item 6', adTag: ['western', 'White gold', 'necklace'], adContent: ' description goes here. this is a demo content to fill the space.', price: '2440', image: ['https://www.soganijewellers4u.com/image/cache/catalog/newlogo/VHS361-5-1000x1000.jpg', 'https://www.soganijewellers4u.com/image/cache/catalog/newlogo/VHS361-5-1000x1000.jpg'] },
                { id: 7, adTitle: 'Name of Item 7', adTag: ['indian', 'gold'], adContent: ' description goes here. this is a demo content to fill the space.', price: '2200', image: ['https://ajs.com.sg/admin/views/subcategory/020218021431.png', 'https://ajs.com.sg/admin/views/subcategory/020218021431.png'] }
                ]
            })
    }

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
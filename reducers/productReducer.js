
const productInitialState = {
    products: {},
    selectedProducts:{}
}

const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case "GET_ALL_PRODCUCTS":
            state = {
                ...state,
                products: action.payload,
            }
            break;
        case "GET_ALL_SELECTED_PRODCUCTS":
            state = {
                ...state,
                selectedProducts: action.payload,
            }
            break;
    }
    return state;
}
export default productReducer;
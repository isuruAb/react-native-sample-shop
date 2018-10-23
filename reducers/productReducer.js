
const productInitialState = {
    products: {},
}

const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case "GET_ALL_PRODCUCTS":
            state = {
                ...state,
                products: action.payload,
            }
            break;

    }
    return state;
}
export default productReducer;
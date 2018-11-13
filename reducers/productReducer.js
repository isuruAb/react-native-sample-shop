const productInitialState = {
    products: {},
    selectedProducts: {},
    searchMode: false,
    searchResult: [],
    allProducts: {}
}

const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case "GET_ALL_CATEGORY_PRODCUCTS":
            state = {
                ...state,
                products: action.payload,
            }
            break;
        case "GET_ALL_PRODCUCTS":
            state = {
                ...state,
                allProducts: action.payload,
            }
            break;

        case "GET_ALL_SELECTED_PRODCUCTS":
            state = {
                ...state,
                selectedProducts: action.payload,
            }
            break;
        case "TO_SEARCH_MODE":
            state = {
                ...state,
                searchMode: !state.searchMode,
            }
            break;
        case "SEARCH_PRODUCTS":
            state = {
                ...state,
                searchResult: action.payload
            }
            break;

    }
    return state;
}
export default productReducer;
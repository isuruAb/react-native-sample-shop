
const bannerInitialState = {
    banners: {},
}

const bannerReducer = (state = bannerInitialState, action) => {
    switch (action.type) {
        case "GET_ALL_BANNERS":
            state = {
                ...state,
                banners: action.payload,
            }
            break;
    }
    return state;
}
export default bannerReducer;
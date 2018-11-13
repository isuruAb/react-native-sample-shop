export function getBanner(token) {
    console.log("tokentokentoken", token);
    return dispatch => fetch('http://localhost:3000/api/v1/banners', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
           // 'Authorization': 'Bearer ' + token
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            console.log("get all banners", responseJson);
            dispatch({
                type: "GET_ALL_BANNERS",
                payload: responseJson
            });
        })

}
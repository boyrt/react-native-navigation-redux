const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case 'Login':
            console.log('auth=====','Login')
            console.log('**************************')
            console.log('state=====',state)
            return { ...state, isLoggedIn: true };
        case 'Logout':
            console.log('auth=====','Logout')
            console.log('**************************')
            console.log('state=====',state)
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

export default auth;
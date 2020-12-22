const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ERR_LOGIN':
            console.log('error loging in');            
            return{
                ...state,
                authError: 'Login Failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('login successful');
            return{
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,
                authError: null
            }
        case 'ERR_SIGNUP':
            console.log('err signup');
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;

    }
}

export default authReducer
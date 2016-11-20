import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from '../actions/types';

const INITIAL_STATE =
{
    email: '',
    password: '',
    error: '',
    loading: false,
    user: null
};

export default (state = INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
            break;
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
            break;

        case LOGIN_USER_START:
            return { ...state, error: '', loading: true };
            break;

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
            break;
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed!', loading: false, password: '' };
            break;

        default:
            return state
    }
}
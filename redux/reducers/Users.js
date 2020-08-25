import { FETCH_ALL_USERS, FETCH_ALL_USERS_SUCCESS, SELECTED_USER } from '../../constants/ActionTypes';

const INIT_STATE = {
    loader: false,
    usersList: [],
    selectedUser: undefined,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS: {
            return {
                ...state,
                loader: true,
            };
        }

        case FETCH_ALL_USERS_SUCCESS: {
            return {
                ...state,
                loader: false,
                usersList: action.payload,
            };
        }

        case SELECTED_USER: {
            return {
                ...state,
                selectedUser: action.payload,
            };
        }

        default:
            return state;
    }
};

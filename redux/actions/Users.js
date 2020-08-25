import { FETCH_ALL_USERS, FETCH_ALL_USERS_SUCCESS, SELECTED_USER } from '../../constants/ActionTypes';

export const fetchUsers = () => {
    return {
        type: FETCH_ALL_USERS,
    };
};

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_ALL_USERS_SUCCESS,
        payload: users,
    };
};

export const selectUser = (user) => {
    return {
        type: SELECTED_USER,
        payload: user,
    };
};

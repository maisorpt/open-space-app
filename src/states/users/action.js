/**
 * @TODO: Define all the actions (creator) for the users state
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async () => {
    showLoading();
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
    hideLoading();
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};

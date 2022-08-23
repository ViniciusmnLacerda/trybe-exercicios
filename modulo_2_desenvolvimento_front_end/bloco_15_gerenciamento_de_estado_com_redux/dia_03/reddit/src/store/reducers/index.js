/* eslint-disable default-param-last */
const USER_INITIAL_STATE = {
  email: '',
  password: '',
};

const COSTUMER_INITIAL_STATE = [];

function userReducer(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.userData;
    default:
      return state;
  }
}

function costumerReducer(state = COSTUMER_INITIAL_STATE, action) {
  const id = state.length - 1;
  switch (action.type) {
    case 'REGISTER_COSTUMER':
      return [
        ...state,
        {
          ...action.payload.costumerData,
          id,
        },
      ];
    case 'REMOVE_COSTUMER':
      return state.filter((costumer) => costumer.id !== action.payload.costumerId);
    default:
      return state;
  }
}

export { userReducer, costumerReducer };

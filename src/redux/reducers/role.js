const initialState = {
  userRole: null,
  roleCard: null,
};

export const role = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ROLE": {
      return {
        ...state,
        userRole: action.payload,
      };
    }
    case "ROLE_CARD": {
      return {
        ...state,
        roleCard: action.payload,
      };
    }
    default:
      return state;
  }
};

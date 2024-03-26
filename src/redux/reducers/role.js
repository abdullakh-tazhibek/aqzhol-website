const initialState = {
  userRole: null,
};

export const role = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ROLE": {
      return {
        ...state,
        userRole: action.payload,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  phoneNumber: null,
  password: null,
};

export const login = (state = initialState, action) => {
  switch (action.payload) {
    case "ADD_PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "ADD_PASSWORD":
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

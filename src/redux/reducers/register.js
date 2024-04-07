const initialState = {
  country: "Kazakhstan",
  countryCode: "+7-7",
  phoneNumber: null,
  name: "",
  email: "",
  password: null,
};

const changeCountryCode = (country, countryCode) => {
  if (country === "Kazakhstan") {
    return (countryCode = "+7-7");
  } else if (country === "Mongolia") {
    return (countryCode = "+976");
  } else if (country === "Russia") {
    return (countryCode = "+7-");
  }
};

export const login = (state = initialState, action) => {
  switch (action.payload) {
    case "CHOOSE_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    case "CHANGE_COUNTRY_CODE":
      return {
        ...state,
        countryCode: changeCountryCode,
      };
    case "ADD_PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "ADD_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "ADD_EMAIL":
      return {
        ...state,
        email: action.payload,
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

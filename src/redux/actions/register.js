export const chooseCountry = (country) => ({
  type: "CHOOSE_COUNTRY",
  payload: country,
});

export const changeCountryCode = (countryCode) => ({
  type: "CHANGE_COUNTRY_CODE",
  payload: countryCode,
});

export const addPhoneNumber = (phoneNumber) => ({
  type: "ADD_PHONE_NUMBER",
  payload: phoneNumber,
});

export const addName = (name) => ({
  type: "ADD_NAME",
  payload: name,
});

export const addEmail = (email) => ({
  type: "ADD_EMAIL",
  payload: email,
});

export const addPassword = (password) => ({
  type: "ADD_PASSWORD",
  payload: password,
});

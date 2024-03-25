export const userRole = () => ({
  type: "USER_ROLE",
  payload: ["passenger", "driver"],
});

export const roleCard = () => ({
  type: "ROLE_CARD",
  payload: [
    "../../assets/img/driverCard.png",
    "../../assets/img/passengerCard.png",
  ],
});

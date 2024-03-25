import React from "react";

export function Home() {
  return (
    <div>
      <img src={require("../assets/img/menuLogo.png")} alt="logo" />

      <div>
        <img
          src={require("../assets/img/sendDelivery.png")}
          alt="send delivery"
        />
      </div>

      <div>
        <img src={require("../assets/img/findTaxi.png")} alt="find taxi" />
      </div>

      <div>
        <img src={require("../assets/img/myOrders.png")} alt="my orders" />
      </div>
    </div>
  );
}

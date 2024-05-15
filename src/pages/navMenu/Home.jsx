import React from "react";

export function Home({ role }) {
  return (
    <div>
      <div>
        <img src={require("../../assets/img/menuLogo.png")} alt="logo" />
      </div>

      {role === "passenger" && (
        <>
          <div>
            <img
              src={require("../../assets/img/findTaxi.png")}
              alt="find taxi"
            />
          </div>

          <div>
            <img
              src={require("../../assets/img/sendDelivery.png")}
              alt="send delivery"
            />
          </div>

          <div>
            <img
              src={require("../../assets/img/myOrders.png")}
              alt="my orders"
            />
          </div>
        </>
      )}
      {role === "driver" && (
        <>
          <div>
            <img src={require("../../assets/img/goRide.png")} alt="go ride" />

            <img
              src={require("../../assets/img/findPassengers.png")}
              alt="find passengers"
            />
          </div>

          <div>
            <img
              src={require("../../assets/img/takeDelivery.png")}
              alt="find taxi"
            />
          </div>

          <div>
            <img
              src={require("../../assets/img/myOrders.png")}
              alt="my orders"
            />
          </div>
        </>
      )}
    </div>
  );
}

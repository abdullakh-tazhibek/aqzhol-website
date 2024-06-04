import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/auth";
import { useNavigate } from "react-router-dom";

export function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {}, [role]);

  function onClickLogout() {
    dispatch(setLogout());
    navigate("/login");
  }

  return (
    <div>
      <div>
        <img src={require("../../assets/img/menuLogo.png")} alt="logo" />
      </div>
      {role === "жолаушы" && (
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
      {role === "жүргізуші" && (
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
      <button
        onClick={() => onClickLogout()}
        style={{ width: "300px", height: "100px", backgroundColor: "#f45451" }}
      >
        выйти из аккаунта
      </button>
    </div>
  );
}

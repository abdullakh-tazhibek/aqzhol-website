import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../redux/auth";
import { useNavigate, Link } from "react-router-dom";

export function Roles() {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  function rolePick(pos) {
    dispatch(setRole(pos));
    if (role === "жолаушы" || "жүргізуші") {
      navigate("/register");
    } else {
      navigate("/roles");
    }
  }

  return (
    <div>
      <div className="role-container">
        <h3>Нұсқаның бірін таңдаңыз</h3>

        <div className="role-cards">
          <div onClick={() => rolePick("жолаушы")}>
            <img
              src={require("../assets/img/passengerCard.png")}
              alt="passenger"
              width="140"
              height="160"
            />
          </div>

          <div onClick={() => rolePick("жүргізуші")}>
            <img
              src={require("../assets/img/driverCard.png")}
              alt="driver"
              width="140"
              height="160"
            />
          </div>
        </div>

        {/* Link to Login */}
        <Link href="/login" className={"login-link"}>
          Менде аккаунт бар
        </Link>
      </div>
    </div>
  );
}

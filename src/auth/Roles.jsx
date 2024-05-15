import React from "react";
import { Registration } from "./Registration";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../redux/auth";

export function Roles() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  const onSetRole = (r) => {
    dispatch(setRole(role === r));
  };

  return (
    <div>
      {role === "" ? (
        <div className="role-container">
          <h3>Нұсқаның бірін таңдаңыз</h3>

          <div className="role-cards">
            <div onClick={() => onSetRole("пассажир")}>
              <img
                src={require("../assets/img/passengerCard.png")}
                alt="passenger"
                width="140"
                height="160"
              />
            </div>

            <div onClick={() => onSetRole("водитель")}>
              <img
                src={require("../assets/img/driverCard.png")}
                alt="driver"
                width="140"
                height="160"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Registration role={role} />
        </div>
      )}
    </div>
  );
}

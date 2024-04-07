import React, { useCallback, useState } from "react";
import { Registration } from "./Registration";
import { useDispatch } from "react-redux";
import { userRole } from "../redux/actions/role";

export function Roles() {
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const selectUserRole = useCallback(
    (index) => {
      dispatch(userRole(index));
      if (index === 1) {
        setRole("passenger");
      } else {
        setRole("driver");
      }
    },
    [dispatch]
  );

  return (
    <div>
      {role === "" ? (
        <div>
          <h3>Нұсқаның бірін таңдаңыз</h3>

          <p>Бір нөмір, поштамен тек қана бір аккаунтты тіркей аласыз</p>

          <div>
            <div onClick={() => selectUserRole(1)}>
              <img
                src={require("../assets/img/passengerCard.png")}
                alt="passenger"
                width="140"
                height="160"
              />
            </div>

            <div onClick={() => selectUserRole(2)}>
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

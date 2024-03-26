import React, { useState } from "react";
import { Registration } from "./Registration";

export function Roles() {
  const [role, setRole] = useState("");
  const selectRole = (id) => {
    if (id === 1) {
      setRole("passenger");
    } else {
      setRole("driver");
    }
  };

  return (
    <div>
      {role === "" ? (
        <div>
          <h3>Выберите свою роль</h3>
          <div>
            <div onClick={() => selectRole("passenger")}>
              <img
                src={require("../assets/img/passengerCard.png")}
                alt="passenger"
                width="140"
                height="160"
              />
            </div>

            <div onClick={() => selectRole()}>
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
          {console.log(role)}
          <Registration />
        </div>
      )}
    </div>
  );
}

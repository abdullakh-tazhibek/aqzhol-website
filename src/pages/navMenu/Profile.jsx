import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

export function Profile({
  name,
  role,
  selectUserRole,
  phoneNumber,
  logoutUser,
}) {
  return (
    <div>
      {/* user data */}
      <h2>{name}</h2>
      <h3>{role}</h3>
      <h3>{phoneNumber}</h3>

      {/* user functions */}
      <Link to={"/orders"}>Менің тапсырысым</Link>
      <div onClick={selectUserRole()}>Нұсқаны ауыстыру</div>
      <div>
        <link rel="icon" href="facebook link here" />
        <link rel="icon" href="instagram link here" />
      </div>

      {/* logout */}
      <span onClick={logoutUser}>Аккаунттан шығу</span>
    </div>
  );
}

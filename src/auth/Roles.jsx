import React from "react";
import { useSelector } from "react-redux";

export function Roles() {
  const roleCard = useSelector((state) => state.roleCard);

  return (
    <div>
      <h3>Выберите свою роль</h3>
      <ul>
        {roleCard.map((card, index) => (
          <img key={index} alt="role" width="140" height="160">
            {card}
          </img>
        ))}
      </ul>
    </div>
  );
}

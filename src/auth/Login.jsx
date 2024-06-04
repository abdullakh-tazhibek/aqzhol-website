import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth.js";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [eye, setEye] = useState("");
  const [showMenu, setShowMenu] = useState("");
  const [country, setCountry] = useState("KZ");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const loginUserFunc = (data) => {
    dispatch(login({ data }));
    navigate("/home");
  };

  return (
    <div className={"registration-form"}>
      <h2>Аккаунтқа кіру</h2>

      <form noValidate onSubmit={handleSubmit(loginUserFunc)}>
        {/* phone number with country choice */}
        <div className="phone_container">
          {/* choose country */}
          <div onClick={() => setShowMenu((prev) => !prev)}>
            {country === "KZ" && (
              <img
                alt="kaz-flag"
                src={require("../assets/img/kazakhstan-32.png")}
                width="40px"
              />
            )}
            {country === "MN" && (
              <img
                alt="mgl-flag"
                width="40px"
                src={require("../assets/img/mongolia-32.png")}
              />
            )}
            {country === "RU" && (
              <img
                alt="rus-flag"
                width="40px"
                src={require("../assets/img/russia-32.png")}
              />
            )}
          </div>
          {/* dropdown menu with countries list */}
          {showMenu && (
            <div className="menu">
              <ul className="menu__list">
                <li className="menu__item" onClick={() => setCountry("KZ")}>
                  <img
                    alt="kaz-flag"
                    src={require("../assets/img/kazakhstan-32.png")}
                  />{" "}
                  Қазақстан
                </li>
                <li className="menu__item" onClick={() => setCountry("MN")}>
                  <img
                    alt="mgl-flag"
                    src={require("../assets/img/mongolia-32.png")}
                  />
                  Моңғолия
                </li>
                <li className="menu__item" onClick={() => setCountry("RU")}>
                  <img
                    alt="rus-flag"
                    src={require("../assets/img/russia-32.png")}
                  />{" "}
                  Ресей
                </li>
              </ul>
            </div>
          )}

          {/* Phone number */}
          <div className={"phone_container__phone"}>
            {country === "KZ" && (
              <ReactInputMask
                mask={`+7(799)-999-99-99`}
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Нөміріңіз жазылған жоқ",
                  },
                })}
                type="tel"
                // value={phoneNumber || ""}
                // onChange={(e) => enterPhoneNum(e.target.value)}
              />
            )}
            {country === "MN" && (
              <ReactInputMask
                mask={`+\\976-99-99-99-99`}
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Нөміріңіз жазылған жоқ",
                  },
                })}
                type="tel"
                // value={phoneNumber || ""}
                // onChange={(e) => enterPhoneNum(e.target.value)}
              />
            )}
            {country === "RU" && (
              <ReactInputMask
                mask={`+7(999)-999-99-99`}
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Нөміріңіз жазылған жоқ",
                  },
                })}
                type="tel"
                // value={phoneNumber || ""}
                // onChange={(e) => enterPhoneNum(e.target.value)}
              />
            )}
          </div>
          <span>{errors?.phoneNumber?.message}</span>
        </div>

        {/* Password */}
        <div className={"form-group"}>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Құпиясөз жазылған жоқ",
              },
            })}
            type={eye ? "text" : "password"}
            id="4"
            placeholder="Құпиясөз"
            className={"form-control"}
          />
          <span className="form_eye" onClick={() => setEye((prev) => !prev)}>
            {eye ? (
              <img src={require("../assets/img/eye_fill.png")} alt="eye_fill" />
            ) : (
              <img
                src={require("../assets/img/eye_off_fill.png")}
                alt="eye_off_fill"
              />
            )}
          </span>
          <p>{errors.password && errors?.password?.message}</p>
        </div>

        {/* Login btn */}
        <button type="submit" className={"btn btn-primary"}>
          Кіру
        </button>

        {/* Link to Roles */}
        <Link to="/roles" className={"login-link"}>
          Жүйеге тіркелу
        </Link>
      </form>
    </div>
  );
}

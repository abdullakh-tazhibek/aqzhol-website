import { useState } from "react";
import { Link } from "react-router-dom";
import ReactInputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  authUser,
  setCountry,
  setEmail,
  setMessenger,
  setName,
  setPhoneNum,
} from "../redux/auth.js";

export function Registration() {
  const dispatch = useDispatch();
  const [eye, setEye] = useState("");
  const [showMenu, setShowMenu] = useState("");

  const { country, phoneNumber, name, email, messenger, role, status } =
    useSelector((state) => state.auth.user);

  function pickCountry(ctry) {
    dispatch(setCountry(ctry));
  }
  function enterPhoneNum(e) {
    dispatch(setPhoneNum(e));
  }
  function enterName(e) {
    dispatch(setName(e));
  }
  function enterEmail(e) {
    dispatch(setEmail(e));
  }
  function enterMessenger(e) {
    dispatch(setMessenger(e));
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const registerUserFunc = (data) => {
    const newData = {
      status,
      role,
      country,
      ...data,
    };
    dispatch(authUser({ user: newData }));
  };

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,24}$/;

  return (
    <div className={"registration-form"}>
      <h2>Тіркелу</h2>
      <form noValidate onSubmit={handleSubmit(registerUserFunc)}>
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
                <li className="menu__item" onClick={() => pickCountry("KZ")}>
                  <img
                    alt="kaz-flag"
                    src={require("../assets/img/kazakhstan-32.png")}
                  />
                  Қазақстан
                </li>{" "}
                <li className="menu__item" onClick={() => pickCountry("MN")}>
                  <img
                    alt="mgl-flag"
                    src={require("../assets/img/mongolia-32.png")}
                  />
                  Моңғолия
                </li>
                <li className="menu__item" onClick={() => pickCountry("RU")}>
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
                value={phoneNumber || ""}
                onChange={(e) => enterPhoneNum(e.target.value)}
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
                value={phoneNumber || ""}
                onChange={(e) => enterPhoneNum(e.target.value)}
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
                value={phoneNumber || ""}
                onChange={(e) => enterPhoneNum(e.target.value)}
              />
            )}
          </div>
          {/* <span>{errors?.phoneNumber?.message}</span> */}
        </div>

        {/* Name */}
        <div className={"form-group"}>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Есіміңіз жазылған жоқ",
              },
            })}
            placeholder="Есіміңіз"
            type="text"
            id="2"
            value={name || ""}
            onChange={(e) => enterName(e.target.value)}
            className={"form-control"}
          />
        </div>
        <span>{errors?.name?.message}</span>

        {/* Email */}
        <div className={"form-group"}>
          <input
            {...register("email", {
              required: {
                message: "Пошта жазылған жоқ",
                value: true,
              },
              pattern: {
                message: "Поштаңыз дұрыс жазылған жоқ",
                value: EMAIL_REGEX,
              },
            })}
            placeholder="Email"
            type="email"
            id="3"
            value={email || ""}
            onChange={(e) => enterEmail(e.target.value)}
            className={"form-control"}
          />
        </div>
        <span>{errors?.email?.message}</span>

        {/* Messenger link */}
        <div className={"form-group"}>
          <input
            {...register("messenger", {
              required: {
                value: true,
                message: "Сілтеме жазылған жоқ",
              },
            })}
            placeholder="Messenger сілтемесі"
            type="link"
            id="6"
            value={messenger || ""}
            onChange={(e) => enterMessenger(e.target.value)}
            className={"form-control"}
          />
          <Link
            to={
              "https://www.youtube.com/watch?v=mAXtasUgY0k&ab_channel=%D0%90%D0%BD%D0%B3%D0%B5%D0%BB%D0%B8%D0%BD%D0%B0%D0%9C%D0%B8%D1%82%D1%87%D0%B5%D0%BB%D0%BB"
            }
          >
            Қалай аламын?
          </Link>
        </div>
        <span>{errors?.messenger?.message}</span>

        {/* Password */}
        <div className={"form-group"}>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Құпиясөз жазылған жоқ",
              },
              pattern: {
                message:
                  "Кем дегенде 6 символды саннан, үлкен, кіші әріптерден тұру керек",
                value: PWD_REGEX,
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

        {/* Forgot password? */}
        <Link href="" className={"form-check-label"}>
          Құпиясөзді ұмыттыңыз ба?
        </Link>

        {/* Password repeat */}
        {/* <div className={"form-group"}>
          <input
            type={eye ? "text" : "password"}
            id="5"
            placeholder="Құпиясөзді қайталаңыз"
            className={"form-control"}
            {...register("confirmPwd", {
              validate: (value) =>
                value === password.current || "Құпиясөздер сәйкес келмейді!",
            })}
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
          {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
        </div> */}

        {/* Registration btn */}
        <button type="submit" className={"btn btn-primary"}>
          Жүйеге тіркелу
        </button>

        {/* Privacy policy */}
        <Link href="/privacy" className={"form-check-label"}>
          Тіркелу арқылы құпиялық саясатымен келісемін
        </Link>
      </form>
    </div>
  );
}

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { api } from "../api";
import ReactInputMask from "react-input-mask";

export function Registration({ role }) {
  const dispatch = useDispatch();

  const [country, setCountry] = useState("KZ");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [eye, setEye] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const password = useRef({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const createUser = () => {
    console.log(123);
    {
      /*axios
      .post("/users", obj)
      .then(async ({ data }) => {
        //await dispatch(registerUser({obj:data}));
        await localStorage.setItem("user", JSON.stringify(data));
        await reset();
        //await navigate("/");
      })
    .catch((err) => console.log(`bad request ${err}`));*/
    }

    {
      /*
    let { confirmPwd, ...user } = data;
    api.post("register", {
      headers: {
        "content-type": "application/json",
      },
      json: user,
    });
    .json()
    .then((res) => console.log(res));*/
    }
  };

  password.current = watch("password", "");

  return (
    <div className={"registration-form"}>
      <h2>Тіркелу</h2>

      <form noValidate onSubmit={handleSubmit(createUser)}>
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
                  pattern: {
                    value: /^\+7\(7\d{2}\)\d{3}-\d{2}-\d{2}$/,
                    message: "Телефон нөміріңізді жазыңыз",
                  },
                })}
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                  pattern: {
                    value: /^\+976\d{2}-\d{2}-\d{2}-\d{2}$/,
                    message: "Телефон нөміріңізді жазыңыз",
                  },
                })}
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                  pattern: {
                    value: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
                    message: "Телефон нөміріңізді жазыңыз",
                  },
                })}
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            )}
          </div>
          <span>{errors?.phoneNumber?.message}</span>
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
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
                value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
              },
            })}
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={"form-control"}
          />
        </div>
        <span>{errors?.email?.message}</span>

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
                  "Кем дегенде 6 символды саннан, үлкен әріптен тұру керек",
                value: /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/,
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

        {/* Password repeat */}
        <div className={"form-group"}>
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
        </div>

        {/* Registration btn */}
        <button type="submit" className={"btn btn-primary"}>
          Жүйеге тіркелу
        </button>
      </form>
      {/* Privacy policy */}
      <Link htmlFor="privacyPolicy" className={"form-check-label"}>
        Тіркелу арқылы құпиялық саясатымен келісемін
      </Link>

      {/* Link to Login */}
      <Link href="/login" className={"login-link"}>
        Кіру
      </Link>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import ReactInputMask from "react-input-mask";

export function Registration() {
  const [formData, setFormData] = useState({
    country: "KZ",
    phoneNumber: "",
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const EMAIL_REGEX = /^[^ ]+@[^ ]+\.[a-z]{2,5}$/;
  const PWD_REGEX = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;

  const [country, setCountry] = useState("KZ");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eye, setEye] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    //e.preventDefault();
    let isValid = true;
    let validationErrors = {};
    if (formData.phoneNumber === "" || formData.phoneNumber === null) {
      isValid = false;
      validationErrors.phoneNumber = "Нөміріңіз жазылған жоқ";
    }
    if (formData.name === "" || formData.name === null) {
      isValid = false;
      validationErrors.name = "Есіміңіз жазылған жоқ";
    }

    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "Поштаңыз жазылған жоқ";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Поштаңыз дұрыс жазылған жоқ";
    }

    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "Құпиясөз жазылған жоқ";
    } else if (formData.password.length < 6) {
      isValid = false;
      validationErrors.password = "Құпиясөз 6 символдан кем болмау керек";
    }

    if (formData.cpassword !== formData.cpassword) {
      isValid = false;
      validationErrors.cpassword = "Құпиясөздер сәйкес келмейді";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (Object.keys(validationErrors).length === 0) {
      alert("Аккаунт тіркелді");
    }
  };

  const submitForm = (data) => {
    let { confirmPwd, ...user } = data;
    //createUser(user);
  };

  return (
    <div className={"registration-form"}>
      <h2>Тіркелу</h2>
      {valid ? (
        <></>
      ) : (
        <span>
          {errors.phoneNumber}
          {errors.name}
          {errors.email}
          {errors.password}
          {errors.cpassword}
        </span>
      )}
      <form noValidate onSubmit={handleSubmit(submitForm)}>
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
                // {...register("phone", {
                //   required: {
                //     value: true,
                //     message: "Нөміріңіз жазылған жоқ",
                //   },
                // })}
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            )}
            {country === "MN" && (
              <ReactInputMask
                mask={`+\\976-99-99-99-99`}
                // {...register("phone", {
                //   required: {
                //     value: true,
                //     message: "Нөміріңіз жазылған жоқ",
                //   },
                // })}
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            )}
            {country === "RU" && (
              <ReactInputMask
                mask={`+7(999)-999-99-99`}
                // {...register("phone", {
                //   required: {
                //     value: true,
                //     message: "Нөміріңіз жазылған жоқ",
                //   },
                // })}
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
            // {...register("name", {
            //   required: {
            //     value: true,
            //     message: "Есіміңіз жазылған жоқ",
            //   },
            // })}
            placeholder="Есіміңіз"
            type="text"
            id="2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={"form-control"}
          />
        </div>
        <span>{errors?.name?.message}</span>

        {/* Email */}
        <div className={"form-group"}>
          <input
            // {...register("email", {
            //   required: {
            //     message: "Пошта жазылған жоқ",
            //     value: true,
            //   },
            //   pattern: {
            //     message: "Поштаңыз дұрыс жазылған жоқ",
            //     value: EMAIL_REGEX,
            //   },
            // })}
            placeholder="Email"
            type="email"
            id="3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={"form-control"}
          />
        </div>
        <span>{errors?.email?.message}</span>

        {/* Password */}
        <div className={"form-group"}>
          <input
            // {...register("password", {
            //   required: {
            //     value: true,
            //     message: "Құпиясөз жазылған жоқ",
            //   },
            //   pattern: {
            //     message:
            //       "Кем дегенде 6 символды саннан, үлкен әріптен тұру керек",
            //     value: PWD_REGEX,
            //   },
            // })}
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
            // {...register("confirmPwd", {
            //   validate: (value) =>
            //     value === password.current || "Құпиясөздер сәйкес келмейді!",
            // })}
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

        {/* Privacy policy */}
        <Link href="/privacy" className={"form-check-label"}>
          Тіркелу арқылы құпиялық саясатымен келісемін
        </Link>

        {/* Link to Login */}
        <Link href="/login" className={"login-link"}>
          Кіру
        </Link>
      </form>
    </div>
  );
}

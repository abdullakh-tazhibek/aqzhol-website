import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import axios from "axios";

export function Registration() {
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [eye, setEye] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();

    let newUser = {
      country,
      phoneNumber,
      name,
      email,
      password: e.target[0].value,
      passwordRepeat: e.target[0].value,
    };
    axios
      .post("http://localhost:8080/register", newUser)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  const countryCodes = ["+7-7", "+976", "+7-"];
  const phoneMasks = ["99-999-99-99", "99-99-99-99", "999-999-99-99"];

  return (
    <div className={"registration-form"}>
      <h2>Тіркелу</h2>

      {/* Choose country */}
      <div className={"form-group"}>
        <label htmlFor="country">Мемлекет:</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={"form-control"}
        >
          <option value="Kazakhstan">Қазақстан</option>
          <option value="Mongolia">Моңғолия</option>
          <option value="Russia">Ресей</option>
        </select>
      </div>

      {/* Phone number */}
      <div className={"form-group"}>
        <label htmlFor="phoneNumber">Телефон нөміріңіз:</label>
        {countryCodes[0]}
        <InputMask
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          mask={`${phoneMasks[0]}`}
        />
      </div>

      {/* Name */}
      <div className={"form-group"}>
        <label htmlFor="name">Есіміңіз:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={"form-control"}
        />
      </div>

      {/* Email */}
      <div className={"form-group"}>
        <label htmlFor="email">Пошта:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={"form-control"}
        />
      </div>

      {/* Password */}
      <div className={"form-group"}>
        <label htmlFor="password">Құпиясөз:</label>
        <input
          type={eye ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      </div>

      {/* Password repeat */}
      <div className={"form-group"}>
        <label htmlFor="passwordRepeat">Құпиясөзді қайталаңыз:</label>
        <input
          type={eye ? "text" : "password"}
          id="passwordRepeat"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
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
      </div>

      {/* Privacy policy */}
      <div className={"form-group"}>
        <label htmlFor="privacyPolicy" className={"form-check-label"}>
          Тіркелу арқылы құпиялық саясатымен келісемін
        </label>
      </div>

      {/* Link to Login */}
      <div className={"form-group"}>
        <a href="/login" className={"login-link"}>
          Кіру
        </a>
      </div>

      {/* Registration btn */}
      <button onClick={handleRegistration} className={"btn btn-primary"}>
        Тіркелу
      </button>
    </div>
  );
}

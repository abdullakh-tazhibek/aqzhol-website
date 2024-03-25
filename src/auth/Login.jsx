import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export function Login() {
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [eye, setEye] = useState(false);

  const handleLogin = () => {
    // Add your registration logic here
    console.log("Registration data:", {
      country,
      phoneNumber,
      password,
    });
  };

  const countryCodes = ["+7-7", "+976", "+7-"];
  const phoneMasks = ["99-999-99-99", "99-99-99-99", "999-999-99-99"];

  return (
    <div className={"registration-form"}>
      <h2>Аккаунтқа кіру</h2>

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

      {/* Forgot password */}
      <div className={"form-group"}>
        <label htmlFor="privacyPolicy" className={"form-check-label"}>
          Құпиясөзді ұмыттым
        </label>
      </div>

      {/* Link to Login */}
      <div className={"form-group"}>
        <a href="/register" className={"login-link"}>
          Тіркелу
        </a>
      </div>

      {/* Registration btn */}
      <button onClick={handleLogin} className={"btn btn-primary"}>
        Кіру
      </button>
    </div>
  );
}

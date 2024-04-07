import { useState } from "react";

export function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [eye, setEye] = useState(false);

  const handleLogin = () => {
    // Add your registration logic here
    console.log("Registration data:", {
      phoneNumber,
      password,
    });
  };

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  return (
    <div className={"registration-form"}>
      <h2>Аккаунтқа кіру</h2>

      {/* Phone number */}
      <div className={"form-group"}>
        <label htmlFor="phoneNumber">Телефон нөміріңіз:</label>
        <input
          type="number"
          name="phone"
          placeholder="Нөмірдің басы +7 немесе +976"
          pattern="^-?[0-9]\d*\.?\d*$"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
        {/* hide and show password */}
        <span className="form_eye" onClick={() => setEye((prev) => !prev)}>
          {eye ? (
            <img
              src={require("../assets/img/eye_fill.png")}
              alt="eye_fill"
              width={24}
              height={24}
            />
          ) : (
            <img
              src={require("../assets/img/eye_off_fill.png")}
              alt="eye_off_fill"
              width={24}
              height={24}
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

      {/* Link to Registration */}
      <div className={"form-group"}>
        <a href="/registration" className={"login-link"}>
          Тіркелу
        </a>
      </div>

      {/* Login btn */}
      <button onClick={handleLogin} className={"btn btn-primary"}>
        Кіру
      </button>
    </div>
  );
}
